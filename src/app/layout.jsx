import HashScroll from "@/components/layout/HashScroll";
import SiteShell from "@/components/layout/SiteShell";
import { seo } from "@/data/siteContent";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.greenlotuslandscapes.ca"),
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: "website",
    url: "/",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/cover-image.png",
        alt: "Green Lotus Landscape — Vancouver lawn care and landscaping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/cover-image.png"],
  },
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
