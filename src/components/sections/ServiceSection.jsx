import { Check, Clock3, Target } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import WhatsAppIcon from "../ui/WhatsAppIcon.jsx";
import { getWhatsAppQuoteHref } from "../../data/siteContent.js";

export default function ServiceSection({ service, reversed = false }) {
  const Icon = service.icon;

  return (
    <section
      id={service.slug}
      className={`scroll-mt-36 px-4 py-12 sm:px-5 sm:py-14 lg:scroll-mt-32 lg:py-20 ${reversed ? "bg-paper" : "bg-white"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-10 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-white ring-1 ring-ink/10 sm:h-12 sm:w-12">
            <Icon className="h-5 w-5 text-lotus-500 sm:h-6 sm:w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-semibold text-ink sm:mt-6 sm:text-3xl lg:text-4xl">
            {service.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-ink/75 sm:mt-4 sm:text-base sm:leading-8">{service.description}</p>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
            <div className="rounded-md border border-ink/10 bg-white/80 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                Best for
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{service.bestFor}</p>
            </div>
            <div className="rounded-md border border-ink/10 bg-white/80 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                Timing
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{service.timing}</p>
            </div>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">What&apos;s included</p>
          <ul className="mt-3 grid gap-3">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-lotus-500">
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row">
            <ButtonLink
              href={getWhatsAppQuoteHref(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message Green Lotus on WhatsApp for a quote on ${service.title}`}
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get a quote
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" className="w-full sm:w-auto">
              Request an estimate
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {service.photos.map((photo) => (
            <img
              key={photo.src + photo.alt}
              src={photo.src}
              alt={photo.alt}
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
              className="h-52 w-full rounded-md object-cover sm:h-64 lg:h-72"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
