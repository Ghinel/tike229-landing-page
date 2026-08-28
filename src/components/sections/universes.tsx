import { universes, universesHeading } from "@/content/landing";
import { cn } from "@/lib/cn";

import { Heading } from "../ui/heading";
import { Media } from "../ui/media";

const spans = {
  rows: "wide:row-span-2",
  cols: "wide:col-span-2",
} as const;

/** Grille bento : chaque univers, un même billet. */
export function Universes() {
  return (
    <section id="univers" className="relative scroll-mt-24 bg-ink px-6 pt-25 pb-15">
      <Heading className="mb-12">{universesHeading}</Heading>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 wide:[grid-template-columns:1.3fr_1fr_1fr]">
        {universes.map((universe) => (
          <article
            key={universe.name}
            className={cn(
              "relative overflow-hidden rounded-[4px] border-2 border-dashed border-bone/30",
              universe.span && spans[universe.span],
            )}
          >
            <Media media={universe.media} sizes="(max-width: 900px) 100vw, 33vw" />

            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-b from-black/10 to-black/85"
            />

            <div className="absolute inset-x-5 bottom-5">
              <h3 className="mb-1.5 font-display text-[28px] font-extrabold tracking-[-0.02em]">
                {universe.name}
              </h3>
              <p className="font-mono text-[10px] tracking-[0.08em] text-muted">{universe.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
