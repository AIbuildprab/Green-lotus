import SectionHeader from "../ui/SectionHeader.jsx";
import { processSteps } from "../../data/siteContent.js";

export default function Process() {
  return (
    <section className="bg-paper px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How we work" title="We'll be there every step of the way.">
          The same routine on every job, whether it is a one-time cleanup or a standing bi-weekly visit.
        </SectionHeader>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="rounded-md border border-ink/10 bg-white p-6">
              <span className="font-display text-3xl font-semibold text-lotus-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
