import Image from "next/image";

import type { MediaSource } from "@/content/landing";
import { cn } from "@/lib/cn";
import { stripePattern } from "@/lib/stripe";

type MediaProps = {
  media: MediaSource;
  /** Le parent doit être `relative` : le visuel se pose en `absolute inset-0`. */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Rend une vraie photo ou, tant qu'elle n'existe pas, un aplat rayé légendé.
 * Les deux occupent exactement la même boîte, donc remplacer l'un par l'autre
 * dans `content/landing.ts` ne bouge aucune mise en page.
 */
export function Media({ media, className, sizes = "100vw", priority }: MediaProps) {
  if (media.kind === "image") {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={cn("absolute inset-0", className)}
      style={{ backgroundImage: stripePattern(media) }}
    >
      {media.label ? (
        <span className="absolute top-2.5 left-2.5 font-mono text-[9px] text-bone/70">
          {media.label}
        </span>
      ) : null}
    </div>
  );
}
