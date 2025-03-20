import React from "react";
import { FaRegFileCode } from "react-icons/fa6";

const SideBar: React.FC = () => {
  return (
    <div className=" p-4">
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Files</div>

        <div className="text-[var(--secondary-color)] text-3xl cursor-pointer">
          +
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <div className=" cursor-pointer px-2 py-2 text-[var(--secondary-color)]  bg-[var(--accent-color1)] flex gap-3 items-center">
          <FaRegFileCode />
          main.js
        </div>

        <div className=" cursor-pointer px-2 py-2 text-[var(--secondary-text-color)] flex gap-3 items-center">
          <FaRegFileCode />
          index.js
        </div>
      </div>
    </div>
  );
};

export default SideBar;
