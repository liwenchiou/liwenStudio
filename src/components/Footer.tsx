"use client";

import React from "react";
import Link from "next/link";
import { Mail, Code, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-8 py-24 md:px-24 bg-soft-bg border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-slate-ink">
            讓我們聊聊 <br />
            您的下一個數位藍圖。
          </h3>
          <div className="flex gap-8 text-slate-ink/40 text-xs font-bold uppercase tracking-widest justify-center md:justify-start">
            <Link href="https://github.com/liwenchiou" className="hover:text-copper transition-colors flex items-center gap-2">
              <Code size={16} /> GitHub
            </Link>
            <Link href="https://linkedin.com" className="hover:text-copper transition-colors flex items-center gap-2">
              <Briefcase size={16} /> LinkedIn
            </Link>
            <Link href="mailto:service@liwen.studio" className="hover:text-copper transition-colors flex items-center gap-2">
              <Mail size={16} /> Contact
            </Link>
          </div>
          <p className="text-[10px] font-mono text-slate-ink/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} LIWEN STUDIO. BUILT WITH PRECISION IN TAIWAN.
          </p>
        </div>
      </div>
    </footer>
  );
}
