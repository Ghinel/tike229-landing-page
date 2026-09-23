import type { ReactNode } from "react";

import { demo } from "@/content/landing";
import { cn } from "@/lib/cn";

import { QrPattern } from "./qr-pattern";

type Layer = "head" | "link" | "paid" | "qr";

type TicketProps = {
  size?: "sm" | "lg";
  /** Classes par partie du billet, pour animer leur apparition. */
  layers?: Partial<Record<Layer, string>>;
  /** Couleur du fond derrière le billet : les encoches la reprennent. */
  notch?: string;
  /** Superposé au QR (ligne de scan). */
  qrOverlay?: ReactNode;
  /** Superposé au billet entier (tampon). */
  overlay?: ReactNode;
  className?: string;
};

/** Le billet TIKÉ 229, seul élément clair de la page : os sur encre. */
export function Ticket({
  size = "sm",
  layers = {},
  notch = "bg-ink",
  qrOverlay,
  overlay,
  className,
}: TicketProps) {
  const lg = size === "lg";
  const [standard] = demo.tickets;

  return (
    <div
      className={cn(
        "relative rounded-[6px] bg-bone text-ink shadow-[0_24px_60px_rgba(0,0,0,0.6)]",
        lg ? "w-[320px] p-6" : "w-[224px] p-3.5",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between font-mono tracking-[0.12em] text-ink/55 uppercase",
          lg ? "text-[11px]" : "text-[8px]",
        )}
      >
        <span>{demo.brand}</span>
        <span>{demo.number}</span>
      </div>

      <div className={cn(lg ? "mt-4" : "mt-2.5", layers.head)}>
        <p
          className={cn(
            "font-display leading-[1.05] font-extrabold tracking-[-0.02em]",
            lg ? "text-[26px]" : "text-[15px]",
          )}
        >
          {demo.event}
        </p>
        <p
          className={cn(
            "font-mono tracking-[0.1em] text-ink/70 uppercase",
            lg ? "mt-2 text-[11px]" : "mt-1 text-[8px]",
          )}
        >
          {demo.date}
        </p>
        <p className={cn("font-mono text-ink/55", lg ? "text-[11px]" : "text-[8px]")}>
          {demo.venue}
        </p>
      </div>

      <p
        className={cn(
          "font-mono text-ember",
          lg ? "mt-3 text-[12px]" : "mt-2 text-[9px]",
          layers.link,
        )}
      >
        {demo.link}
      </p>

      <div className={cn("relative border-t border-solid border-ink/30", lg ? "my-5" : "my-3")}>
        <span
          aria-hidden
          className={cn(
            "absolute top-1/2 size-4 -translate-y-1/2 rounded-full",
            lg ? "-left-8" : "-left-[22px]",
            notch,
          )}
        />
        <span
          aria-hidden
          className={cn(
            "absolute top-1/2 size-4 -translate-y-1/2 rounded-full",
            lg ? "-right-8" : "-right-[22px]",
            notch,
          )}
        />
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p
            className={cn(
              "font-mono tracking-[0.1em] text-ink/55 uppercase",
              lg ? "text-[11px]" : "text-[8px]",
            )}
          >
            {standard.name}
          </p>
          <p className={cn("font-display font-extrabold", lg ? "text-[20px]" : "text-[13px]")}>
            {standard.amount} {demo.currency}
          </p>
          <span
            className={cn(
              "inline-block rounded-[2px] bg-ink font-mono tracking-[0.12em] text-bone uppercase",
              lg ? "mt-3 px-2 py-1 text-[10px]" : "mt-2 px-1.5 py-0.5 text-[7px]",
              layers.paid,
            )}
          >
            {demo.paid}
          </span>
        </div>

        <div className={cn("relative shrink-0", lg ? "w-[104px]" : "w-[60px]", layers.qr)}>
          <QrPattern className="w-full text-ink" />
          {qrOverlay}
        </div>
      </div>

      {overlay}
    </div>
  );
}
