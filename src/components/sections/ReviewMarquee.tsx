import { Star } from "lucide-react";
import { marqueeRowOne, marqueeRowTwo } from "@/data/reviews";
import { socialLinks } from "@/data/social";

export default function ReviewMarquee() {
  const rowOneTripled = [...marqueeRowOne, ...marqueeRowOne, ...marqueeRowOne];
  const rowTwoTripled = [...marqueeRowTwo, ...marqueeRowTwo, ...marqueeRowTwo];

  return (
    <section className="bg-secondary py-12 md:py-16 overflow-hidden">
      {/* Row 1 - scrolls left */}
      <div className="relative mb-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {rowOneTripled.map((review, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex items-center gap-3 mx-8 shrink-0"
            >
              <Star size={14} className="fill-primary text-primary shrink-0" />
              <span className="text-white/80 text-sm font-medium">
                &ldquo;{review.text}&rdquo;
              </span>
              <span className="text-white/30 text-xs">
                &mdash; {review.author}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {rowTwoTripled.map((review, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex items-center gap-3 mx-8 shrink-0"
            >
              <Star size={14} className="fill-primary text-primary shrink-0" />
              <span className="text-white/80 text-sm font-medium">
                &ldquo;{review.text}&rdquo;
              </span>
              <span className="text-white/30 text-xs">
                &mdash; {review.author}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Yelp link */}
      <div className="text-center mt-8">
        <a
          href={socialLinks.yelp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors"
        >
          Read more reviews on Yelp &rarr;
        </a>
      </div>
    </section>
  );
}
