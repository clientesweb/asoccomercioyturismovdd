import EventoDetalleClient from "./EventoDetalleClient"
import { getEventBySlug } from "@/lib/events"
import { notFound } from "next/navigation"

export const dynamicParams = true

export default function EventoDetallePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Verificar si existe el evento
  const evento = getEventBySlug(slug)

  // Si no se encuentra el evento, mostrar la página 404
  if (!evento) {
    notFound()
  }

  // Pasamos el evento directamente al componente cliente en lugar del slug
  // Esto evita tener que volver a buscar el evento en el cliente
  return <EventoDetalleClient evento={evento} />
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

