import type { CSSProperties } from "react";

import { demo, steps, stepsHeading } from "@/content/landing";

import { Heading } from "../ui/heading";
import { Ticket } from "../ui/ticket";

/**
 * Le parcours en quatre temps, sur un fil pointillé qui se remplit, et un
 * billet qui se construit en face : titre, lien, paiement, QR scanné.
 */
export function Steps() {
  return (
    <section
      id="comment"
      className="ticket-build relative scroll-mt-24 border-t-2 border-dashed border-bone/15 bg-ink px-6 py-25"
    >
      <Heading className="reveal mb-16">{stepsHeading}</Heading>

      <div className="grid gap-16 wide:grid-cols-[minmax(0,560px)_1fr] wide:items-center">
        <ol className="relative max-w-[640px] border-l-2 border-dashed border-bone/25 pl-8">
          <span aria-hidden className="tb-progress absolute top-0 -left-0.5 h-full w-0.5 bg-accent" />
          {steps.map((step, i) => (
            <li key={step.n} className={`tb-step tb-step-${i + 1} relative mb-14 last:mb-0`}>
              <span
                aria-hidden
                className={`tb-dot tb-dot-${i + 1} absolute top-0.5 -left-10 size-4 rounded-full border-2 border-accent bg-ink`}
              />
              <p className="mb-2 font-mono text-xs tracking-[0.08em] text-accent">
                {step.n} — {step.title}
              </p>
              <p className="text-lg leading-snug">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div aria-hidden className="flex justify-center wide:justify-start wide:pl-10">
          <Ticket
            size="lg"
            notch="bg-ink"
            layers={{
              head: "tb-layer tb-layer-1",
              link: "tb-layer tb-layer-2",
              paid: "tb-layer tb-layer-3",
              qr: "tb-layer tb-layer-4",
            }}
            qrOverlay={
              <span
                className="tb-scan absolute inset-x-0 top-0 h-0.5 bg-accent shadow-[0_0_12px_#e89536]"
                style={{ "--scan-h": "102px" } as CSSProperties}
              />
            }
            overlay={
              <span className="tb-stamp absolute top-1/2 right-6 -translate-y-1/2 rotate-[-10deg] rounded-[2px] border-[3px] border-ember px-3 py-1 font-display text-[24px] font-extrabold tracking-[0.06em] text-ember">
                {demo.validated}
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
