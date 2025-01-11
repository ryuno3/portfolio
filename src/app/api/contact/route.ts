import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.age || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const options = {
      from: `"ポートフォリオ問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: body.email,
      subject: "ポートフォリオからお問い合わせがありました",
      text: `お名前: ${body.name}\n年齢: ${body.age}\nメールアドレス: ${body.email}\n\nメッセージ: ${body.message}`,
    };

    await transporter.sendMail(options);
    return NextResponse.json({ success: true, message: "送信完了" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `メール送信に失敗しました: ${error}` },
      { status: 500 }
    );
  }
}
