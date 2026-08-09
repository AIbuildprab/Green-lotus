import { faqs } from "../../data/siteContent.js";

export default function FaqSection({ tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <section className={`px-5 py-16 lg:py-24 ${isDark ? "bg-ink-deep text-white" : "bg-white"}`}>
      <div className="mx-auto max-w-3xl">
        <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? "text-lotus-400" : "text-lotus-600"}`}>
          FAQ
        </p>
        <h2 className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}>
          Common questions before you call.
        </h2>
        <p className={`mt-4 leading-7 ${isDark ? "text-white/70" : "text-ink/75"}`}>
          Straight answers on pricing, schedules, strata work, and what happens to the green waste.
        </p>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className={`group py-5 ${isDark ? "border-white/10" : ""}`}>
              <summary
                className={`cursor-pointer list-none font-display text-lg font-bold marker:content-none ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className={`mt-1 shrink-0 text-lotus-500 transition group-open:rotate-45 ${isDark ? "text-lotus-400" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className={`mt-3 leading-7 ${isDark ? "text-white/75" : "text-ink/75"}`}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
