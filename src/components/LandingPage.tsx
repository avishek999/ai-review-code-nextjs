"use client";
/** core libraries & installed libraries */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Editor, useMonaco } from "@monaco-editor/react";

/** Icons */
import { FaBug, FaCode, FaRobot } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";

/** user defined component */

import Card1 from "@/components/cards/Card1";
import Cta from "@/components/cta/Cta";
import Image from "next/image";
import Featuring from "./featuring/Featuring";
import { isAuth } from "@/services/api";
import Link from "next/link";

const LandingPage: React.FC<{
  isAuthenticated: boolean;
  revalidateAuth: () => void;
}> = ({ isAuthenticated, revalidateAuth }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  /** ================== references ================== */

  const containerRef = useRef<HTMLDivElement>(null);

  /** ================== useEffect start ================== */

  useEffect(() => {
    revalidateAuth();
  }, [revalidateAuth]);

  useEffect(() => {
    // Clean up any previous animations
    gsap.killTweensOf(containerRef.current);

    // Only animate if animation hasn't been completed
    if (!animationComplete && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.9, color: "#7c3aed" },
        {
          opacity: 1,
          scale: 1,
          color: "currentColor", // Return to the default text color
          duration: 3,
          ease: "power2.out",
          onComplete: () => setAnimationComplete(true),
        }
      );
    }

    console.log("Animation setup running");

    // Cleanup function
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [animationComplete]);

  const monaco = useMonaco();

  isAuth();

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
    <div>
      {/* Hero section starts  */}
      <div
        ref={containerRef}
        // bg-[url('/Images/home-page/models.svg')] bg-no-repeat bg-start
        className="w-full h-[70vh]  flex justify-center flex-col items-center "
      >
        <h1 className="lg:text-6xl text-4xl font-bold text-center flex  items-end">
          AI-Powered Code Reviews for <br /> Modern Development
        </h1>
        <p className="text-[var(--secondary-text-color)] mt-4 text-center text-sm md:text-md">
          Enhance your Code quality with Real-time AI Suggestions, automation
          reviews and intelligent feedback
        </p>

        <div className="flex gap-5 mt-5">
          {/* <PrimaryButton title="Try for Free" href="'/signup" /> */}
          {/* <SecondaryButton title="Documentation" href="/documentation" /> */}

          <div className="relative inline-flex items-center justify-center gap-4 group mt-2">
            <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
            <Link
              role="button"
              className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              title="payment"
              href={isAuthenticated ? "/home " : "/signin"}
            >
              {isAuthenticated ? "Go To Dashboard" : "  Get Started For Free"}

              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                <path
                  d="M0 5h7"
                  className="transition opacity-0 group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  className="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="img_container flex justify-center transform -translate-y-10 px-4 md:px-8">
        <div className="bg-[#1F2937] border rounded-3xl border-gray-700 w-full max-w-6xl overflow-hidden">
          <div className="flex gap-2 px-3 py-1 md:px-5 md: md:py-3">
            <div className="p-[3px] md:p-[6px] rounded-full bg-red-500"></div>
            <div className="p-[3px] md:p-[6px] rounded-full bg-yellow-500"></div>
            <div className="p-[3px] md:p-[6px] rounded-full bg-green-500"></div>
          </div>
          <div className="flex justify-center ">
            <div className="h-[100px] w-[70%] bg-[#7c3aed] rounded-full blur-3xl absolute z-[-1] animate-pulse"></div>
          </div>
          <Image
            width={1200}
            height={500}
            src="/Images/home-page/home-screen-shot.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className=" w-full flex flex-col gap-20  overflow-x-hidden">
        {/* Card section starts */}
        <div className="  flex items-center justify-center gap-5  flex-col   md:flex-row ">
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

        <div className="px-5 py-12  md:p-12  bg-[var(--secondary-background-color)]">
          <div className="bg-[#1F2937] border rounded-3xl border-gray-700   ">
            <div className="flex gap-2 px-5 py-3">
              <div className="p-[6px] rounded-full bg-red-500 w-fit"></div>
              <div className="p-[6px] rounded-full bg-yellow-500 w-fit"></div>
              <div className="p-[6px] rounded-full bg-green-500 w-fit"></div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 gap-8 ">
              <div className="md:w-[75%] bg-[var(--primary-background-color)] rounded pt-4">
                <Editor
                  height="149px"
                  defaultLanguage="javascript"
                  defaultValue={code}
                  theme="customTheme"
                  options={{
                    minimap: { enabled: false },
                    readOnly: true,
                  }}
                />
              </div>

              <div>
                <div className="p-3 bg-[var(--error-background-color)] rounded-md">
                  <div className="text-[var(--error-text-color)] text-sm  flex items-center gap-1">
                    <BiSolidError /> Error
                  </div>
                  <p className="text-[13px]">
                    Missing null check for items Parameters
                  </p>
                </div>
                <div className="p-3 bg-[var(--warning-background-color)] rounded-md mt-4">
                  <div className="text-[var(--warning-text-color)] text-sm  flex items-center gap-1">
                    ! Warning
                  </div>
                  <p className="text-[13px]">
                    Consider using reduce() for performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featuring section starts */}

      <Featuring />
      {/* Cta section starts */}

      <Cta />
    </div>
  );
};

export default LandingPage;
