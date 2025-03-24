import { ICodeReview } from "@/interface/code";
import React from "react";
import { FaLightbulb, FaPaperPlane } from "react-icons/fa6";
import { MdWarning } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";

interface IChat {
  setPayload: (payload: ICodeReview) => void;
}

const ChatScreen: React.FC<IChat> = ({ setPayload }) => {
  return (
    <div className="p-4 relative h-full w-full overflow-auto">
      {/* ===================== review overview  ===================== */}

      <div className="border-b border-[var(--secondary-text-color)] py-3">
        <div className="text-md font-semibold ">Review Summary</div>
        <div className="flex flex-col gap-3 mt-5">
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

      {/* ===================== review card  ===================== */}

      <div className="flex flex-col gap-3 mt-5">
        <div className=" bg-[var(--error-background-color)] px-4 py-5 ">
          <div className="text-[var(--error-text-color)] ">
            Error: Unhandled Promise Rejection
          </div>
          <div className="text-sm ">
            the catch block should properly handoling or rethroe the error
            instead of just loging ib{" "}
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className=" bg-[var(--warning-background-color)] px-4 py-5 ">
            <div className="text-[var(--warning-text-color)] ">
              warning: Unhandled Promise Rejection
            </div>
            <div className="text-sm mt-2">
              the catch block should properly handoling or rethroe the error
              instead of just loging ib{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className=" bg-[var(--improvement-background-color)] px-4 py-5 ">
            <div className="text-[var(--improvement-text-color)] ">
              improvement: Unhandled Promise Rejection
            </div>
            <div className="text-sm mt-2">
              the catch block should properly handoling or rethroe the error
              instead of just loging ib{" "}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== send  input  ===================== */}

      <div className="absolute bottom-0 w-[90%] pt-4 border-t border-[var(--secondary-text-color)] ">
        <div className=" py-3 flex  justify-center items-center bg-[var(--secondary-background-color)]">
          <input
            type="text"
            placeholder="Ask Ai about the code "
            className="w-[90%] outline-none bg-[var(--secondary-background-color)]"
            onChange={(e) => setPayload({ chat: e.target.value })}
          />

          <FaPaperPlane className="text-[var(--secondary-color)] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
