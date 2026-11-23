import { MetadataRoute } from "next";
import { ALUMINIUM_SERIES_DATA } from "@/data/products-aluminium";
import { FACADE_SYSTEMS_DATA } from "@/data/products-facade";
import { PROJECTS_DATA } from "@/data/projects";
import { BLOGS_DATA } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alutecksystems.com";

  // Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/products/system-aluminium",
    "/products/facade-systems",
    "/products/upvc-windows",
    "/products/upvc-doors",
    "/projects",
    "/blogs",
    "/locate-us",
    "/customer-complaint",
    "/faq",
    "/cookie-policy",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 11 Aluminium Series Pages
  const aluminiumRoutes = ALUMINIUM_SERIES_DATA.map((s) => ({
    url: `${baseUrl}/products/system-aluminium/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 8 Façade Systems Pages
  const facadeRoutes = FACADE_SYSTEMS_DATA.map((f) => ({
    url: `${baseUrl}/products/facade-systems/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Projects Pages
  const projectRoutes = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blogs Pages
  const blogRoutes = BLOGS_DATA.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...aluminiumRoutes,
    ...facadeRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
