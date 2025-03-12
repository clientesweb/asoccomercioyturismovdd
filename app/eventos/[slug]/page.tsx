import { Suspense } from "react"
import EventoDetalleClient from "./EventoDetalleClient"
import { events } from "@/lib/events"

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const evento = events.find((event) => event.slug === params.slug)

  if (!evento) {
    return {
      title: "Evento no encontrado | Villa del Dique",
      description: "El evento que estás buscando no existe o ha sido eliminado.",
    }
  }

  return {
    title: `${evento.title} | Eventos Villa del Dique`,
    description: evento.description.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

