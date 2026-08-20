import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import TestimonialCard from "./TestimonialCard";
import { rating, testimonials } from "../../data/siteContent";

export default function TestimonialsStrip() {
  return (
    <section className="px-4 py-12 sm:px-5 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-end lg:gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Reviews</p>
            <h3 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              See what customers are saying.
            </h3>
            <div className="mt-5 flex items-center gap-5 rounded-md bg-ink-deep p-5 text-white sm:mt-6 sm:block sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lotus-400 sm:text-sm">
                  Average rating
                </p>
                <p className="mt-2 font-display text-4xl font-semibold sm:mt-3 sm:text-5xl">{rating.score}</p>
              </div>
              <div>
                <div className="mt-0 flex sm:mt-2" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-lotus-500 text-lotus-500 sm:h-5 sm:w-5" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-white/70 sm:mt-3">
                  {rating.count} {rating.source} reviews
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-1 sm:overflow-visible sm:px-0 md:grid-cols-3 md:gap-5 md:pb-0">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Reveal key={testimonial.quote} delay={index} className="w-[85%] shrink-0 snap-start sm:w-auto">
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6 sm:mt-8">
              <Link
                href="/reviews"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-lotus-500"
              >
                Read more reviews
                <ArrowRight className="h-4 w-4 text-lotus-500 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
