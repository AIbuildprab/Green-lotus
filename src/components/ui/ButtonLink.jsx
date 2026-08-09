import Link from "next/link";

const variants = {
  primary: "bg-lotus-500 text-white shadow-soft hover:bg-lotus-400 hover:-translate-y-0.5",
  secondary: "border border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:border-lotus-500",
  dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink-deep",
  onDark: "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-ink",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function ButtonLink({
  children,
  className = "",
  variant = "primary",
  size = "md",
  to,
  href,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300 ease-out ${variants[variant]} ${sizes[size]} ${className}`;
  const destination = to || href;

  if (to) {
    return (
      <Link href={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={destination} className={classes} {...props}>
      {children}
    </a>
  );
}
