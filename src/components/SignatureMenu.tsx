"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import MenuCard from "@/components/ui/MenuCard";
import { menuCategories, menuItems, type MenuFilter } from "@/data/menu";
import { cn } from "@/lib/utils";

export default function SignatureMenu() {
  const [active, setActive] = useState<MenuFilter>("all");

  const filtered = useMemo(
    () => (active === "all" ? menuItems : menuItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="menu" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-coffee-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Our Signature"
          title="Signature Menu"
          subtitle="Pilihan menu andalan yang dibuat dengan bahan berkualitas dan diracik dengan penuh passion."
        />

        <div
          aria-label="Filter kategori menu"
          className="mb-10 flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {menuCategories.map((category) => {
            const isActive = active === category.value;
            return (
              <button
                key={category.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category.value)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                  isActive
                    ? "text-cream"
                    : "bg-white text-coffee-700 hover:bg-coffee-100",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-filter-pill"
                    className="absolute inset-0 rounded-full bg-coffee-600 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-12 text-center text-sm text-coffee-700/70">
          Menu lengkap &amp; promo terbaru bisa kamu lihat langsung di café kami.
        </p>
      </div>
    </section>
  );
}
