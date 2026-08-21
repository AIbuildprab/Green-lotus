import { SITE_URL } from "@/lib/pageMetadata";

const routes = ["/", "/services", "/about", "/gallery", "/reviews", "/contact"];

export default function sitemap() {
  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
