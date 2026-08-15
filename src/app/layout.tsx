import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kala-coffee.vercel.app"),
  title: {
    default: `${site.name} — Good Coffee. Good Mood.`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kafe jakarta",
    "kopi premium",
    "specialty coffee",
    "kafe cozy",
    "kopi berkualitas",
    "cafe aesthetic",
    "coffee shop jakarta",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Good Coffee. Good Mood.`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Good Coffee. Good Mood.`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF6EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
