import React from "react";
import Headline from "@/components/ui/Headline";
const Career = () => {
  return (
    <div className="flex flex-row gap-3">
      <div>
        <Headline title="学歴" />
      </div>
      <div>
        <Headline title="職歴" />
      </div>
    </div>
  );
};

export default Career;
