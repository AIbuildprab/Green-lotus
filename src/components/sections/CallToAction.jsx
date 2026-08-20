import { Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import { business, images } from "../../data/siteContent.js";

export default function CallToAction({
  title = "Ready to get your yard handled?",
  body = `Free estimates, no pressure. Ask about ${business.seasonalOffer} when you call.`,
  headingLevel = "h2",
}) {
  const Heading = headingLevel;
  return (
    <section className="relative isolate overflow-hidden px-4 pb-6 pt-2 sm:px-5 sm:pb-8 sm:pt-4 lg:pb-16">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-md bg-ink-deep text-white">
        <img
          src={images.aboutYard}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 transition duration-[8s] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/55" />

        <div className="flex flex-col justify-between gap-6 p-6 sm:gap-8 sm:p-8 md:flex-row md:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-500">Free estimate</p>
            <Heading className="mt-3 max-w-2xl font-display text-[1.75rem] font-semibold leading-tight sm:text-3xl lg:text-4xl">
              {title}
            </Heading>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:mt-4 sm:text-base">{body}</p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink
              href={business.phoneHref}
              variant="onDark"
              size="lg"
              aria-label="Call Green Lotus Landscape for a free quote"
              className="w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 text-lotus-500" aria-hidden="true" />
              {business.phoneDisplay}
            </ButtonLink>
            <ButtonLink to="/contact" size="lg" className="w-full whitespace-nowrap sm:w-auto">
              Get an estimate
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
