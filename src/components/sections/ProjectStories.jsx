import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/siteContent.js";

export default function ProjectStories() {
  return (
    <section className="bg-mist px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Project stories</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Before and after, neighbourhood by neighbourhood.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-ink/75">
              A look at the kind of transformations we deliver around Vancouver.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-ink hover:text-lotus-500"
          >
            Browse the full gallery
            <ArrowRight className="h-4 w-4 text-lotus-500" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="reveal-on-scroll overflow-hidden rounded-md border border-ink/10 bg-white lg:grid lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div className="grid grid-cols-2 gap-1 bg-ink-deep p-1 sm:gap-2 sm:p-2">
                <figure className="relative">
                  <img
                    src={project.before}
                    alt={project.beforeAlt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-md bg-black/75 px-3 py-1 text-xs font-bold uppercase tracking-normalr text-white">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img
                    src={project.after}
                    alt={project.afterAlt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-md bg-lotus-500 px-3 py-1 text-xs font-bold uppercase tracking-normalr text-white">
                    After
                  </figcaption>
                </figure>
              </div>

              <div className="flex flex-col justify-center p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">{project.service}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/60">{project.neighbourhood}</p>
                <p className="mt-4 leading-7 text-ink/75">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
