"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function PortfolioClient() {
  return (
    <div className="max-w-7xl mx-auto pt-48 px-8 md:px-24 pb-24">
      <header className="mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-ink mb-6"
        >
          Archive.
        </motion.h1>
        <p className="text-subtle font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
          這不僅是程式碼的集合，更是對於軟體工程、視覺美學與商業價值的建築式實踐。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Link href={`/portfolio/${project.slug}`} className="group block space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white shadow-glass border border-divider group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={20} className="text-slate-ink" />
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold text-copper/60 uppercase tracking-[0.2em]">{project.category} • {project.year}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-ink group-hover:text-copper transition-colors">{project.title}</h2>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-ink/30 mt-2">#{String(index + 1).padStart(2, '0')}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
