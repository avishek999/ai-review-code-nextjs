"use client";

import React, { useEffect, useState } from "react";
import ChatScreen from "@/components/chatScreen/ChatScreen";
import SideBar from "@/components/sideBar/SideBar";
import { Editor, useMonaco } from "@monaco-editor/react";
import HomeNavBar from "@/components/navbar/HomeNavBar";
import { ICodeReview } from "@/interface/code";
import { useDoctorPrescriptionQuery } from "@/hooks/useReactQuery";
import { iResponse } from "@/interface/common";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_REVIEWED_CODE_KEY } from "@/constants/query.constant";
import Loader from "@/components/loader/Loader";
import EditorSpinnerLoaderd from "@/components/loader/EditorSpinnerLoaderd";
import ProtectedRoute from "@/protectedRoutes/ProtectedRoute";

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

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { updateMutation, createMutation, usePrefetchByUserId } =
    useDoctorPrescriptionQuery();

  const { data, isLoading } = usePrefetchByUserId();

  const getAllCodeByUSerId = data as iResponse;

  const monaco = useMonaco();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (monaco) {
      console.log("monaco", monaco);
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
      _id: getCodeAfterReview._id,
      UserInputCode: Fullcode,
      message: message,
    };

    let response: { data?: iResponse[] } = {};
    try {
      if (!payload._id) {
        response = await createMutation.mutateAsync(payload);
      } else {
        response = await updateMutation.mutateAsync(payload);
      }
      // setSelectedId(response.data._id);
      // setCodeAfterReview(response.data);

      if (response !== undefined) {
        setCodeAfterReview(response as ICodeReview);

        queryClient.invalidateQueries({ queryKey: [QUERY_REVIEWED_CODE_KEY] });
      }
    } catch (error) {
      console.log(error);
    } finally {
      const responseData = response.data as ICodeReview;

      setSelectedId(responseData._id ?? null);

      setCodeAfterReview(responseData as ICodeReview);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ProtectedRoute>
        <HomeNavBar handlePrintCode={handlePrintCode} />
        <div className="flex h-[calc(100%-76.8px)] flex-col md:flex-row">
          <div className="w-[20%] hidden md:block    ">
            <SideBar
              getAllCodeByUSerId={getAllCodeByUSerId.data || []}
              setCodeAfterReview={setCodeAfterReview}
              setSelectedId={setSelectedId}
              selectedId={selectedId ?? ""}
            />
          </div>

          <div className="w-[55%]  p-5  pb-0 bg-[#030712]  ">
            <div className=" h-full">
              {createMutation.isPending || updateMutation.isPending ? (
                <EditorSpinnerLoaderd />
              ) : (
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={getCodeAfterReview?.improvedCode}
                  value={getCodeAfterReview?.improvedCode}
                  theme="customTheme"
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: false },
                    readOnly: false,
                  }}
                />
              )}
            </div>
          </div>

          <div className="w-[25%] h-full  hidden md:block   ">
            <ChatScreen
              setMessage={setMessage}
              getCodeAfterReview={getCodeAfterReview}
            />
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Home;
