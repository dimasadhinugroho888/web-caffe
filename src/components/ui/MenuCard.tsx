"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import { cn } from "@/lib/utils";

type MenuCardProps = {
  item: MenuItem;
};

const categoryLabel: Record<MenuItem["category"], string> = {
  coffee: "Coffee",
  "non-coffee": "Non Coffee",
  food: "Food",
  dessert: "Dessert",
};

export default function MenuCard({ item }: MenuCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-coffee-900/5 transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-coffee-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream shadow-md">
            {item.tag}
          </span>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? `Tutup detail ${item.name}` : `Lihat detail ${item.name}`}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-coffee-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-coffee-600 hover:text-cream"
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-lg font-bold text-coffee-900 sm:text-xl">
            {item.name}
          </h3>
          <span className="hidden shrink-0 rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-coffee-600 sm:inline-block">
            {categoryLabel[item.category]}
          </span>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {open ? (
            <motion.p
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden text-sm leading-relaxed text-coffee-700/80"
            >
              {item.description}
            </motion.p>
          ) : (
            <motion.p
              key="clamped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="line-clamp-2 text-sm leading-relaxed text-coffee-700/80"
            >
              {item.description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-serif text-lg font-bold text-coffee-600">
            {formatPrice(item.price)}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-coffee-400 sm:hidden">
            {categoryLabel[item.category]}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
