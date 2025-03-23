"use client";

import { iResponse } from "@/interface/common";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { BiMessageSquareError } from "react-icons/bi";
interface iToast {
  toastValue: iResponse;
}

export const Toast: React.FC<iToast> = ({ toastValue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="fixed inset-0 flex h-fit top-3  justify-center z-50"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg bg-white/30 backdrop-blur-md border border-white/10 w-80 md:w-96"
        style={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className={`p-1 ${
            toastValue.status ? " bg-emerald-500" : "bg-red-600"
          } rounded-full`}
        >
          {toastValue.status ? (
            <FiCheckCircle className="h-6 w-6 text-white" />
          ) : (
            <BiMessageSquareError className="h-6 w-6 text-white" />
          )}
        </div>
        <div>
          <h3 className="font-medium text-white">
            {`${toastValue.status ? "Success" : "Error"}`}!
          </h3>
          <p className="text-sm text-gray-200">{toastValue.message}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
