import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import StickyGlassNav from "./StickyGlassNav.jsx";

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1 pb-[calc(6.25rem+env(safe-area-inset-bottom))]">
        <Outlet />
      </main>
      <Footer />
      <StickyGlassNav />
    </div>
  );
}
