"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setMessage("暫時無法發送郵件，請稍後再試或直接聯絡 Email。");
    }
  };

  return (
    <div className="min-h-screen bg-soft-bg relative px-6 py-20 md:px-24 md:py-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 md:space-y-12 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-ink leading-tight">
              讓我們 <br className="hidden md:block" />共同構築 <br className="hidden md:block" />數位藍圖。
            </h1>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-subtle/60 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">聯繫方式</p>
              <div className="flex flex-col gap-3 md:gap-4 text-lg md:text-xl font-bold text-slate-ink">
                <Link href="mailto:service@liwen.studio" className="hover:text-copper transition-colors">service@liwen.studio</Link>
                <div className="flex justify-center lg:justify-start gap-6">
                  <Link href="https://github.com/liwenchiou" className="hover:text-copper transition-colors underline decoration-copper/20 underline-offset-4">GitHub</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-glass border border-divider space-y-6 md:space-y-8"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">您的姓名 / Full Name</label>
                <input required name="from_name" type="text" placeholder="怎麼稱呼您？" className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">電子郵件 / Email</label>
                <input required name="reply_to" type="email" placeholder="example@email.com" className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper">專案描述 / Project Details</label>
                <textarea required name="message" rows={3} placeholder="請簡單描述您的需求或想法..." className="w-full bg-transparent border-b-2 border-divider py-3 focus:outline-none focus:border-copper transition-colors text-base md:text-lg resize-none" />
              </div>

              <button 
                disabled={status === "sending" || status === "success"}
                type="submit"
                className={`w-full py-5 md:py-6 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-[11px] flex justify-center items-center gap-3 transition-all shadow-xl group ${
                  status === "success" ? "bg-green-600 text-white" : "bg-slate-ink text-white hover:bg-copper"
                }`}
              >
                {status === "idle" && <><Send size={16} /> 發送訊息</>}
                {status === "sending" && "正在發送..."}
                {status === "success" && <><CheckCircle2 size={16} /> 訊息已成功送出</>}
                {status === "error" && "重試一次"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-[10px] font-bold text-center mt-4 flex items-center justify-center gap-2">
                  <AlertCircle size={14} /> {message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
