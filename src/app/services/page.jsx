import ServicesPage from "@/views/ServicesPage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.pages.services.title,
  description: seo.pages.services.description,
  path: "/services",
});

export default ServicesPage;
