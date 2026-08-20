import ContactPage from "@/views/ContactPage";
import { seo } from "@/data/siteContent";

const title = seo.pages.contact.title;

export const metadata = {
  title,
  openGraph: { url: "/contact", title },
  twitter: { title },
};

export default ContactPage;
