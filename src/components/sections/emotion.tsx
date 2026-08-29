import { emotion } from "@/content/landing";

import { Heading } from "../ui/heading";
import { Media } from "../ui/media";

/** Respiration : une image plein écran, une phrase. */
export function Emotion() {
  return (
    <section className="relative flex h-dvh items-end justify-center overflow-clip border-y-2 border-dashed border-bone/30">
      <Media media={emotion.media} sizes="100vw" drift />

      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/10 to-black/90" />

      <div className="reveal relative px-6 pb-20 text-center">
        <Heading as="p" size="xl" className="mx-auto mb-5 max-w-[900px]">
          {emotion.quote}
        </Heading>
        <p className="text-base text-muted">{emotion.sub}</p>
      </div>
    </section>
  );
}
