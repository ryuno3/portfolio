import React from "react";
import Headline from "@/components/layout/Headline";
import Profile from "./Profile";
import Name from "@/components/ui/Name";

const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Headline title="About" />
      <Name />
      <Profile />
    </div>
  );
};

export default About;
