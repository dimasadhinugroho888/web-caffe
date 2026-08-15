import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Location() {
  return (
    <section id="location" className="bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Location"
          title="Kunjungi Café Kami"
          subtitle="Mudah ditemukan di tengah kota, siap menyambut kamu setiap hari."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-coffee-900/5 sm:p-10">
              <div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coffee-600 text-cream">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-coffee-900">
                      Alamat
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-coffee-700/80">
                      {site.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-coffee-900/10" aria-hidden="true" />

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-olive text-cream">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-coffee-900">
                    Jam Buka
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {site.hours.map((hour) => (
                      <li
                        key={hour.days}
                        className="flex items-center justify-between gap-4 text-sm text-coffee-700/80"
                      >
                        <span className="font-medium text-coffee-800">
                          {hour.days}
                        </span>
                        <span className="tabular-nums">{hour.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-px w-full bg-coffee-900/10" aria-hidden="true" />

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-olive-light text-cream">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-coffee-900">
                    Kontak
                  </h3>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm text-coffee-700/80 transition-colors hover:text-coffee-600"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 inline-flex items-center gap-2 text-sm text-coffee-700/80 transition-colors hover:text-coffee-600"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    {site.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="mt-auto grid gap-3 pt-2 sm:grid-cols-2">
                <Button href={site.mapsLink} variant="primary" size="md" withArrow>
                  Get Directions
                </Button>
                <Button
                  href={site.instagram}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  Follow Instagram
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-coffee-900/10">
              <iframe
                title={`Peta lokasi ${site.name}`}
                src={site.mapsEmbed}
                className="h-full min-h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
