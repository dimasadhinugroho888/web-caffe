"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function Rating({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Rating ${count} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-coffee-500 text-coffee-500" : "fill-coffee-200 text-coffee-200",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream-100 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kata Mereka Tentang Kami"
          subtitle="Cerita dan pengalaman langsung dari para pelanggan setia."
        />

        <div className="-mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 lg:snap-none lg:overflow-visible">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="w-[85%] shrink-0 snap-center rounded-3xl bg-white p-7 shadow-card ring-1 ring-coffee-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:w-[48%] lg:w-1/4"
            >
              <Rating count={testimonial.rating} />
              <p className="mt-4 text-[15px] leading-relaxed text-coffee-800">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-coffee-900/10 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-coffee-200">
                  <Image
                    src={testimonial.avatar}
                    alt={`Foto ${testimonial.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-coffee-900">{testimonial.name}</p>
                  <p className="text-xs font-medium text-coffee-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-medium uppercase tracking-widest text-coffee-400 sm:hidden">
          Geser untuk melihat lebih banyak
        </p>
      </div>
    </section>
  );
}
