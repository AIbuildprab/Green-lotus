import CallToAction from "../components/sections/CallToAction.jsx";
import IncentiveBanner from "../components/sections/IncentiveBanner.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ServiceSection from "../components/sections/ServiceSection.jsx";
import { services } from "../data/siteContent.js";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything we do, in plain terms.">
        No packages to decode and no pricing puzzles. Read what fits your yard, then call and we will quote it free.
      </PageHero>

      <nav aria-label="Service sections" className="border-b border-ink/10 bg-white px-5 py-4">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-lotus-500 hover:text-lotus-500"
              >
                {service.title}
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
