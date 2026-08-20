import ServicesPage from "@/views/ServicesPage";
import { seo } from "@/data/siteContent";

const title = seo.pages.services.title;

export const metadata = {
  title,
  openGraph: { url: "/services", title },
  twitter: { title },
};

export default ServicesPage;
