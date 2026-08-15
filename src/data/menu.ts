export type MenuCategory = "coffee" | "non-coffee" | "food" | "dessert";

export type MenuFilter = "all" | MenuCategory;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  tag?: string;
};

export const menuCategories: { label: string; value: MenuFilter }[] = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "Non Coffee", value: "non-coffee" },
  { label: "Food", value: "food" },
  { label: "Dessert", value: "dessert" },
];

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const menuItems: MenuItem[] = [
  {
    id: "signature-latte",
    name: "Signature Latte",
    description:
      "Espresso ganda dengan susu steamed creamy dan sentuhan caramel dari rumah.",
    price: 32000,
    category: "coffee",
    image: img("photo-1541167760496-1628856ab772"),
    tag: "Best Seller",
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    description:
      "Perpaduan susu, vanila, espresso, dan saus caramel yang manis seimbang.",
    price: 38000,
    category: "coffee",
    image: img("photo-1578314675249-a6910f80cc4e"),
  },
  {
    id: "espresso",
    name: "Espresso",
    description:
      "Ekstraksi penuh biji arabika premium dengan crema tebal dan body pekat.",
    price: 22000,
    category: "coffee",
    image: img("photo-1510591509098-f4fdc6d0ff04"),
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Espresso, susu steamed, dan foam lembut dengan latte art yang cantik.",
    price: 30000,
    category: "coffee",
    image: img("photo-1572442388796-11668a67e53d"),
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    description:
      "Es kopi segar dari double shot espresso yang menyegarkan di siang hari.",
    price: 25000,
    category: "coffee",
    image: img("photo-1517701550927-30cf4ba1dba5"),
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description:
      "Matcha premium Jepang dipadukan susu creamy, manis dan sedikit earthy.",
    price: 36000,
    category: "non-coffee",
    image: img("photo-1515823064-d6e0c04616a7"),
    tag: "Favorit",
  },
  {
    id: "hot-chocolate",
    name: "Belgian Hot Chocolate",
    description:
      "Cokelat Belgia lumer dicampur susu hangat, topping marshmallow lembut.",
    price: 34000,
    category: "non-coffee",
    image: img("photo-1542990253-0d0f5be5f0ed"),
  },
  {
    id: "lychee-tea",
    name: "Lychee Tea",
    description:
      "Teh hitam dingin dengan sirup leci alami dan es yang menyegarkan.",
    price: 29000,
    category: "non-coffee",
    image: img("photo-1544145945-f90425340c7e"),
  },
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    description:
      "Roti sourdough dengan chicken thigh gurih, fresh salad, dan saus spesial.",
    price: 42000,
    category: "food",
    image: img("photo-1528735602780-2552fd46c7af"),
    tag: "Favorit",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    description:
      "Croissant klasik berlapis renyah di luar, lembut dan buttery di dalam.",
    price: 28000,
    category: "food",
    image: img("photo-1555507036-ab1f4038808a"),
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description:
      "Sourdough toast dengan alpukat segar, poached egg, dan taburan chili flakes.",
    price: 39000,
    category: "food",
    image: img("photo-1541519227354-08fa5d50c44d"),
  },
  {
    id: "chocolate-cake",
    name: "Belgian Chocolate Cake",
    description:
      "Moist chocolate cake dengan ganache dark, cocok untuk pencuci mulut.",
    price: 45000,
    category: "dessert",
    image: img("photo-1578985545062-69928b1d9587"),
    tag: "Best Seller",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description:
      "Lapisan mascarpone lembut dengan coffee-soaked ladyfinger khas Italia.",
    price: 43000,
    category: "dessert",
    image: img("photo-1571877227200-a0d98ea607e9"),
  },
];

export function formatPrice(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}
