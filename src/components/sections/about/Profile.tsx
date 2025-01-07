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
        <p>2002年5月12日、大阪生まれ岐阜在住の22歳です。</p>
        <p>趣味は、音楽鑑賞、ギター。また、スノーボードが好きで、冬には毎年出かけます。</p>
        <p>2021年、大阪市立大学商学部に入学しましたが、2回生で自主退学しました。</p>
        <p>
          その後、アルバイトで生計を立てる中、友人の勧めでITの世界に興味を持ち、2024年8月より独学でプログラミング学習を開始しました。
        </p>
        <p>現在は派遣社員として働きながら、帰宅後や休日の時間を使って技術向上に努めています。</p>
        <p>
          フロントエンド開発、特にReactとNext.jsを中心に学習を進める中、知人の紹介でWeb制作案件に携わる機会を得て、実際のプロジェクトの開発からデプロイまでを経験しました。
        </p>
        <p>
          この経験からインフラやバックエンドの重要性に気づき、フルスタック開発にも興味を持つようになりました。現在はフロントエンド技術の向上と並行して、バックエンド技術の習得にも挑戦しています。
        </p>
        <p>
          さらに、最近参加したFlutterの初心者ハッカソンを通じて、モバイルアプリケーション開発の可能性にも魅力を感じています。
        </p>
      </div>
    </div>
  );
};

export default Profile;
