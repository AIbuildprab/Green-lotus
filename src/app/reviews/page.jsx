import ReviewsPage from "@/views/ReviewsPage";
import { seo } from "@/data/siteContent";

const title = seo.pages.reviews.title;

export const metadata = {
  title,
  openGraph: { url: "/reviews", title },
  twitter: { title },
};

export default ReviewsPage;
