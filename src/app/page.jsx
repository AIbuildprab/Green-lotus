import HomePage from "@/views/HomePage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: "/",
});

export default HomePage;
