"use client";

import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.6 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.6 },
        }}
        className="text-4xl font-bold text-blue-600"
      >
        Hello Framer Motion 🚀
      </motion.h1>
    </div>
  );
};

export default FramerMotion;
