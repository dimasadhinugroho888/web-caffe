"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/data/site";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-cream/95 shadow-soft backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10",
            solid ? "py-3" : "py-5",
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-2.5"
            aria-label={`${site.name} — kembali ke beranda`}
            onClick={() => setOpen(false)}
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500",
                solid ? "bg-coffee-600 text-cream" : "bg-cream text-coffee-700",
              )}
            >
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-serif text-lg font-bold tracking-tight transition-colors duration-500 sm:text-xl",
                  solid ? "text-coffee-900" : "text-cream",
                )}
              >
                {site.shortName}
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-500",
                  solid ? "text-coffee-500" : "text-cream/70",
                )}
              >
                Coffee &amp; Eatery
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative py-2 text-sm font-medium transition-colors duration-300",
                    solid ? "text-coffee-800 hover:text-coffee-600" : "text-cream hover:text-cream/70",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100",
                      solid ? "bg-coffee-600" : "bg-cream",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={whatsappLink()}
              size="sm"
              variant={solid ? "primary" : "light"}
              withArrow
            >
              Order Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
              solid
                ? "bg-coffee-600 text-cream"
                : "bg-cream/15 text-cream backdrop-blur-sm",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
