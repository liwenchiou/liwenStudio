import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectClient from "@/components/ProjectClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-black italic mb-4 text-slate-ink">找不到該專案</h1>
          <p className="text-subtle mb-8">抱歉，您所尋找的作品集項目不存在。</p>
          <Link href="/portfolio" className="text-copper font-bold uppercase tracking-widest text-sm border-b border-copper/30 pb-1">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectClient project={project} />;
}
