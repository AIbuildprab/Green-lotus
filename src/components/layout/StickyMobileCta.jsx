import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { business } from "../../data/siteContent.js";

export default function StickyMobileCta() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-7xl gap-2">
        <a
          href={business.phoneHref}
          aria-label="Call Green Lotus Landscape"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-lotus-500 px-4 py-3 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call now
        </a>
        <Link
          to="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-md border border-ink/15 bg-white px-4 py-3 text-sm font-bold text-ink"
        >
          Free estimate
        </Link>
      </div>
    </div>
  );
}
