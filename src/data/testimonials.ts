export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&q=80`;

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nadia Putri",
    role: "Mahasiswi",
    avatar: avatar("photo-1494790108377-be9c29b29330"),
    rating: 5,
    quote:
      "Tempatnya nyaman banget dan kopinya enak. Cocok buat nugas atau nongkrong sampai sore.",
  },
  {
    id: 2,
    name: "Raka Pratama",
    role: "Remote Worker",
    avatar: avatar("photo-1507003211169-0a1dd7228f2d"),
    rating: 5,
    quote:
      "WiFi kencang, colokan banyak, dan signature latte-nya juara. Tempat kerja favorit saya.",
  },
  {
    id: 3,
    name: "Sarah Wijaya",
    role: "Food Blogger",
    avatar: avatar("photo-1438761681033-6461ffad8d80"),
    rating: 5,
    quote:
      "Belgian chocolate cake-nya wajib dicoba! Presentation-nya cantik banget buat konten.",
  },
  {
    id: 4,
    name: "Dimas Kurniawan",
    role: "Karyawan Swasta",
    avatar: avatar("photo-1472099645785-5658abf4ff4e"),
    rating: 5,
    quote:
      "Suasananya hangat dan staff-nya ramah. Setiap pulang kantor pasti mampir ke sini.",
  },
];
