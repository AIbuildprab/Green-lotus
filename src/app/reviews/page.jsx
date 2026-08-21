import ReviewsPage from "@/views/ReviewsPage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.pages.reviews.title,
  description: seo.pages.reviews.description,
  path: "/reviews",
});

export default ReviewsPage;
