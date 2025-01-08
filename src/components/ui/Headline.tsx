import React from "react";

const Headline = ({ title, size }: { title: string; size: "s" | "m" | "l" }) => {
  switch (size) {
    case "s":
      return <div className={`text-xl font-bold border-b-2 border-gray-300`}>{title}</div>;

    case "m":
      return <div className="text-2xl font-bold border-b-2 border-gray-300">{title}</div>;
    case "l":
      return <div className="text-4xl font-bold border-b-2 border-gray-300">{title}</div>;

    default:
  }
};

export default Headline;
