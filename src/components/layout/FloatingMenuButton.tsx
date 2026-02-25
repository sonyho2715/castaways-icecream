"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingMenuButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="/#menu"
        className="flex items-center gap-2.5 bg-[#2C3E50] text-white px-5 py-3.5 rounded-full shadow-xl shadow-[#2C3E50]/30 hover:bg-primary hover:shadow-primary/30 transition-all duration-300 group"
        aria-label="See today's menu"
      >
        <span className="text-lg leading-none">🍦</span>
        <span className="text-xs font-bold tracking-[0.12em] uppercase whitespace-nowrap">
          Today&apos;s Menu
        </span>
      </Link>
    </div>
  );
}
