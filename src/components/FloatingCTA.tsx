"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <Link
            href="/contact"
            className="flex items-center gap-3 bg-slate-ink text-white px-6 py-4 rounded-full shadow-2xl hover:bg-copper transition-all duration-300 group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Start a Project</span>
            <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
