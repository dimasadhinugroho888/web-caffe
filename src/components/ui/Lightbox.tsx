"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (index === null) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onClose, onNavigate],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, handleKeyDown]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri: ${item.alt}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-coffee-900/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl bg-coffee-800 shadow-lift">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-coffee-300">
                    {item.label}
                  </span>
                  <p className="mt-0.5 text-sm text-cream/90">{item.alt}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-cream/60">
                  {index! + 1} / {items.length}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup galeri"
              className="absolute -right-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-coffee-800 shadow-lift transition-transform duration-300 hover:scale-110 sm:-right-4 sm:-top-4"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate((index! - 1 + items.length) % items.length)}
              aria-label="Gambar sebelumnya"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-coffee-800 shadow-lift transition-all duration-300 hover:scale-110 sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate((index! + 1) % items.length)}
              aria-label="Gambar berikutnya"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-coffee-800 shadow-lift transition-all duration-300 hover:scale-110 sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
