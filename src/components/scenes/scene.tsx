import type { CSSProperties, ReactNode } from "react";

import type { SceneKey } from "@/content/landing";
import { demo } from "@/content/landing";
import { cn } from "@/lib/cn";

import { Ticket } from "../ui/ticket";

/** Cadre commun : fond encre, étiquette « DÉMO », contenu centré. */
function SceneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "scene absolute inset-0 flex items-center justify-center overflow-hidden bg-ink p-4",
        className,
      )}
    >
      <span className="absolute top-2 left-2 z-10 rounded-[2px] bg-ink/90 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
        {demo.tag}
      </span>
      {children}
    </div>
  );
}

/** 1. L'événement se crée : les champs se remplissent, puis « Publier ». */
function CreateScene() {
  const fields = [
    { label: "Titre", value: demo.event },
    { label: "Date", value: demo.date },
    { label: "Lieu", value: demo.venue },
    { label: "Billets", value: demo.tickets.map((t) => `${t.name} ${t.amount}`).join(" · ") },
  ];

  return (
    <SceneFrame>
      <div className="mt-4 w-full max-w-[300px] rounded-[4px] border border-bone/12 bg-surface p-3.5">
        <p className="mb-2.5 font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
          Nouvel événement
        </p>
        <dl className="flex flex-col gap-1.5">
          {fields.map((field, i) => (
            <div
              key={field.label}
              className="flex items-baseline gap-2 border-b border-solid border-bone/15 pb-1"
            >
              <dt className="w-12 shrink-0 font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
                {field.label}
              </dt>
              <dd className="min-w-0 flex-1 overflow-hidden">
                <span
                  className={`sc-type sc-type-${i + 1} block overflow-hidden font-mono text-[11px] whitespace-nowrap text-bone`}
                  style={
                    {
                      "--w": `${field.value.length}ch`,
                      animationTimingFunction: `steps(${field.value.length}, end)`,
                    } as CSSProperties
                  }
                >
                  {field.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="sc-press relative mt-2.5 flex h-7 items-center justify-center rounded-[2px] border border-accent text-[11px] font-medium">
          <span className="sc-label-a">{demo.publish}</span>
          <span className="sc-label-b absolute inset-0 flex items-center justify-center">
            {demo.published}
          </span>
        </div>
      </div>
    </SceneFrame>
  );
}

/** 2. Le lien se copie, puis part vers chaque canal. */
function ShareScene() {
  return (
    <SceneFrame>
      <div className="w-full max-w-[300px]">
        <div className="flex items-center gap-2 rounded-[3px] border border-bone/15 bg-surface px-3 py-2">
          <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-bone">{demo.link}</span>
          <span className="sc-copy relative shrink-0 rounded-[2px] border border-accent px-2 py-1 font-mono text-[9px] tracking-[0.1em] uppercase">
            <span className="sc-copy-a">{demo.copy}</span>
            <span className="sc-copy-b absolute inset-0 flex items-center justify-center">
              {demo.copied}
            </span>
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-1.5">
          {demo.destinations.map((destination, i) => (
            <li
              key={destination}
              className={`sc-dest sc-dest-${i + 1} flex items-center justify-between rounded-[3px] border border-solid border-bone/15 px-3 py-1.5 text-[11px]`}
            >
              <span>{destination}</span>
              <span className="font-mono text-[9px] tracking-[0.1em] text-accent uppercase">
                {demo.shared}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SceneFrame>
  );
}

/** 3. Les paiements tombent sur le téléphone de l'organisateur. */
function PayScene() {
  return (
    <SceneFrame>
      <div className="relative h-full max-h-full w-[210px] overflow-hidden rounded-[18px] border border-bone/15 bg-surface px-3 pt-7 pb-3">
        <span
          aria-hidden
          className="absolute top-2.5 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-bone/20"
        />
        <p className="mb-2 truncate font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
          {demo.salesTitle}
        </p>
        <ul className="flex flex-col gap-1.5">
          {demo.notifications.map((note, i) => (
            <li
              key={note.title}
              className={cn(
                `sc-note sc-note-${i + 1} rounded-[4px] border-l-2 bg-ink px-2.5 py-2`,
                note.accent ? "border-accent" : "border-bone/40",
              )}
            >
              <p className="text-[11px] leading-tight font-medium">{note.title}</p>
              <p className="mt-0.5 font-mono text-[9px] text-muted">{note.meta}</p>
            </li>
          ))}
        </ul>
      </div>
    </SceneFrame>
  );
}

/** 4. Le billet se fait scanner, puis validé. */
function TicketScene() {
  return (
    <SceneFrame>
      <Ticket
        size="sm"
        notch="bg-ink"
        qrOverlay={
          <span
            aria-hidden
            className="sc-scan absolute inset-x-0 top-0 h-0.5 bg-accent shadow-[0_0_10px_#e89536]"
            style={{ "--scan-h": "58px" } as CSSProperties}
          />
        }
        overlay={
          <span
            aria-hidden
            className="sc-stamp absolute top-1/2 right-4 -translate-y-1/2 rotate-[-10deg] rounded-[2px] border-2 border-ember px-2 py-0.5 font-display text-[16px] font-extrabold tracking-[0.06em] text-ember"
          >
            {demo.validated}
          </span>
        }
      />
    </SceneFrame>
  );
}

const scenes: Record<SceneKey, () => ReactNode> = {
  create: CreateScene,
  share: ShareScene,
  pay: PayScene,
  ticket: TicketScene,
};

/** Maquette produit animée, dans la même boîte qu'une capture d'écran. */
export function Scene({ scene }: { scene: SceneKey }) {
  const Component = scenes[scene];
  return <Component />;
}
