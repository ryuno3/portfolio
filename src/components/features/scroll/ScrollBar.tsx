"use client";

import { motion } from "framer-motion";

export default function ScrollBar() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <motion.div
        className="flex flex-col gap-2 items-center"
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 20],
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,
        }}
      >
        <div className="h-4 w-4 border-r-2 border-b-2 border-white rotate-45" />
        <div className="h-4 w-4 border-r-2 border-b-2 border-white rotate-45" />
      </motion.div>
    </div>
  );
}
