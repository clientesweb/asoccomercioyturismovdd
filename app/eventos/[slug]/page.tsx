import { Suspense } from "react"
import EventoDetalleClient from "./EventoDetalleClient"
import { events } from "@/lib/events"
import type { Metadata } from "next"

export const dynamicParams = true

// Generar rutas estáticas para los eventos conocidos
export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export default function EventoDetallePage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <EventoDetalleClient slug={params.slug} />
    </Suspense>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const evento = events.find((event) => event.slug === params.slug)

  if (!evento) {
    return {
      title: "Evento no encontrado | Villa del Dique",
      description: "El evento que estás buscando no existe o ha sido eliminado.",
    }
  }

  // Metadata específica para Pascuas Serranas 2025
  if (params.slug === "pascuas-serranas-2025") {
    return {
      title: "Pascuas Serranas 2025: Tradición, sabor y cultura | Villa del Dique",
      description:
        "Disfruta de la edición 2025 de Pascuas Serranas en Villa del Dique con degustación de pejerrey, música en vivo, actividades para toda la familia y una amplia propuesta gastronómica. 19 de abril de 2025.",
      keywords: [
        "Pascuas Serranas 2025",
        "Villa del Dique",
        "Semana Santa",
        "Pejerrey",
        "Eventos Córdoba",
        "Turismo Calamuchita",
        "Gastronomía",
        "Música en vivo",
        "Folklore",
      ],
      openGraph: {
        title: "Pascuas Serranas 2025: Tradición, sabor y cultura | Villa del Dique",
        description:
          "Disfruta de la edición 2025 de Pascuas Serranas en Villa del Dique con degustación de pejerrey, música en vivo, actividades para toda la familia y una amplia propuesta gastronómica.",
        url: `https://www.villadeldique.org/eventos/pascuas-serranas-2025`,
        siteName: "Villa del Dique - Turismo y Comercio",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_489520611_18072294655871230_1356147591489562096_n.jpg-Q0dAZXRWD9KZLV4v2sXMrjhBjA95Th.jpeg",
            width: 1200,
            height: 630,
            alt: "Pascuas Serranas 2025 - Villa del Dique",
          },
        ],
        locale: "es_AR",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pascuas Serranas 2025: Tradición, sabor y cultura | Villa del Dique",
        description:
          "Disfruta de la edición 2025 de Pascuas Serranas en Villa del Dique con degustación de pejerrey, música en vivo, actividades para toda la familia.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_489520611_18072294655871230_1356147591489562096_n.jpg-Q0dAZXRWD9KZLV4v2sXMrjhBjA95Th.jpeg",
        ],
      },
      alternates: {
        canonical: `https://www.villadeldique.org/eventos/pascuas-serranas-2025`,
      },
    }
  }

  // Metadata para otros eventos
  return {
    title: `${evento.title} | Eventos Villa del Dique`,
    description: evento.description.substring(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: `${evento.title} | Eventos Villa del Dique`,
      description: evento.description.substring(0, 160).replace(/<[^>]*>/g, ""),
      url: `https://www.villadeldique.org/eventos/${evento.slug}`,
      siteName: "Villa del Dique - Turismo y Comercio",
      images: [
        {
          url: evento.image,
          width: 1200,
          height: 630,
          alt: evento.title,
        },
      ],
      locale: "es_AR",
      type: "article",
    },
  }
}
