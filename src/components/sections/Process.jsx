import Reveal from "../ui/Reveal.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { processSteps } from "../../data/siteContent.js";

export default function Process() {
  return (
    <section className="bg-paper px-4 py-12 sm:px-5 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader eyebrow="How we work" title="We'll be there every step of the way.">
            The same routine on every job, whether it is a one-time cleanup or a standing bi-weekly visit.
          </SectionHeader>
        </Reveal>

        <ol className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index % 4} as="li">
              <div className="h-full rounded-md border border-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft sm:p-6">
                <span className="font-display text-2xl font-semibold text-lotus-500 sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink sm:mt-4 sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/75 sm:mt-3">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
