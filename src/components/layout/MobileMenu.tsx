"use client";

import { useState, useEffect } from "react";
import { X, Instagram } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { socialLinks } from "@/data/social";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen((prev) => !prev);
    window.addEventListener("toggle-menu", handler);
    return () => window.removeEventListener("toggle-menu", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-secondary transition-all duration-700 ${
        open
          ? "clip-path-full opacity-100"
          : "clip-path-zero opacity-0 pointer-events-none"
      }`}
      style={{
        clipPath: open
          ? "circle(150% at calc(100% - 40px) 40px)"
          : "circle(0% at calc(100% - 40px) 40px)",
      }}
    >
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setOpen(false)}
          className="text-white p-2 hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <X size={32} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col items-start justify-center h-full px-12 gap-4">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-white text-5xl sm:text-6xl font-black italic hover:text-primary transition-colors"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {link.label}
          </Link>
        ))}

        {/* Extra links */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
          <Link
            href="/ice-cream-cakes"
            onClick={() => setOpen(false)}
            className="text-white/70 text-lg font-semibold hover:text-primary transition-colors"
          >
            Ice Cream Cakes
          </Link>
          <Link
            href="/gift-cards"
            onClick={() => setOpen(false)}
            className="text-white/70 text-lg font-semibold hover:text-primary transition-colors"
          >
            Gift Cards
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-white/70 text-lg font-semibold hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/press"
            onClick={() => setOpen(false)}
            className="text-white/70 text-lg font-semibold hover:text-primary transition-colors"
          >
            Press
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 flex items-center gap-6">
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-primary transition-colors"
        >
          <Instagram size={20} />
        </a>
        <a
          href={socialLinks.yelp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase"
        >
          Yelp
        </a>
        <a
          href={socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase"
        >
          TikTok
        </a>
      </div>
    </div>
  );
}
