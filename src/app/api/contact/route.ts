import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // バリデーション
  if (!body.name || !body.age || !body.email || !body.message) {
    return NextResponse.json({ message: "必須項目が不足しています" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const options = {
    from: body.email,
    to: process.env.GMAIL_USER,
    subject: "ポートフォリオからお問い合わせがありました",
    text: `お名前: ${body.name}\n年齢: ${body.age}\nメールアドレス: ${body.email}\n\nメッセージ: ${body.message}`,
  };

  try {
    await transporter.sendMail(options);

    return NextResponse.json({ message: "メッセージを受け付けました" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "エラーが発生しました" }, { status: 500 });
  }
}
