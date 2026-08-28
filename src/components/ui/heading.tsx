import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/cn";

export type HeadingSize = "md" | "lg" | "xl" | "hero";

const sizes: Record<HeadingSize, string> = {
  md: "text-[clamp(28px,4.5vw,48px)] leading-[1.15] tracking-[-0.02em]",
  lg: "text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]",
  xl: "text-[clamp(28px,6vw,64px)] leading-[1.1] tracking-[-0.02em] uppercase",
  hero: "text-[clamp(36px,8vw,96px)] leading-none tracking-[-0.03em] uppercase",
};

type HeadingProps = ComponentPropsWithoutRef<"h2"> & {
  as?: ElementType;
  size?: HeadingSize;
};

/** Titre de section : Bricolage Grotesque 800, très resserré. */
export function Heading({ as: Tag = "h2", size = "md", className, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn("font-display font-extrabold text-balance", sizes[size], className)}
      {...props}
    />
  );
}
