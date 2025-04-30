import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Cta: React.FC = () => {
  return (
    <div className="flex items-center justify-center   py-7">
      <div
        className="flex items-center justify-center flex-col gap-5  md:px-52 md:py-6 rounded-2xl "
        // style={{
        //   background:
        //     " linear-gradient(25deg,rgba(79, 70, 229, 0) 59%, rgba(124, 58, 237, 1) 100%)",
        // }}
      >
        <div className="text-2xl md:text-3xl font-semibold ">
          Start Writing Better Code Today
        </div>
        <p className="text-[var(--secondary-text-color)]  text-center text-sm md:text-md">
          Join thousand of developer who trust CodeReview AI for there code
          quality <br /> needs
        </p>
        <PrimaryButton title="Get Started for free" href="/signup" />
      </div>
    </div>
  );
};

export default Cta;
