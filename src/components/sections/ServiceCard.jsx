import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative isolate block min-h-72 overflow-hidden rounded-md bg-ink text-white"
    >
      <img
        src={service.cover}
        alt=""
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/20" />

      <div className="flex h-full min-h-72 flex-col justify-end p-6">
        <h3 className="font-display text-2xl font-bold tracking-tight">{service.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/80">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-lotus-400">
          Learn more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
