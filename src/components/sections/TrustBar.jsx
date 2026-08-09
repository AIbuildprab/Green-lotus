import { Star, Users, Wrench } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { business, rating } from "../../data/siteContent.js";

const items = [
  {
    icon: Star,
    title: `${rating.score}★ on ${rating.source}`,
    body: `${rating.count} reviews from Vancouver homeowners`,
  },
  {
    icon: Wrench,
    title: `Since ${business.founded}`,
    body: `${business.yearsInBusiness} looking after Vancouver yards`,
  },
  {
    icon: Users,
    title: business.crewNote,
    body: "Most new work comes from a neighbour's recommendation",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-white px-4 py-8 sm:px-5 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3 sm:gap-6">
        {items.map(({ icon: Icon, title, body }, index) => (
          <Reveal key={title} delay={index}>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-paper sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-lotus-500 sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-ink sm:text-lg">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink/70">{body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
