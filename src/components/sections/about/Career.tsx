import React from "react";
import Headline from "@/components/ui/Headline";

const Career = () => {
  return (
    <main className="flex flex-col md:flex-row  gap-5 md:gap-2 max-w-max">
      <section className=" border-2 border-white rounded-lg p-2 pb-10 md:pb-0">
        <header>
          <Headline title="学歴" />
        </header>
        <article className="flex flex-col">
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-2">
              <time className="italic">2021年4月</time>
              <p className="whitespace-nowrap">大阪市立大学 入学</p>
            </li>
            <li className="flex flex-row gap-2">
              <time className="italic">2022年9月</time>
              <p className="whitespace-nowrap">大阪市立大学 中途退学</p>
            </li>
          </ul>
        </article>
      </section>
      <section className=" border-2 border-white rounded-lg p-2 overflow-hidden">
        <header>
          <Headline title="職歴" />
        </header>
        <article className="flex flex-col overflow-scroll">
          <ul className="flex flex-col gap-2 mt-2">
            <li className="flex flex-row gap-2">
              <time className="italic">2022年9月</time>
              <p className="whitespace-nowrap">株式会社yugunity 入社</p>
            </li>
            <li className="flex flex-row gap-2">
              <time className="italic">2023年3月</time>
              <p className="whitespace-nowrap">株式会社yugunity 退社</p>
            </li>
            <li className="flex flex-row gap-2 mt-2">
              <time className="italic">2023年3月〜2024年1月</time>
            </li>
            <li className=" ml-2 mb-2">
              <p className="whitespace-nowrap">マクドナルド近江今津店（アルバイト）</p>
            </li>
            <li className="flex flex-row gap-2">
              <time className="italic">2024年2月</time>
              <p className="whitespace-nowrap">新日本金属工業株式会社（派遣）</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Career;
