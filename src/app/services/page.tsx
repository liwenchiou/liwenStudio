"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Globe, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Agentic Workflows",
    description: "為企業導入 AI 代理人工作流。我們不只是接入 API，而是重新設計您的研發與文件自動化流程，將重複性勞動轉化為創造力。",
    icon: Cpu,
    features: ["LLM 流程自動化", "專用 AI 代理人開發", "RAG 知識庫建構"]
  },
  {
    title: "Premium Web Application",
    description: "基於 Next.js 與極致美學的開發實踐。我們追求的不是堪用，而是兼具商業價值、SEO 權重與絲滑動畫的頂級數位資產。",
    icon: Globe,
    features: ["高性能 Next.js 開發", "響應式介面設計", "複雜邏輯後端整合"]
  },
  {
    title: "Digital Architecture Consulting",
    description: "解決技術債，重塑系統架構。我們以建築師的嚴謹審視代碼，為您的產品建立可持續擴充的穩健地基。",
    icon: Layers,
    features: ["系統效能優化", "技術債清點與重構", "長期技術架構規劃"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-soft-bg px-6 py-20 md:px-24 md:py-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-24 md:py-10 flex justify-between items-center bg-soft-bg/80 backdrop-blur-md border-b border-divider/10">
        <Link href="/" className="text-xl font-serif font-black italic tracking-tighter text-slate-ink hover:text-copper transition-colors">LW Studio.</Link>
        <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-ink">
          <Link href="/portfolio" className="hover:text-copper transition-colors">Portfolio</Link>
          <Link href="/services" className="text-copper">Services</Link>
          <Link href="/contact" className="hover:text-copper transition-colors">Contact</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-24">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-ink mb-6 md:mb-8"
          >
            Capabilities.
          </motion.h1>
          <p className="text-subtle font-medium text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            我們提供的不只是代碼，而是透過技術實踐為您的企業構築「物理性的競爭優勢」。
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
                Learn More <ArrowRight size={14} />
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
             <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to redefine <br/>your digital standards?</h2>
             <p className="text-lg md:text-xl opacity-60 font-medium max-w-2xl mx-auto">
               讓我們坐下來聊聊，如何將您的願景轉化為具備長遠價值的數位建築。
             </p>
             <Link href="/contact" className="inline-block bg-copper text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
               Start Consultation
             </Link>
           </div>
        </section>
      </div>
    </main>
  );
}
