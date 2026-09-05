import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tools.astar.sh/sitemap.xml",
    host: "https://tools.astar.sh",
  };
}
