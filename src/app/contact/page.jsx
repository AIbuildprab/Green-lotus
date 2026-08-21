import ContactPage from "@/views/ContactPage";
import { seo } from "@/data/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: seo.pages.contact.title,
  description: seo.pages.contact.description,
  path: "/contact",
});

export default ContactPage;
