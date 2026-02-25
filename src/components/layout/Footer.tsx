import { Instagram } from "lucide-react";
import { socialLinks } from "@/data/social";
import { locations } from "@/data/locations";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const moiliili = locations[0];

  return (
    <footer className="bg-secondary text-white rounded-t-[60px] md:rounded-t-[100px] pt-20 md:pt-32 pb-8 md:pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Massive logo */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-[family-name:var(--font-playfair)] text-[15vw] md:text-[12vw] font-black italic leading-none tracking-tight">
            CASTAWAYS<span className="text-primary">.</span>
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Tagline + Social */}
          <div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Super-premium homemade ice cream, handcrafted in small batches
              with real ingredients. Made with aloha in Honolulu, Hawaiʻi.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase"
              >
                Yelp
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <span className="text-white/40">Mon-Thu:</span>{" "}
                {moiliili.hours.monThurs}
              </li>
              <li>
                <span className="text-white/40">Fri-Sat:</span>{" "}
                {moiliili.hours.friSat}
              </li>
              <li>
                <span className="text-white/40">Sunday:</span>{" "}
                {moiliili.hours.sunday}
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/60">
              {moiliili.address}, {moiliili.city}, {moiliili.state}{" "}
              {moiliili.zip}
            </p>
            <p className="text-sm text-white/60">{moiliili.phone}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Castaways Ice Cream. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
