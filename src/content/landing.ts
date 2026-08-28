import type { Stripe } from "@/lib/stripe";

/* -------------------------------------------------------------------------
 * Types
 * ---------------------------------------------------------------------- */

/**
 * Un visuel est soit une vraie image, soit un placeholder rayé.
 * Pour livrer une photo : remplacer l'objet par
 * `{ kind: "image", src: "/images/ma-photo.jpg", alt: "…" }`.
 */
export type MediaSource =
  | { kind: "image"; src: string; alt: string }
  | ({ kind: "placeholder"; label: string } & Stripe);

export type Link = { label: string; href: string };

/** Titre en deux morceaux, la partie `accent` s'affiche en orange. */
export type SplitHeading = { before?: string; accent: string; after?: string };

export type Benefit = { text: string; media: MediaSource; offset: boolean };

export type Universe = {
  name: string;
  meta: string;
  span: "rows" | "cols" | null;
  media: MediaSource;
};

export type Step = { n: string; title: string; desc: string };

export type PricingPlan = {
  index: string;
  name: string;
  featured: boolean;
  price: { amount: string; unit: string } | null;
  tagline: string | null;
  features: string[];
  cta: string;
  /** `draft` : contenu encore à définir, rendu en mono/gris. */
  status: "live" | "draft";
};

export type ProofPoster = { caption: string; media: MediaSource };

export type Testimonial = { author: string; quote: string; media: MediaSource };

export type HeroAside = {
  media: MediaSource;
  /** Position et taille de la vignette flottante. */
  className: string;
  /** Décalage d'animation à l'apparition, en millisecondes. */
  delay: number;
};

/* -------------------------------------------------------------------------
 * Réglages
 * ---------------------------------------------------------------------- */

export const siteConfig = {
  name: "TIKÉ 229",
  publisher: "GHINEL Labs",
  email: "support@ghinel.com",
  url: "https://tike229.com",
  /** Destination de tous les boutons d'action. ← REMPLACER par l'URL réelle. */
  appUrl: "https://app.tike229.com/inscription",
  description:
    "TIKÉ 229 met votre billetterie en ligne et réunit les événements du Bénin au même endroit. Paiement Mobile Money, billet QR automatique, 7 % par billet vendu.",
  /** La barre de navigation reste opaque même en haut de page. */
  navAlwaysOpaque: false,
  /** Barre d'appel à l'action fixe en bas d'écran sur mobile. */
  showMobileCtaBar: true,
};

export const primaryCta = "Créer ma billetterie";

export const nav: { links: Link[]; cta: string } = {
  links: [
    { label: "Univers", href: "#univers" },
    { label: "Comment ça marche", href: "#comment" },
    { label: "Tarifs", href: "#tarifs" },
  ],
  cta: primaryCta,
};

/* -------------------------------------------------------------------------
 * 01 — Hero
 * ---------------------------------------------------------------------- */

export const hero: {
  lines: { text: string; accent: boolean }[];
  body: string;
  cta: string;
  secondary: Link;
  kicker: string;
  main: MediaSource;
  asides: HeroAside[];
} = {
  lines: [
    { text: "Faites vivre l'événement.", accent: false },
    { text: "On s'occupe des billets.", accent: true },
  ],
  body: "TIKÉ 229 met votre billetterie en ligne et réunit les événements du Bénin au même endroit. Vos billets se vendent en Mobile Money, votre public reçoit son QR immédiatement.",
  cta: primaryCta,
  secondary: { label: "Voir la billetterie →", href: "#univers" },
  kicker: "EN LIGNE · MOBILE MONEY · BILLET QR · 7 % PAR BILLET",
  main: {
    kind: "image",
    src: "/images/hero-foule.jpg",
    alt: "Foule en train de danser face à la scène lors d'un festival de plage au Bénin",
  },
  asides: [
    {
      media: {
        kind: "image",
        src: "/images/hero-humoriste.jpg",
        alt: "Humoriste au micro sur scène devant une salle comble",
      },
      className: "top-[14%] right-[6%] h-[280px] w-[220px]",
      delay: 200,
    },
    {
      media: {
        kind: "image",
        src: "/images/hero-rooftop.jpg",
        alt: "Soirée sur un rooftop éclairé de nuit",
      },
      className: "right-[26%] bottom-[-40px] h-[150px] w-[180px]",
      delay: 350,
    },
  ],
};

