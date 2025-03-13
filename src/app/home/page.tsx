"use client";

import ChatScreen from "@/components/chatScreen/ChatScreen";
import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/sideBar/SideBar";
import { Editor, useMonaco } from "@monaco-editor/react";
import React, { useEffect } from "react";

const Home: React.FC = () => {
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
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[20%] h-screen   ">
          <SideBar />
        </div>

        <div className="w-[50%] h-screen p-5  bg-[#030712]  ">
          <div className=" h-screen">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={code}
              theme="CustomTheme"
              options={{
                minimap: { enabled: false },
                readOnly: false,
              }}
            />
          </div>
        </div>

        <div className="w-[30%] h-screen   ">
          <ChatScreen />
        </div>
      </div>
    </>
  );
};

export default Home;
