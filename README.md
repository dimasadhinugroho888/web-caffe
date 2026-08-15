# Kala Coffee & Eatery — Landing Page

Landing page café modern, elegan, premium, dan responsif — dibangun dengan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**. Siap deploy ke **Vercel** tanpa server khusus, database, atau environment variable.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animasi ringan)
- Lucide React (icon)
- next/image (optimasi gambar)
- Google Fonts: Playfair Display & Inter

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Scripts

| Script            | Keterangan                       |
| ----------------- | -------------------------------- |
| `npm run dev`     | Development server               |
| `npm run build`   | Production build                 |
| `npm start`       | Menjalankan production build     |
| `npm run lint`    | ESLint check                     |

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx          # Font, metadata/SEO global, Navbar & Footer
│   ├── page.tsx            # Komposisi section landing page
│   ├── globals.css         # Tailwind + style global
│   ├── icon.svg            # Favicon
│   ├── opengraph-image.tsx # Gambar Open Graph (dibuat otomatis)
│   └── not-found.tsx       # Halaman 404
├── components/
│   ├── Navbar.tsx          # Sticky navbar + transisi scroll
│   ├── MobileMenu.tsx      # Menu hamburger mobile
│   ├── Hero.tsx            # Hero section + dekorasi
│   ├── About.tsx           # Our Story + statistik
│   ├── SignatureMenu.tsx   # Menu + filter kategori
│   ├── Promo.tsx           # Banner promo
│   ├── Gallery.tsx         # Gallery masonry + lightbox
│   ├── WhyChooseUs.tsx     # Alasan memilih café
│   ├── Testimonials.tsx    # Review pelanggan (carousel mobile)
│   ├── Location.tsx        # Lokasi, jam buka, kontak, peta
│   ├── CTA.tsx             # Call to action besar
│   ├── Footer.tsx          # Footer lengkap
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── MenuCard.tsx
│       ├── Lightbox.tsx
│       └── Reveal.tsx
├── data/                   # Data terpusat (menu, gallery, review, site)
└── lib/utils.ts            # Helper `cn`
```

## Mengubah Data

Semua konten bisa diubah di folder `src/data`:

- `site.ts` — nama café, alamat, kontak, sosial media, jam buka, peta
- `menu.ts` — daftar menu (tambah/hapus item cukup lewat array)
- `gallery.ts` — daftar gambar galeri
- `testimonials.ts` — review pelanggan

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di [Vercel](https://vercel.com/new).
3. Vercel otomatis mendeteksi Next.js — tidak perlu konfigurasi tambahan.

Atau deploy dari CLI:

```bash
npm i -g vercel
vercel
```

Tidak ada environment variable yang dibutuhkan.
