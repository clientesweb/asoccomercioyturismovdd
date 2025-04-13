"use client"

import { useEffect, useState } from "react"
import type { Event } from "@/lib/events"

interface EventSchemaProps {
  event: Event
}

export default function EventSchema({ event }: EventSchemaProps) {
  const [baseUrl, setBaseUrl] = useState("")

  useEffect(() => {
    setBaseUrl(window.location.origin)
  }, [])

  // Convertir la fecha del evento a formato ISO
  const getISODate = (dateString: string, timeString: string) => {
    // Extraer día, mes y año de la fecha
    const dateMatch = dateString.match(/(\d+)\s+de\s+([a-zA-Z]+)\s+de\s+(\d{4})/)
    if (!dateMatch) return ""

    const day = Number.parseInt(dateMatch[1], 10)
    const monthName = dateMatch[2].toLowerCase()
    const year = Number.parseInt(dateMatch[3], 10)

    // Mapear nombres de meses a números
    const monthMap: { [key: string]: number } = {
      enero: 0,
      febrero: 1,
      marzo: 2,
      abril: 3,
      mayo: 4,
      junio: 5,
      julio: 6,
      agosto: 7,
      septiembre: 8,
      octubre: 9,
      noviembre: 10,
      diciembre: 11,
    }

    const month = monthMap[monthName]
    if (month === undefined) return ""

    // Extraer hora y minutos
    const timeMatch = timeString.match(/(\d+):(\d+)/)
    if (!timeMatch) return ""

    const hours = Number.parseInt(timeMatch[1], 10)
    const minutes = Number.parseInt(timeMatch[2], 10)

    // Crear fecha y formatear como ISO
    const date = new Date(year, month, day, hours, minutes)
    return date.toISOString()
  }

  // Extraer la hora de finalización si existe
  const getEndDate = (dateString: string, startTimeString: string, endTimeString?: string) => {
    if (!endTimeString) return ""

    const dateMatch = dateString.match(/(\d+)\s+de\s+([a-zA-Z]+)\s+de\s+(\d{4})/)
    if (!dateMatch) return ""

    const day = Number.parseInt(dateMatch[1], 10)
    const monthName = dateMatch[2].toLowerCase()
    const year = Number.parseInt(dateMatch[3], 10)

    const monthMap: { [key: string]: number } = {
      enero: 0,
      febrero: 1,
      marzo: 2,
      abril: 3,
      mayo: 4,
      junio: 5,
      julio: 6,
      agosto: 7,
      septiembre: 8,
      octubre: 9,
      noviembre: 10,
      diciembre: 11,
    }

    const month = monthMap[monthName]
    if (month === undefined) return ""

    const endTimeMatch = endTimeString.match(/(\d+):(\d+)/)
    if (!endTimeMatch) return ""

    const hours = Number.parseInt(endTimeMatch[1], 10)
    const minutes = Number.parseInt(endTimeMatch[2], 10)

    const date = new Date(year, month, day, hours, minutes)
    return date.toISOString()
  }

  const startDate = getISODate(event.date, event.time)
  const endDate = event.endTime ? getEndDate(event.date, event.time, event.endTime) : ""

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description.replace(/<[^>]*>/g, "").substring(0, 500),
    image: event.image,
    startDate: startDate,
    endDate: endDate || undefined,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa del Dique",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.organizer || "Asociación de Comercio, Turismo y Afines de Villa del Dique",
      url: baseUrl,
    },
    offers: event.registrationLink
      ? {
          "@type": "Offer",
          url: event.registrationLink,
          availability: "https://schema.org/InStock",
          priceCurrency: "ARS",
          validFrom: startDate,
        }
      : undefined,
    performer: event.speakers
      ? event.speakers.map((speaker) => ({
          "@type": "Person",
          name: speaker.name,
          jobTitle: speaker.position,
        }))
      : undefined,
    keywords: event.tags ? event.tags.join(", ") : undefined,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
