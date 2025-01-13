import { NextResponse } from "next/server";
import { Work } from "@/../types/works/type";
import { prisma } from "@/lib/prisma/prismaClient";

export async function GET() {
  try {
    const res = await prisma.work.findMany();

    if (!res || res.length === 0) {
      return NextResponse.json({ works: [] }, { status: 200 });
    }

    const works: Work[] = res.map(({ id, title, description, image, sourceUrl }) => ({
      id,
      title,
      description,
      image,
      url: sourceUrl,
    }));

    return NextResponse.json({ works });
  } catch (e) {
    console.error("Prisma error:", e);
    return NextResponse.json({ message: "実績の取得に失敗しました" }, { status: 500 });
  }
}
