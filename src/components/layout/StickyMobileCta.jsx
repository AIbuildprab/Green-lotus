import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { business } from "../../data/siteContent.js";

export default function StickyMobileCta() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="animate-bar-up fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-7xl gap-2">
        <a
          href={business.phoneHref}
          aria-label="Call Green Lotus Landscape"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-lotus-500 px-3 text-sm font-semibold text-white transition duration-200 hover:bg-lotus-400 active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call now
        </a>
        <Link
          to="/contact"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-ink/15 bg-white px-3 text-sm font-semibold text-ink transition duration-200 hover:border-lotus-500 active:scale-[0.98]"
        >
          Free estimate
        </Link>
      </div>
    </div>
  );
}
