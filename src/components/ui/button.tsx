import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "accent" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  accent:
    "bg-accent text-ink hover:shadow-[0_0_32px_rgba(232,149,54,0.55)] hover:-translate-y-0.5",
  outline: "border border-muted bg-transparent text-bone hover:border-bone",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-3 text-sm",
  md: "px-7 py-4 text-[15px]",
  lg: "px-7 py-5 text-[17px]",
};

type Styling = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

function buttonClass({ variant = "accent", size = "md", className }: Styling) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center rounded-[2px] font-body font-medium no-underline transition-[box-shadow,transform,border-color] duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & Styling;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClass({ variant, size, className })} {...props} />;
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & Styling;

/** Même habillage que `Button`, mais pour une vraie destination. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonClass({ variant, size, className })} {...props} />;
}
