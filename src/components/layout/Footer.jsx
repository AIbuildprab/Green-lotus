import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import LotusMark from "../ui/LotusMark";
import { business, fullAddress, hours, navLinks } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-ink-deep px-4 py-12 pb-32 text-white sm:px-5 sm:py-14 sm:pb-36">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Green Lotus Landscape home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-white/5 text-lotus-500 ring-1 ring-white/10">
              <LotusMark className="h-7 w-7" />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold uppercase leading-none tracking-normal">
                Green Lotus
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lotus-500">Landscape</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs leading-7 text-white/70">
            The crew that actually shows up. Friendly, reliable landscaping for Vancouver homeowners.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Contact</h2>
          <div className="mt-4 grid gap-3 text-white/70">
            <a
              href={business.phoneHref}
              aria-label="Call Green Lotus Landscape"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0 text-lotus-500" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-2 break-all hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-lotus-500" aria-hidden="true" />
              {business.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-lotus-500" aria-hidden="true" />
              {fullAddress}
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Hours</h2>
          <div className="mt-4 grid gap-3 text-white/70">
            {hours.map((entry) => (
              <p key={entry.days} className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-lotus-500" aria-hidden="true" />
                <span>
                  <span className="block text-white">{entry.days}</span>
                  {entry.time}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Quick links</h2>
          <ul className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link href={link.to} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
        <p>
          &copy; {new Date().getFullYear()} {business.name}. Serving Vancouver, BC.
        </p>
      </div>
    </footer>
  );
}
