import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { MdWarning } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";

const ChatScreen: React.FC = () => {
  return (
    <div className="p-4">
      <div className="border-b border-[var(--secondary-text-color)] py-3">
        <div className="text-md font-semibold ">Review Summary</div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="text-[var(--error-text-color)] ">
                <TbXboxXFilled />
              </div>
              <div className="text-[var(--error-text-color)] text-sm font-medium ">
                Errors
              </div>
            </div>
            <div className="text-[var(--error-text-color)] bg-[var(--error-background-color)] h-6 w-6 rounded-full flex items-center justify-center">
              2
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="text-[var(--warning-text-color)] ">
                <MdWarning />
              </div>
              <div className="text-[var(--warning-text-color)] text-sm font-medium ">
                Warnings
              </div>
            </div>
            <div className="text-[var(--warning-text-color)] bg-[var(--warning-background-color)] h-6 w-6 rounded-full flex items-center justify-center">
              2
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="text-[var(--improvement-text-color)] ">
                <FaLightbulb />
              </div>
              <div className="text-[var(--improvement-text-color)] text-sm font-medium ">
                Improvement
              </div>
            </div>
            <div className="text-[var(--improvement-text-color)] bg-[var(--improvement-background-color)] h-6 w-6 rounded-full flex items-center justify-center">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
