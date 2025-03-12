import { getEventBySlug } from "@/lib/events"
import { notFound } from "next/navigation"
import ViernesPeatonales from "./viernes-peatonales"
import FestivalJineteadaFolclore from "./festival-jineteada-folclore"

export const dynamicParams = true

export default function EventoDetallePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Verificar si existe el evento
  const evento = getEventBySlug(slug)

  if (!evento) {
    notFound()
  }

  // Renderizar páginas específicas para los dos eventos
  if (slug === "viernes-peatonales") {
    return <ViernesPeatonales />
  }

  if (slug === "festival-jineteada-folclore") {
    return <FestivalJineteadaFolclore />
  }

  // Si por alguna razón llegamos aquí, mostrar 404
  return notFound()
}

// Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const evento = getEventBySlug(params.slug)

  if (!evento) {
    return {
      title: "Evento no encontrado | Villa del Dique",
      description: "El evento que estás buscando no existe o ha sido eliminado.",
    }
  }

  return {
    title: `${evento.title} | Eventos Villa del Dique`,
    description: evento.description.substring(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: `${evento.title} | Eventos Villa del Dique`,
      description: evento.description.substring(0, 160).replace(/<[^>]*>/g, ""),
      images: [
        {
          url: evento.image,
          width: 1200,
          height: 630,
          alt: evento.title,
        },
      ],
      type: "event",
    },
  }
}

