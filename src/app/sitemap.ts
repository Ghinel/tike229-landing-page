import type { MetadataRoute } from "next";

import { footer } from "@/content/landing";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const legal: MetadataRoute.Sitemap = siteConfig.legalPublished
    ? footer.legalLinks.map((link) => ({
        url: siteConfig.url + link.href,
        lastModified,
        changeFrequency: "yearly",
        priority: 0.3,
      }))
    : [];

  return [{ url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 }, ...legal];
}
