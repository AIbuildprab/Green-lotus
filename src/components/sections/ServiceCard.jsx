import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative isolate block min-h-44 overflow-hidden rounded-md bg-ink text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft active:scale-[0.99] sm:min-h-64 lg:min-h-72"
    >
      <img
        src={service.cover}
        alt=""
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/20 transition duration-500 group-hover:from-black/95" />

      <div className="flex h-full min-h-44 flex-col justify-end p-4 sm:min-h-64 sm:p-6 lg:min-h-72">
        <h3 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">{service.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-white/80 sm:mt-2">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-lotus-400 sm:mt-5">
          Learn more
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
