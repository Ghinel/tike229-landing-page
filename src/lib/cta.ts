import { siteConfig } from "@/content/site";

/** Emplacement du bouton, transmis à l'application en `utm_content`. */
export type CtaPlacement = "nav" | "menu" | "hero" | "pricing" | "final" | "mobile-bar" | "not-found";

/** Lien vers l'application, marqué pour distinguer les arrivées depuis la landing. */
export function ctaHref(placement: CtaPlacement): string {
  const url = new URL(siteConfig.appUrl);
  url.searchParams.set("utm_source", "landing");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
