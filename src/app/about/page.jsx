import AboutPage from "@/views/AboutPage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.pages.about.title,
  description: seo.pages.about.description,
  path: "/about",
});

export default AboutPage;
