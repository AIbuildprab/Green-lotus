import GalleryPage from "@/views/GalleryPage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.pages.gallery.title,
  description: seo.pages.gallery.description,
  path: "/gallery",
});

export default GalleryPage;
