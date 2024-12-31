import Headline from "@/components/layout/Headline";
import React from "react";

const About = () => {
  return (
    <div className="text-center">
      {/* 何を書くか
      ・自己紹介　→ホームにも入れる
      ・経歴　→学歴、職歴
      ・スキル　→使用言語、フレームワーク、ツール
      ・その他　→趣味、特技、資格（ないことを面白おかしく）、その他
      ・お問い合わせ　→ホームにも入れる（別でページ）、フッターにも、SNSもここかな？(github, x, instagram, discord,qiita,zenn )
       */}
      {/* セクションごとにコンポーネントを作る
        ・Profile
        ・History → school,job
        ・Skills→ language,framework,tool
        ・Other→hobby,ability,certificate,etc
        ・Contact →SNS  
       */}

      <Headline title="About" />
    </div>
  );
};

export default About;
