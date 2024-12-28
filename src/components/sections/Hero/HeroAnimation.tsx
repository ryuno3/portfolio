"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroAnimation() {
  return (
    <>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-maru text-yellow-400"
      >
        Frontend
      </motion.div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-maru text-green-400"
      >
        Developer
      </motion.div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-maru text-white"
      >
        Ryunosuke
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: "125%",
          y: ["-50%", "-50%"],
          opacity: [0, 1],
        }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }}
        className="absolute top-1/2 z-10 sm:right-[-30%] md:right-[-20%] lg:right-[-15%]"
      >
        <Image
          src={"/my_image.jpeg"}
          alt="Ryunosuke"
          width={300}
          height={300}
          className="rounded-3xl z-10  w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]
 "
        />
      </motion.div>
    </>
  );
}
