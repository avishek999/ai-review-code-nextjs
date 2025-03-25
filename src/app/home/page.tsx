"use client";

import React, { useEffect, useState } from "react";
import ChatScreen from "@/components/chatScreen/ChatScreen";
import SideBar from "@/components/sideBar/SideBar";
import { Editor, useMonaco } from "@monaco-editor/react";
import HomeNavBar from "@/components/navbar/HomeNavBar";
import { sendCodeForReview } from "@/services/api";

const Home: React.FC = () => {
  const [Fullcode, setCode] = useState("");
  const [message, setMessage] = useState("");

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
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

  const code = `function calculateTotal(items) {
  int total = 0;
  for(int items of items){
  total += items.price;
  }
  return total;
}
  `;

  const handlePrintCode = () => {
    const payload = {
      UserInputCode: Fullcode,
      message: message,
    };
    console.log(payload);
    sendCodeForReview(payload);
  };

  return (
    <>
      <HomeNavBar handlePrintCode={handlePrintCode}/>
      <div className="flex h-[calc(100vh-76.8px)]">
        <div className="w-[20%]    ">
          <SideBar  />
        </div>

        <div className="w-[55%]  p-5  pb-0 bg-[#030712]  ">
          <div className=" h-full">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={code}
              theme="CustomTheme"
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                readOnly: false,
              }}
            />
          </div>

          {/* <button
            onClick={handlePrintCode}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Print Code
          </button> */}
        </div>

        <div className="w-[25%]   ">
          <ChatScreen setMessage={setMessage} />
        </div>
      </div>
    </>
  );
};

export default Home;
