import { Coffee } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 sm:pb-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-coffee-900 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-coffee-900/80 to-coffee-900/95"
              aria-hidden="true"
            />

            <Float
              duration={8}
              distance={12}
              className="pointer-events-none absolute left-8 top-10 text-cream/10 sm:left-16"
            >
              <Coffee className="h-24 w-24 sm:h-32 sm:w-32" />
            </Float>
            <Float
              duration={9}
              distance={12}
              className="pointer-events-none absolute bottom-8 right-8 text-cream/10 sm:right-16"
            >
              <Coffee className="h-20 w-20 sm:h-28 sm:w-28" />
            </Float>

            <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
              <h2 className="font-serif text-3xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
                Your Next Favorite Coffee Spot{" "}
                <span className="italic text-coffee-200">Awaits.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
                Datang, duduk, dan nikmati secangkir kopi terbaik kami.
              </p>
              <div className="mt-10">
                <Button href="#location" variant="light" size="lg" withArrow>
                  Visit Our Café
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
