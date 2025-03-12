import type { MetadataRoute } from "next"

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

  // Aquí podrías agregar páginas dinámicas como noticias y eventos
  // Esto sería ideal hacerlo de forma dinámica con datos reales
  const noticiasPages = [
    "asociacion-renovo-autoridades-comisiones-asesoras",
    "asamblea-general-turismo-participacion-asociacion",
    "turismo-villa-dique-crecio-interanual",
    "analisis-sector-turistico-villa-dique-2025",
    "nuevos-cursos-seminarios-desarrollo-turistico",
    "actividad-turistica-aumento-diciembre",
    "villa-dique-promociona-ferias-internacionales",
    "villa-dique-feria-turismo-madrid",
  ].map((slug) => ({
    url: `${baseUrl}/noticias/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  const eventosPages = [
    "mercados-mundo-oportunidades-brasil",
    "la-agi-impacto-comunidad",
    "perspectivas-economicas-segundo-trimestre",
    "foro-comercio-internacional-mercados-asia",
    "webinar-transformacion-digital-comercio-minorista",
  ].map((slug) => ({
    url: `${baseUrl}/eventos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  return [...staticPages, ...noticiasPages, ...eventosPages]
}

