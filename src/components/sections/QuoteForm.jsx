"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { estimateOptions, services } from "../../data/siteContent";

const fieldClasses =
  "w-full rounded-md border border-ink/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:border-lotus-500 focus:outline-none";

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md border border-ink/10 bg-paper p-5 sm:p-6 lg:p-8">
      <div>
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Get a free estimate</h2>
        <p className="mt-2 leading-7 text-ink/75">
          Tell us the basics and we will call you back with next steps. Calling is still the fastest way to reach us.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClasses} />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="604-555-0123"
            className={fieldClasses}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Address or area
          <input
            name="area"
            type="text"
            autoComplete="street-address"
            placeholder="Neighbourhood in Vancouver"
            className={fieldClasses}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service
          <select name="service" defaultValue="" required className={fieldClasses}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Yard size
          <select name="yardSize" defaultValue="" required className={fieldClasses}>
            <option value="" disabled>
              Rough size
            </option>
            {estimateOptions.yardSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Timeline
        <select name="timeline" defaultValue="" required className={fieldClasses}>
          <option value="" disabled>
            When do you need this?
          </option>
          {estimateOptions.timelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us a bit about the yard and what you are hoping to get done."
          className={fieldClasses}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-lotus-500 px-6 py-3 font-semibold text-white transition hover:bg-lotus-400 sm:w-auto"
      >
        Request my free estimate
      </button>

      <p className="text-sm text-ink/60">
        No online pricing calculator — every estimate comes after we understand the property. This form just gets you
        in the queue faster.
      </p>

      {isSubmitted ? (
        <p
          role="status"
          className="flex items-center gap-2 rounded-md bg-white px-4 py-3 font-semibold text-ink ring-1 ring-lotus-500/40"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-lotus-500" aria-hidden="true" />
          Thanks — we have your estimate request. Steven will call you back shortly.
        </p>
      ) : null}
    </form>
  );
}
