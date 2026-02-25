"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { socialLinks } from "@/data/social";

export default function FacebookFeed() {
  const [email, setEmail] = useState("");

  return (
    <section id="catering" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facebook embed */}
          <div className="bg-white rounded-[40px] p-8 md:p-10">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-4">
              On Facebook
            </p>
            <div className="rounded-[24px] overflow-hidden bg-slate100 min-h-[400px]">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(socialLinks.facebook)}&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="100%"
                height="400"
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Castaways Ice Cream Facebook Page"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-secondary rounded-[40px] p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
                Stay in the loop
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black mb-4">
                Never miss a
                <br />
                new flavor<span className="text-primary">.</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Get notified about new flavors, special events, and exclusive
                offers. No spam, just ice cream updates.
              </p>
            </div>

            <div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 text-white placeholder-white/30 px-6 py-4 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary border-none"
                />
                <button
                  className="bg-primary text-white px-6 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmail("");
                  }}
                >
                  <Send size={14} />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
              <p className="text-white/20 text-xs mt-4">
                By subscribing you agree to receive marketing emails. Unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
