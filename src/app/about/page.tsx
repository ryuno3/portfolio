import Headline from "@/components/layout/Headline";
import Profile from "@/components/sections/about/Profile";
import React from "react";
import Image from "next/image";
import Career from "@/components/sections/about/Career";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
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
      {/* 自己紹介と画像 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Image
          src="/my_image.jpeg"
          alt="Ryunosuke"
          width={200}
          height={200}
          className="rounded-3xl "
        />
        <Profile />
      </div>
      {/* 経歴 */}
      <div className="flex flex-col items-center justify-center max-w-max">
        <Headline title="Career" />
        <Career />
      </div>
    </div>
  );
};

export default About;
