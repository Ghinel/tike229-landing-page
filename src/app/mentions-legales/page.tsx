import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

/**
 * Structure à compléter avec les informations de l'éditeur, puis passer
 * `siteConfig.legalPublished` à `true` pour publier et lier la page.
 */
export default function Page() {
  if (!siteConfig.legalPublished) notFound();

  return (
    <LegalPage kicker="MENTIONS LÉGALES" title="Mentions légales">
      {/* Raison sociale, forme juridique, capital, siège, RCCM, IFU, directeur de la publication. */}
      <h2>Éditeur</h2>
      <p>{siteConfig.publisher}</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107,
        États-Unis.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>

      {/* Marques, logos, textes et visuels : titulaire des droits, crédits photo. */}
      <h2>Propriété intellectuelle</h2>
    </LegalPage>
  );
}
