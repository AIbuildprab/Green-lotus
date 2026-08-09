import ButtonLink from "../ui/ButtonLink.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../../data/siteContent.js";

export default function ServicesOverview() {
  return (
    <section className="bg-grain px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="What we do" title="Outdoor work that maximizes the space you already have.">
          From weekly lawn care to retaining walls and seasonal resets — throughout Vancouver and nearby.
        </SectionHeader>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="reveal-on-scroll">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink to="/services" variant="secondary" size="lg">
            See all services in detail
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
