import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="px-14 pt-6 pb-3 flex justify-between items-center font-semibold border-b border-gray-800 ">
      <div className="text-2xl">CodeReviewAI</div>
      <div className="flex justify-between gap-5 text-[16px]">
        <div>Features</div>
        <div>Documentation</div>
        <div>Pricing</div>
      </div>
      <div className="flex  gap-5 items-center">
        <Link href={"/signin"}> Sign In</Link>
        <PrimaryButton title="Get started" href="/signup" />
      </div>
    </nav>
  );
};

export default Navbar;
