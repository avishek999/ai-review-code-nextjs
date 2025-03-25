import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import AnimatedReviewButton from "../buttons/RunButton";


interface IHomeNav{
  handlePrintCode:() => void
}

const HomeNavBar:React.FC<IHomeNav> = ({handlePrintCode}) => {
  return (
    <nav className="  bg-[var(--primary-background-color)] px-6 md:px-14 pt-6 pb-3 flex justify-between items-center border-b border-gray-800 ">
      <div className="flex gap-10 items-center">
        <div className="text-[21px] md:text-2xl flex  gap-2 items-center  font-semibold ">
          <FaCode size={30} className="text-[var(--icon-color)]" />
          CodeReviewAI
        </div>
        <div className="flex items-center gap-3 text-md">
          <div className="flex items-center gap-2   text-[var(--secondary-color)]   cursor-pointer  ">
            <FaCode />
            Editor
          </div>
          <div className="text-[var(--secondary-text-color)] flex items-center gap-2 cursor-pointer">
            <MdHistory />
            History
          </div>
          <div className="text-[var(--secondary-text-color)] flex items-center gap-2 cursor-pointer">
            <BsFillGearFill />
            Setting
          </div>
        </div>
      </div>
      <div className="hidden md:flex  gap-5 items-center">
        <AnimatedReviewButton handlePrintCode={handlePrintCode} />
      </div>
    </nav>
  );
};

export default HomeNavBar;
