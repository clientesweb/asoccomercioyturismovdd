"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
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
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Datos de ejemplo para los eventos
const eventos = [
  {
    slug: "mercados-mundo-oportunidades-brasil",
    title: "Turismo receptivo: explorando oportunidades en Brasil",
    date: "25 de marzo de 2025",
    time: "10:00 hs",
    endTime: "12:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Comisión de Turismo ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Brasil",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Turismo receptivo: explorando oportunidades en Brasil", que se llevará a cabo el próximo 25 de marzo a las 10 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo brindar información actualizada sobre el mercado brasileño y las oportunidades que ofrece para los comercios y prestadores turísticos de Villa del Dique, en el marco de la relación turística bilateral entre ambos países.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Emb. Daniel Raimondi</strong>, Embajador de Argentina en Brasil</li>
        <li><strong>Lic. Marcelo Elizondo</strong>, Presidente de la Comisión de Turismo de la ACTyA</li>
        <li><strong>Dr. Paulo Solimeo</strong>, Economista Jefe de la Asociación de Hoteles de São Paulo</li>
        <li><strong>Ing. Roberto Domenech</strong>, Presidente de la Cámara Argentina de Turismo</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Panorama turístico de Brasil: situación actual y perspectivas</li>
        <li>Relación turística Argentina-Brasil: evolución reciente y tendencias</li>
        <li>Oportunidades para prestadores turísticos de Villa del Dique en el mercado brasileño</li>
        <li>Aspectos prácticos para recibir turistas brasileños: requisitos, idioma, costumbres</li>
        <li>Experiencias exitosas de destinos argentinos en Brasil</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Turismo de la ACTyA a través del correo electrónico turismo@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Emb. Daniel Raimondi",
        position: "Embajador de Argentina en Brasil",
        image: "/placeholder.svg?height=100&width=100&text=DR",
      },
      {
        name: "Lic. Marcelo Elizondo",
        position: "Presidente de la Comisión de Turismo de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=ME",
      },
      {
        name: "Dr. Paulo Solimeo",
        position: "Economista Jefe de la Asociación de Hoteles de São Paulo",
        image: "/placeholder.svg?height=100&width=100&text=PS",
      },
      {
        name: "Ing. Roberto Domenech",
        position: "Presidente de la Cámara Argentina de Turismo",
        image: "/placeholder.svg?height=100&width=100&text=RD",
      },
    ],
    tags: ["Brasil", "Turismo", "Oportunidades", "Webinar"],
    relatedEvents: [
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "la-agi-impacto-comunidad",
    title: "El turismo y su impacto en nuestra comunidad",
    date: "12 de marzo de 2025",
    time: "15:00 hs",
    endTime: "17:30 hs",
    location: "Salón Municipal (Villa del Dique)",
    locationDetail: "Plaza Central, Salón de Usos Múltiples",
    organizer: "Comisión de Desarrollo Local ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar de la jornada "El turismo y su impacto en nuestra comunidad", que se llevará a cabo el próximo 12 de marzo a las 15 horas en el Salón Municipal de Villa del Dique.</p>
      
      <p>El encuentro tiene como objetivo analizar el impacto del turismo en el desarrollo económico y social de Villa del Dique, así como debatir sobre su rol en el actual contexto económico.</p>
      
      <h3>Programa:</h3>
      
      <ul>
        <li><strong>15:00 hs</strong> - Acreditación</li>
        <li><strong>15:30 hs</strong> - Apertura a cargo del Presidente de la ACTyA, Mario González</li>
        <li><strong>15:45 hs</strong> - Panel: "El turismo como motor del desarrollo local"
          <ul>
            <li>Lic. Martín Rodríguez, Secretario de Turismo de Villa del Dique</li>
            <li>Dr. Carlos Pérez, Intendente de Villa del Dique</li>
            <li>Ing. Laura Fernández, Directora de Desarrollo Productivo</li>
          </ul>
        </li>
        <li><strong>16:45 hs</strong> - Coffee break</li>
        <li><strong>17:00 hs</strong> - Panel: "Desafíos y oportunidades para el turismo en el contexto actual"
          <ul>
            <li>Lic. Roberto Sánchez, Economista</li>
            <li>Dra. María González, Asesora Legal de la ACTyA</li>
            <li>Ing. Juan Martínez, Empresario del sector</li>
          </ul>
        </li>
        <li><strong>17:30 hs</strong> - Cierre y conclusiones</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Eventos de la ACTyA a través del correo electrónico eventos@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Mario González",
        position: "Presidente de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=MG",
      },
      {
        name: "Lic. Martín Rodríguez",
        position: "Secretario de Turismo de Villa del Dique",
        image: "/placeholder.svg?height=100&width=100&text=MR",
      },
      {
        name: "Dr. Carlos Pérez",
        position: "Intendente de Villa del Dique",
        image: "/placeholder.svg?height=100&width=100&text=CP",
      },
      {
        name: "Ing. Laura Fernández",
        position: "Directora de Desarrollo Productivo",
        image: "/placeholder.svg?height=100&width=100&text=LF",
      },
    ],
    tags: ["Turismo", "Desarrollo Local", "Comunidad", "Jornada"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "perspectivas-economicas-segundo-trimestre",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "perspectivas-economicas-segundo-trimestre",
    title: "Perspectivas turísticas para la temporada alta",
    date: "10 de marzo de 2025",
    time: "14:00 hs",
    endTime: "16:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Departamento de Estadísticas ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Perspectivas turísticas para la temporada alta", que se llevará a cabo el próximo 10 de marzo a las 14 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo analizar las proyecciones turísticas para la próxima temporada alta, con foco en las variables que más impactan en el sector turístico y comercial de Villa del Dique.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Dr. Martín Vauthier</strong>, Economista Jefe de la ACTyA</li>
        <li><strong>Lic. Marina Dal Poggetto</strong>, Directora Ejecutiva de EcoGo</li>
        <li><strong>Dr. Miguel Kiguel</strong>, Director de Econviews</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Contexto macroeconómico: inflación, tipo de cambio, poder adquisitivo</li>
        <li>Comportamiento del turismo: evolución reciente y proyecciones</li>
        <li>Tendencias en alojamiento y gastronomía</li>
        <li>Turismo internacional: llegada de extranjeros, principales mercados</li>
        <li>Impacto de las políticas económicas en el sector turístico</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita para socios de la ACTyA. No socios: $5.000.</p>
      
      <p>Para más información, contactar al Departamento de Estadísticas de la ACTyA a través del correo electrónico estadisticas@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Dr. Martín Vauthier",
        position: "Economista Jefe de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=MV",
      },
      {
        name: "Lic. Marina Dal Poggetto",
        position: "Directora Ejecutiva de EcoGo",
        image: "/placeholder.svg?height=100&width=100&text=MDP",
      },
      {
        name: "Dr. Miguel Kiguel",
        position: "Director de Econviews",
        image: "/placeholder.svg?height=100&width=100&text=MK",
      },
    ],
    tags: ["Turismo", "Proyecciones", "Webinar", "Temporada Alta"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "foro-comercio-internacional-mercados-asia",
    title: "Feria de productos regionales",
    date: "5 de marzo de 2025",
    time: "11:00 hs",
    endTime: "20:00 hs",
    location: "Plaza Central (Villa del Dique)",
    locationDetail: "Plaza Central, área peatonal",
    organizer: "Comisión de Desarrollo Local ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Feria",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar de la "Feria de productos regionales", que se llevará a cabo el próximo 5 de marzo de 11 a 20 horas en la Plaza Central de Villa del Dique.</p>
      
      <p>El evento tiene como objetivo promover y dar visibilidad a los productos regionales de Villa del Dique y alrededores, brindando un espacio para que productores y artesanos puedan comercializar sus productos directamente al público.</p>
      
      <h3>Programa:</h3>
      
      <ul>
        <li><strong>11:00 hs</strong> - Apertura de la feria</li>
        <li><strong>12:30 hs</strong> - Demostración de cocina regional a cargo del chef Carlos Martínez</li>
        <li><strong>15:00 hs</strong> - Espectáculo musical: Grupo folclórico "Las Sierras"</li>
        <li><strong>17:00 hs</strong> - Taller para niños: "Pequeños artesanos"</li>
        <li><strong>18:30 hs</strong> - Espectáculo musical: Banda "Alma de Pueblo"</li>
        <li><strong>20:00 hs</strong> - Cierre de la feria</li>
      </ul>
      
      <h3>Rubros presentes:</h3>
      
      <ul>
        <li>Productos gourmet (dulces, conservas, quesos, embutidos, etc.)</li>
        <li>Artesanías en madera, cuero, tejidos y cerámica</li>
        <li>Productos cosméticos naturales</li>
        <li>Vinos y licores regionales</li>
        <li>Miel y productos derivados</li>
        <li>Plantas y flores</li>
        <li>Gastronomía regional</li>
      </ul>
      
      <p>La entrada es libre y gratuita. En caso de lluvia, la feria se trasladará al Salón Municipal.</p>
      
      <p>Para más información, contactar al Departamento de Eventos de la ACTyA a través del correo electrónico eventos@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Carlos Martínez",
        position: "Chef especializado en cocina regional",
        image: "/placeholder.svg?height=100&width=100&text=CM",
      },
      {
        name: "Grupo folclórico 'Las Sierras'",
        position: "Música tradicional de la región",
        image: "/placeholder.svg?height=100&width=100&text=LS",
      },
      {
        name: "Banda 'Alma de Pueblo'",
        position: "Música popular argentina",
        image: "/placeholder.svg?height=100&width=100&text=AP",
      },
    ],
    tags: ["Feria", "Productos Regionales", "Artesanías", "Gastronomía"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
    ],
    registrationLink: null,
  },
  {
    slug: "webinar-transformacion-digital-comercio-minorista",
    title: "Webinar: Transformación digital en el turismo",
    date: "28 de febrero de 2025",
    time: "16:00 hs",
    endTime: "18:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Departamento de Innovación y Tecnología ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Digital",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Transformación digital en el turismo", que se llevará a cabo el próximo 28 de febrero a las 16 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo brindar estrategias y herramientas para que los prestadores turísticos puedan implementar tecnologías digitales que les permitan mejorar su competitividad y adaptarse a los nuevos hábitos de los turistas.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Ing. Alejandro Martínez</strong>, Director del Departamento de Innovación y Tecnología de la ACTyA</li>
        <li><strong>Lic. Carolina Sánchez</strong>, Especialista en Marketing Digital Turístico</li>
        <li><strong>Sr. Martín Rodríguez</strong>, Fundador de Reserva Fácil</li>
        <li><strong>Ing. Pablo González</strong>, Gerente de Tecnología de Despegar</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Diagnóstico digital: ¿dónde está tu negocio turístico hoy?</li>
        <li>Herramientas digitales básicas para prestadores turísticos</li>
        <li>Plataformas de reservas online: opciones para comenzar a vender</li>
        <li>Marketing digital para el sector turístico</li>
        <li>Medios de pago electrónicos</li>
        <li>Redes sociales para promoción turística</li>
        <li>Casos de éxito y lecciones aprendidas</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Innovación y Tecnología de la ACTyA a través del correo electrónico innovacion@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Ing. Alejandro Martínez",
        position: "Director del Departamento de Innovación y Tecnología de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=AM",
      },
      {
        name: "Lic. Carolina Sánchez",
        position: "Especialista en Marketing Digital Turístico",
        image: "/placeholder.svg?height=100&width=100&text=CS",
      },
      {
        name: "Sr. Martín Rodríguez",
        position: "Fundador de Reserva Fácil",
        image: "/placeholder.svg?height=100&width=100&text=MR",
      },
      {
        name: "Ing. Pablo González",
        position: "Gerente de Tecnología de Despegar",
        image: "/placeholder.svg?height=100&width=100&text=PG",
      },
    ],
    tags: ["Transformación Digital", "Turismo", "Marketing Digital", "Webinar"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
]

export default function EventoDetalle() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [evento, setEvento] = useState<any>(null)
  const [relatedEvents, setRelatedEvents] = useState<any[]>([])
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  useEffect(() => {
    // Buscar el evento por slug
    const eventoEncontrado = eventos.find((e) => e.slug === slug)

    if (eventoEncontrado) {
      setEvento(eventoEncontrado)

      // Obtener eventos relacionados
      if (eventoEncontrado.relatedEvents && eventoEncontrado.relatedEvents.length > 0) {
        const related = eventos.filter((e) => eventoEncontrado.relatedEvents.includes(e.slug))
        setRelatedEvents(related)
      }
    } else {
      // Si no se encuentra el evento, redirigir a la página de eventos
      router.push("/eventos")
    }
  }, [slug, router])

  if (!evento) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Cargando evento...</h1>
            <p className="text-gray-600">Por favor, espere un momento.</p>
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
                      Inscribirme al evento
                    </a>
                  </div>
                )}
              </div>

              {/* Disertantes */}
              {evento.speakers && evento.speakers.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Disertantes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {evento.speakers.map((speaker: any, index: number) => (
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
                    {evento.tags.map((tag: string) => (
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

