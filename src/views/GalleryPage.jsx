"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import CallToAction from "../components/sections/CallToAction.jsx";
import Lightbox from "../components/ui/Lightbox.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ProjectStories from "../components/sections/ProjectStories.jsx";
import { galleryCategories, galleryItems } from "../data/siteContent.js";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);
  const triggerRefs = useRef({});

  const visibleItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const closeLightbox = useCallback(() => {
    const openedItem = activeIndex === null ? null : visibleItems[activeIndex];
    setActiveIndex(null);

    if (openedItem) {
      triggerRefs.current[openedItem.id]?.focus();
    }
  }, [activeIndex, visibleItems]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + visibleItems.length) % visibleItems.length));
  }, [visibleItems.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % visibleItems.length));
  }, [visibleItems.length]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <>
      <PageHero eyebrow="Gallery" title="Yards we have looked after.">
        Real project photos from around Vancouver. Filter by the kind of work, or open any image for a closer look.
      </PageHero>

      <ProjectStories />

      <section className="px-4 py-10 sm:px-5 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">All project photos</h2>

          <div className="-mx-4 mt-5 sm:mx-0 sm:mt-6">
            <div
              className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
              role="group"
              aria-label="Filter gallery by service type"
            >
              {galleryCategories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => changeCategory(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-md border px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition sm:px-4 ${
                      isActive
                        ? "border-lotus-500 bg-lotus-500 text-white"
                        : "border-ink/15 bg-white text-ink hover:border-lotus-500"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-sm text-ink/60 sm:mt-5" role="status">
            Showing {visibleItems.length} {visibleItems.length === 1 ? "photo" : "photos"}
            {activeCategory === "All" ? "" : ` in ${activeCategory}`}.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                ref={(node) => {
                  triggerRefs.current[item.id] = node;
                }}
                onClick={() => setActiveIndex(index)}
                className="group overflow-hidden rounded-md border border-ink/10 bg-white text-left transition active:scale-[0.99] hover:-translate-y-1 hover:shadow-soft"
                aria-label={`Open larger view: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[4/5] w-full object-cover transition group-hover:scale-[1.02] sm:aspect-[4/3]"
                />
                <span className="block p-4 sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lotus-500 sm:text-xs">
                    {item.category}
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold leading-snug text-ink sm:mt-2 sm:text-base">
                    {item.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Like what you see? Get your free estimate."
        body="Tell us what you have in mind for your own yard and we will price it out at no cost."
      />

      {activeIndex !== null ? (
        <Lightbox
          items={visibleItems}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
