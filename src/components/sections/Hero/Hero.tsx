import React from "react";
import HeroAnimation from "@/components/sections/hero/HeroAnimation";

export default function Hero() {
  return (
    <div className="relative p-0 m-0 justify-center items-center h-screen">
      <video
        src="/hero_back.mp4"
        className="absolute inset-0 z-0 object-cover min-w-screen min-h-screen"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-10 
        text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-maru text-white
        p-4 sm:p-6 md:p-8 lg:p-10 w-full sm:w-auto"
      >
        <HeroAnimation />
      </div>
    </div>
  );
}
