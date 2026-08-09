export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="border-b border-ink/10 bg-paper px-4 py-10 sm:px-5 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lotus-500">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {children ? <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:mt-5 sm:text-lg sm:leading-8">{children}</p> : null}
      </div>
    </section>
  );
}
