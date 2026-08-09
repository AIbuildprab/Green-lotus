import { Home, Images, MessageCircle, Phone, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { business } from "../../data/siteContent.js";

const dockLinks = [
  { label: "Home", to: "/", icon: Home, end: true },
  { label: "Services", to: "/services", icon: Wrench },
  { label: "Gallery", to: "/gallery", icon: Images },
  { label: "Contact", to: "/contact", icon: MessageCircle },
];

export default function StickyGlassNav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const hidden = footerVisible;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 transition duration-500 ease-out sm:px-5 ${
        hidden ? "translate-y-[120%] opacity-0" : "animate-bar-up translate-y-0 opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <nav
        aria-label="Quick navigation"
        className={`glass-dock pointer-events-auto mx-auto flex max-w-3xl items-center gap-1 rounded-2xl border px-2 py-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 sm:gap-2 sm:px-3 ${
          scrolled
            ? "border-white/55 bg-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
            : "border-white/40 bg-white/40 shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center justify-around gap-0.5 sm:justify-evenly">
          {dockLinks.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              tabIndex={hidden ? -1 : 0}
              className={({ isActive }) =>
                `flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1.5 py-1.5 text-[10px] font-semibold transition duration-300 sm:min-h-11 sm:flex-row sm:gap-2 sm:px-3 sm:text-sm ${
                  isActive
                    ? "bg-ink text-white shadow-sm"
                    : "text-ink/65 hover:bg-white/70 hover:text-ink"
                }`
              }
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{label}</span>
            </NavLink>
          ))}
        </div>

        <a
          href={business.phoneHref}
          tabIndex={hidden ? -1 : 0}
          aria-label="Call Green Lotus Landscape"
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-lotus-500 px-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-lotus-400 active:scale-[0.98] sm:h-11 sm:px-5"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </nav>
    </div>
  );
}
