import { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";


const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400","500", "700"],
  display: "swap",
  variable: "--font-noto",
});

const zen = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-zen-maru',   
})


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
        className={`${noto.variable} ${zen.variable} ${noto.className} bg-zinc-600 text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
