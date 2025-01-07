"use client";

import React from "react";

const Name = () => {
  return (
    <h1 className="text-4xl m-5 font-maru">
      <span className="md:inline block relative">
        西野 龍ノ介
        <span className="absolute bottom-1 left-0 w-full h-[10px] bg-yellow-200/30 -z-10"></span>
      </span>
      <span className="md:inline md:before:content-['/'] md:before:mx-2 relative">
        Nishino Ryunosuke
        <span className="absolute bottom-1 left-0 w-full h-[10px] bg-yellow-200/30 -z-10"></span>
      </span>
    </h1>
  );
};

export default Name;
