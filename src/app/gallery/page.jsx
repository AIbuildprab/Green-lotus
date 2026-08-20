import GalleryPage from "@/views/GalleryPage";
import { seo } from "@/data/siteContent";

const title = seo.pages.gallery.title;

export const metadata = {
  title,
  openGraph: { url: "/gallery", title },
  twitter: { title },
};

export default GalleryPage;
