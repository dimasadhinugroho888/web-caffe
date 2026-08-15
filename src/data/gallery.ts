export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  label: string;
  aspect: string;
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: img("photo-1554118811-1e0d58224f24"),
    alt: "Interior café dengan suasana hangat dan pencahayaan lembut",
    label: "Interior",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    src: img("photo-1509042239860-f550ce710b93"),
    alt: "Barista menuangkan latte art ke dalam cangkir kopi",
    label: "Coffee",
    aspect: "aspect-square",
  },
  {
    id: 3,
    src: img("photo-1495474472287-4d71bcdd2085"),
    alt: "Barista menyeduh kopi dengan metode manual brew",
    label: "Barista",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    src: img("photo-1493857671505-72967e2e2760"),
    alt: "Meja kerja di café yang nyaman untuk bekerja",
    label: "Customer Area",
    aspect: "aspect-square",
  },
  {
    id: 5,
    src: img("photo-1551024601-bec78aea704b"),
    alt: "Cangkir dessert dengan cokelat dan buah segar",
    label: "Food",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    src: img("photo-1521017432531-fbd92d768814"),
    alt: "Suasana café yang cozy untuk bersantai dan ngobrol",
    label: "Interior",
    aspect: "aspect-square",
  },
  {
    id: 7,
    src: img("photo-1447933601403-0c6688de566e"),
    alt: "Biji kopi segar yang disangrai di dalam café",
    label: "Coffee",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    src: img("photo-1497515114629-f71d768fd07c"),
    alt: "Secangkir kopi hangat di meja kayu café",
    label: "Coffee",
    aspect: "aspect-square",
  },
  {
    id: 9,
    src: img("photo-1552566626-52f8b828add9"),
    alt: "Makanan dan minuman yang disajikan di meja café",
    label: "Food",
    aspect: "aspect-[4/5]",
  },
];
