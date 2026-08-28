"use client";

import { nav, siteConfig } from "@/content/landing";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/cn";

import { ButtonLink } from "./ui/button";

export function SiteNav() {
  const scrolled = useScrolledPast(10);
  const opaque = siteConfig.navAlwaysOpaque || scrolled;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b px-6 py-[18px] transition-[background-color,border-color] duration-200",
        opaque
          ? "border-bone/8 bg-ink/70 backdrop-blur-[14px]"
          : "border-transparent bg-transparent",
      )}
    >
      <span className="font-display text-xl font-extrabold tracking-[-0.02em]">
        {siteConfig.name}
      </span>

      <div className="hidden gap-8 text-[15px] wide:flex">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-bone no-underline transition-colors duration-200 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>

      <ButtonLink href={siteConfig.appUrl} size="sm">
        {nav.cta}
      </ButtonLink>
    </nav>
  );
}
