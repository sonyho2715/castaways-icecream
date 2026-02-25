import Image from "next/image";
import type { Flavor } from "@/data/flavors";

export default function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <div className="group bg-cream hover:bg-white rounded-[32px] p-5 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-square rounded-[24px] overflow-hidden mb-5">
        <Image
          src={flavor.image}
          alt={flavor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {flavor.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/70 bg-primary/5 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Name + Price */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-black">
          {flavor.name}
        </h3>
        <span className="text-sm font-bold text-secondary/40 shrink-0 pt-1">
          {flavor.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-secondary/50 leading-relaxed mb-5">
        {flavor.description}
      </p>

      {/* Add to bag */}
      <button className="w-full bg-secondary text-white py-3 rounded-full text-sm font-bold tracking-wide hover:bg-primary transition-colors">
        Add to Bag
      </button>
    </div>
  );
}
