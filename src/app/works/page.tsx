import Headline from "@/components/ui/Headline";
import React from "react";
import { Work } from "@/../types/works/type";
import WorkCard from "@/components/sections/Work/WorkCard";

const getWorks = async () => {
  // 絶対URLを使用
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/works`, {
      method: "GET",
      // next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTPエラー|status: ${res.status}`);
    }

    const data = await res.json();
    return data.works;
  } catch (e) {
    console.error("APIエラー:", e);
    return [];
  }
};

const Works = async () => {
  const works = await getWorks();

  if (!works.length) {
    return (
      <div className="flex flex-col items-center justify-center p-3 pt-[10vh]">
        <Headline title="Works" size="l" />
        <p className="text-red-500">作品データの取得に失敗しました</p>
      </div>
    );
  }

  const worksMin4 = works.length < 4;
  const placeholderCount = worksMin4 ? 4 - works.length : 0;

  return (
    <div className="flex flex-col items-center justify-center p-3 pt-[10vh]">
      <Headline title="Works" size="l" />
      <p className="italic p-2">制作物一覧</p>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {works.map((work: Work) => (
          <WorkCard key={work.id} {...work} />
        ))}

        {Array.from({ length: placeholderCount }).map((_, index) => (
          <WorkCard
            key={`placeholder-${index}`}
            title="開発中"
            description="......"
            image="/no_image.png"
            url=""
          />
        ))}
      </main>
    </div>
  );
};

export default Works;
