import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ryunosuke's Portfolio",
  description: "ryunosukeのポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={""}
      >
        {children}
      </body>
    </html>
  );
}
