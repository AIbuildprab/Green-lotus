import { BadgePercent, Clock, Mail, MapPin, Phone } from "lucide-react";
import FaqSection from "../components/sections/FaqSection.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import QuoteForm from "../components/sections/QuoteForm.jsx";
import RatingBadge from "../components/ui/RatingBadge.jsx";
import { business, fullAddress, hours } from "../data/siteContent.js";

const mapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=-123.055%2C49.235%2C-123.025%2C49.255&layer=mapnik&marker=49.245%2C-123.040";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get a free landscaping estimate.">
        Call for the fastest answer, or send the estimate form and Steve will call you back. Free quotes, no pressure.
      </PageHero>

      <section className="px-5 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="rounded-md bg-ink p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-500">Call us</p>
              <a
                href={business.phoneHref}
                aria-label="Call Green Lotus Landscape"
                className="mt-3 block font-display text-4xl font-semibold leading-tight hover:text-lotus-500 sm:text-5xl"
              >
                {business.phoneDisplay}
              </a>
              <p className="mt-4 leading-7 text-white/75">
                Free quotes, no pressure. Ask about {business.seasonalOffer}.
              </p>
              <a
                href={business.phoneHref}
                aria-label="Call Green Lotus Landscape for a free quote"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-lotus-500 px-6 py-3 font-bold text-white transition hover:bg-lotus-400"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Tap to call
              </a>
            </div>

            <div className="mt-6 grid gap-4 rounded-md border border-ink/10 bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-lotus-500" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Where we are</h2>
                  <p className="mt-1 leading-7 text-ink/75">{fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-lotus-500" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Hours</h2>
                  <ul className="mt-1 grid gap-1 text-ink/75">
                    {hours.map((entry) => (
                      <li key={entry.days}>
                        <span className="font-semibold text-ink">{entry.days}:</span> {entry.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-lotus-500" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Email</h2>
                  <a href={`mailto:${business.email}`} className="mt-1 block break-all text-ink/75 hover:text-ink">
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BadgePercent className="mt-1 h-5 w-5 shrink-0 text-lotus-500" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">Current offer</h2>
                  <p className="mt-1 leading-7 text-ink/75">
                    Free quote on every job, plus {business.seasonalOffer}.
                  </p>
                </div>
              </div>

              <RatingBadge className="mt-2 w-fit ring-1 ring-ink/10" />
            </div>
          </div>

          <div className="grid gap-6">
            <QuoteForm />

            <div className="overflow-hidden rounded-md border border-ink/10">
              <iframe
                title={`Map showing ${fullAddress}`}
                src={mapSrc}
                className="h-64 w-full border-0 lg:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 bg-paper px-4 py-3 text-sm">
                <p className="font-semibold text-ink">{fullAddress}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 font-bold text-lotus-600 hover:text-lotus-500"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection tone="light" />
    </>
  );
}
