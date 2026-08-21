import { business, google, rating } from "@/data/siteContent";

export const SITE_URL = "https://www.greenlotuslandscapes.ca";
export const OG_IMAGE = "/images/cover-image.png";
export const OG_IMAGE_ALT = "Green Lotus Landscape — Vancouver lawn care and landscaping";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Landscaper",
    name: business.name,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: "+1-604-728-0246",
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: google.lat,
      longitude: google.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.score,
      reviewCount: rating.count,
    },
    sameAs: [google.listingUrl],
  };
}

export function pageMetadata({ title, description, path }) {
  const url = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}
