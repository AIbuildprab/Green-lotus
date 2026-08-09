"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import LotusMark from "../ui/LotusMark";
import ServicesNavMenu from "./ServicesNavMenu";
import { business, navLinks, services } from "../../data/siteContent";

function navLinkClass(isActive) {
  return `text-sm font-semibold transition duration-300 ${
    isActive
      ? "text-ink underline decoration-lotus-500 decoration-2 underline-offset-8"
      : "text-ink/65 hover:text-ink"
  }`;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled || isOpen
          ? "border-ink/10 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "border-transparent bg-white/35"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Green Lotus Landscape home">
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
              <Link
                key={link.to}
                href={link.to}
                className={navLinkClass(link.to === "/" ? pathname === "/" : pathname.startsWith(link.to))}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            aria-label="Call Green Lotus Landscape"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-ink/70"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 bg-white/50 text-ink backdrop-blur-sm transition hover:bg-white/80"
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
          className="animate-panel-down absolute inset-x-0 top-full max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-ink/10 bg-white/90 px-4 py-4 shadow-soft backdrop-blur-xl lg:hidden"
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
                    <Link
                      href="/services"
                      className="rounded-md px-3 py-2.5 text-sm font-semibold text-lotus-600"
                      onClick={closeMenu}
                    >
                      All services overview
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services#${service.slug}`}
                        className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink/75"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.to}
                href={link.to}
                className={`block rounded-md px-3 py-3.5 text-base font-semibold ${
                  (link.to === "/" ? pathname === "/" : pathname.startsWith(link.to))
                    ? "bg-paper text-ink"
                    : "text-ink/75"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
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
