"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { Code, CheckCircle } from "lucide-react"
import { FaPlay } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";

interface IHomeNav {
  handlePrintCode: () => void;
}

const AnimatedReviewButton: React.FC<IHomeNav> = ({ handlePrintCode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <motion.button
      className="relative overflow-hidden rounded-lg px-4 py-2 font-medium text-white shadow-lg transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)`,
        boxShadow: isHovered
          ? "0 0 25px rgba(79, 70, 229, 0.6), 0 0 10px rgba(124, 58, 237, 0.4)"
          : "0 0 15px rgba(79, 70, 229, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${
            isHovered ? "50%" : "100%"
          } 0%, #7c3aed 0%, transparent 60%)`,
          opacity: isHovered ? 0.6 : 0,
        }}
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Particle effects */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6,
              }}
              animate={{
                y: [0, -20],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </>
      )}

      {/* Button content */}
      <div
        className="flex items-center justify-center gap-2"
        onClick={handlePrintCode}
      >
        <motion.div
          animate={isClicked ? { rotate: [0, 360] } : {}}
          transition={{ duration: 0.5 }}
        >
          {isClicked ? (
            <IoSparklesSharp className="h-5 w-5 text-white" />
          ) : (
            <FaPlay className="h-5 w-5 text-white" />
          )}
        </motion.div>

        <motion.span
          animate={isClicked ? { y: [0, -20, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {isClicked ? "Code Reviewed" : "Review Code"}
        </motion.span>
      </div>

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: "2px solid rgba(124, 58, 237, 0.5)",
          opacity: isHovered ? 1 : 0,
        }}
        animate={
          isHovered
            ? {
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Pulse effect when clicked */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-white"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.button>
  );
};

export default AnimatedReviewButton;
