"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-soft-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-divider/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-divider/20 rounded-full" />
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-copper font-mono text-[10px] font-bold uppercase tracking-[0.5em] block">
            Error 404 / Page Not Found
          </span>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-ink tracking-tighter">
            路徑偏差。
          </h1>
          
          <p className="text-subtle font-medium text-lg leading-relaxed">
            抱歉，您所尋找的數位座標不存在或已被重新建構。<br/>
            這可能是因為路徑錯誤，或是該頁面已轉移至新的藍圖。
          </p>

          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-slate-ink text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-copper transition-all duration-500 shadow-xl group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 返回數位藍圖
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background Large Text */}
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-black leading-none italic">LW STUDIO.</span>
      </div>
    </main>
  );
}
