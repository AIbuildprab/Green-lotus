import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 12) {
        window.setTimeout(tryScroll, 50);
      }
    };

    const timer = window.setTimeout(tryScroll, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
