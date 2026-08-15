import { Coffee, Home, Heart, Leaf } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description:
      "Menggunakan biji kopi pilihan dan diproses oleh barista berpengalaman.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "Menggunakan bahan berkualitas untuk setiap menu.",
  },
  {
    icon: Home,
    title: "Cozy Atmosphere",
    description: "Tempat nyaman untuk bekerja, belajar, ngobrol, maupun bersantai.",
  },
  {
    icon: Heart,
    title: "Made With Passion",
    description: "Setiap menu dibuat dengan perhatian dan passion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-coffee-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-olive/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-coffee-700/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="Ruang untuk Setiap Momen"
          subtitle="Alasan ribuan pelanggan menjadikan kami tempat favorit mereka."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <div
                className={cn(
                  "group h-full rounded-3xl border border-cream/10 bg-cream/[0.06] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cream/25 hover:bg-cream/[0.1]",
                )}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-coffee-600 text-cream shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-bold text-cream">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
