import { Clock, Coffee } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

export default function Promo() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-coffee-800 shadow-lift">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-coffee-900/95 via-coffee-900/80 to-coffee-800/60"
              aria-hidden="true"
            />

            <Float
              duration={7}
              distance={12}
              className="pointer-events-none absolute -right-8 -top-10 text-cream/10"
            >
              <Coffee className="h-64 w-64 sm:h-80 sm:w-80" />
            </Float>
            <Float
              duration={9}
              distance={12}
              rotateDeg={6}
              className="pointer-events-none absolute bottom-[-3rem] right-24 text-cream/10"
            >
              <Coffee className="h-40 w-40" />
            </Float>

            <div className="relative grid gap-10 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-coffee-600/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream ring-1 ring-cream/20">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  Happy Hour
                </span>
                <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
                  Coffee Time,{" "}
                  <span className="italic text-coffee-200">Better Price.</span>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
                  Diskon <strong className="font-bold text-cream">20%</strong>{" "}
                  untuk semua minuman setiap weekday pukul{" "}
                  <strong className="font-bold text-cream">14.00 – 17.00</strong>.
                  Saatnya memanjakan diri dengan kopi favoritmu.
                </p>
              </div>

              <div className="flex flex-col items-start gap-6 lg:items-center">
                <Reveal className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-cream/40 bg-cream/10 backdrop-blur-sm sm:h-36 sm:w-36">
                  <div className="flex flex-col items-center leading-none">
                    <span className="font-serif text-3xl font-bold text-cream sm:text-4xl">
                      20%
                    </span>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-cream/80">
                      Off
                    </span>
                  </div>
                </Reveal>

                <Button
                  href={whatsappLink("Halo Kala Coffee! Saya ingin memanfaatkan promo Happy Hour 20%.")}
                  variant="light"
                  size="lg"
                  withArrow
                >
                  Get This Deal
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
