"use client";

import { primaryCta, siteConfig } from "@/content/landing";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScrolledPast } from "@/hooks/use-scrolled-past";

import { ButtonLink } from "./ui/button";

/** Rappel d'action fixe, sur mobile, une fois le hero dépassé. */
export function MobileCtaBar() {
  const isMobile = useMediaQuery("(max-width: 899px)");
  const pastHero = useScrolledPast(() => window.innerHeight * 0.9);

  if (!siteConfig.showMobileCtaBar || !isMobile || !pastHero) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 bg-surface/90 px-4 py-3.5 backdrop-blur-[12px]">
      <span className="font-mono text-[10px] leading-tight whitespace-nowrap text-muted">
        7 % /
        <br />
        BILLET
      </span>
      <ButtonLink href={siteConfig.appUrl} size="sm" className="flex-1">
        {primaryCta}
      </ButtonLink>
    </div>
  );
}
