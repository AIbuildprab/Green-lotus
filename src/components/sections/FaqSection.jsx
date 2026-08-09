import { faqs } from "../../data/siteContent.js";
import Reveal from "../ui/Reveal.jsx";

export default function FaqSection({ tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <section className={`px-4 py-12 sm:px-5 sm:py-16 lg:py-24 ${isDark ? "bg-ink-deep text-white" : "bg-white"}`}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? "text-lotus-400" : "text-lotus-600"}`}>
            FAQ
          </p>
          <h2
            className={`mt-3 font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl lg:text-4xl ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            Common questions before you call.
          </h2>
          <p className={`mt-3 text-sm leading-7 sm:mt-4 sm:text-base ${isDark ? "text-white/70" : "text-ink/75"}`}>
            Straight answers on pricing, schedules, strata work, and what happens to the green waste.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className={`group py-5 ${isDark ? "border-white/10" : ""}`}>
              <summary
                className={`cursor-pointer list-none font-display text-lg font-semibold marker:content-none transition-colors ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className={`mt-1 shrink-0 text-lotus-500 transition duration-300 group-open:rotate-45 ${
                      isDark ? "text-lotus-400" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="faq-answer">
                <p className={`mt-3 leading-7 ${isDark ? "text-white/75" : "text-ink/75"}`}>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
