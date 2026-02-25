import { featuredFlavors } from "@/data/flavors";
import { socialLinks } from "@/data/social";
import FlavorCard from "@/components/ui/FlavorCard";
import { Instagram } from "lucide-react";

export default function FlavorGrid() {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Our Flavors
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-black mb-4">
            What&apos;s in the case<span className="text-primary">.</span>
          </h2>
          <p className="text-secondary/50 max-w-md mx-auto leading-relaxed">
            30+ rotating flavors, made fresh in small batches. Unlimited free
            samples, always.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFlavors.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm">
            <Instagram size={18} className="text-primary" />
            <span className="text-sm text-secondary/60">
              See today&apos;s flavors on{" "}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                {socialLinks.instagramHandle}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
