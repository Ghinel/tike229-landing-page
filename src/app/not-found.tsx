import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SkipLink } from "@/components/skip-link";
import { ButtonLink } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Kicker } from "@/components/ui/kicker";
import { QrDots } from "@/components/ui/qr-dots";
import { notFoundPage } from "@/content/landing";
import { primaryCta } from "@/content/site";
import { ctaHref } from "@/lib/cta";

/** Page 404 — exportée en `out/404.html`, servie telle quelle par Cloudflare Pages. */
export default function NotFound() {
  return (
    <>
      <SkipLink />
      <SiteNav />
      <main
        id="contenu"
        className="relative flex min-h-dvh flex-col justify-center border-b-2 border-dashed border-bone/30 px-6 pt-32 pb-24"
      >
        <QrDots className="absolute top-28 right-8" />

        <Kicker className="mb-5">{notFoundPage.kicker}</Kicker>
        <Heading as="h1" size="hero" className="mb-6 max-w-[900px]">
          {notFoundPage.heading}
        </Heading>
        <p className="mb-10 max-w-[52ch] text-[17px] leading-relaxed text-muted">
          {notFoundPage.body}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href="/">{notFoundPage.back}</ButtonLink>
          <a
            href={ctaHref("not-found")}
            className="text-sm text-bone underline decoration-muted underline-offset-4 transition-colors duration-200 hover:decoration-accent"
          >
            {primaryCta} →
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
