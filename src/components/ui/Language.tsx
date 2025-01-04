import React from "react";
import { IoStar } from "react-icons/io5";
const Language = ({
  language,
  level,
  icon,
}: {
  language: string;
  level: 1 | 2 | 3;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 w-[100%] border-2 border-white rounded-lg p-2">
      <div className="flex flex-row items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <p className="text-md font-bold">{language}:</p>
      </div>
      <div className="flex flex-row gap-2">
        {Array.from({ length: level }, (_, index) => (
          <IoStar key={index} className="text-2xl text-yellow-500 " />
        ))}
      </div>
    </div>
  );
};

export default Language;
