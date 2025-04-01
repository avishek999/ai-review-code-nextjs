"use client";

import React, { useEffect, useState } from "react";
import ChatScreen from "@/components/chatScreen/ChatScreen";
import SideBar from "@/components/sideBar/SideBar";
import { Editor, useMonaco } from "@monaco-editor/react";
import HomeNavBar from "@/components/navbar/HomeNavBar";
import { ICodeReview } from "@/interface/code";
import { useDoctorPrescriptionQuery } from "@/hooks/useReactQuery";
import { iResponse } from "@/interface/common";

const Home: React.FC = () => {
  const [Fullcode, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [getCodeAfterReview, setCodeAfterReview] = useState<ICodeReview>({
    userId: "",
    filename: "",
    UserInputCode: "",
    feedback: {
      errors: [],
      warnings: [],
      improvements: [],
    },
    improvedCode: `function calculateTotal(items) {
      int total = 1;
      for(int items of items){
      total += items.price;
      }
      return total;
    }
      `,
    chat: [],
  });

  const { createMutation, usePrefetchByUserId } = useDoctorPrescriptionQuery();
  const { data, isLoading } = usePrefetchByUserId();

  const getAllCodeByUSerId: iResponse = data as iResponse;

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log(monaco);
      monaco.editor.defineTheme("customTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [],

        colors: {
          "editor.background": "#111825",
        },
      });
      monaco.editor.setTheme("customTheme");
    }
  }, [monaco]);

  /** ================== useEffect end ================== */

  const handlePrintCode = async () => {
    const payload = {
      UserInputCode: Fullcode,
      message: message,
    };

    try {
      const response = await createMutation.mutateAsync(payload);

      if (response !== undefined) {
        setCodeAfterReview(response.data as ICodeReview);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <HomeNavBar handlePrintCode={handlePrintCode} />
      <div className="flex h-[calc(100vh-120.8px)]">
        <div className="w-[20%]    ">
          <SideBar
            getAllCodeByUSerId={getAllCodeByUSerId}
            setCodeAfterReview={setCodeAfterReview}
          />
        </div>

        <div className="w-[55%]  p-5  pb-0 bg-[#030712]  ">
          <div className=" h-full">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={getCodeAfterReview?.improvedCode}
              value={getCodeAfterReview?.improvedCode}
              theme="CustomTheme"
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                readOnly: false,
              }}
            />
          </div>
        </div>

        <div className="w-[25%]   ">
          <ChatScreen
            setMessage={setMessage}
            getCodeAfterReview={getCodeAfterReview}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
