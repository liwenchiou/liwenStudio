import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liwen Studio | Premium Web Architecture & AI Solutions",
  description: "Liwen Studio 專注於建構高性能 Next.js 應用與企業級 AI 代理人工作流。我們將技術視為建築，為您的品牌打造具備長遠價值的數位資產。",
  keywords: ["Next.js Developer", "AI Agent Design", "Web Architecture", "Software Engineering", "Liwen Studio"],
  openGraph: {
    title: "Liwen Studio | 數位建築師",
    description: "極致性能、美學與技術的完美交匯。",
    url: "https://liwen.studio",
    siteName: "Liwen Studio",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${outfit.variable} antialiased grainy-bg bg-soft-bg`}
      >
        {children}
      </body>
    </html>
  );
}
