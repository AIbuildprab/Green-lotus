import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ButtonLink from "../ui/ButtonLink.jsx";
import LotusMark from "../ui/LotusMark.jsx";
import ServicesNavMenu from "./ServicesNavMenu.jsx";
import { business, navLinks, services } from "../../data/siteContent.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClasses = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? "text-ink underline decoration-lotus-500 decoration-2 underline-offset-8"
        : "text-ink/65 hover:text-ink"
    }`;

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Green Lotus Landscape home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-ink-deep text-lotus-500 sm:h-11 sm:w-11">
            <LotusMark className="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold leading-none tracking-normal text-ink sm:text-lg">
              Green Lotus
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-lotus-600 sm:text-[11px] sm:tracking-[0.16em]">
              Landscape
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.to === "/services" ? (
              <ServicesNavMenu key={link.to} />
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            aria-label="Call Green Lotus Landscape"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70"
          >
            <Phone className="h-4 w-4 text-lotus-500" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <ButtonLink to="/contact" aria-label="Request a free landscaping quote">
            Request a quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label="Call Green Lotus Landscape"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-lotus-500 text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 text-ink"
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
          className="animate-panel-down absolute inset-x-0 top-full max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-ink/10 bg-white px-4 py-4 shadow-soft lg:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) =>
            link.to === "/services" ? (
              <div key={link.to} className="border-b border-ink/5 pb-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md px-3 py-3.5 text-left text-base font-semibold text-ink"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 text-ink/50 transition duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen ? (
                  <div className="animate-expand-in mb-2 grid gap-1 pl-2">
                    <NavLink
                      to="/services"
                      className="rounded-md px-3 py-2.5 text-sm font-semibold text-lotus-600"
                      onClick={closeMenu}
                    >
                      All services overview
                    </NavLink>
                    {services.map((service) => (
                      <NavLink
                        key={service.slug}
                        to={`/services#${service.slug}`}
                        className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink/75"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-3.5 text-base font-semibold ${isActive ? "bg-paper text-ink" : "text-ink/75"}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ),
          )}
          <ButtonLink to="/contact" className="mt-3 w-full" onClick={closeMenu}>
            Request a quote
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
