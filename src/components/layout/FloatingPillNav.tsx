"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function FloatingPillNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl px-8 py-3.5 flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/castaways-logo.jpg"
            alt="Castaways Ice Cream"
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          <span className="font-[family-name:var(--font-playfair)] font-black text-xl">
            C<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-widest font-bold text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="p-1.5 hover:text-primary transition-colors"
          aria-label="Shopping bag"
        >
          <ShoppingBag size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
