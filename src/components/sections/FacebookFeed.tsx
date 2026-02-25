"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function FacebookFeed() {
  const [email, setEmail] = useState("");

  return (
    <section id="catering" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Catering info card */}
          <div className="bg-white rounded-[40px] p-8 md:p-10">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Catering &amp; Events
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black mb-4">
              Bring the scoops to your event<span className="text-accent">.</span>
            </h3>
            <p className="text-secondary/50 text-sm leading-relaxed mb-6">
              Perfect for birthdays, graduations, corporate events, and any
              celebration that deserves real, homemade ice cream. Contact us to
              customize a menu for your next gathering.
            </p>
            <div className="space-y-3 text-sm text-secondary/60">
              <p>&#x1F389; Custom flavor selections</p>
              <p>&#x1F366; Fresh waffle cones included</p>
              <p>&#x1F4F1; Call us at <a href="tel:8087441001" className="text-primary font-bold hover:underline">(808) 744-1001</a></p>
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
                new flavor<span className="text-accent">.</span>
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
