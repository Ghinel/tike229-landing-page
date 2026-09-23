import { proof } from "@/content/landing";

import { Heading } from "../ui/heading";
import { Media } from "../ui/media";

export function Proof() {
  return (
    <section className="relative border-t-2 border-solid border-bone/15 bg-ink px-6 py-25">
      <Heading className="reveal mb-12">{proof.heading}</Heading>

      <div className="mb-20 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {proof.posters.map((poster, i) => (
          <figure key={i} className="group reveal relative aspect-3/4 overflow-hidden rounded-md border border-solid border-bone/20">
            <Media
              media={poster.media}
              sizes="(min-width: 900px) 20vw, 50vw"
              className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="translate-y-4 text-center font-display text-[17px] font-extrabold uppercase tracking-widest text-bone transition-transform duration-300 group-hover:translate-y-0">
                {poster.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>


    </section>
  );
}
