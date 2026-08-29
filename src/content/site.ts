/* -------------------------------------------------------------------------
 * Réglages du site.
 *
 * Ce fichier est aussi importé par les composants client (barre de
 * navigation, barre d'action mobile) : il ne contient que la configuration,
 * jamais le contenu des sections — celui-ci reste dans `landing.ts` et ne
 * part pas dans le bundle JavaScript.
 * ---------------------------------------------------------------------- */

export const siteConfig = {
  name: "TIKÉ 229",
  publisher: "GHINEL Labs",
  email: "support@ghinel.com",
  /** Domaine de production. Alimente toutes les URL absolues : Open Graph, canonique, sitemap. */
  url: "https://tike229.com",
  /** Destination de tous les boutons d'action : l'application TIKÉ 229. */
  appUrl: "https://tike229.ghinel.com/",
  description:
    "TIKÉ 229 met votre billetterie en ligne et réunit les événements du Bénin au même endroit. Paiement Mobile Money, billet QR automatique, 7 % par billet vendu.",
  /** La barre de navigation reste opaque même en haut de page. */
  navAlwaysOpaque: false,
  /** Barre d'appel à l'action fixe en bas d'écran sur mobile. */
  showMobileCtaBar: true,
  /**
   * Jeton Cloudflare Web Analytics (tableau de bord Cloudflare → Analytics &
   * Logs → Web Analytics → Add a site). Vide : aucun script n'est chargé.
   */
  cloudflareAnalyticsToken: "",
  /**
   * Les pages /cgu, /confidentialite et /mentions-legales ne sont servies
   * et liées depuis le pied de page qu'une fois leur texte rédigé.
   */
  legalPublished: false,
};

export type SectionKey =
  | "marquee"
  | "mirror"
  | "benefits"
  | "universes"
  | "steps"
  | "pricing"
  | "faq"
  | "proof"
  | "emotion"
  | "finalCta";

/**
 * Sections rendues sur la page d'accueil. Une section dont le contenu réel
 * n'est pas encore là reste masquée plutôt que d'afficher des placeholders.
 */
export const sections: Record<SectionKey, boolean> = {
  marquee: false,
  mirror: true,
  benefits: true,
  universes: true,
  steps: true,
  pricing: true,
  faq: true,
  proof: false,
  emotion: true,
  finalCta: true,
};

export const primaryCta = "Créer ma billetterie";

export const nav: { links: { label: string; href: string }[]; cta: string } = {
  links: [
    { label: "Univers", href: "#univers" },
    { label: "Comment ça marche", href: "#comment" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Questions", href: "#questions" },
  ],
  cta: primaryCta,
};

/* Entre « 7 » et « % » : espace fine insécable (U+202F), le pourcentage ne se coupe jamais. */
export const mobileCta = { note: "7 % / BILLET" };