/* -------------------------------------------------------------------------
 * 02 — Bande d'affiches
 * ---------------------------------------------------------------------- */

export const marquee: { kicker: string; posters: MediaSource[] } = {
  kicker: "TOUS LES ÉVÉNEMENTS DU BÉNIN. UN SEUL ENDROIT.",
  posters: [10, 30, 200, 340, 20, 10, 30, 200, 340, 20].map((hue) => ({
    kind: "placeholder",
    label: "AFFICHE — À COMPLÉTER",
    hue,
    sat: 30,
    light: 15,
    angle: 15,
  })),
};

/* -------------------------------------------------------------------------
 * 03 — Le miroir
 * ---------------------------------------------------------------------- */

export const mirror = {
  title: "Organiser un événement, c'est déjà assez de travail.",
  paragraphs: [
    "Les paiements arrivent sur trois numéros Mobile Money différents. Les confirmations se perdent dans une conversation WhatsApp à 400 messages. Le jour J, quelqu'un coche des noms sur une feuille imprimée pendant que la file s'allonge. Et deux billets identiques se présentent à l'entrée.",
    "Vous ne saurez ce que l'événement a réellement fait que le lendemain.",
  ],
  checklist: ["ARTISTES", "LIEU", "COMMUNICATION", "PARTENAIRES", "PUBLIC"],
  checklistAccent: "BILLETTERIE",
};

/* -------------------------------------------------------------------------
 * 04 — Bénéfices
 * ---------------------------------------------------------------------- */

export const benefitsHeading: SplitHeading = {
  before: "Vous créez l'événement. ",
  accent: "TIKÉ 229",
  after: " vous aide à le remplir.",
};

export const benefits: Benefit[] = [
  {
    text: "Votre événement en ligne en quelques minutes. Titre, date, lieu, catégories de billets et tarifs.",
    offset: false,
    media: {
      kind: "placeholder",
      label: "CAPTURE — CRÉATION D'ÉVÉNEMENT",
      hue: 210,
      sat: 35,
      light: 16,
      angle: 12,
    },
  },
  {
    text: "Un lien unique à partager partout. WhatsApp, Instagram, vos affiches, vos stories.",
    offset: true,
    media: {
      kind: "placeholder",
      label: "CAPTURE — LIEN DE VENTE",
      hue: 20,
      sat: 35,
      light: 16,
      angle: -8,
    },
  },
  {
    text: "Le paiement que votre public utilise déjà. Mobile Money, sans compte à créer, sans carte bancaire.",
    offset: false,
    media: {
      kind: "placeholder",
      label: "CAPTURE — PAIEMENT MOBILE MONEY",
      hue: 25,
      sat: 35,
      light: 16,
      angle: 20,
    },
  },
  {
    text: "Un billet QR par acheteur. Émis automatiquement, récupérable par code e-mail à tout moment.",
    offset: true,
    media: {
      kind: "placeholder",
      label: "CAPTURE — BILLET QR",
      hue: 340,
      sat: 35,
      light: 16,
      angle: -15,
    },
  },
];

/* -------------------------------------------------------------------------
 * 05 — Univers
 * ---------------------------------------------------------------------- */

export const universesHeading = "Quel que soit votre univers, le billet est le même.";

const universeSeeds: { name: string; hue: number; span: "rows" | "cols" | null }[] = [
  { name: "Concerts", hue: 20, span: "rows" },
  { name: "Chills", hue: 35, span: null },
  { name: "Humour", hue: 0, span: null },
  { name: "Culture", hue: 280, span: "cols" },
  { name: "Festivals", hue: 340, span: null },
  { name: "Shows", hue: 15, span: null },
];

export const universes: Universe[] = universeSeeds.map(({ name, hue, span }) => ({
  name,
  meta: "ÉVÉNEMENTS RÉELS — À COMPLÉTER",
  span,
  media: {
    kind: "placeholder",
    label: "PHOTO — " + name.toUpperCase(),
    hue,
    sat: 30,
    light: 14,
    angle: 25,
  },
}));

/* -------------------------------------------------------------------------
 * 06 — Comment ça marche
 * ---------------------------------------------------------------------- */

export const stepsHeading = "Comment ça marche";

