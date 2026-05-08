"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { Project, projects } from "@/data/projects";

import ReactMarkdown from "react-markdown";

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-soft-bg pb-24">

      {/* Hero Header */}
      <header className="px-8 pt-48 pb-24 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-copper font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
            / {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-ink leading-tight tracking-tight mb-12">
            {project.title}
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-divider pt-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-ink/40 flex items-center gap-2"><Calendar size={12} /> Timeline</span>
            <p className="text-lg font-bold">{project.year}</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-ink/40 flex items-center gap-2"><Tag size={12} /> Tech Stack</span>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold bg-white px-4 py-1.5 rounded-full border border-divider shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article className="px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl mb-24 border-4 border-white"
        >
          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-ink">Overview</h2>
              <p className="text-xl text-subtle leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="prose prose-xl prose-slate max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-subtle/80 prose-p:font-medium prose-p:leading-relaxed
              prose-li:text-subtle/80 prose-strong:text-slate-ink prose-strong:font-black">
               <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          </div>
          
          <aside className="lg:col-span-4 space-y-8 sticky top-32 h-fit">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-glass border border-divider">
              <h3 className="text-lg font-bold mb-6">Want to achieve similar results?</h3>
              <p className="text-sm text-subtle/60 mb-8 leading-relaxed">我們能根據您的需求，量身打造具備建築級穩健度的數位產品。</p>
              <Link href="/contact" className="w-full bg-slate-ink text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] flex justify-center items-center gap-2 hover:bg-copper transition-all">
                Project Inquiry <ExternalLink size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Next Project Teaser */}
        {(() => {
          const currentIndex = projects.findIndex(p => p.id === project.id);
          const nextProject = projects[(currentIndex + 1) % projects.length];
          
          return (
            <section className="mt-32 pt-32 border-t border-divider">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-ink/30 block mb-8">Next Artifact //</span>
              <Link href={`/portfolio/${nextProject.slug}`} className="group block">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                  <h2 className="text-5xl md:text-8xl font-extrabold text-slate-ink/20 group-hover:text-slate-ink transition-colors duration-700 leading-none">
                    {nextProject.title}
                  </h2>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-copper flex items-center gap-2">
                    Explore Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </section>
          );
        })()}
      </article>
    </main>
  );
}

