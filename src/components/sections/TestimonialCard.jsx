import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1" aria-label="Five star review">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-lotus-500 text-lotus-500" aria-hidden="true" />
          ))}
        </div>
        {testimonial.date ? <span className="text-xs font-semibold text-ink/50">{testimonial.date}</span> : null}
      </div>
      <blockquote className="flex-1 leading-7 text-ink/80">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-5 text-sm font-bold text-ink">
        {testimonial.name}
        <span className="block font-medium text-ink/60">{testimonial.context}</span>
      </figcaption>
    </figure>
  );
}
