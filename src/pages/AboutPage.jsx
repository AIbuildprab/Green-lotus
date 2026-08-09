import { Building2, HeartHandshake } from "lucide-react";
import CallToAction from "../components/sections/CallToAction.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Process from "../components/sections/Process.jsx";
import RatingBadge from "../components/ui/RatingBadge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { business, differentiators, images } from "../data/siteContent.js";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A local crew, led by Steve.">
        Green Lotus Landscape has been looking after Vancouver yards for {business.yearsInBusiness}. We are small on
        purpose, so the person who quotes your job is the person who stands behind it.
      </PageHero>

      <section className="px-5 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Our story" title="Built on neighbours telling neighbours." align="left">
              Steve started Green Lotus with a simple idea: answer the phone, show up when you said you would, and
              leave the property better than you found it. That is still the whole business plan.
            </SectionHeader>

            <p className="mt-6 leading-8 text-ink/75">
              Most of our work comes from referrals, which means we are usually meeting you because someone you trust
              already told you about us. We take that seriously. The crew is friendly, hardworking, and used to
              working around kids, pets, and tight side yards.
            </p>

            <RatingBadge className="mt-8" />
          </div>

          <img
            src={images.team}
            alt="The Green Lotus Landscape crew on a job site in Vancouver"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-md object-cover lg:h-[28rem]"
          />
        </div>
      </section>

      <section className="bg-white px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-md border border-ink/10 bg-paper p-6">
              <h2 className="font-display text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 leading-7 text-ink/75">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Process />

      <section className="px-5 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <article className="flex gap-4 rounded-md border border-ink/10 bg-white p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-paper">
              <HeartHandshake className="h-6 w-6 text-lotus-500" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-ink">Residential homes</h2>
              <p className="mt-3 leading-7 text-ink/75">
                Most of what we do is single-family homes across Vancouver, from standing bi-weekly mowing to one-off
                cleanups and garden repairs.
              </p>
            </div>
          </article>

          <article className="flex gap-4 rounded-md border border-ink/10 bg-white p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-paper">
              <Building2 className="h-6 w-6 text-lotus-500" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-ink">Strata & light commercial</h2>
              <p className="mt-3 leading-7 text-ink/75">
                We also look after strata properties and smaller commercial sites, including one strata client who has
                stayed with us for over four years.
              </p>
            </div>
          </article>
        </div>
      </section>

      <CallToAction
        title="Want to meet the crew?"
        body="Give Steve a call. He will walk the property with you and tell you straight what it needs."
      />
    </>
  );
}
