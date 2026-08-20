import AboutPage from "@/views/AboutPage";
import { seo } from "@/data/siteContent";

const title = seo.pages.about.title;

export const metadata = {
  title,
  openGraph: { url: "/about", title },
  twitter: { title },
};

export default AboutPage;
