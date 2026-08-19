import HashScroll from "@/components/layout/HashScroll";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata = {
  title: "Green Lotus Landscape | Landscaping & Lawn Care in Vancouver, BC",
  description:
    "Green Lotus Landscape is the Vancouver landscaping crew that actually shows up. Lawn maintenance, hedge and garden care, hardscaping, and seasonal cleanups. Call 604-728-0246 for a free quote.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#8BC34A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HashScroll />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
