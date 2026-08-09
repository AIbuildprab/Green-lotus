export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="border-b border-ink/10 bg-paper px-5 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-normalst text-lotus-500">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {children ? <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">{children}</p> : null}
      </div>
    </section>
  );
}
