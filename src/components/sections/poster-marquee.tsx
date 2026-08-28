import { marquee } from "@/content/landing";

import { Kicker } from "../ui/kicker";
import { Media } from "../ui/media";

function PosterStrip({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex gap-4" aria-hidden={duplicate || undefined}>
      {marquee.posters.map((poster, i) => (
        <div
          key={i}
          className="relative h-[210px] w-[150px] shrink-0 overflow-hidden border-2 border-dashed border-bone/30"
        >
          <Media media={poster} sizes="150px" />
        </div>
      ))}
    </div>
  );
}

/** Bande d'affiches défilante — la seconde copie assure la boucle sans couture. */
export function PosterMarquee() {
  return (
    <section className="relative overflow-hidden border-t-2 border-dashed border-bone/15 bg-ink py-10">
      <Kicker className="mb-7 text-center">{marquee.kicker}</Kicker>

      <div className="-ml-[5%] w-[110%] -rotate-2">
        <div className="animate-marquee flex w-max gap-4">
          <PosterStrip />
          <PosterStrip duplicate />
        </div>
      </div>
    </section>
  );
}
