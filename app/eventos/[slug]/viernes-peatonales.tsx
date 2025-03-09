"use client"

import { useState } from "react"
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
  Instagram,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ViernesPeatonales() {
  const router = useRouter()
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  const evento = {
    slug: "viernes-peatonales",
    title: "Viernes Peatonales",
    date: "Todos los viernes de verano",
    time: "21:00 hs",
    endTime: "00:00 hs",
    location: "Calle San Martín (Villa del Dique)",
    locationDetail: "Calle San Martín, entre Av. Los Fresnos y Av. Los Espinillos",
    organizer: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
    image: "/placeholder.svg?height=600&width=1200&text=Viernes+Peatonales",
    description: `
      <p>Durante el verano, la calle San Martín se convierte en peatonal todos los viernes a partir de las 21:00 horas, ofreciendo una experiencia única para locales y turistas.</p>
      
      <p>Los Viernes Peatonales son una iniciativa de la Asociación de Comercio, Turismo y Afines de Villa del Dique en colaboración con la Municipalidad, que busca dinamizar el comercio local y ofrecer un espacio de esparcimiento para toda la familia.</p>
      
      <h3>Actividades:</h3>
      
      <ul>
        <li><strong>Espectáculos musicales en vivo</strong>: Bandas y artistas locales se presentan en el escenario principal.</li>
        <li><strong>Danza</strong>: Presentaciones de ballet, folklore, tango y danzas contemporáneas.</li>
        <li><strong>Actividades para niños</strong>: Juegos, pintacaritas, títeres y espectáculos infantiles.</li>
        <li><strong>Feria de artesanos</strong>: Exposición y venta de productos artesanales de la región.</li>
        <li><strong>Gastronomía</strong>: Food trucks y puestos de comida con una variada oferta culinaria.</li>
      </ul>
      
      <h3>Programación típica:</h3>
      
      <ul>
        <li><strong>21:00 hs</strong> - Apertura de la feria de artesanos y puestos gastronómicos</li>
        <li><strong>21:30 hs</strong> - Actividades infantiles</li>
        <li><strong>22:00 hs</strong> - Primer show musical</li>
        <li><strong>22:45 hs</strong> - Presentación de danza</li>
        <li><strong>23:15 hs</strong> - Segundo show musical</li>
        <li><strong>00:00 hs</strong> - Cierre</li>
      </ul>
      
      <p>La programación específica de cada viernes se anuncia en nuestras redes sociales durante la semana.</p>
      
      <p>En caso de lluvia, las actividades se trasladan al Salón Municipal o se reprograman para el siguiente viernes, según la disponibilidad.</p>
      
      <p>Para más información, contactar a la Asociación de Comercio, Turismo y Afines de Villa del Dique a través del WhatsApp: 3546 404083.</p>
    `,
    speakers: [
      {
        name: "Artistas locales",
        position: "Músicos y bandas de la región",
        image: "/placeholder.svg?height=100&width=100&text=Artistas",
      },
      {
        name: "Grupos de danza",
        position: "Ballet, folklore y contemporáneo",
        image: "/placeholder.svg?height=100&width=100&text=Danza",
      },
      {
        name: "Artesanos",
        position: "Expositores de productos regionales",
        image: "/placeholder.svg?height=100&width=100&text=Artesanos",
      },
    ],
    tags: ["Verano", "Música en vivo", "Gastronomía", "Artesanías", "Familia"],
    relatedEvents: ["festival-jineteada-folclore", "dia-del-pueblo", "festival-provincial-pejerrey"],
    registrationLink: null,
  }

  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = evento.title

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
              </div>

              {/* Participantes */}
              {evento.speakers && evento.speakers.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Participantes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        {evento.time} a {evento.endTime}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Ubicación</div>
                      <div className="text-gray-600">{evento.location}</div>
                      <div className="text-sm text-gray-500">{evento.locationDetail}</div>
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
                  <li className="flex items-center">
                    <Facebook className="h-5 w-5 text-secondary mr-3" />
                    <a
                      href="https://www.facebook.com/vivivilladeldique/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Instagram className="h-5 w-5 text-secondary mr-3" />
                    <a
                      href="https://www.instagram.com/vivivilladeldique/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

