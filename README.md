# TIKÉ 229 — Landing organisateurs

Billetterie en ligne pour les événements du Bénin. Paiement Mobile Money, billet
QR automatique, 7 % par billet vendu. Un produit GHINEL Labs.

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

## Démarrer

```bash
npm ci          # installation reproductible depuis le lockfile
npm run dev     # http://localhost:3000
npm run build   # export statique dans out/ (inclut la vérification TypeScript)
npm run lint
```

Le workflow GitHub Actions (`.github/workflows/ci.yml`) exécute `lint` puis
`build` sur chaque pull request et chaque poussée sur `main`.

## Où se trouve quoi

```
src/
  app/
    globals.css          tokens de design, keyframes, styles de base, .reveal, .legal-prose
    layout.tsx           polices, métadonnées SEO, viewport, JSON-LD, analytics
    page.tsx             assemblage des sections (selon les drapeaux de site.ts)
    not-found.tsx        page 404 (→ out/404.html)
    opengraph-image.tsx  image de partage générée au build (1200 × 630)
    robots.ts            robots.txt
    sitemap.ts           sitemap.xml
    cgu/, confidentialite/, mentions-legales/   pages légales (gardées par un drapeau)
  assets/fonts/          TTF utilisés par l'image Open Graph
  content/
    site.ts              ← RÉGLAGES : URL, drapeaux de sections, jeton analytics, nav
    landing.ts           ← CONTENU : tous les textes et visuels des sections
  components/
    sections/            une section = un fichier
    ui/                  Button, Heading, Kicker, Media, QrDots
    site-nav.tsx         barre fixe, menu mobile, devient opaque au scroll
    site-footer.tsx      pied de page (liens légaux quand ils sont publiés)
    mobile-cta-bar.tsx   rappel d'action mobile après le hero
    legal-page.tsx       gabarit des pages légales
    skip-link.tsx        lien d'évitement clavier
  hooks/                 useScrolledPast, useMediaQuery
  lib/                   cn(), stripePattern(), ctaHref(), WIDE_QUERY
public/
  _headers               en-têtes Cloudflare Pages (sécurité, cache, type de l'image OG)
  images/                photos servies telles quelles (voir plus bas)
design/                  maquette Claude Design d'origine et photos sources (référence)
```

## Modifier le contenu

Les textes passent par [`src/content/landing.ts`](src/content/landing.ts), les
réglages par [`src/content/site.ts`](src/content/site.ts). Aucun texte n'est
écrit en dur dans le JSX.

### Afficher ou masquer une section

`sections` dans `site.ts` liste les sections de la page d'accueil. Celles dont
le contenu réel n'existe pas encore (`marquee`, `proof`) sont à `false` : elles
ne sont pas rendues plutôt que d'afficher des placeholders au public.

### Remplacer un placeholder par une vraie photo

Les visuels manquants s'affichent en aplat rayé. Chaque visuel est un objet
`MediaSource` :

```ts
// avant — placeholder rayé
media: { kind: "placeholder", label: "PHOTO — CONCERTS", hue: 20, sat: 30, light: 14, angle: 25 }

// après — déposer le fichier dans public/images/, puis
media: { kind: "image", src: "/images/concerts.jpg", alt: "Concert à Cotonou" }
```

Les deux variantes occupent la même boîte : la mise en page ne bouge pas. La
légende du placeholder (`label`) n'est affichée qu'en développement (`next
dev`), jamais dans le build de production.

### Tarifs

Seules les formules `status: "live"` sont rendues. Passer une formule de
`"draft"` à `"live"` la publie ; avec une seule formule, la carte s'aligne à
gauche sur 520 px.

### Ce qui reste à fournir

| Où | Quoi |
| --- | --- |
| `siteConfig.url` | Confirmer le domaine de production (alimente Open Graph, canonique, sitemap) |
| `src/app/cgu`, `confidentialite`, `mentions-legales` | Rédiger les textes, puis `siteConfig.legalPublished = true` |
| `siteConfig.cloudflareAnalyticsToken` | Jeton Cloudflare Web Analytics (tableau de bord → Analytics & Logs → Web Analytics) |
| `public/images/hero-foule.webp` | Version 1 920 px de large ou plus (l'original fait 1 376 px et s'affiche flou sur grand écran) |
| `pricing.plans[0]` et `[2]` | Formules 1 et 3 : nom, prix, cible, contenu |
| `marquee.posters` puis `sections.marquee = true` | 10 affiches pour la bande défilante |
| `universes` | 1 photo par univers (6) |
| `benefits` | 4 captures de l'interface produit |
| `proof` puis `sections.proof = true` | 4 affiches d'événements réels, 3 témoignages |
| `emotion.media` | Foule de dos face à la scène |
| `finalCta.media` | Salle qui se remplit, vue de l'entrée |

### Boutons d'action

Les six boutons mènent à `siteConfig.appUrl` via `ctaHref("hero")`, qui ajoute
`utm_source=landing&utm_medium=cta&utm_content=<emplacement>` : l'application
peut distinguer les arrivées depuis la landing, bouton par bouton.

### Typographie française

Les « 7 % » utilisent une espace fine insécable (U+202F) pour ne jamais se
couper en fin de ligne ; les apostrophes sont typographiques (’).

## Design system

| Rôle | Token | Valeur |
| --- | --- | --- |
| Fond | `bg-ink` | `#000000` |
| Fond alterné | `bg-surface` | `#0f0d12` |
| Texte | `text-bone` | `#f7f4f1` |
| Texte secondaire | `text-muted` | `#8e8792` |
| Accent | `text-accent` | `#e89536` |
| Halo | `--color-ember` | `#c63e1e` |

Titres en Bricolage Grotesque 800, corps en Inter, étiquettes en JetBrains Mono.
Le motif récurrent est le **bord pointillé** (`border-2 border-dashed
border-bone/30`) : il rappelle la perforation d'un billet.

Le point de bascule mobile/desktop est le variant `wide:` (900 px), défini dans
`globals.css` et repris en JS par `WIDE_QUERY` — pas un breakpoint Tailwind par
défaut.

La classe `reveal` fait apparaître un élément à l'entrée dans l'écran, en CSS
pur (`animation-timeline: view()`) ; les navigateurs sans cette fonctionnalité
affichent le contenu tel quel. Toutes les animations sont désactivées sous
`prefers-reduced-motion: reduce`.

Les hauteurs plein écran utilisent `dvh` pour ne pas sauter quand la barre
d'adresse mobile se replie.

## Déploiement

Le site est **entièrement statique**. `npm run build` produit un dossier `out/`
de fichiers plats, prêt à être servi par n'importe quel hébergeur.

### Cloudflare Pages

| Réglage | Valeur |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Version de Node | lue dans `.node-version` (22) |

Chaque poussée sur `main` redéploie la production ; chaque autre branche reçoit
sa propre URL de preview.

`public/_headers` est copié tel quel dans `out/` : en-têtes de sécurité,
cache immuable sur `/_next/static/`, et `Content-Type: image/png` sur l'image
Open Graph (générée sans extension de fichier).

### Les images doivent être optimisées à la main

L'export statique désactive l'optimiseur de `next/image` — il lui faut un
serveur. Les fichiers de `public/images/` sont donc servis **tels quels**, sans
`srcset` (la prop `sizes` de `Media` est conservée pour un futur loader).

Avant d'ajouter une photo : la redimensionner à sa taille d'affichage réelle
(x2 pour les écrans à densité double) et la convertir en WebP. Les originaux
pleine résolution restent dans `design/photos/`, hors du site publié.
