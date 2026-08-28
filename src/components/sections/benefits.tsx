import { benefits, benefitsHeading } from "@/content/landing";
import { cn } from "@/lib/cn";

import { Heading } from "../ui/heading";
import { Media } from "../ui/media";

/** Encoches rondes : la carte se lit comme un billet détachable. */
function Notch({ position }: { position: "top" | "bottom" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute -right-px size-4 translate-x-1/2 rounded-full bg-surface",
        position === "top" ? "-top-px -translate-y-1/2" : "-bottom-px translate-y-1/2",
      )}
    />
  );
}

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-25">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] -left-[10%] h-[140%] w-[70%] -rotate-18 bg-[radial-gradient(ellipse_at_center,rgba(198,62,30,0.35),transparent_70%)]"
      />

      <Heading size="lg" className="relative mb-16 max-w-[800px]">
        {benefitsHeading.before}
        <span className="text-accent">{benefitsHeading.accent}</span>
        {benefitsHeading.after}
      </Heading>

      <div className="relative grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {benefits.map((benefit) => (
          <div key={benefit.text} className={cn(benefit.offset && "wide:mt-10")}>
            <div className="relative mb-5 aspect-4/3 w-full rounded-md border-2 border-dashed border-accent/40">
              <div className="absolute inset-0 overflow-hidden rounded-md">
                <Media media={benefit.media} sizes="(max-width: 900px) 100vw, 25vw" />
              </div>
              <Notch position="top" />
              <Notch position="bottom" />
            </div>
            <p className="max-w-[34ch] text-[17px] leading-relaxed">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
