import type { MetadataRoute } from "next";
import { editions } from "@/data/editions";

const BASE = "https://qtric.sut.ac.th/qff2026";

const staticRoutes = [
  { path: "", priority: 1.0 },
  { path: "/register", priority: 0.95 },
  { path: "/editions", priority: 0.9 },
  { path: "/programme", priority: 0.9 },
  { path: "/learn", priority: 0.85 },
  { path: "/about", priority: 0.8 },
  { path: "/speakers", priority: 0.7 },
  { path: "/committee", priority: 0.6 },
  { path: "/partners", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/news", priority: 0.5 },
  { path: "/qtric", priority: 0.4 },
  { path: "/contact", priority: 0.5 },
  { path: "/code-of-conduct", priority: 0.3 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r.path}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r.priority,
    })),
    ...editions.map((e) => ({
      url: `${BASE}/editions/${e.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
