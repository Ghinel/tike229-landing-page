import type { CSSProperties } from "react";

import { mirror } from "@/content/landing";

import { Heading } from "../ui/heading";

/**
 * Le constat : ce que vit l'organisateur aujourd'hui. Au défilement, la liste
 * de ses responsabilités s'allume ligne par ligne ; BILLETTERIE, elle, est
 * rayée — c'est celle que TIKÉ 229 lui retire.
 */
export function Mirror() {
  return (
    <section className="mirror relative flex flex-col gap-12 bg-ink px-6 py-30 wide:flex-row">
      <div className="max-w-[680px] flex-1">
        <Heading as="p" className="reveal mb-10">
          {mirror.title}
        </Heading>

        {mirror.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="reveal mb-7 max-w-[60ch] text-[17px] leading-[1.7] last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="flex flex-row flex-wrap gap-2 font-mono text-[11px] tracking-[0.08em] text-muted wide:flex-col wide:flex-nowrap wide:items-end wide:[writing-mode:vertical-rl]">
        {mirror.checklist.map((item, i) => (
          <li key={item} className="mirror-item" style={{ "--i": i } as CSSProperties}>
            {item}
          </li>
        ))}
        <li className="text-accent">
          <span className="mirror-strike relative">{mirror.checklistAccent}</span>
          <span className="mirror-tag ms-2 text-bone/70">· {mirror.checklistTag}</span>
        </li>
      </ul>
    </section>
  );
}
