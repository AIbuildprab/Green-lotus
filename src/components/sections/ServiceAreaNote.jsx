import { MapPin } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import { business, fullAddress, serviceAreas } from "../../data/siteContent.js";

export default function ServiceAreaNote() {
  return (
    <section className="px-5 pb-16">
      <div className="mx-auto max-w-7xl rounded-md border border-ink/10 bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-paper">
              <MapPin className="h-6 w-6 text-lotus-500" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Areas we serve</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Vancouver and nearby.
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-ink/75">
                Based at {fullAddress}. Not sure if your street is on our route? Call and ask — we will tell you
                straight.
              </p>
            </div>
          </div>
          <ButtonLink href={business.phoneHref} size="lg">
            Check my area
          </ButtonLink>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-ink/10 bg-paper px-4 py-2 text-sm font-semibold text-ink"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
