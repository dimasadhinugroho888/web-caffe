"use client";

import { motion } from "framer-motion";
import { Bean, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const floatAnimation = (duration: number, delay: number) => ({
  animate: { y: [0, -14, 0] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

function Steam() {
  return (
    <div
      className="pointer-events-none absolute bottom-40 right-14 hidden md:block lg:right-24"
      aria-hidden="true"
    >
      <div className="relative flex h-24 w-16 justify-center gap-1.5">
        {[0, 0.7, 1.4].map((delay) => (
          <span
            key={delay}
            className="h-20 w-1.5 rounded-full bg-gradient-to-t from-cream/0 via-cream/60 to-cream/0 blur-[1px]"
            style={{ animation: `steam 3.2s ease-out ${delay}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-coffee-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-coffee-900/85 via-coffee-900/70 to-coffee-900/90"
        aria-hidden="true"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-coffee-600/30 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -24, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-olive/25 blur-3xl"
      />

      <div
        className="pointer-events-none absolute -left-10 top-28 h-56 w-56 rounded-full border border-cream/15 sm:h-72 sm:w-72"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 bottom-40 hidden h-64 w-64 rounded-full border border-dashed border-cream/20 sm:block lg:right-20 lg:top-24"
        style={{ animation: "spin-slow 60s linear infinite" }}
        aria-hidden="true"
      />

      <motion.div
        aria-hidden="true"
        {...floatAnimation(7, 0)}
        className="pointer-events-none absolute left-[8%] top-[22%] hidden text-cream/20 sm:block"
      >
        <Bean className="h-14 w-14 rotate-[30deg]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        {...floatAnimation(9, 1.2)}
        className="pointer-events-none absolute bottom-[26%] left-[15%] hidden text-cream/15 lg:block"
      >
        <Bean className="h-10 w-10 -rotate-[20deg]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        {...floatAnimation(8, 0.6)}
        className="pointer-events-none absolute right-[10%] top-[30%] hidden text-cream/20 lg:block"
      >
        <Bean className="h-16 w-16 rotate-[15deg]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        {...floatAnimation(10, 1.8)}
        className="pointer-events-none absolute bottom-[20%] right-[6%] hidden text-cream/15 md:block"
      >
        <Bean className="h-8 w-8 rotate-45" />
      </motion.div>

      <Steam />

      <div className="container relative z-10 flex flex-col items-center pb-24 pt-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cream/90 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-coffee-300" aria-hidden="true" />
          {site.name}
        </motion.p>

        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Good Coffee.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-coffee-200"
          >
            Good Mood.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Good Moments.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Temukan tempat nyaman untuk menikmati kopi berkualitas, makanan lezat,
          dan momen terbaik bersama orang-orang tersayang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#menu" variant="light" size="lg" withArrow>
            Explore Menu
          </Button>
          <Button href="#location" variant="outline-light" size="lg">
            Visit Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex flex-col items-center gap-2 text-cream/50"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
