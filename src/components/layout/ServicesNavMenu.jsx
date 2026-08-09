import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { services } from "../../data/siteContent.js";

export default function ServicesNavMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef(null);
  const { pathname, hash } = useLocation();
  const isServicesActive = pathname.startsWith("/services");

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-sm font-semibold transition ${
          isServicesActive
            ? "text-ink underline decoration-lotus-500 decoration-2 underline-offset-8"
            : "text-ink/65 hover:text-ink"
        }`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Services"
          className="animate-menu-in absolute left-1/2 top-full z-50 mt-3 w-[22rem] -translate-x-1/2 overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft"
        >
          <div className="border-b border-ink/10 bg-paper px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lotus-600">What we do</p>
            <Link
              to="/services"
              role="menuitem"
              className="mt-1 block text-sm font-semibold text-ink hover:text-lotus-600"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              View all services
            </Link>
          </div>
          <ul className="grid gap-0 p-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <NavLink
                    to={`/services#${service.slug}`}
                    role="menuitem"
                    className="flex gap-3 rounded-md px-3 py-3 transition duration-200 hover:bg-paper"
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-paper text-lotus-600">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">{service.title}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-ink/65">{service.summary}</span>
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
