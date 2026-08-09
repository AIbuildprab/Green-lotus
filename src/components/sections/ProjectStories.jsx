import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { featuredProjects } from "../../data/siteContent";

export default function ProjectStories() {
  return (
    <section className="bg-mist px-4 py-12 sm:px-5 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-600">Project stories</p>
            <h2 className="mt-3 max-w-2xl font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Before and after, neighbourhood by neighbourhood.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink/75 sm:mt-4 sm:text-base">
              A look at the kind of transformations we deliver around Vancouver.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-ink transition hover:text-lotus-500"
          >
            Browse the full gallery
            <ArrowRight className="h-4 w-4 text-lotus-500 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index % 3}>
              <article className="overflow-hidden rounded-md border border-ink/10 bg-white transition duration-300 hover:shadow-soft lg:grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="grid grid-cols-2 gap-1 bg-ink-deep p-1 sm:gap-2 sm:p-2">
                  <figure className="relative overflow-hidden">
                    <img
                      src={project.before}
                      alt={project.beforeAlt}
                      width="800"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 1024px) 50vw, 35vw"
                      className="aspect-square h-full w-full object-cover object-center transition duration-700 hover:scale-105 sm:aspect-[4/3]"
                    />
                    <figcaption className="absolute left-1.5 top-1.5 rounded-md bg-black/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative overflow-hidden">
                    <img
                      src={project.after}
                      alt={project.afterAlt}
                      width="800"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 1024px) 50vw, 35vw"
                      className="aspect-square h-full w-full object-cover object-center transition duration-700 hover:scale-105 sm:aspect-[4/3]"
                    />
                    <figcaption className="absolute left-1.5 top-1.5 rounded-md bg-lotus-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                      After
                    </figcaption>
                  </figure>
                </div>

                <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lotus-600 sm:text-xs">
                    {project.service}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink sm:mt-2 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink/60">{project.neighbourhood}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/75 sm:mt-4 sm:leading-7">{project.scope}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
