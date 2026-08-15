import Link from "next/link";
import { Bean } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-coffee-600 text-cream">
        <Bean className="h-10 w-10" aria-hidden="true" />
      </span>
      <h1 className="mt-8 font-serif text-5xl font-bold text-coffee-900">404</h1>
      <p className="mt-4 max-w-md text-coffee-700/80">
        Ups, halaman yang kamu cari tidak ditemukan. Kopi hangatnya masih menunggu
        di beranda.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary" size="md" withArrow>
          Kembali ke Beranda
        </Button>
      </div>
    </section>
  );
}
