"use client";

import { ICodeReview } from "@/interface/code";
import { getAllCodeReviewById } from "@/services/api";
import React from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { CustomScrollbar } from "../customScrollbar/CustomScrollbar";

interface ISideBar {
  getAllCodeByUSerId: ICodeReview[];
  setCodeAfterReview: (arg0: ICodeReview) => void;
  setSelectedId: (arg0:string) => void;
  selectedId:string
}

const SideBar: React.FC<ISideBar> = ({
  getAllCodeByUSerId,
  setCodeAfterReview,
  setSelectedId,
  selectedId
}) => {
 
  // (getAllCodeByUSerId?.at(-1)?._id as string) ||
  const getReviewedCodeById = async (_id: string) => {
    setSelectedId(_id);

    const response = await getAllCodeReviewById({ _id: _id });

    setCodeAfterReview(response.data as ICodeReview);
  };

  const handleNewFile = () => {
    setCodeAfterReview({
      userId: "",
      filename: "",
      UserInputCode: "",
      feedback: {
        errors: [],
        warnings: [],
        improvements: [],
      },
      improvedCode: `function calculateTotal(items) {
        int total = 1;
        for(int items of items){
        total += items.price;
        }
        return total;
      }
        `,
      chat: [],
    });
  };

  return (
    <div className="p-4 overflow-hidden">
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Files</div>
        <div
          className="text-[var(--secondary-color)] text-3xl cursor-pointer"
          onClick={handleNewFile}
        >
          +
        </div>
      </div>

      <CustomScrollbar className="flex flex-col gap-4 mt-3 h-[calc(100vh-157.8px)] overflow-y-auto">
        {getAllCodeByUSerId.length === 0 ? (
          <div
            className={`cursor-pointer px-2 py-2 
          bg-[var(--primary-color)] rounded-lg
           flex gap-3 items-center text-gray-200`}
          >
            <FaRegFileCode />
            sample.js
          </div>
        ) : (
          getAllCodeByUSerId
            ?.slice()
            .reverse()
            .map((reviewedCode: ICodeReview, index) => (
              <div
                key={index}
                className={`cursor-pointer px-2 py-2 ${
                  selectedId === reviewedCode._id
                    ? "bg-[var(--primary-color)] "
                    : ""
                } flex gap-3 items-center text-gray-200 rounded-lg`}
                onClick={() => getReviewedCodeById(reviewedCode._id ?? "")}
              >
                <FaRegFileCode />
                {reviewedCode.filename}
              </div>
            ))
        )}
      </CustomScrollbar>
    </div>
  );
};

export default SideBar;
