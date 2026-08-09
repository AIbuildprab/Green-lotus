import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialCard from "./TestimonialCard.jsx";
import { rating, testimonials } from "../../data/siteContent.js";

export default function TestimonialsStrip() {
  return (
    <section className="px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              See what customers are saying.
            </h2>
            <div className="mt-6 rounded-md bg-ink-deep p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lotus-400">Average rating</p>
              <p className="mt-3 font-display text-5xl font-semibold">{rating.score}</p>
              <div className="mt-2 flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-lotus-500 text-lotus-500" />
                ))}
              </div>
              <p className="mt-3 text-white/70">
                {rating.count} {rating.source} reviews
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-lotus-500"
              >
                Read more reviews
                <ArrowRight className="h-4 w-4 text-lotus-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
