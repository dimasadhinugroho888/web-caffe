"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/data/site";
import Button from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col bg-cream lg:hidden"
        >
          <div className="flex flex-1 flex-col justify-center px-8">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center gap-4 py-3 font-serif text-3xl font-bold text-coffee-900 transition-colors hover:text-coffee-600"
                  >
                    <span className="text-sm font-sans font-semibold text-coffee-400">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-10"
            >
              <Button
                href={whatsappLink()}
                size="lg"
                variant="primary"
                withArrow
                className="w-full"
                onClick={onClose}
              >
                Order Now
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="border-t border-coffee-900/10 px-8 py-6"
          >
            <p className="text-sm text-coffee-700/70">{site.address}</p>
            <p className="mt-1 text-sm font-medium text-coffee-800">
              {site.phone}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
