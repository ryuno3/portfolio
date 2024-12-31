import React from "react";
import Headline from "@/components/layout/Headline";
import Profile from "./Profile";

const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Headline title="About" />
      <Profile />
    </div>
  );
};

export default About;
