import { mirror } from "@/content/landing";

import { Heading } from "../ui/heading";

/** Le constat : ce que vit l'organisateur aujourd'hui. */
export function Mirror() {
  return (
    <section className="relative flex flex-col gap-12 bg-ink px-6 py-30 wide:flex-row">
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
        {mirror.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li className="text-accent">{mirror.checklistAccent}</li>
      </ul>
    </section>
  );
}
