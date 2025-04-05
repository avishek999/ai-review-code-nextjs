"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa6";

const Loader = () => {
  useEffect(() => {
    gsap.to(".box", {
      scale: 3,
      filter: "blur(20px)",
      duration: 0.3,
      ease: "steps.inOut",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-full overflow-hidden">
      <div className="text-[21px] md:text-[55px] flex items-center gap-5 font-bold box">
        <FaCode size={130} className="text-[var(--icon-color)]" />
        CodeReviewAI
      </div>
    </div>
  );
};

export default Loader;
