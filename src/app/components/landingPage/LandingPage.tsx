"use client";
/** core libraries & installed libraries */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Icons */
import { FaBug, FaCode, FaRobot } from "react-icons/fa6";

/** user defined component */
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Card1 from "../cards/Card1";
import { BiSolidError } from "react-icons/bi";
import { Editor, useMonaco } from "@monaco-editor/react";

const LandingPage: React.FC = () => {
  /** ================== references ================== */

  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  /** ================== useEffect start ================== */

  useEffect(() => {
    // Animate heading
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -60,
      color: "#7c3aed",
      duration: 2,
      ease: "power2.out",
    });

    gsap.from(containerRef.current, {
      opacity: 0,
      scale: 0.9,

      duration: 3,
      ease: "power2.out",
    });
  }, []);

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

  const code = `function calculateTotal(numbers) {
  int total = 0;
  for(int items of items){
  total += items.price;
  }
}
  `;
  return (
    <>
      {/* Hero section starts  */}
      <div
        ref={containerRef}
        className="w-full h-[calc(100%-76.8px)] flex justify-center flex-col items-center"
      >
        <h1
          ref={titleRef}
          className="text-6xl font-bold text-center flex  items-end"
        >
          AI-Powered Code Reviews for <br /> Modern Development id
        </h1>
        <p className="text-[var(--secondary-text-color)] mt-4 text-center">
          Enhance your Code quality with Real-time AI Suggestions, automation
          reviews and intelligent feedback
        </p>

        <div className="flex gap-5 mt-5">
          <PrimaryButton title="Try for Free" href="'/signup" />
          <SecondaryButton title="Documentation" href="/documentation" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-20">
        {/* Card section starts */}
        <div className="  flex items-center justify-center gap-5  ">
          <Card1
            title="Intelligent Code Analysis"
            description="AI-powered syntax and error detection with support for multiple languages and frameworks."
            Icon={FaCode}
          />
          <Card1
            title="AI-Powered Assistant"
            description="Get instant insights, suggestions, and explanations for your code with real-time AI assistance."
            Icon={FaRobot}
          />
          <Card1
            title="Advanced Debugging"
            description="Automatically detect, explain, and fix issues with AI-driven recommendations for free of cost"
            Icon={FaBug}
          />
        </div>

        {/* compiler section starts */}

        <div className="  p-12  bg-[var(--secondary-background-color)]">
          <div className="bg-[#1f2937] flex gap-4 ">
            <div className="w-[75%] bg-[var(--primary-background-color)] rounded pt-4">
              <Editor
                height="143px"
                defaultLanguage="javascript"
                defaultValue={code}
                theme="CustomTheme"
                options={{
                  minimap: { enabled: false },
                  readOnly: true,
                }}
              />
            </div>

            <div>
              <div className="p-3 bg-[var(--error-background-color)] rounded-md">
                <div className="text-[var(--error-text-color)] text-sm  flex items-center gap-1">
                  {" "}
                  <BiSolidError /> Error
                </div>
                <p className="text-[13px]">
                  Missing null check for items Parameters{" "}
                </p>
              </div>
              <div className="p-3 bg-[var(--warning-background-color)] rounded-md mt-4">
                <div className="text-[var(--warning-text-color)] text-sm  flex items-center gap-1">
                  ! warning
                </div>
                <p className="text-[13px]">
                  Consider using reduce() for performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
