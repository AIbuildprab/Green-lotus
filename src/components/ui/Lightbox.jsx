"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const closeButtonRef = useRef(null);
  const item = items[activeIndex];

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "Tab") {
        // Only the close button is focusable, so keep focus parked on it.
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext]);

  if (!item) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption}. Image ${activeIndex + 1} of ${items.length}`}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-deep/92 p-3 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:items-center sm:p-4 sm:pb-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col sm:block"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 pb-2 sm:gap-4 sm:pb-3">
          <p className="text-xs font-semibold text-white/80 sm:text-sm">
            {activeIndex + 1} / {items.length}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <img
          src={item.src}
          alt={item.alt}
          width="1200"
          height="900"
          loading="eager"
          decoding="async"
          className="max-h-[58dvh] w-full rounded-md bg-black/40 object-contain sm:max-h-[70vh]"
        />

        <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4 sm:gap-4">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1 px-1 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lotus-500 sm:text-xs">
              {item.category}
            </p>
            <p className="mt-1 font-display text-sm font-bold leading-snug text-white sm:text-lg">
              {item.caption}
            </p>
          </div>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
