import { BadgePercent, Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import { business } from "../../data/siteContent.js";

export default function IncentiveBanner() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-md border border-lotus-500/30 bg-paper p-6 md:grid-cols-[1fr_auto] md:items-center lg:p-8">
        <div className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-lotus-500">
            <BadgePercent className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Free quote</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              Every estimate is free, and no one will pressure you.
            </h2>
            <p className="mt-2 leading-7 text-ink/75">Ask about {business.seasonalOffer} when you call.</p>
          </div>
        </div>
        <ButtonLink href={business.phoneHref} size="lg" aria-label="Call Green Lotus Landscape for a free quote">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {business.phoneDisplay}
        </ButtonLink>
      </div>
    </section>
  );
}
