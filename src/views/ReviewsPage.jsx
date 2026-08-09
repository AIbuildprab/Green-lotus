import { Phone, Star } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink.jsx";
import CallToAction from "../components/sections/CallToAction.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import RatingBadge from "../components/ui/RatingBadge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import TestimonialCard from "../components/sections/TestimonialCard.jsx";
import { business, rating, testimonials } from "../data/siteContent.js";

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title={`${rating.score} stars from ${rating.count} Vancouver neighbours.`}>
        Named highlights from recent Google reviews. Drop in a live Google embed below when you have the listing URL.
      </PageHero>

      <section className="px-5 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-start">
            <div className="rounded-md bg-ink-deep p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lotus-400">Google</p>
              <p className="mt-3 font-display text-5xl font-semibold">{rating.score}</p>
              <div className="mt-2 flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-lotus-500 text-lotus-500" />
                ))}
              </div>
              <p className="mt-3 text-white/70">{rating.count} reviews</p>
              <RatingBadge tone="dark" className="mt-5" />
            </div>

            <div
              id="google-reviews-widget"
              className="grid min-h-[16rem] place-items-center rounded-md border border-dashed border-ink/20 bg-paper p-8 text-center"
            >
              <div>
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-white">
                  <Star className="h-6 w-6 fill-lotus-500 text-lotus-500" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-xl font-bold text-ink">Google reviews embed</p>
                <p className="mt-2 max-w-md text-ink/70">
                  Paste your Google Business reviews widget here to show live ratings from all {rating.count} reviews.
                </p>
                <ButtonLink
                  href="https://www.google.com/search?q=Green+Lotus+Landscape+Vancouver"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-5"
                >
                  View on Google
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="In their words" title="Highlights from recent reviews." align="left">
            Lightly edited for length. Full reviews live on our Google listing.
          </SectionHeader>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-md border border-lotus-500/30 bg-paper p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Worked with us?</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Leaving a review helps a lot.</h2>
            <p className="mt-2 leading-7 text-ink/75">
              We are a small local crew, so a few words on Google genuinely makes a difference.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="https://www.google.com/search?q=Green+Lotus+Landscape+Vancouver"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Leave a review
            </ButtonLink>
            <ButtonLink href={business.phoneHref} aria-label="Call Green Lotus Landscape for a free quote">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Free quote
            </ButtonLink>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
