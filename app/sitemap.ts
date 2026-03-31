import type { MetadataRoute } from "next";
import { footerLinks, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = Array.from(new Set(["/", ...footerLinks.map((item) => item.href)]));
  return unique.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
