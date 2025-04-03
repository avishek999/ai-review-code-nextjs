import { ICodeReview } from "@/interface/code";
import { iResponse } from "@/interface/common";
import { getAllCodeReviewById } from "@/services/api";
import React from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { CustomScrollbar } from "../customScrollbar/CustomScrollbar";

interface ISideBar {
  getAllCodeByUSerId: iResponse;
  setCodeAfterReview: (arg0: ICodeReview) => void;
}

const SideBar: React.FC<ISideBar> = ({
  getAllCodeByUSerId,
  setCodeAfterReview,
}) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const getReviewedCodeById = async (_id: string) => {
    setSelectedId(_id);
    const response = await getAllCodeReviewById({ _id: _id });

    setCodeAfterReview(response.data as ICodeReview);
  };

  return (
    <div className="p-4 overflow-hidden">
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Files</div>
        <div className="text-[var(--secondary-color)] text-3xl cursor-pointer">
          +
        </div>
      </div>

      <CustomScrollbar className="flex flex-col gap-4 mt-3 h-[calc(100vh-157.8px)] overflow-y-auto">
        {getAllCodeByUSerId.data
          ?.slice()
          .reverse()
          .map((reviewedCode: ICodeReview, index: number) => (
            <div
              key={index}
              className={`cursor-pointer px-2 py-2 ${
                selectedId === reviewedCode._id
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-[var(--secondary-color)] bg-[var(--accent-color1)]"
              } flex gap-3 items-center`}
              onClick={() => getReviewedCodeById(reviewedCode._id ?? "")}
            >
              <FaRegFileCode />
              {reviewedCode.filename}
            </div>
          ))}
      </CustomScrollbar>
    </div>
  );
};

export default SideBar;