export const steps: Step[] = [
  { n: "01", title: "CRÉEZ", desc: "Votre événement, vos catégories de billets, vos tarifs." },
  { n: "02", title: "PARTAGEZ", desc: "Un lien unique, partout où vous communiquez déjà." },
  { n: "03", title: "VENDEZ", desc: "Votre public paie en Mobile Money et reçoit son billet." },
  { n: "04", title: "FAITES VIVRE", desc: "Vous ouvrez les portes. Chaque billet porte son QR." },
];

/* -------------------------------------------------------------------------
 * 07 — Tarifs
 * ---------------------------------------------------------------------- */

export const pricing: { heading: string; note: string; plans: PricingPlan[] } = {
  heading: "Un prix clair. Vous ne payez que si vous vendez.",
  note: "AUCUN FRAIS D'ENTRÉE · AUCUN ABONNEMENT SUR LA FORMULE ESSENTIEL",
  plans: [
    {
      index: "01",
      name: "FORMULE 1",
      featured: false,
      price: null,
      tagline: null,
      features: ["À REMPLIR — PRIX", "À REMPLIR — CIBLE", "À REMPLIR — INCLUS"],
      cta: "À REMPLIR",
      status: "draft",
    },
    {
      index: "02",
      name: "ESSENTIEL",
      featured: true,
      price: { amount: "7", unit: "%" },
      tagline: "par billet vendu · Tout organisateur qui démarre",
      features: [
        "Événement en ligne",
        "Lien de vente unique",
        "Paiement Mobile Money",
        "Billet QR automatique",
        "Récupération par e-mail",
      ],
      cta: primaryCta,
      status: "live",
    },
    {
      index: "03",
      name: "FORMULE 3",
      featured: false,
      price: null,
      tagline: null,
      features: ["À REMPLIR — PRIX", "À REMPLIR — CIBLE", "À REMPLIR — INCLUS"],
      cta: "À REMPLIR",
      status: "draft",
    },
  ],
};

/* -------------------------------------------------------------------------
 * 08 — Preuve
 * ---------------------------------------------------------------------- */

export const proof: { heading: string; posters: ProofPoster[]; testimonials: Testimonial[] } = {
  heading: "Ils sont déjà passés par TIKÉ 229.",
  posters: [10, 30, 200, 340].map((hue) => ({
    caption: "ÉVÉNEMENT RÉEL — À COMPLÉTER",
    media: {
      kind: "placeholder",
      label: "AFFICHE ÉVÉNEMENT",
      hue,
      sat: 30,
      light: 16,
      angle: 20,
    },
  })),
  testimonials: Array.from({ length: 3 }, () => ({
    author: "ORGANISATEUR — À COMPLÉTER",
    quote: "Témoignage à venir.",
    media: {
      kind: "placeholder" as const,
      label: "",
      hue: 30,
      sat: 20,
      light: 20,
      angle: 45,
    },
  })),
};

/* -------------------------------------------------------------------------
 * 09 — Moment émotionnel
 * ---------------------------------------------------------------------- */

export const emotion: { quote: string; sub: string; media: MediaSource } = {
  quote: "Les meilleurs événements ne se racontent pas. Ils se vivent.",
  sub: "Vous vous occupez de ça. Nous, des billets.",
  media: {
    kind: "placeholder",
    label: "PHOTO — FOULE DE DOS FACE À LA SCÈNE",
    hue: 10,
    sat: 25,
    light: 12,
    angle: -6,
  },
};

/* -------------------------------------------------------------------------
 * 10 — Appel final
 * ---------------------------------------------------------------------- */

export const finalCta: { heading: string; cta: string; note: string; media: MediaSource } = {
  heading: "Votre prochain événement commence ici.",
  cta: "Publier mon événement sur TIKÉ 229",
  note: "7 % par billet vendu. Rien d'autre.",
  media: {
    kind: "placeholder",
    label: "PHOTO — SALLE QUI SE REMPLIT, VUE DE L'ENTRÉE",
    hue: 20,
    sat: 30,
    light: 10,
    angle: 8,
  },
};

/* -------------------------------------------------------------------------
 * 11 — Pied de page
 * ---------------------------------------------------------------------- */

export const footer: { byline: string; links: Link[] } = {
  byline: "Un produit " + siteConfig.publisher,
  links: [
    { label: "Conditions d'utilisation", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: siteConfig.email, href: "mailto:" + siteConfig.email },
  ],
};
