"use client";

import React, { useEffect, useState } from "react";
import ChatScreen from "@/components/chatScreen/ChatScreen";
import SideBar from "@/components/sideBar/SideBar";
import { Editor, useMonaco } from "@monaco-editor/react";
import HomeNavBar from "@/components/navbar/HomeNavBar";
import { ICodeReview } from "@/interface/code";

const Home: React.FC = () => {
  const [payload, setPayload] = useState<ICodeReview>({
    UserInputCode: "",
    chat: [{ message: "" }],
  });

  const monaco = useMonaco();

  console.log(payload);

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

  return (
    <>
      <HomeNavBar />
      <div className="flex h-[calc(100vh-76.8px)]">
        <div className="w-[20%]    ">
          <SideBar />
        </div>

        <div className="w-[55%]  p-5  pb-0 bg-[#030712]  ">
          <div className=" h-full">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={code}
              theme="CustomTheme"
              onChange={(value) =>
                setPayload({ ...payload, UserInputCode: value || "" })
              }
              options={{
                minimap: { enabled: false },
                readOnly: false,
              }}
            />
          </div>
        </div>

        <div className="w-[25%]   ">
          <ChatScreen setPayload={setPayload} />
        </div>
      </div>
    </>
  );
};

export default Home;
