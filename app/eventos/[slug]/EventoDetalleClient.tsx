"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  User,
  Tag,
  MessageCircle,
  Phone,
  Ticket,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { events } from "@/lib/events"
import EventSchema from "@/components/schema/event-schema"

interface EventoDetalleClientProps {
  slug: string
}

export default function EventoDetalleClient({ slug }: EventoDetalleClientProps) {
  const router = useRouter()
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  // Buscar el evento directamente del array importado
  const evento = events.find((event) => event.slug === slug)

  // Buscar eventos relacionados
  const relatedEvents = evento?.relatedEvents
    ? events.filter((event) => evento.relatedEvents?.includes(event.slug))
    : []

  // Si no hay evento, redirigir a la página de eventos
  useEffect(() => {
    if (!evento) {
      router.push("/eventos")
    }
  }, [evento, router])

  if (!evento) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Evento no encontrado</h1>
            <p className="text-gray-600 mb-6">El evento que estás buscando no existe o ha sido eliminado.</p>
            <Link
              href="/eventos"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Ver todos los eventos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = evento.title

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Schema.org para SEO */}
      {evento.slug === "pascuas-serranas-2025" && <EventSchema event={evento} />}

      <main className="flex-grow bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/eventos" className="hover:text-primary">
                Eventos
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-gray-900 font-medium truncate">{evento.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Botón volver */}
          <div className="mb-6">
            <Link href="/eventos" className="flex items-center text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver a eventos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna principal */}
            <div className="lg:col-span-2">
              {/* Imagen destacada */}
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={evento.image || "/placeholder.svg"}
                  alt={evento.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Título y organizador */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{evento.title}</h1>
              <div className="text-sm font-medium text-secondary mb-6">Organizado por: {evento.organizer}</div>

              {/* Contenido */}
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: evento.description }} />

                {/* Botón de inscripción */}
                {evento.registrationLink && (
                  <div className="mt-8">
                    <a
                      href={evento.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Ticket className="w-5 h-5 mr-2" />
                      Comprar entradas
                    </a>
                  </div>
                )}
              </div>

              {/* Artistas invitados */}
              {evento.speakers && evento.speakers.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Artistas invitados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {evento.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{speaker.name}</h3>
                          <p className="text-sm text-gray-600">{speaker.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {evento.tags && evento.tags.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Etiquetas</h2>
                  <div className="flex flex-wrap gap-2">
                    {evento.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/eventos?tag=${tag}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Columna lateral */}
            <div>
              {/* Detalles del evento */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Detalles del evento</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Fecha</div>
                      <div className="text-gray-600">{evento.date}</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Horario</div>
                      <div className="text-gray-600">
                        {evento.time} {evento.endTime ? `a ${evento.endTime}` : ""}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Ubicación</div>
                      <div className="text-gray-600">{evento.location}</div>
                      {evento.locationDetail && <div className="text-sm text-gray-500">{evento.locationDetail}</div>}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <User className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Organizador</div>
                      <div className="text-gray-600">{evento.organizer}</div>
                    </div>
                  </li>
                </ul>

                {/* Compartir */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="relative">
                    <button
                      onClick={toggleShareMenu}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors w-full justify-between"
                      aria-label="Compartir"
                    >
                      <span className="flex items-center">
                        <Share2 className="h-5 w-5 mr-2" />
                        Compartir este evento
                      </span>
                      <ChevronRight className={`h-5 w-5 transition-transform ${isShareMenuOpen ? "rotate-90" : ""}`} />
                    </button>

                    {isShareMenuOpen && (
                      <div className="mt-3 space-y-2">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <Facebook className="h-4 w-4 mr-3 text-blue-600" />
                          Compartir en Facebook
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <Twitter className="h-4 w-4 mr-3 text-blue-400" />
                          Compartir en Twitter
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <Linkedin className="h-4 w-4 mr-3 text-blue-700" />
                          Compartir en LinkedIn
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle)}%20${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <MessageCircle className="h-4 w-4 mr-3 text-green-500" />
                          Compartir en WhatsApp
                        </a>
                        <a
                          href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <Mail className="h-4 w-4 mr-3 text-gray-600" />
                          Enviar por email
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contacto */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Para más información sobre este evento, contacta a la Asociación de Comercio, Turismo y Afines de
                  Villa del Dique:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-secondary mr-3" />
                    <span className="text-gray-600">Formosa 236, Barrio Comercial, Villa del Dique</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary mr-3" />
                    <a href="tel:+5493546404083" className="text-gray-600 hover:text-primary">
                      3546 404083
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-secondary mr-3" />
                    <a
                      href="https://wa.me/5493546404083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              {/* Eventos relacionados */}
              {relatedEvents.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Eventos relacionados</h2>
                  <div className="space-y-4">
                    {relatedEvents.map((evento) => (
                      <Link
                        key={evento.slug}
                        href={`/eventos/${evento.slug}`}
                        className="block hover:bg-gray-50 rounded-lg p-3 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                            <Image
                              src={evento.image || "/placeholder.svg"}
                              alt={evento.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 line-clamp-2">{evento.title}</h3>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              {evento.date}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
