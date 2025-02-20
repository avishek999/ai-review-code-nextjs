import React from "react";

import { FaCode } from "react-icons/fa6";

const Card1 = () => {
  return (
    <div className="space-y-3 w-[400px] bg-[var(--secondary-background-color)] rounded-xl p-6">
      <div className="p-3 bg-[var(--accent-color2)] text-[var(--primary-color)] w-fit rounded">
        <FaCode size={23} />
      </div>
      <h2 className="font-bold text-[20px]">Smart Syntax Analysis</h2>
      <p className="text-[var(--secondary-text-color)] w-[80%] text-[15px]">
        Advance code analysis with support for multiple programming language and
        framework
      </p>
    </div>
  );
};

export default Card1;
