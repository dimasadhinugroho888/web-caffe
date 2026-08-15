"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A Little Glimpse"
          subtitle="Sebuah pandangan kecil ke dalam suasana dan momen hangat di café kami."
        />

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Perbesar gambar: ${item.alt}`}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl bg-coffee-100 shadow-card",
                item.aspect,
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-coffee-900/70 via-coffee-900/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cream">
                  <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={galleryItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
