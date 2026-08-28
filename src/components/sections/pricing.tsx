import type { PricingPlan } from "@/content/landing";
import { pricing, siteConfig } from "@/content/landing";
import { cn } from "@/lib/cn";

import { Button, ButtonLink } from "../ui/button";
import { Heading } from "../ui/heading";
import { Kicker } from "../ui/kicker";

function PlanCard({ plan }: { plan: PricingPlan }) {
  const draft = plan.status === "draft";

  return (
    <article
      className={cn(
        "relative min-w-[82vw] snap-center rounded-md border bg-ink wide:min-w-0",
        plan.featured
          ? "flex-[1.1] border-accent px-[30px] py-9 shadow-[0_0_48px_rgba(232,149,54,0.22)]"
          : "flex-1 border-bone/12 px-7 py-8",
      )}
    >
      <span
        className={cn(
          "absolute top-4 right-5 font-mono text-[11px]",
          plan.featured ? "text-accent" : "text-muted",
        )}
      >
        {plan.index}
      </span>

      <h3 className="mb-6 font-display text-xl font-extrabold">{plan.name}</h3>

      {plan.price ? (
        <p className="mb-5 flex items-baseline gap-1.5 text-accent">
          <span className="font-display text-7xl font-extrabold tracking-[-0.03em]">
            {plan.price.amount}
          </span>
          <span className="text-[28px]">{plan.price.unit}</span>
        </p>
      ) : null}

      {plan.tagline ? <p className="mb-5 text-sm">{plan.tagline}</p> : null}

      <ul
        className={cn(
          draft
            ? "font-mono text-[13px] leading-loose text-muted"
            : "border-t border-dashed border-bone/25 pt-4.5 text-sm leading-[1.9]",
        )}
      >
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {draft ? (
        <Button variant="outline" size="sm" className="mt-6 w-full" disabled>
          {plan.cta}
        </Button>
      ) : (
        <ButtonLink
          href={siteConfig.appUrl}
          variant={plan.featured ? "accent" : "outline"}
          size="sm"
          className="mt-6 w-full"
        >
          {plan.cta}
        </ButtonLink>
      )}
    </article>
  );
}

export function Pricing() {
  return (
    <section id="tarifs" className="relative scroll-mt-24 bg-surface px-6 py-25">
      <Heading className="mb-3">{pricing.heading}</Heading>

      <div className="mt-14 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-2 wide:overflow-visible wide:pb-0">
        {pricing.plans.map((plan) => (
          <PlanCard key={plan.index} plan={plan} />
        ))}
      </div>

      <Kicker className="mt-10 text-center">{pricing.note}</Kicker>
    </section>
  );
}
