import { finalCta } from "@/content/landing";
import { ctaHref } from "@/lib/cta";

import { ButtonLink } from "../ui/button";
import { Heading } from "../ui/heading";
import { Media } from "../ui/media";
import { QrPattern } from "../ui/qr-pattern";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-clip border-2 border-solid border-bone/30 px-6 py-20">
      <Media media={finalCta.media} sizes="100vw" drift />

      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/50 to-black/95" />

      <div
        aria-hidden
        className="breathe pointer-events-none absolute top-1/2 left-[8%] size-[70vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,62,30,0.45),transparent_65%)]"
      />

      <div
        aria-hidden
        className="absolute right-6 bottom-6 w-[110px] [--scan-h:108px] wide:right-10 wide:bottom-10 wide:w-[160px] wide:[--scan-h:158px]"
      >
        <QrPattern className="w-full text-bone/12" />
        <span className="scan-loop absolute inset-x-0 top-0 h-0.5 bg-accent shadow-[0_0_12px_#e89536]" />
      </div>

      <Heading size="hero" className="reveal relative mb-12 max-w-[900px]">
        {finalCta.heading}
      </Heading>

      <div className="reveal relative">
        <ButtonLink href={ctaHref("final")} size="lg" className="pulse-glow w-full">
          {finalCta.cta}
        </ButtonLink>
        <p className="mt-4 text-center font-mono text-xs tracking-[0.05em] text-muted">
          {finalCta.note}
        </p>
      </div>
    </section>
  );
}
