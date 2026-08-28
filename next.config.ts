import type { NextConfig } from "next";

/**
 * Le site est déployé en statique sur Cloudflare Pages : `output: "export"`
 * produit un dossier `out/` de fichiers plats, et l'optimiseur d'images de
 * Next — qui réclame un serveur — cède la place aux fichiers d'origine.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
