# TIKÉ 229 — Landing organisateurs

Billetterie en ligne pour les événements du Bénin. Paiement Mobile Money, billet
QR automatique, 7 % par billet vendu. Un produit GHINEL Labs.

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

## Démarrer

```bash
npm run dev     # http://localhost:3000
npm run build   # build de production
npm run lint
```

## Où se trouve quoi

```
src/
  app/
    globals.css        tokens de design, keyframes, styles de base
    layout.tsx         polices, métadonnées SEO
    page.tsx           assemblage des 11 sections
  content/
    landing.ts         ← TOUT le contenu éditable du site
  components/
    sections/          une section = un fichier
    ui/                Button, Heading, Kicker, Media, QrDots
    site-nav.tsx       barre fixe, devient opaque au scroll
    mobile-cta-bar.tsx rappel d'action mobile après le hero
  hooks/               useScrolledPast, useMediaQuery
  lib/                 cn(), stripePattern()
design/                maquette Claude Design d'origine (référence)
```

## Modifier le contenu

Tout passe par [`src/content/landing.ts`](src/content/landing.ts). Aucun texte
n'est écrit en dur dans le JSX.

### Remplacer un placeholder par une vraie photo

Les visuels manquants s'affichent en aplat rayé légendé. Chaque visuel est un
objet `MediaSource` :

```ts
// avant — placeholder rayé
media: { kind: "placeholder", label: "PHOTO — CONCERTS", hue: 20, sat: 30, light: 14, angle: 25 }

// après — déposer le fichier dans public/images/, puis
media: { kind: "image", src: "/images/concerts.jpg", alt: "Concert à Cotonou" }
```

Les deux variantes occupent la même boîte : la mise en page ne bouge pas.

### Ce qui reste à remplir

| Où | Quoi |
| --- | --- |
| `pricing.plans[0]` et `[2]` | Formules 1 et 3 : nom, prix, cible, contenu |
| `marquee.posters` | 10 affiches pour la bande défilante |
| `universes` | 1 photo par univers (6) |
| `benefits` | 4 captures de l'interface produit |
| `proof.posters` | 4 affiches d'événements réels |
| `proof.testimonials` | 3 témoignages d'organisateurs |
| `emotion.media` | Foule de dos face à la scène |
| `finalCta.media` | Salle qui se remplit, vue de l'entrée |

Une formule passe de brouillon à publiée en changeant `status: "draft"` en
`status: "live"` (le bouton se réactive et la liste quitte le style monospace).

### Réglages

`siteConfig` porte la destination des boutons et deux bascules reprises de la
maquette :

- `appUrl` — **à renseigner** : les six boutons d'action pointent tous dessus
- `navAlwaysOpaque` — la barre reste opaque même en haut de page
- `showMobileCtaBar` — barre d'action fixe en bas d'écran sur mobile

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
`globals.css` — pas un breakpoint Tailwind par défaut.

Les animations sont désactivées sous `prefers-reduced-motion: reduce`.
