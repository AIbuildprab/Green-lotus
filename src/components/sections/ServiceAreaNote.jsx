import { MapPin } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import { business, fullAddress, serviceAreas } from "../../data/siteContent.js";

export default function ServiceAreaNote() {
  return (
    <section className="px-4 pb-10 sm:px-5 sm:pb-16">
      <Reveal className="mx-auto max-w-7xl rounded-md border border-ink/10 bg-white p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="flex gap-3 sm:gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-paper sm:h-12 sm:w-12">
              <MapPin className="h-5 w-5 text-lotus-500 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Areas we serve</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl lg:text-3xl">
                Vancouver and nearby.
              </h2>
              <p className="mt-2 text-sm leading-7 text-ink/75 sm:text-base">
                Based at {fullAddress}. Not sure if your street is on our route? Call and ask — we will tell you
                straight.
              </p>
            </div>
          </div>
          <ButtonLink href={business.phoneHref} size="lg" className="w-full shrink-0 lg:w-auto">
            Check my area
          </ButtonLink>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-ink/10 bg-paper px-3 py-2 text-sm font-semibold text-ink transition duration-200 hover:border-lotus-500 hover:bg-white sm:px-4"
            >
              {area}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
