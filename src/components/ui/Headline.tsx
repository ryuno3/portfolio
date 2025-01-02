import React from "react";

const Headline = ({ title }: { title: string }) => {
  return (
    <div className="text-2xl font-bold border-b-2 border-gray-300">{title}</div>
  );
};

export default Headline;
