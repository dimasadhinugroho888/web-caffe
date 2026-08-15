import { Coffee, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/data/site";

const socials = [
  {
    label: "Instagram",
    href: site.instagram,
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: site.tiktok,
    icon: Music2,
  },
  {
    label: "WhatsApp",
    href: whatsappLink(),
    icon: MessageCircle,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-coffee-900 text-cream">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Link
            href="#home"
            className="flex items-center gap-2.5"
            aria-label={`${site.name} — kembali ke beranda`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coffee-600 text-cream">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold tracking-tight">
                {site.shortName}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/60">
                Coffee &amp; Eatery
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Tempat nyaman untuk menikmati kopi berkualitas, makanan lezat, dan
            momen terbaik bersama orang-orang tersayang.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-coffee-600"
              >
                <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-300">
            Navigasi
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-300">
            Jam Buka
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {site.hours.map((hour) => (
              <li key={hour.days}>
                <span className="block font-medium text-cream/90">{hour.days}</span>
                <span className="tabular-nums">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-300">
            Kontak
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coffee-300" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-coffee-300" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Coffee className="h-4 w-4 shrink-0 text-coffee-300" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-cream/60 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-coffee-300">♥</span> &amp; freshly
            brewed coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
