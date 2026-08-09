import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ButtonLink from "../ui/ButtonLink.jsx";
import LotusMark from "../ui/LotusMark.jsx";
import { business, navLinks } from "../../data/siteContent.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkClasses = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? "text-ink underline decoration-lotus-500 decoration-2 underline-offset-8"
        : "text-ink/65 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Green Lotus Landscape home">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-ink-deep text-lotus-500">
            <LotusMark className="h-7 w-7" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold uppercase leading-none tracking-normal text-ink">
              Green Lotus
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lotus-600">Landscape</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            aria-label="Call Green Lotus Landscape"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-ink/70"
          >
            <Phone className="h-4 w-4 text-lotus-500" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <ButtonLink to="/contact" aria-label="Request a free landscaping quote">
            Request a quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="rounded-md border border-ink/15 p-3 text-ink"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="grid gap-1 border-t border-ink/10 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-3 text-base font-semibold ${isActive ? "bg-paper text-ink" : "text-ink/75"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ButtonLink to="/contact" className="mt-2">
            Request a quote
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
