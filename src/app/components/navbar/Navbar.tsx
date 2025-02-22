import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";

const Navbar: React.FC = () => {
  return (
    <nav className=" px-6 md:px-14 pt-6 pb-3 flex justify-between items-center font-semibold border-b border-gray-800 ">
      <div className="text-[21px] md:text-2xl">CodeReviewAI</div>
      <div className=" hidden md:flex justify-between gap-5  text-[16px] ">
        <div>Features</div>
        <div>Documentation</div>
        <div>Pricing</div>
      </div>
      <div className="hidden md:flex  gap-5 items-center">
        <Link href={"/signin"}> Sign In</Link>
        <PrimaryButton title="Get started" href="/signup" />
      </div>
      <MdOutlineMenu size={28} className="md:hidden" />
    </nav>
  );
};

export default Navbar;
