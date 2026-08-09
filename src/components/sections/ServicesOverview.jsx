import ButtonLink from "../ui/ButtonLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../../data/siteContent.js";

export default function ServicesOverview() {
  return (
    <section className="bg-grain px-4 py-12 sm:px-5 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader eyebrow="What we do" title="Outdoor work that maximizes the space you already have.">
            From weekly lawn care to retaining walls and seasonal resets — throughout Vancouver and nearby.
          </SectionHeader>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index % 4}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex justify-center sm:mt-10">
          <ButtonLink to="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
            See all services in detail
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
