import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Profile = () => {
  return (
    <div className="relative mx-3 overflow-auto h-[30vh] md:h-auto border-2 rounded-md md:border-none p-2 z-0 border-gray-200">
      <div className="relative min-h-full">
        <div className="md:hidden sticky top-0 left-0 w-full flex justify-end">
          <strong className="text-3xl absolute z-10 bg-slate-50/5 text-gray-800 rounded-sm p-[0.01rem] italic">
            {<MdKeyboardDoubleArrowDown />}
          </strong>
        </div>
        <p>2002年5月12日、大阪生まれの22歳です。</p>
        <p>2021年、大阪市立大学商学部に入学</p>
        <p>2022年9月に一身上の都合により2回生で自主退学しました。</p>
        <p>
          以降、アルバイトで生計を立てる中、それまでは無縁だったITに興味を持つようになり、
        </p>
        <p>2024年8月より独学でのプログラミング学習を開始しました。</p>
        <p>フロントエンド開発に興味をもち、React、Nextjsを学習する中、</p>
        <p>知り合いの紹介でWeb制作の案件をいただきデプロイまで担当し、</p>
        <p>
          目には見えないインフラやバックエンドの仕組みに触れたことで、
          フルスタック開発にも興味を持ち、苦戦しつつもバックエンド技術の学習に励んでいます。
        </p>
        <p>
          また、Flutterの初心者ハッカソンに参加する機会があり、モバイルアプリケーションの開発にも興味を持っています。
        </p>
      </div>
    </div>
  );
};

export default Profile;
