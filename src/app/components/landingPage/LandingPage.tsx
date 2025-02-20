"use client";

import React, { useEffect, useRef } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { gsap } from "gsap";

import SecondaryButton from "../buttons/SecondaryButton";
import Card1 from "../cards/Card1";

const LandingPage: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
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
      <div className="h-full w-full flex items-center justify-center gap-5 ">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </>
  );
};

export default LandingPage;
