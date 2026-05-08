import React from "react";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們 Contact",
  description: "準備好開始您的下一個數位專案了嗎？歡迎與 Liwen Studio 聯繫，討論您的 AI 需求或 Web 開發計畫。讓我們共同構築具備影響力的數位產品。",
};

export default function ContactPage() {
  return <ContactClient />;
}
