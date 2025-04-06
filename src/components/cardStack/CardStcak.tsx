import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IErrorDetail } from "@/interface/code";
// import { ChevronDown, ChevronUp } from "lucide-react";

interface ICardStack {
  codeReviewMapData: IErrorDetail[];
  color: string;
}

const CardStack: React.FC<ICardStack> = ({ codeReviewMapData, color }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative h-full">
      <AnimatePresence>
        {codeReviewMapData.map((improvement, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{
                scale: 1,
                y: index * 20,
                rotate: index * -1,
                opacity: 1,
              }}
              animate={{
                scale: isExpanded ? 1.05 : 1,
                y: isExpanded
                  ? 0
                  : expandedIndex === null
                  ? index * 20
                  : expandedIndex < index
                  ? 200
                  : -200,
                rotate: isExpanded
                  ? 0
                  : expandedIndex === null
                  ? index * -1
                  : 0,
                opacity: expandedIndex === null || isExpanded ? 1 : 0,
                zIndex: isExpanded ? 50 : codeReviewMapData.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
              whileHover={{
                y: expandedIndex === null ? index * 20 - 4 : undefined,
                transition: { duration: 0.2 },
              }}
              className="absolute w-full cursor-pointer"
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              <motion.div
                layout
                className={`
                    bg-[${color}] px-6 py-5 rounded-xl shadow-lg border border-gray-200/50
                    ${isExpanded ? "shadow-2xl bg-[${color}]" : "bg-[${color}]"}
                  `}
              >
                <motion.div
                  layout
                  className="flex justify-between items-center"
                >
                  <motion.div
                    layout
                    className="text-white font-semibold text-[16px]"
                  >
                    {improvement.title}
                  </motion.div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <ChevronDown className="w-5 h-5 text-gray-500" /> */}
                  </motion.div>
                </motion.div>
                <motion.div
                  layout
                  className="text-white mt-2 overflow-hidden text-[13px]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    height: isExpanded ? "auto" : "3rem",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {improvement.message}
                </motion.div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CardStack;
