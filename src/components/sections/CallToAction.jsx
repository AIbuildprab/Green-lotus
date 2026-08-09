import { Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import { business, images } from "../../data/siteContent.js";

export default function CallToAction({
  title = "Ready to get your yard handled?",
  body = `Free estimates, no pressure. Ask about ${business.seasonalOffer} when you call.`,
}) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-8 pt-4 lg:pb-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md bg-ink-deep text-white">
        <img
          src={images.aboutYard}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/55" />

        <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-500">Free estimate</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink
              href={business.phoneHref}
              variant="onDark"
              size="lg"
              aria-label="Call Green Lotus Landscape for a free quote"
            >
              <Phone className="h-5 w-5 text-lotus-500" aria-hidden="true" />
              {business.phoneDisplay}
            </ButtonLink>
            <ButtonLink to="/contact" size="lg" className="whitespace-nowrap">
              Get an estimate
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
