import { proof } from "@/content/landing";

import { Heading } from "../ui/heading";
import { Media } from "../ui/media";

export function Proof() {
  return (
    <section className="relative border-t-2 border-dashed border-bone/15 bg-ink px-6 py-25">
      <Heading className="mb-12">{proof.heading}</Heading>

      <div className="mb-20 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {proof.posters.map((poster, i) => (
          <figure key={i}>
            <div className="relative mb-2.5 aspect-3/4 overflow-hidden border-2 border-dashed border-bone/30">
              <Media media={poster.media} sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
            <figcaption className="font-mono text-[10px] tracking-[0.05em] text-muted">
              {poster.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {proof.testimonials.map((testimonial, i) => (
          <figure key={i} className="border-t-2 border-dashed border-bone/20 pt-6">
            <div className="mb-4 flex items-center gap-3.5">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-dashed border-bone/30">
                <Media media={testimonial.media} sizes="48px" />
              </div>
              <figcaption className="font-mono text-[11px] text-muted">
                {testimonial.author}
              </figcaption>
            </div>
            <blockquote className="text-[15px] leading-relaxed text-muted italic">
              {testimonial.quote}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
