import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";
import { SkipLink } from "./skip-link";
import { Heading } from "./ui/heading";
import { Kicker } from "./ui/kicker";

type LegalPageProps = {
  kicker: string;
  title: string;
  /** Date de dernière mise à jour, telle qu'affichée (ex. « 1er septembre 2026 »). */
  updated?: string;
  children: ReactNode;
};

/** Gabarit des pages CGU, confidentialité et mentions légales. */
export function LegalPage({ kicker, title, updated, children }: LegalPageProps) {
  return (
    <>
      <SkipLink />
      <SiteNav />
      <main id="contenu" className="px-6 pt-36 pb-24">
        <Kicker className="mb-4">{kicker}</Kicker>
        <Heading as="h1" size="lg" className="mb-4 max-w-[800px]">
          {title}
        </Heading>
        {updated ? (
          <p className="mb-12 font-mono text-[11px] tracking-[0.05em] text-muted">
            Dernière mise à jour : {updated}
          </p>
        ) : null}
        <div className="legal-prose">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
