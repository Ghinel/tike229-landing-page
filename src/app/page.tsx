import type { Metadata } from "next";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Benefits } from "@/components/sections/benefits";
import { Emotion } from "@/components/sections/emotion";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Mirror } from "@/components/sections/mirror";
import { PosterMarquee } from "@/components/sections/poster-marquee";
import { Pricing } from "@/components/sections/pricing";
import { Proof } from "@/components/sections/proof";
import { Steps } from "@/components/sections/steps";
import { Ticker } from "@/components/sections/ticker";
import { Universes } from "@/components/sections/universes";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SkipLink } from "@/components/skip-link";
import { sections } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <SkipLink />
      <SiteNav />
      <main id="contenu">
        <Hero />
        {sections.ticker && <Ticker />}
        {sections.marquee && <PosterMarquee />}
        {sections.mirror && <Mirror />}
        {sections.benefits && <Benefits />}
        {sections.universes && <Universes />}
        {sections.steps && <Steps />}
        {sections.pricing && <Pricing />}
        {sections.faq && <Faq />}
        {sections.proof && <Proof />}
        {sections.emotion && <Emotion />}
        {sections.finalCta && <FinalCta />}
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
