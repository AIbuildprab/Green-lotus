import { ArrowRight } from "lucide-react";
import CallToAction from "../components/sections/CallToAction.jsx";
import IncentiveBanner from "../components/sections/IncentiveBanner.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import ServiceSection from "../components/sections/ServiceSection.jsx";
import { services } from "../data/siteContent.js";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Four clear services. Pick what your yard needs.">
        Plain-language options for regular care, hedges, hardscape fixes, and seasonal resets. Jump to a service below,
        or call and we will point you the right way.
      </PageHero>

      <section className="border-b border-ink/10 bg-white px-4 py-8 sm:px-5 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">Quick guide</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">Choose a starting point</h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index % 4}>
                  <a
                    href={`#${service.slug}`}
                    className="group block rounded-md border border-ink/10 bg-mist p-4 transition duration-300 hover:-translate-y-0.5 hover:border-lotus-500 hover:bg-white hover:shadow-soft"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-lotus-600 ring-1 ring-ink/10 transition duration-300 group-hover:bg-lotus-500 group-hover:text-white group-hover:ring-lotus-500">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">{service.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{service.bestFor}</p>
                    <p className="mt-3 text-xs font-semibold text-lotus-600">{service.timing}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink transition group-hover:text-lotus-600">
                      Jump to details
                      <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <nav
        aria-label="Service sections"
        className="sticky top-[3.55rem] z-30 border-b border-ink/10 bg-white/95 backdrop-blur-md sm:top-[3.75rem]"
      >
        <ul className="-mx-0 flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:mx-auto sm:flex-wrap sm:overflow-visible sm:px-5">
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <a
                href={`#${service.slug}`}
                className="inline-flex min-h-10 items-center rounded-md border border-ink/15 px-3.5 py-2 text-sm font-semibold text-ink transition hover:border-lotus-500 hover:text-lotus-600"
              >
                {service.shortLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service, index) => (
        <ServiceSection key={service.slug} service={service} reversed={index % 2 === 1} />
      ))}

      <IncentiveBanner />
      <CallToAction
        title="Not sure which one you need?"
        body="Describe the yard over the phone and we will tell you honestly what it does and does not need."
      />
    </>
  );
}
