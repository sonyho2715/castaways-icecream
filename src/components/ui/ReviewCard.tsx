import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-[24px] p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm text-secondary/70 italic leading-relaxed mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-secondary/40">
          {review.author}
        </span>
        <span className="text-[10px] font-bold tracking-wider uppercase text-secondary/20">
          {review.source}
        </span>
      </div>
    </div>
  );
}
