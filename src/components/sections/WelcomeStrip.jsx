import ButtonLink from "../ui/ButtonLink.jsx";
import { business, images } from "../../data/siteContent.js";

export default function WelcomeStrip() {
  return (
    <section className="px-5 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-md">
          <img
            src={images.aboutYard}
            alt="Finished outdoor living space maintained by Green Lotus Landscape"
            width="1400"
            height="1000"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="font-display text-lg font-bold text-white">Free phone consultation</p>
            <a href={business.phoneHref} className="mt-1 block font-display text-2xl font-semibold text-lotus-400">
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">About us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We help you maximize your outdoor space.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Founded in {business.founded}, Green Lotus Landscape restores and maintains Vancouver yards with the same
            crew each visit. Clear quotes, on-time arrivals, and a clean finish — that is the whole pitch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/about" size="lg">
              Meet the crew
            </ButtonLink>
            <ButtonLink
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              aria-label="Message Green Lotus on WhatsApp for a free quote"
            >
              Get a free quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
