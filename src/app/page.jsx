import HomePage from "@/views/HomePage";
import { seo } from "@/data/siteContent";

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    url: "/",
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    title: seo.title,
    description: seo.description,
  },
};

export default HomePage;
