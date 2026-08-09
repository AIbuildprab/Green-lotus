import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "../ui/ButtonLink.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { audiences } from "../../data/siteContent.js";

export default function WhoWeServe() {
  return (
    <section className="bg-ink-deep px-5 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tone="dark"
          eyebrow="Who we serve"
          title="Serving all your landscaping needs."
        >
          Homeowners and strata councils across Vancouver. Tell us the property type and we will point you the right way.
        </SectionHeader>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.title} className="group relative min-h-80 overflow-hidden rounded-md">
              <img
                src={audience.image}
                alt=""
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" />
              <div className="relative flex h-full min-h-80 flex-col justify-end p-7">
                <h3 className="font-display text-3xl font-semibold tracking-tight">{audience.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-white/80">{audience.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink to="/contact" size="md">
                    Request a quote
                  </ButtonLink>
                  <Link
                    to={audience.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-lotus-400"
                  >
                    {audience.cta}
                    <ArrowRight className="h-4 w-4 text-lotus-500" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
