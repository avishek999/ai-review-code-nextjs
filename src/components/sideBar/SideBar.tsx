import { ICodeReview } from "@/interface/code";
import { iResponse } from "@/interface/common";
import React from "react";
import { FaRegFileCode } from "react-icons/fa6";

interface ISideBar {
  getAllCodeByUSerId: iResponse;
}

const SideBar: React.FC<ISideBar> = ({ getAllCodeByUSerId }) => {
  // console.log(getAllCodeByUSerId.data?.map((data, index) => data));

  console.log(getAllCodeByUSerId);
  return (
    <div className=" p-4 overflow-hidden">
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Files</div>

        <div className="text-[var(--secondary-color)] text-3xl cursor-pointer">
          +
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-3 h-[calc(100vh-140.8px)] overflow-y-auto">
        {/* h-[calc(100%-128.8px)] */}
        {getAllCodeByUSerId.data?.map(
          (reviewedCode: ICodeReview, index: number) => (
            <div
              key={index}
              className=" cursor-pointer px-2 py-2 text-[var(--secondary-color)]  bg-[var(--accent-color1)] flex gap-3 items-center"
            >
              <FaRegFileCode />
              {reviewedCode.filename}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SideBar;
