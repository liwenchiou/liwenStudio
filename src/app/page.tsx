"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Code, Briefcase, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-24 md:py-10 flex justify-between items-center bg-soft-bg/80 backdrop-blur-md border-b border-divider/10">
        <Link href="/" className="text-xl font-serif font-black italic tracking-tighter text-slate-ink hover:text-copper transition-colors">LW Studio.</Link>
        <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-ink">
          <Link href="/portfolio" className="hover:text-copper transition-colors">Portfolio</Link>
          <Link href="/services" className="hover:text-copper transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-copper transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 md:px-24 md:pt-48 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-copper font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Based in Taiwan / Digital Architecture</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-ink leading-[1.1] tracking-tight mb-10 md:mb-12"
          >
            Constructing <br />
            Digital Legacy.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
          >
            <div className="space-y-8">
              <p className="text-lg md:text-2xl text-subtle font-medium leading-relaxed max-w-xl">
                我們以建築師的嚴謹，構築具備商業靈魂與技術美學的數位產品。為您的企業解決複雜挑戰，建立穩健的技術資產。
              </p>
              <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-ink/40">
                <div className="flex flex-col gap-2">
                  <span className="text-copper">Strategy</span>
                  <span>AI Agentic Architecture</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-copper">Focus</span>
                  <span>Next.js Premium Systems</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start md:justify-end">
              <Link 
                href="/contact" 
                className="group flex items-center gap-4 bg-slate-ink text-white px-8 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-copper transition-all duration-500 shadow-xl"
              >
                Start a Project <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - The Philosophy */}
      <section className="px-6 py-32 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-y border-divider py-32">
           <div className="space-y-12">
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-ink leading-tight">
               Software as <br/>Digital Architecture.
             </h2>
             <p className="text-lg text-subtle leading-relaxed max-w-xl font-medium">
               我們認為優秀的代碼不只是「能動就好」，它必須具備如同建築般的結構美感與長期穩定性。在 Liwen Studio，我們將軟體工程視為一種工藝，專注於為前瞻性企業建置能承載未來規模的數位基礎設施。
             </p>
             <div className="flex gap-8">
               <div className="space-y-2">
                 <p className="text-3xl font-extrabold text-copper">05+</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-ink/40">Years Experience</p>
               </div>
               <div className="space-y-2">
                 <p className="text-3xl font-extrabold text-copper">20+</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-ink/40">Projects Delivered</p>
               </div>
             </div>
           </div>
           <div className="relative aspect-square bg-soft-bg rounded-[4rem] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <p className="text-center font-mono text-xs text-slate-ink/20 group-hover:text-slate-ink/40 transition-colors uppercase tracking-[0.5em] leading-loose">
                  Precision / Quality / Scalability / Elegance
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 md:px-24 bg-soft-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-copper font-mono text-[10px] font-bold uppercase tracking-[0.4em]">/ Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-ink">Solutions for <br/>Digital Leaders.</h2>
            </div>
            <Link href="/services" className="text-[10px] font-bold uppercase tracking-widest text-copper border-b border-copper/30 pb-1 hover:text-slate-ink hover:border-slate-ink transition-all">Explore All Capabilities</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "AI Agentic Workflows",
                desc: "我們為企業建構具備思考能力的 AI 代理人。從自動化回覆到複雜的跨部門決策輔助，將 AI 深度整合進您的業務核心。",
                tags: ["Workflow Design", "LLM Integration", "RAG"]
              },
              {
                id: "02",
                title: "Premium Web Systems",
                desc: "基於 Next.js 的高階開發實踐。我們專注於極致的加載性能與絲滑的互動體驗，為您的品牌建立旗艦級數位門面。",
                tags: ["Next.js Expert", "High Performance", "UX/UI"]
              },
              {
                id: "03",
                title: "Architecture Consulting",
                desc: "解決大規模系統的技術債與擴充性問題。我們提供代碼審計、效能優化與長期技術藍圖規劃，確保地基穩健。",
                tags: ["System Audit", "Refactoring", "Scaling"]
              }
            ].map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] shadow-glass border border-divider hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-10 right-10 text-5xl font-extrabold text-slate-ink/5 group-hover:text-copper/10 transition-colors">
                  {s.id}
                </div>
                <div className="relative z-10 space-y-8">
                  <h3 className="text-2xl font-bold text-slate-ink">{s.title}</h3>
                  <p className="text-subtle/70 text-sm leading-relaxed font-medium min-h-[80px]">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {s.tags.map(t => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-widest bg-soft-bg px-3 py-1 rounded-full text-slate-ink/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-24 md:px-24 bg-soft-bg border-t border-divider">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-slate-ink">Let's talk about <br />your vision.</h3>
            <div className="flex gap-8 text-slate-ink/40 text-xs font-bold uppercase tracking-widest">
              <Link href="https://github.com/liwenchiou" className="hover:text-copper transition-colors flex items-center gap-2"><Code size={16} /> GitHub</Link>
              <Link href="https://linkedin.com" className="hover:text-copper transition-colors flex items-center gap-2"><Briefcase size={16} /> LinkedIn</Link>
              <Link href="mailto:service@liwen.studio" className="hover:text-copper transition-colors flex items-center gap-2"><Mail size={16} /> Contact</Link>
            </div>
            <p className="text-[10px] font-mono text-slate-ink/20">© {new Date().getFullYear()} LIWEN STUDIO. BUILT WITH PRECISION.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
