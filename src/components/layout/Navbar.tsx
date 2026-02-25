"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[37px] left-0 right-0 z-40 bg-cream/90 backdrop-blur-md transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/castaways-logo.jpg"
            alt="Castaways Ice Cream"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <span className="font-[family-name:var(--font-playfair)] font-black text-3xl tracking-tight">
            CASTAWAYS<span className="text-accent">.</span>
          </span>
        </Link>
        <button
          className="p-2 hover:bg-slate200 rounded-xl transition-colors"
          aria-label="Open menu"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("toggle-menu"));
          }}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
}
