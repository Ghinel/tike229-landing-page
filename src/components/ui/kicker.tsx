import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/cn";

type KickerProps = ComponentPropsWithoutRef<"p"> & {
  as?: ElementType;
};

/** Petite étiquette monospace espacée — la voix « technique » de la marque. */
export function Kicker({ as: Tag = "p", className, ...props }: KickerProps) {
  return (
    <Tag
      className={cn(
        "reveal font-mono text-[11px] tracking-[0.08em] text-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}
