import { faq } from "@/content/landing";

import { Heading } from "../ui/heading";
import { Kicker } from "../ui/kicker";

/** Les objections les plus courantes, en accordéons natifs — sans JavaScript. */
export function Faq() {
  return (
    <section
      id="questions"
      className="relative scroll-mt-24 border-t-2 border-dashed border-bone/15 bg-ink px-6 py-25"
    >
      <Kicker className="reveal mb-4">{faq.kicker}</Kicker>
      <Heading className="reveal mb-12 max-w-[720px]">{faq.heading}</Heading>

      <div className="max-w-[760px] border-t border-dashed border-bone/25">
        {faq.items.map((item) => (
          <details key={item.q} className="group reveal border-b border-dashed border-bone/25">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg leading-snug font-medium transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="shrink-0 font-mono text-xl text-accent transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[60ch] pb-6 text-base leading-relaxed text-bone/85">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
