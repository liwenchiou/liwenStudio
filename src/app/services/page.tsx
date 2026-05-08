import React from "react";
import ServicesClient from "./ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "專業項目 Capabilities",
  description: "Liwen Studio 提供高端 Web 開發、AI 代理人工作流設計與系統架構諮詢服務。我們致力於將複雜技術轉化為商業競爭優勢。",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
