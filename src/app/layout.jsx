import HashScroll from "@/components/layout/HashScroll";
import SiteShell from "@/components/layout/SiteShell";
import { google, seo } from "@/data/siteContent";
import { getLocalBusinessJsonLd, OG_IMAGE, OG_IMAGE_ALT, SITE_URL } from "@/lib/pageMetadata";
import "./globals.css";

const geoPosition = `${google.lat};${google.lng}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Green Lotus Landscape",
    locale: "en_CA",
    url: "/",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: OG_IMAGE,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Vancouver",
    "geo.position": geoPosition,
    ICBM: `${google.lat}, ${google.lng}`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#8BC34A",
};

export default function RootLayout({ children }) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <HashScroll />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
