import { Star, Users, Wrench } from "lucide-react";
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
    <section className="border-y border-ink/10 bg-white px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-paper">
              <Icon className="h-6 w-6 text-lotus-500" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink">{title}</p>
              <p className="mt-1 text-sm leading-6 text-ink/70">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
