import Image from "next/image";
import { Instagram } from "lucide-react";
import { socialLinks } from "@/data/social";

const feedImages = [
  { src: "/images/yelp/photo-10-food-pandan.jpg", alt: "Pandan coconut ice cream" },
  { src: "/images/yelp/photo-11-food-matcha.jpg", alt: "Matcha ice cream" },
  { src: "/images/yelp/photo-01-food-cookies-cream.jpg", alt: "Cookies and cream" },
  { src: "/images/yelp/photo-06-food-banana-choc.jpg", alt: "Banana chocolate scoops" },
  { src: "/images/yelp/photo-13-milkshake.jpg", alt: "Coffee chocolate milkshake" },
  { src: "/images/yelp/photo-09-food-scoops-2.jpg", alt: "Ice cream scoops" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Follow Along
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-black">
              {socialLinks.instagramHandle}
            </h2>
          </div>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all"
          >
            <Instagram size={16} />
            Follow Us
          </a>
        </div>
      </div>

      {/* Grid - edge to edge */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {feedImages.map((img, i) => (
          <a
            key={i}
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-all duration-300 flex items-center justify-center">
              <Instagram
                size={24}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
