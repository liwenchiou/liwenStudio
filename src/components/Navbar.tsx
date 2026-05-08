"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "作品集", href: "/portfolio" },
    { name: "服務項目", href: "/services" },
    { name: "聯絡我們", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-24 md:py-10 flex justify-between items-center bg-soft-bg/80 backdrop-blur-md border-b border-divider/10">
      <Link 
        href="/" 
        className="text-xl font-serif font-black italic tracking-tighter text-slate-ink hover:text-copper transition-colors"
      >
        LW Studio.
      </Link>
      <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-ink">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "hover:text-copper transition-colors relative group",
              pathname.startsWith(link.href) ? "text-copper" : "text-slate-ink"
            )}
          >
            {link.name}
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-300 group-hover:w-full",
              pathname.startsWith(link.href) ? "w-full" : "w-0"
            )} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
