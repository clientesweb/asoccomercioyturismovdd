import type { MetadataRoute } from "next"
import { events } from "@/lib/events"
import { articles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.org"

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eventos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/institucional/historia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/institucional/autoridades`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/asesoramiento`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/capacitacion`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap

  // Páginas de eventos
  const eventosPages = events.map((evento) => ({
    url: `${baseUrl}/eventos/${evento.slug}`,
    lastModified: new Date(),
    changeFrequency: evento.slug === "pascuas-serranas-2025" ? "daily" : "weekly",
    priority: evento.slug === "pascuas-serranas-2025" ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap

  // Páginas de noticias
  const noticiasPages = articles.map((articulo) => ({
    url: `${baseUrl}/noticias/${articulo.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  return [...staticPages, ...eventosPages, ...noticiasPages]
}
