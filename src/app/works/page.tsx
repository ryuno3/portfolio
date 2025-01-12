import Headline from "@/components/ui/Headline";
import React from "react";
import { Work } from "@/../types/works/type";
import WorkCard from "@/components/sections/Work/WorkCard";

const getWorks = async () => {
  // 絶対URLを使用
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/works`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch works");
  }

  const data = await res.json();
  return data.works;
};

const Works = async () => {
  const works = await getWorks();

  return (
    <div className="flex flex-col items-center justify-center p-3 pt-[10vh]">
      <Headline title="Works" size="l" />
      <p className="italic p-2">制作物一覧</p>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {works.map((work: Work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </main>
    </div>
  );
};

export default Works;
