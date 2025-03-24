import React, { useState } from "react";
import { FaLightbulb, FaPaperPlane } from "react-icons/fa6";
import { MdWarning } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";




interface IchatMessage {
  setMessage: (message: string) => void;
}
const ChatScreen: React.FC<IchatMessage> = ({setMessage}) => {
  const [inputValue, setInputValue] = useState("");

  const handelData = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
    setMessage(inputValue)
  };
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
            the catch block should properly handle or rethrow the error instead
            of just logging it.
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className=" bg-[var(--warning-background-color)] px-4 py-5 ">
            <div className="text-[var(--warning-text-color)] ">
              Warning: Unhandled Promise Rejection
            </div>
            <div className="text-sm mt-2">
              The catch block should properly handle or rethrow the error
              instead of just logging it.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className=" bg-[var(--improvement-background-color)] px-4 py-5 ">
            <div className="text-[var(--improvement-text-color)] ">
              Improvement: Unhandled Promise Rejection
            </div>
            <div className="text-sm mt-2">
              The catch block should properly handle or rethrow the error
              instead of just logging it.
            </div>
          </div>
        </div>
      </div>

      {/* ===================== send input ===================== */}

      <div className="absolute bottom-0 w-[90%] pt-4 border-t border-[var(--secondary-text-color)] ">
        <div className="py-3 flex flex-col items-center bg-[var(--secondary-background-color)]">
          <div className="flex w-full justify-center items-center">
            <form onSubmit={handelData}>
              <input
                type="text"
                placeholder="Ask AI about the code"
                className="w-[90%] outline-none bg-[var(--secondary-background-color)]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">
                <FaPaperPlane className="text-[var(--secondary-color)] cursor-pointer" />
              </button>
            </form>
          </div>

          {/* Display input value */}
          <div className="mt-2 text-sm text-[var(--primary-text-color)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
