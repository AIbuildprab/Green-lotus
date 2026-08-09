import { Star } from "lucide-react";
import { rating } from "../../data/siteContent.js";

export default function RatingBadge({ tone = "light", className = "" }) {
  const toneClasses =
    tone === "dark" ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-white text-ink shadow-soft";

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-md px-4 py-2 ${toneClasses} ${className}`}
      aria-label={`Rated ${rating.score} out of 5 from ${rating.count} ${rating.source} reviews`}
    >
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-lotus-500 text-lotus-500" />
        ))}
      </span>
      <span className="text-sm font-bold">
        {rating.score}
        <span className={tone === "dark" ? "text-white/70" : "text-ink/60"}>
          {" "}
          on {rating.source} ({rating.count} reviews)
        </span>
      </span>
    </div>
  );
}
