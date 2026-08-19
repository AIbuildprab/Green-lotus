import { brand } from "../../data/siteContent";

export default function BrandLogo({ className = "h-12 w-auto rounded-md" }) {
  return (
    <img
      src={brand.logo}
      alt=""
      width={753}
      height={502}
      className={className}
      decoding="async"
    />
  );
}
