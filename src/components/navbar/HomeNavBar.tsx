import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import AnimatedReviewButton from "../buttons/RunButton";
import { logoutUserAPi } from "@/services/api";
import { useRouter } from "next/navigation";

interface IHomeNav {
  handlePrintCode: () => void;
}

const HomeNavBar: React.FC<IHomeNav> = ({ handlePrintCode }) => {
  const [isToggleMenuOpen, setToggleMenuOpen] = useState(false);

  const router = useRouter();

  const handleToggleMenu = async () => {
    await logoutUserAPi();

    setToggleMenuOpen(false);
    router.push("/");
  };
  return (
    <nav className="  bg-[var(--primary-background-color)] px-6 md:px-14 pt-6 pb-3 flex justify-between items-center border-b border-gray-800 ">
      <div className="flex gap-10 items-center">
        <div className="text-[21px] md:text-2xl flex  gap-2 items-center  font-semibold ">
          <FaCode size={30} className="text-[var(--icon-color)]" />
          CodeReviewAI
        </div>
        <div className="flex items-center gap-3 text-md ">
          <div className="flex items-center gap-2   text-[var(--secondary-color)]   cursor-pointer ">
            <FaCode />
            Editor
          </div>

          <div className="relative inline-block">
            <div
              className="text-[var(--secondary-text-color)] flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setToggleMenuOpen((prev) => !prev);
              }}
            >
              <BsFillGearFill />
              Setting
            </div>
            {isToggleMenuOpen && (
              <div className="absolute left-[30px] mt-2 w-32 bg-[var(--accent-color1)] border hover:opacity-90  border-[var(--accent-color2)] rounded shadow-md z-10">
                <button
                  className="w-full px-4 py-2 text-left text-sm "
                  onClick={handleToggleMenu}
                >
                  Logout
                </button>
              </div>
            )}
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
