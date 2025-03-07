"use client";

import Navbar from "@/components/navbar/Navbar";
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
        <div className="w-[20%] h-screen   bg-red-500 "></div>

        <div className="w-[50%] h-screen   ">
          <Editor
            height="149px"
            defaultLanguage="javascript"
            defaultValue={code}
            theme="CustomTheme"
            options={{
              minimap: { enabled: false },
              readOnly: false,
            }}
          />
        </div>

        <div className="w-[30%] h-screen   bg-green-500 "></div>
      </div>
    </>
  );
};

export default Home;
