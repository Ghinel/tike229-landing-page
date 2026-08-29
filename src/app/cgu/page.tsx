import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  alternates: { canonical: "/cgu" },
};

/**
 * Structure à compléter avec le texte définitif, puis passer
 * `siteConfig.legalPublished` à `true` pour publier et lier la page.
 */
export default function Page() {
  if (!siteConfig.legalPublished) notFound();

  return (
    <LegalPage kicker="CONDITIONS D’UTILISATION" title="Conditions d’utilisation de TIKÉ 229">
      {/* Objet du service, qui peut l'utiliser, acceptation des conditions. */}
      <h2>1. Objet</h2>

      {/* Ce que fait TIKÉ 229 : mise en ligne, lien de vente, encaissement Mobile Money, billet QR. */}
      <h2>2. Le service</h2>

      {/* Création du compte, exactitude des informations, responsabilité de l'organisateur sur son événement. */}
      <h2>3. Compte organisateur</h2>

      {/* 7 % par billet vendu, modalités et délais de reversement, frais des opérateurs Mobile Money. */}
      <h2>4. Commission et reversements</h2>

      {/* Émission du billet, unicité du QR, récupération par e-mail, annulation et remboursement. */}
      <h2>5. Billets, contrôle d’accès et remboursements</h2>

      {/* Ce que TIKÉ 229 garantit, ce qu'il ne garantit pas (déroulement de l'événement, réseau des opérateurs). */}
      <h2>6. Responsabilités</h2>

      {/* Renvoi vers la politique de confidentialité. */}
      <h2>7. Données personnelles</h2>

      {/* Droit béninois, règlement amiable, juridiction compétente. */}
      <h2>8. Droit applicable</h2>

      <h2>9. Contact</h2>
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPage>
  );
}
