import React from "react";
import PortfolioClient from "./PortfolioClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品集 Archive",
  description: "探索 Liwen Studio 的數位建築作品，包含高性能 Next.js 應用、AI 代理人系統與企業級軟體架構實踐。",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
