import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Benefits } from "@/components/sections/benefits";
import { Emotion } from "@/components/sections/emotion";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Mirror } from "@/components/sections/mirror";
import { PosterMarquee } from "@/components/sections/poster-marquee";
import { Pricing } from "@/components/sections/pricing";
import { Proof } from "@/components/sections/proof";
import { Steps } from "@/components/sections/steps";
import { Universes } from "@/components/sections/universes";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <PosterMarquee />
        <Mirror />
        <Benefits />
        <Universes />
        <Steps />
        <Pricing />
        <Proof />
        <Emotion />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
