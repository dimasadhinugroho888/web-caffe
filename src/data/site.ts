export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Kala Coffee & Eatery",
  shortName: "Kala",
  tagline: "Good Coffee. Good Mood. Good Moments.",
  description:
    "Kala Coffee & Eatery — tempat nyaman untuk menikmati kopi berkualitas, makanan lezat, dan momen terbaik bersama orang-orang tersayang.",
  established: "2019",
  phone: "+62 812-3456-7890",
  phoneHref: "tel:+6281234567890",
  whatsapp: "6281234567890",
  whatsappMessage:
    "Halo Kala Coffee! Saya ingin memesan menu dari website. Terima kasih!",
  email: "hello@kalacoffee.id",
  address: "Jl. Kemang Raya No. 88, Jakarta Selatan, DKI Jakarta 12730",
  instagram: "https://www.instagram.com/kala.coffee",
  instagramHandle: "@kala.coffee",
  tiktok: "https://www.tiktok.com/@kala.coffee",
  mapsEmbed:
    "https://www.google.com/maps?q=Jl.%20Kemang%20Raya%20No.88%2C%20Jakarta%20Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Kemang+Raya+No.88+Jakarta+Selatan",
  hours: [
    { days: "Monday – Friday", time: "08.00 – 22.00" },
    { days: "Saturday – Sunday", time: "08.00 – 23.00" },
  ],
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
