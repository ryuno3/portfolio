"use client";
import { motion } from "framer-motion";
import React from "react";

const Headline = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2.0 }}
      className=" w-80 min-w-[50vw] md:min-w-[30vw]  text-4xl font-bold text-center m-5"
    >
      <h1 className="text-white py-3 border-b-2 border-white w-auto font-maru">
        {title}
      </h1>
    </motion.div>
  );
};

export default Headline;
