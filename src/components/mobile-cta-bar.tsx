"use client";

import { mobileCta, primaryCta, siteConfig } from "@/content/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { WIDE_QUERY } from "@/lib/breakpoints";
import { ctaHref } from "@/lib/cta";

import { ButtonLink } from "./ui/button";

const heroBottom = () => window.innerHeight * 0.9;

/** Rappel d'action fixe, sur mobile, une fois le hero dépassé. */
export function MobileCtaBar() {
  const isWide = useMediaQuery(WIDE_QUERY);
  const pastHero = useScrolledPast(heroBottom);

  if (!siteConfig.showMobileCtaBar || isWide || !pastHero) return null;

  return (
    <div className="animate-fade-up fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 bg-surface/90 px-4 pt-3.5 pb-[max(14px,env(safe-area-inset-bottom))] backdrop-blur-[12px]">
      <span className="font-mono text-[11px] tracking-[0.05em] whitespace-nowrap text-muted">
        {mobileCta.note}
      </span>
      <ButtonLink href={ctaHref("mobile-bar")} size="sm" className="flex-1">
        {primaryCta}
      </ButtonLink>
    </div>
  );
}
