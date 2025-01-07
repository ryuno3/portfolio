import Headline from "@/components/layout/Headline";
import Profile from "@/components/sections/about/Profile";
import React from "react";
import Image from "next/image";
import Career from "@/components/sections/about/Career";
import Skill from "@/components/sections/about/Skill";
import Hobby from "@/components/sections/about/Hobby";
import Name from "@/components/ui/Name";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      {/* 何を書くか
      ・自己紹介　→ホームにも入れる
      ・経歴　→学歴、職歴
      ・スキル　→使用言語、フレームワーク、ツール
      ・その他　→趣味、特技、資格（ないことを面白おかしく）、その他
      ・お問い合わせ　→ホームにも入れる（別でページ）、フッターにも、SNSもここかな？(github, x, instagram, discord,qiita,zenn )
       */}
      {/* セクションごとにコンポーネントを作る
        ・Profile
        ・Career → school,job
        ・Skills→ language,framework,tool
        ・Other→hobby,ability,certificate,etc
        ・Contact →SNS  
       */}
      <Headline title="About" />
      <Name />
      {/* 自己紹介と画像 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="relative w-[200px] aspect-square">
          <Image
            src="/my_image.jpeg"
            alt="Ryunosuke"
            fill
            sizes="200px"
            className="rounded-3xl object-cover"
          />
        </div>
        <Profile />
      </div>

      {/* 経歴 */}
      <div className="flex flex-col items-center justify-center max-w-max">
        <Headline title="Career" />
        <Career />
      </div>

      {/* スキル */}
      <div className="flex flex-col items-center justify-center max-w-max">
        <Headline title="Skill" />
        <Skill />
      </div>

      {/* 趣味 */}
      <div className="flex flex-col items-center justify-center max-w-max">
        <Headline title="Hobby" />
        <Hobby />
      </div>
    </div>
  );
};

export default About;
