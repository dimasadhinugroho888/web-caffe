import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Coffee Selection" },
  { value: "10K+", label: "Happy Customers" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-coffee-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Our Story"
          title="More Than Just a Cup of Coffee"
          subtitle="Setiap cangkir kami buat dengan cerita, perhatian, dan cinta."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Interior café dengan suasana hangat dan nyaman"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
              <div className="flex flex-col gap-4 sm:gap-6">
                <Reveal delay={0.2} className="overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1507915600431-5292809c5de7?auto=format&fit=crop&w=800&q=80"
                    alt="Barista sedang menyajikan kopi kepada pelanggan"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Reveal>
                <Reveal delay={0.3} className="overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                    alt="Latte art yang indah di atas secangkir kopi"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Reveal>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h3 className="font-serif text-2xl font-bold leading-snug text-coffee-900 sm:text-3xl">
                Berawal dari kecintaan terhadap kopi dan ruang yang nyaman,
                café kami hadir sebagai tempat untuk berhenti sejenak dari
                kesibukan.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-coffee-700/80">
                Kami percaya bahwa secangkir kopi yang baik dapat mengubah
                suasana hari. Setiap biji dipilih dengan teliti dari petani
                lokal, disangrai dengan presisi, dan diracik oleh barista
                berpengalaman yang selalu bersemangat.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 leading-relaxed text-coffee-700/80">
                Lebih dari sekadar tempat menikmati kopi, kami ingin menjadi
                rumah kedua — tempat bertemu, bercerita, dan menciptakan
                kenangan bersama orang-orang tersayang.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-coffee-900/10 pt-8 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="font-serif text-3xl font-bold text-coffee-600 sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-coffee-700/70 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10">
                <Button href="#menu" variant="outline" size="md" withArrow>
                  Lihat Menu Kami
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
