import { Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import LotusMark from "../ui/LotusMark.jsx";
import { business, images } from "../../data/siteContent.js";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[84vh] overflow-hidden bg-ink-deep text-white lg:min-h-[88vh]">
      <img
        src={images.heroYard}
        alt="Lush Vancouver residential yard maintained by Green Lotus Landscape"
        width="2000"
        height="1333"
        loading="eager"
        decoding="async"
        className="animate-ken absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/82 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

      <div className="mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-24 lg:min-h-[88vh] lg:pb-24 lg:pt-24">
        <div className="animate-rise flex items-center gap-3 text-lotus-500">
          <LotusMark className="h-8 w-8" />
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em]">Vancouver, BC</p>
        </div>

        <h1 className="animate-rise-delay-1 mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Green Lotus
          <span className="mt-2 block text-2xl font-medium uppercase tracking-[0.16em] text-white/80 sm:text-3xl lg:text-4xl">
            Landscape
          </span>
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
          The crew that actually shows up. Reliable lawn care, hedges, hardscaping, and seasonal cleanups — same team
          every visit.
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            href={business.phoneHref}
            size="lg"
            aria-label="Call Green Lotus Landscape for a free quote"
            className="text-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </ButtonLink>
          <ButtonLink to="/gallery" variant="onDark" size="lg">
            View recent work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
