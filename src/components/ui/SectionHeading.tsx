import Reveal from "@/components/ui/Reveal";
import { Bean } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 sm:mb-16",
        centered ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow && (
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-coffee-300/70 bg-cream-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coffee-600">
            <Bean className="h-3.5 w-3.5" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "max-w-2xl font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
            dark ? "text-cream" : "text-coffee-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed sm:text-lg",
              dark ? "text-cream/80" : "text-coffee-700/80",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <span
          className={cn(
            "mt-1 h-1 w-20 rounded-full bg-gradient-to-r from-coffee-600 to-coffee-300",
            centered && "mx-auto",
          )}
          aria-hidden="true"
        />
      </Reveal>
    </div>
  );
}
