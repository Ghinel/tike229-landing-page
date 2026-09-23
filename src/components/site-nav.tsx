"use client";

import { useEffect, useState } from "react";

import { nav, siteConfig } from "@/content/site";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/cn";
import { ctaHref } from "@/lib/cta";

import { ButtonLink } from "./ui/button";

const MENU_ID = "menu-mobile";

/** Icône « hamburger » qui se croise en X quand le menu est ouvert. */
function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute inset-x-0 h-0.5 bg-bone transition-transform duration-200";
  return (
    <span aria-hidden className="relative block h-4 w-5">
      <span className={cn(bar, "top-0", open && "translate-y-[7px] rotate-45")} />
      <span className={cn(bar, "top-[7px] transition-opacity", open && "opacity-0")} />
      <span className={cn(bar, "bottom-0", open && "-translate-y-[7px] -rotate-45")} />
    </span>
  );
}

export function SiteNav() {
  const scrolled = useScrolledPast(10);
  const [open, setOpen] = useState(false);
  const opaque = siteConfig.navAlwaysOpaque || scrolled || open;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-100 border-b transition-[background-color,border-color] duration-200",
        opaque ? "border-bone/8 bg-ink/70 backdrop-blur-[14px]" : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className={cn(
          "flex items-center justify-between px-4 transition-[padding] duration-200 wide:px-6",
          scrolled ? "py-3" : "py-[18px]",
        )}
      >
        <a
          href="#hero"
          className="font-display text-xl font-extrabold tracking-[-0.02em] text-bone no-underline"
        >
          {siteConfig.name}
        </a>

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

        <div className="flex items-center gap-1.5">
          <ButtonLink href={ctaHref("nav")} size="sm">
            {nav.cta}
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 cursor-pointer items-center justify-center rounded-[2px] wide:hidden"
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <div id={MENU_ID} hidden={!open} className="px-4 pb-3 wide:hidden">
        <ul className="border-t border-solid border-bone/20">
          {nav.links.map((link) => (
            <li key={link.href} className="border-b border-solid border-bone/20">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-medium text-bone no-underline"
              >
                {link.label}
                <span aria-hidden className="font-mono text-sm text-accent">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
