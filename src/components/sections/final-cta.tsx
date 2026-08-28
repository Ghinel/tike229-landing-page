import { finalCta, siteConfig } from "@/content/landing";

import { ButtonLink } from "../ui/button";
import { Heading } from "../ui/heading";
import { Media } from "../ui/media";
import { QrDots } from "../ui/qr-dots";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-2 border-dashed border-bone/30 px-6 py-20">
      <Media media={finalCta.media} sizes="100vw" />

      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/50 to-black/95" />

      <QrDots className="absolute bottom-8 left-8" />

      <Heading size="hero" className="relative mb-12 max-w-[900px]">
        {finalCta.heading}
      </Heading>

      <div className="relative">
        <ButtonLink href={siteConfig.appUrl} size="lg" className="w-full">
          {finalCta.cta}
        </ButtonLink>
        <p className="mt-4 text-center font-mono text-xs tracking-[0.05em] text-muted">
          {finalCta.note}
        </p>
      </div>
    </section>
  );
}
