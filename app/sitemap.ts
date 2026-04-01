import type { MetadataRoute } from "next";
import { footerLinks, siteConfig } from "@/lib/site";

// Paginas de servico tem prioridade alta (0.9)
const highPriorityPaths = ["/pos-operatorio", "/continuidade-corporal", "/depilacao-laser"];
// Paginas institucionais tem prioridade media-alta (0.8)
const mediumPriorityPaths = ["/sobre", "/como-funciona", "/contato", "/agendamento"];

function getPagePriority(path: string): number {
  if (path === "/") return 1;
  if (highPriorityPaths.includes(path)) return 0.9;
  if (mediumPriorityPaths.includes(path)) return 0.8;
  return 0.6;
}

function getChangeFrequency(path: string): "weekly" | "monthly" | "yearly" {
  if (path === "/") return "weekly";
  if (highPriorityPaths.includes(path)) return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = Array.from(new Set(["/", ...footerLinks.map((item) => item.href)]));
  return unique.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(path),
    priority: getPagePriority(path),
  }));
}
