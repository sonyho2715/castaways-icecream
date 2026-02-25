"use client";

import Image from "next/image";
import { heroReview } from "@/data/reviews";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-secondary/70">
                Open now in Moiliili
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-tight mb-8">
              Super-premium
              <br />
              <span className="italic text-primary">homemade</span>
              <br />
              ice cream<span className="text-primary">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-secondary/60 max-w-md mb-10 leading-relaxed">
              30+ rotating flavors, handcrafted in small batches with real
              ingredients. Made with aloha in Honolulu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                View Our Flavors
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-secondary/80 transition-all"
              >
                Find Us
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5 relative">
            {/* Gradient blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

            {/* Card */}
            <div className="relative bg-white rounded-[40px] p-6 shadow-2xl shadow-secondary/5">
              {/* Current Favorite label */}
              <div className="absolute top-10 left-10 z-10 bg-primary text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full">
                Current Favorite
              </div>

              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
                <Image
                  src="/images/hero-icecream.jpg"
                  alt="Colorful ice cream scoops in a cone"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Mini review */}
              <div className="mt-4 px-2">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-secondary/60 italic leading-relaxed line-clamp-2">
                  &ldquo;{heroReview.text}&rdquo;
                </p>
                <p className="text-xs text-secondary/40 mt-1">
                  &mdash; {heroReview.author}, via{" "}
                  {heroReview.source.charAt(0).toUpperCase() +
                    heroReview.source.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
