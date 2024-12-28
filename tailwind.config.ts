import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],     // デフォルトフォント
        maru: ['var(--font-zen-maru)'],      // アクセント用フォント
      },
    },
  },
  plugins: [],
} satisfies Config;
