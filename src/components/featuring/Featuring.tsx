import Image from "next/image";
import React from "react";

const Featuring: React.FC = () => {
  return (
    <div className="flex justify-center  items-center py-12 flex-col ">
      <div className="md:text-4xl text-2xl md:w-[26ch] text-center">
        Boost Code Quality with Smart, Instant, and Scalable AI Reviews
      </div>

      <div className="w-full mt:mt-0 mt-4">
        <div className="w-full flex md:flex-row flex-col justify-center md:gap-3 gap-11 md:px-28 ">
          <div className="md:w-[26%] mx-3 nd:mx-0 rounded-md border border-gray-700 flex justify-center items-center md:items-start flex-col md:pl-10 md:pb-10">
            <Image
              width={250}
              height={100}
              src="/Images/home-page/ring.png"
              alt=""
              className=" h-auto"
            />
            <div className="text-lg mt-4 ">Instantly Improve Your Code</div>
            <div className="text-md text-gray-500  w-[33ch] mt-2">
              Get real-time, AI-driven code enhancements the moment you need
              them.
            </div>
          </div>
          <div
            className="md:w-[60%]  mx-3 nd:mx-0 rounded-md relative"
            style={{
              background:
                "linear-gradient(188deg,rgba(79, 70, 229, 0) 20%, rgba(125, 47, 235, 1) 180%)",
            }}
          >
            <Image
              width={800}
              height={600}
              src="/Images/home-page/home-screen-shot.png"
              alt=""
              className=" h-auto z-[-2] relative"
            />
            <div className="absolute bottom-1 md:bottom-10 left-5 md:left-10  ">
              <div className="md:text-2xl text-xl">User-Friendly Inputs</div>
              <div className="md:text-sm text-gray-300 w-[40ch]  md:w-[50ch]">
                Designed to simplify your workflow with intuitive, easy-to-use
                input suggestions that adapt to your coding style.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt:mt-0 mt-4 ">
        <div className="w-full flex md:flex-row flex-col justify-center md:gap-3 gap-11 md:px-28 ">
          <div
            className="md:w-[60%]  mx-3 nd:mx-0 rounded-md relative flex items-center justify-center"
            style={{
              background:
                "linear-gradient(188deg,rgba(79, 70, 229, 0) 20%, rgba(125, 47, 235, 1) 180%)",
            }}
          >
            <Image
              width={400}
              height={102}
              src="/Images/home-page/errros.png"
              alt=""
              className="  relative z-[-2]  "
            />
            <div className="absolute bottom-1 md:bottom-10 left-5 md:left-10  ">
              <div className="md:text-2xl text-xl">
                A Smarter Way to Catch Errors
              </div>
              <div className="md:text-sm text-gray-300 w-[40ch]  md:w-[50ch]">
                Deliver perfectly structured, error-free inputs on the first
                try—no corrections, no confusion.
              </div>
            </div>
          </div>
          <div className="md:w-[26%] mx-3 nd:mx-0 rounded-md border border-gray-700 flex justify-center items-center md:items-start flex-col md:pl-10 md:pb-10">
            <Image
              width={250}
              height={100}
              src="/Images/home-page/triangle.png"
              alt=""
              className=" h-auto"
            />
            <div className="text-lg mt-4">
              Instant Error Detection and Fixes
            </div>
            <div className="text-md text-gray-500 w-[33ch] mt-2">
              Identify and resolve errors instantly with AI-powered suggestions,
              ensuring clean code every time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuring;
