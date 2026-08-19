import { Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import { business, images } from "../../data/siteContent.js";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[72dvh] overflow-hidden bg-ink-deep text-white sm:min-h-[78dvh] lg:min-h-[88vh]">
      <img
        src={images.heroYard}
        alt="Lush Vancouver residential yard maintained by Green Lotus Landscape"
        width="2000"
        height="1333"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        sizes="100vw"
        className="animate-ken absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/82 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="mx-auto flex min-h-[72dvh] max-w-7xl flex-col justify-end px-4 pb-24 pt-20 sm:min-h-[78dvh] sm:justify-center sm:px-5 sm:pb-20 lg:min-h-[88vh] lg:pb-24 lg:pt-24">
        <p className="animate-rise font-display text-xs font-semibold uppercase tracking-[0.18em] text-lotus-500 sm:text-sm sm:tracking-[0.2em]">
          Vancouver, BC
        </p>

        <h1 className="animate-rise-delay-1 mt-4 max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:mt-5 sm:text-6xl lg:text-7xl">
          Green Lotus
          <span className="mt-1.5 block text-xl font-medium uppercase tracking-[0.14em] text-white/80 sm:mt-2 sm:text-3xl sm:tracking-[0.16em] lg:text-4xl">
            Landscape
          </span>
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-7 text-white/80 sm:mt-6 sm:text-xl sm:leading-8">
          The crew that actually shows up. Reliable lawn care, hedges, hardscaping, and seasonal cleanups — same team
          every visit.
        </p>

        <div className="animate-rise-delay-3 mt-7 flex w-full flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-3">
          <ButtonLink
            href={business.phoneHref}
            size="lg"
            aria-label="Call Green Lotus Landscape for a free quote"
            className="w-full text-base sm:w-auto sm:text-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </ButtonLink>
          <ButtonLink to="/gallery" variant="onDark" size="lg" className="w-full sm:w-auto">
            View recent work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
