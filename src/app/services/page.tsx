"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Globe, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI 代理人工作流",
    description: "為企業導入具備思考能力的 AI 代理人工作流。我們不只是接入 API，而是重新設計您的業務與文件自動化流程，將重複性勞動轉化為高品質的產出。",
    icon: Cpu,
    features: ["LLM 業務流程自動化", "客製化 AI Agent 開發", "RAG 企業知識庫建構"]
  },
  {
    title: "頂級 Web 系統開發",
    description: "基於 Next.js 與極致美學的開發實踐。我們追求的不只是「功能實現」，而是兼具商業價值、極速效能與絲滑互動的品牌數位資產。",
    icon: Globe,
    features: ["高性能 Next.js 應用建構", "體驗領先的介面設計", "複雜業務邏輯系統整合"]
  },
  {
    title: "技術架構顧問諮詢",
    description: "解決技術債，重塑系統擴展性。我們以建築師的嚴謹審視代碼與架構，為您的產品建立可持續演進、穩健且安全的技術地基。",
    icon: Layers,
    features: ["系統效能審計與優化", "大型專案重構規劃", "長期技術戰略藍圖設計"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-soft-bg px-6 py-20 md:px-24 md:py-24">
      <div className="max-w-7xl mx-auto pt-24">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-ink mb-6 md:mb-8"
          >
            專業項目
          </motion.h1>
          <p className="text-subtle font-medium text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            我們提供的不只是代碼，而是透過技術實踐為您的企業構築「數位化的競爭優勢」。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-glass border border-divider hover:border-copper/30 transition-all group"
            >
              <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 text-copper group-hover:bg-copper group-hover:text-white transition-all duration-500">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-ink mb-4">{service.title}</h3>
              <p className="text-subtle/80 mb-8 leading-relaxed font-medium">{service.description}</p>
              
              <ul className="space-y-4 mb-12">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-ink/60">
                    <div className="w-1 h-1 bg-copper rounded-full" /> {feature}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-copper border-b-2 border-copper/10 pb-1 hover:border-copper transition-all">
                進一步了解 <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <section className="mt-32 p-12 md:p-24 bg-slate-ink rounded-[4rem] text-white text-center space-y-12 overflow-hidden relative">
           {/* Decorative Grid in CTA */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           </div>

           <div className="relative z-10 space-y-8">
             <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">準備好重新定義 <br/>您的數位標準了嗎？</h2>
             <p className="text-lg md:text-xl opacity-60 font-medium max-w-2xl mx-auto">
               讓我們坐下來聊聊，如何將您的願景轉化為具備長遠價值的數位建築。
             </p>
             <Link href="/contact" className="inline-block bg-copper text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
               開始專案諮詢
             </Link>
           </div>
        </section>
      </div>
    </div>
  );
}
