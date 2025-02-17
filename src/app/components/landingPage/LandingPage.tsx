import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-[calc(100%-76.8px)] flex justify-center flex-col items-center">
      <h1 className="text-5xl font-bold text-center ">
        AI-Powered Code Reviews for <br /> Modern Development
      </h1>
      <p className="text-[var(--secondary-text-color)] mt-4  text-center">
        Enhance your Code quality with Real-time AI Suggestions, automation
        reviews and intelligent feedback
      </p>
      <div className="flex gap-5 mt-5">
        <PrimaryButton  title="Try for Free" href="'/signup"/>
        <SecondaryButton  title="Docmantaion" href="/dodumnation" />
      </div>
    </div>
  );
};

export default LandingPage;
