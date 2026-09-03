import type { MetadataRoute } from "next";

const routes = ["", "/contributing", "/editorial-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://tools.astar.sh${route}`,
    lastModified: "2026-09-03",
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.4,
  }));
}
