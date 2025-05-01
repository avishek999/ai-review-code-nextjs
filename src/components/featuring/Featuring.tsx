import Image from "next/image";
import React from "react";

const Featuring: React.FC = () => {
  return (
    <div className="flex justify-center  items-center py-12 flex-col ">
      <div className="md:text-4xl text-2xl md:w-[26ch] text-center">
        Boost Code Quality with Smart, Instant, and Scalable AI Reviews
      </div>

      <div className="w-full mt:mt-0 mt-4">
        <div className="w-full flex md:flex-row flex-col justify-center md:gap-3 gap-11 lg:px-28 ">
          <div className="lg:w-[26%]   py-5 lg:py-0 mx-3 nd:mx-0 rounded-md border border-gray-700 flex justify-center items-center md:items-start flex-col md:pl-10 md:pb-10">
            <Image
              width={250}
              height={100}
              src="/Images/home-page/ring.png"
              alt=""
              className=" h-auto"
            />
            <div className="text-center md:text-start">
              <div className="text-lg mt-4">Instantly Improve Your Code</div>
              <div className="text-md text-gray-500 w-[33ch] mt-2">
                AI reviews and refines your code as you write, boosting quality
                instantly.
              </div>
            </div>
          </div>
          <div
            className="lg:w-[60%]  md:w-[80%] mx-3 nd:mx-0 rounded-md relative"
            style={{
              background:
                "linear-gradient(188deg,rgba(79, 70, 229, 0%) 0%, rgba(125, 47, 235, 1) 160%)",
            }}
          >
            <Image
              width={800}
              height={0}
              src="/Images/home-page/home-screen-shot.png"
              alt=""
              className=" h-auto z-[-2] relative min-h-[350px]  object-contain"
            />
            <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10  ">
              <div className="md:text-2xl text-xl">
                Effortless Code Improvements
              </div>
              <div className="md:text-sm text-gray-300 w-[40ch] md:w-[50ch]">
                Smart suggestions tailored to your code style, making every
                input cleaner and more efficient.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt:mt-0 mt-4 ">
        <div className="w-full flex md:flex-row flex-col-reverse justify-center md:gap-3 gap-11 md:px-28 ">
          <div
            className="md:w-[60%]  mx-3 nd:mx-0 rounded-md relative flex items-center justify-center"
            style={{
              background:
                "linear-gradient(188deg,rgba(79, 70, 229, 0) 20%, rgba(125, 47, 235, 1) 180%)",
            }}
          >
            <Image
              width={500}
              height={0}
              src="/Images/home-page/errros.png"
              alt=""
              className="  relative z-[-2] min-h-[350px]  object-contain"
            />
            <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10  ">
              <div className="md:text-2xl text-xl">
                Smarter Code, Fewer Mistakes
              </div>
              <div className="md:text-sm text-gray-300 w-[40ch] md:w-[50ch]">
                Let AI review your code in real-time, catching issues early and
                improving structure effortlessly.
              </div>
            </div>
          </div>
          <div className="md:w-[26%] py-5  lg:pb-5 mx-3 nd:mx-0 rounded-md border border-gray-700 flex justify-center items-center md:items-start flex-col md:pl-10 md:pb-10">
            <Image
              width={200}
              height={80}
              src="/Images/home-page/triangle.png"
              alt=""
              className=" h-auto"
            />
            <div className="text-center md:text-start">
              <div className="text-lg mt-4">
                AI-Powered Code Review in Seconds
              </div>
              <div className="text-md text-gray-500 w-[33ch] mt-2">
                Get smart, automated code reviews with instant suggestions to
                improve quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuring;
