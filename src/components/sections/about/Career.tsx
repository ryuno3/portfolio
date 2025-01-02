import React from "react";
import Headline from "@/components/ui/Headline";
const Career = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className=" w-auto border-2 border-white rounded-lg p-2">
        <Headline title="学歴" />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <div className=" italic">2018年3月</div>
            <div className=" whitespace-nowrap">大阪府立市岡高校 卒業</div>
          </div>
        </div>
      </div>
      <div className=" w-auto border-2 border-white rounded-lg p-2">
        <Headline title="職歴" />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <div className=" italic">2024年2月</div>
            <div className=" whitespace-nowrap">新日本石油株式会社 入社</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
