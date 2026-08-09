import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "../../data/siteContent.js";

export default function GalleryPreview() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section className="bg-ink-deep px-5 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lotus-500">Recent works</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Yards we have brought back into shape.
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              A look at the kind of outdoor spaces we restore around Vancouver.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-white hover:text-lotus-400"
          >
            Explore the gallery
            <ArrowRight className="h-4 w-4 text-lotus-500" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {featured.map((item, index) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-md ${
                index === 0 || index === 3 ? "sm:row-span-2 sm:min-h-[460px] lg:min-h-[532px]" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-lotus-400">
                  {item.category}
                </span>
                <p className="mt-1 font-semibold text-white">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
