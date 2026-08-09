export default function SectionHeader({ eyebrow, title, children, align = "center", className = "", tone = "light" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center mx-auto";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const bodyColor = tone === "dark" ? "text-white/70" : "text-ink/75";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-500">{eyebrow}</p>
      ) : null}
      <h2 className={`mt-3 font-display text-[1.75rem] font-semibold leading-tight sm:text-3xl lg:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {children ? <p className={`mt-3 text-sm leading-7 sm:mt-4 sm:text-base ${bodyColor}`}>{children}</p> : null}
    </div>
  );
}
