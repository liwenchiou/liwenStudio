"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-soft-bg relative px-6 py-20 md:px-24 md:py-24 flex items-center">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-24 md:py-10 flex justify-between items-center bg-soft-bg/80 backdrop-blur-md border-b border-divider/10">
        <Link href="/" className="text-xl font-serif font-black italic tracking-tighter text-slate-ink hover:text-copper transition-colors">LW Studio.</Link>
        <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-ink">
          <Link href="/portfolio" className="hover:text-copper transition-colors">Portfolio</Link>
          <Link href="/services" className="hover:text-copper transition-colors">Services</Link>
          <Link href="/contact" className="text-copper">Contact</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 md:space-y-12 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-ink leading-tight">
              Let's build <br className="hidden md:block" />something <br className="hidden md:block" />legendary.
            </h1>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-subtle/60 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Connect via</p>
              <div className="flex flex-col gap-3 md:gap-4 text-lg md:text-xl font-bold text-slate-ink">
                <Link href="mailto:hello@liwen.studio" className="hover:text-copper transition-colors">hello@liwen.studio</Link>
                <div className="flex justify-center lg:justify-start gap-6">
                  <Link href="#" className="hover:text-copper transition-colors underline decoration-copper/20 underline-offset-4">Linkedin</Link>
                  <Link href="#" className="hover:text-copper transition-colors underline decoration-copper/20 underline-offset-4">GitHub</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-glass border border-divider space-y-6 md:space-y-8"
             onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">Tell me about your project</label>
              <textarea rows={3} placeholder="What are we building?" className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg resize-none" />
            </div>

            <button className="w-full bg-slate-ink text-white py-5 md:py-6 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-[11px] flex justify-center items-center gap-3 hover:bg-copper transition-all shadow-xl group">
              Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
