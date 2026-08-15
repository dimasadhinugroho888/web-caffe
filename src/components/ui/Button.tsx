"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  ariaLabel?: string;
};

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-coffee-600 text-cream hover:bg-coffee-700 hover:shadow-lift active:scale-[0.98]",
  dark: "bg-coffee-900 text-cream hover:bg-coffee-800 hover:shadow-lift active:scale-[0.98]",
  outline:
    "border border-coffee-600 text-coffee-700 hover:bg-coffee-600 hover:text-cream hover:shadow-lift",
  light:
    "bg-cream text-coffee-900 hover:bg-white hover:shadow-lift active:scale-[0.98]",
  "outline-light":
    "border border-cream/70 text-cream hover:bg-cream hover:text-coffee-900 hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  className,
  children,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
