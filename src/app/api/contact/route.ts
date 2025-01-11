import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // バリデーション
    if (!body.name || !body.age || !body.email || !body.message) {
      return NextResponse.json({ message: "必須項目が不足しています" }, { status: 400 });
    }

    // ここに実際のメール送信処理を追加
    // 例: SendGrid, NodeMailer などを使用
    console.log(
      `お名前: ${body.name}\n年齢: ${body.age}\nメールアドレス: ${body.email}\nメッセージ: ${body.message}`
    );

    return NextResponse.json({ message: "メッセージを受け付けました" }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ message: "エラーが発生しました" }, { status: 500 });
  }
}
