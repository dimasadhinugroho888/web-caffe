"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  rotateDeg?: number;
};

export default function Float({
  children,
  className,
  duration = 8,
  distance = 14,
  rotateDeg = 0,
}: FloatProps) {
  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={
        rotateDeg
          ? { y: [0, -distance, 0], rotate: [0, rotateDeg, 0] }
          : { y: [0, -distance, 0] }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
