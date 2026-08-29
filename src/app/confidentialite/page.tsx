import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
};

/**
 * Structure à compléter avec le texte définitif (cadre : loi n° 2017-20
 * portant Code du numérique en République du Bénin, autorité : APDP), puis
 * passer `siteConfig.legalPublished` à `true` pour publier et lier la page.
 */
export default function Page() {
  if (!siteConfig.legalPublished) notFound();

  return (
    <LegalPage kicker="CONFIDENTIALITÉ" title="Politique de confidentialité">
      {/* Identité et coordonnées du responsable du traitement (GHINEL Labs). */}
      <h2>1. Responsable du traitement</h2>

      {/* Organisateurs : identité, contact, coordonnées de reversement. Acheteurs : numéro Mobile Money, e-mail, billets. */}
      <h2>2. Données collectées</h2>

      {/* Émission et contrôle des billets, reversements, support, statistiques de vente. */}
      <h2>3. Finalités</h2>

      {/* Exécution du contrat, obligation légale, intérêt légitime, consentement. */}
      <h2>4. Base légale</h2>

      {/* Durées par catégorie de données. */}
      <h2>5. Durée de conservation</h2>

      {/* Opérateurs Mobile Money, hébergeur, prestataires d'e-mail ; pas de vente de données. */}
      <h2>6. Destinataires</h2>

      {/* Accès, rectification, effacement, opposition ; modalités d'exercice ; recours auprès de l'APDP. */}
      <h2>7. Vos droits</h2>

      {/* Ce site : mesure d'audience Cloudflare Web Analytics sans cookie. L'application : à décrire. */}
      <h2>8. Cookies et mesure d’audience</h2>

      <h2>9. Contact</h2>
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPage>
  );
}
