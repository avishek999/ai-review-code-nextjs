import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";




const Cta: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5  py-14">
      <div className="text-2xl md:text-3xl font-semibold">
        Start Writing Better Code Tody
      </div>
      <p className="text-[var(--secondary-text-color)]  text-center text-sm md:text-md">
        Join thousand of developer who trust CodeReview AI for there code
        quality <br /> needs
      </p>
      <PrimaryButton title="Get Started for free" href="/signup" />
    </div>
  );
};

export default Cta;
