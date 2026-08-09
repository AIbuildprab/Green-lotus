import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const stars = testimonial.stars ?? 5;

  return (
    <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1" aria-label={`${stars} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${index < stars ? "fill-lotus-500 text-lotus-500" : "fill-ink/10 text-ink/10"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        {testimonial.date ? <span className="text-xs font-semibold text-ink/50">{testimonial.date}</span> : null}
      </div>
      <blockquote className="flex-1 leading-7 text-ink/80">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-ink">
        {testimonial.name}
        <span className="block font-medium text-ink/60">{testimonial.context}</span>
      </figcaption>
    </figure>
  );
}
