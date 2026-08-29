import { ticker } from "@/content/landing";
import { cn } from "@/lib/cn";

/**
 * Bandeau typographique défilant, légèrement incliné comme la bande
 * d'affiches de la maquette. Le contenu répète des mots présents ailleurs
 * dans la page : masqué aux lecteurs d'écran.
 */
export function Ticker() {
  return (
    <section aria-hidden className="ticker overflow-hidden bg-ink py-7">
      <div className="-ml-[2%] w-[104%] -rotate-1 border-y-2 border-dashed border-bone/20 bg-surface py-3.5">
        <div className="ticker-track flex w-max font-mono text-[12px] tracking-[0.14em] uppercase">
          {[0, 1].map((copy) =>
            ticker.items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className={cn(
                  "flex items-center gap-10 pr-10",
                  item.accent ? "text-accent" : "text-bone/80",
                )}
              >
                {item.text}
                <span aria-hidden className="size-1.5 rounded-full bg-bone/30" />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
