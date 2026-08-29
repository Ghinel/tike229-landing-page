import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

// Requis par `output: "export"` pour tout Route Handler, métadonnées comprises.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
