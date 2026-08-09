import { Check, Phone } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import { business } from "../../data/siteContent.js";

export default function ServiceSection({ service, reversed = false }) {
  const Icon = service.icon;

  return (
    <section
      id={service.slug}
      className={`scroll-mt-28 px-5 py-14 lg:py-20 ${reversed ? "bg-paper" : "bg-white"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <span className="grid h-12 w-12 place-items-center rounded-md bg-white ring-1 ring-ink/10">
            <Icon className="h-6 w-6 text-lotus-500" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">{service.title}</h2>
          <p className="mt-4 leading-8 text-ink/75">{service.description}</p>

          <ul className="mt-6 grid gap-3">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-lotus-500">
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <ButtonLink
            href={business.phoneHref}
            className="mt-8"
            aria-label={`Call Green Lotus Landscape for a free quote on ${service.title}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Get a quote
          </ButtonLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {service.photos.map((photo) => (
            <img
              key={photo.src + photo.alt}
              src={photo.src}
              alt={photo.alt}
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              className="h-60 w-full rounded-md object-cover sm:h-72"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
