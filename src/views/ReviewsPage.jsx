import { Star } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink.jsx";
import WhatsAppIcon from "../components/ui/WhatsAppIcon.jsx";
import CallToAction from "../components/sections/CallToAction.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import RatingBadge from "../components/ui/RatingBadge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import TestimonialCard from "../components/sections/TestimonialCard.jsx";
import { business, google, rating, testimonials } from "../data/siteContent.js";

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title={`${rating.score} stars from ${rating.count} Vancouver neighbours.`}>
        Real Google reviews from homeowners and neighbours who have worked with Steven and the crew.
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

            <div id="google-reviews-widget" className="overflow-hidden rounded-md border border-ink/10">
              <iframe
                title="Google map and reviews for Green Lotus Landscapes"
                src={google.embedSrc}
                className="h-72 w-full border-0 lg:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-wrap items-center justify-between gap-3 bg-paper px-4 py-3">
                <ButtonLink
                  href={google.listingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  View reviews
                </ButtonLink>
                <ButtonLink
                  href={google.listingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Leave a review
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="In their words" title="Highlights from recent reviews." align="left">
            Recent Google reviews from neighbours across Vancouver. Full listing lives on Google.
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
              href={google.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Leave a review
            </ButtonLink>
            <ButtonLink
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Green Lotus on WhatsApp for a free quote"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Free quote
            </ButtonLink>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
