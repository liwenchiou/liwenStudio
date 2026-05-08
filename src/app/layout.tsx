import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import FloatingCTA from "@/components/FloatingCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://liwen.studio"),
  title: {
    default: "Liwen Studio | 頂級 Web 系統架構與 AI 自動化方案",
    template: "%s | Liwen Studio"
  },
  description: "Liwen Studio 專注於建構高性能 Next.js 應用與企業級 AI 代理人工作流。我們將技術視為建築，為您的品牌打造具備長遠價值的數位資產。服務包含：AI 工作流設計、Next.js 系統開發、技術架構顧問。",
  keywords: ["Next.js 開發者", "AI Agent 設計", "網頁架構師", "軟體工程師", "Liwen Studio", "台灣網頁開發", "AI 自動化"],
  authors: [{ name: "Liwen Chiou" }],
  creator: "Liwen Chiou",
  publisher: "Liwen Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Liwen Studio | 數位建築師",
    description: "極致性能、美學與技術的完美交匯。專注於 Next.js 頂級開發與 AI 代理人工作流。",
    url: "https://liwen.studio",
    siteName: "Liwen Studio",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Liwen Studio Digital Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liwen Studio | 數位建築師",
    description: "構築具備商業靈魂與技術美學的數位產品。",
    images: ["/assets/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Liwen Studio",
  "image": "https://liwen.studio/assets/hero.png",
  "description": "專注於高性能 Next.js 應用與企業級 AI 代理人工作流的開發工作室。",
  "url": "https://liwen.studio",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Taipei",
    "addressCountry": "TW"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://github.com/liwenchiou",
    "https://linkedin.com"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-443VLJYKB2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-443VLJYKB2');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${outfit.variable} antialiased grainy-bg bg-soft-bg`}
      >
        <CustomCursor />
        <FloatingCTA />
        <Navbar />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
