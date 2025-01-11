import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body); // デバッグログ

    if (!body.name || !body.age || !body.email || !body.message) {
      console.log("Validation failed:", body); // デバッグログ
      return NextResponse.json({ message: "必須項目が不足しています" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // メール送信前のログ
    console.log("Attempting to send email with config:", {
      user: process.env.GMAIL_USER ? "設定済み" : "未設定",
      pass: process.env.GMAIL_APP_PASSWORD ? "設定済み" : "未設定",
    });

    const options = {
      from: body.email,
      to: process.env.GMAIL_USER,
      subject: "ポートフォリオからお問い合わせがありました",
      text: `お名前: ${body.name}\n年齢: ${body.age}\nメールアドレス: ${body.email}\n\nメッセージ: ${body.message}`,
    };

    await transporter.sendMail(options);
    return NextResponse.json({ success: true, message: "送信完了" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "メール送信に失敗しました",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
