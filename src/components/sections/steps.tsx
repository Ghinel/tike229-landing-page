import { steps, stepsHeading } from "@/content/landing";

import { Heading } from "../ui/heading";

/** Le parcours en quatre temps, sur un fil pointillé. */
export function Steps() {
  return (
    <section
      id="comment"
      className="relative scroll-mt-24 border-t-2 border-dashed border-bone/15 bg-ink px-6 py-25"
    >
      <Heading className="reveal mb-16">{stepsHeading}</Heading>

      <ol className="relative max-w-[640px] border-l-2 border-dashed border-bone/25 pl-8">
        {steps.map((step) => (
          <li key={step.n} className="reveal relative mb-14 last:mb-0">
            <span
              aria-hidden
              className="absolute top-0.5 -left-10 size-4 rounded-full border-2 border-accent bg-ink"
            />
            <p className="mb-2 font-mono text-xs tracking-[0.08em] text-accent">
              {step.n} — {step.title}
            </p>
            <p className="text-lg leading-snug">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
