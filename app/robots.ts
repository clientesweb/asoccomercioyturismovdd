import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://vivivilladeldique.org/sitemap.xml",
    host: "https://vivivilladeldique.org",
  }
}

