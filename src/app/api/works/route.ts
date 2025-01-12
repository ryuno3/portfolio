import { NextResponse } from "next/server";
import { Work } from "@/../types/works/type";

export async function GET() {
  try {
    const works: { works: Work[] } = {
      works: [
        {
          id: 1,
          title: "ポートフォリオサイト",
          description: "Next.js + TypeScript + Tailwind CSSで作成",
          image: "/portfolio.png",
          url: "https://github.com/ryuno3/portfolio",
        },
        {
          id: 2,
          title: "TODOアプリ",
          description: "React + TypeScriptで作成したTODOアプリ",
          image: "/images/todo.png",
          url: "https://github.com/username/todo-app",
        },
        {
          id: 3,
          title: "天気予報アプリ",
          description: "お天気APIを使用した天気予報アプリ",
          image: "/weather_app.png",
          url: "https://github.com/Fudy-V/wether-app",
        },
        {
          id: 4,
          title: "メモアプリ",
          description: "ローカルストレージを使用したメモアプリ",
          image: "/images/memo.png",
          url: "https://github.com/username/memo-app",
        },
        {
          id: 5,
          title: "チャットアプリ",
          description: "WebSocketを使用したリアルタイムチャット",
          image: "/images/chat.png",
          url: "https://github.com/username/chat-app",
        },
      ],
    };

    return NextResponse.json(works);
  } catch (e) {
    return NextResponse.json({ error: "実績の取得に失敗しました", e }, { status: 500 });
  }
}
