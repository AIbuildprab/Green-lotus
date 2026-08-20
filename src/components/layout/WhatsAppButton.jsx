"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { business } from "../../data/siteContent";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Green Lotus on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-md bg-lotus-500 text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition duration-500 hover:bg-lotus-400 bottom-[calc(5.75rem+env(safe-area-inset-bottom))] lg:bottom-6 lg:right-6 ${
        hidden ? "pointer-events-none translate-y-3 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
