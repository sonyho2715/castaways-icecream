import { Instagram, Facebook, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";
import { locations } from "@/data/locations";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const moiliili = locations[0];

  return (
    <footer className="bg-secondary text-white rounded-t-[60px] md:rounded-t-[100px] pt-20 md:pt-32 pb-8 md:pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo + massive text */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/castaways-logo.jpg"
              alt="Castaways Ice Cream"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[15vw] md:text-[12vw] font-black italic leading-none tracking-tight">
            CASTAWAYS<span className="text-accent">.</span>
          </h2>
        </div>

        {/* 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Column 1: Tagline + Social */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Super-premium homemade ice cream, handcrafted in small batches
              with real ingredients. Made with aloha in Honolulu, Hawai&#x02BB;i.
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
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase"
              >
                Yelp
              </a>
            </div>
            <a
              href={`mailto:${socialLinks.email}`}
              className="mt-4 flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-xs"
            >
              <Mail size={14} />
              {socialLinks.email}
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Order */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Order
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/catering"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/ice-cream-cakes"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Ice Cream Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: More */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              More
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <a
                  href="tel:+18087441001"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Hours */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <span className="text-white/40">Mon-Thu:</span>{" "}
                {moiliili.hours.monday}
              </li>
              <li>
                <span className="text-white/40">Fri:</span>{" "}
                {moiliili.hours.friday}
              </li>
              <li>
                <span className="text-white/40">Sat:</span>{" "}
                {moiliili.hours.saturday}
              </li>
              <li>
                <span className="text-white/40">Sun:</span>{" "}
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
