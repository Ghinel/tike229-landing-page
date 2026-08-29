import { hero } from "@/content/landing";
import { cn } from "@/lib/cn";
import { ctaHref } from "@/lib/cta";

import { ButtonLink } from "../ui/button";
import { Kicker } from "../ui/kicker";
import { Media } from "../ui/media";
import { QrDots } from "../ui/qr-dots";

/**
 * Les délais passent par `style` : une classe arbitraire `[animation-delay:…]`
 * n'a pas de priorité garantie face au raccourci `animation` d'`animate-*`.
 */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-dvh flex-col">
      <div className="relative grid min-h-[62vh] grid-cols-1 pt-20">
        <div className="animate-reveal absolute inset-0 overflow-hidden border-2 border-dashed border-bone/30">
          <Media media={hero.main} priority sizes="100vw" />
        </div>

        {hero.asides.map((aside) => (
          <div
            key={aside.className}
            className={cn(
              "animate-reveal absolute hidden overflow-hidden border-2 border-dashed border-bone/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] wide:block",
              aside.className,
            )}
            style={delay(aside.delay)}
          >
            <Media media={aside.media} sizes="220px" />
          </div>
        ))}

        <QrDots className="absolute top-8 right-8" />
      </div>

      <div className="relative max-w-[720px] px-6 pb-24">
        <h1 className="mb-5 font-display text-[clamp(40px,8vw,104px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
          {hero.lines.map((line, i) => (
            // Rogné en vertical seulement : l'animation glisse vers le haut,
            // mais un mot long ne doit pas perdre sa ponctuation à droite.
            <span key={line.text} className="block overflow-y-clip">
              <span
                className={cn("animate-line-up block", line.accent && "text-accent")}
                style={delay(100 + i * 80)}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        <p className="animate-fade-up mb-7 max-w-[52ch] text-[17px] leading-relaxed" style={delay(400)}>
          {hero.body}
        </p>

        <div className="animate-fade-up mb-7 flex flex-wrap items-center gap-6" style={delay(500)}>
          <ButtonLink href={ctaHref("hero")}>{hero.cta}</ButtonLink>
          <a
            href={hero.secondary.href}
            className="text-sm text-bone underline decoration-muted underline-offset-4 transition-colors duration-200 hover:decoration-accent"
          >
            {hero.secondary.label}
          </a>
        </div>

        <Kicker className="animate-fade-up" style={delay(600)}>
          {hero.kicker}
        </Kicker>
      </div>
    </section>
  );
}
