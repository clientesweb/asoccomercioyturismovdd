"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, MapPinIcon, ChevronLeft, ChevronRight, Clock, Calendar, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getLatestArticles } from "@/lib/articles"
import { getUpcomingEvents } from "@/lib/events"
import VideoPlayer from "@/components/video-player"

export default function Home() {
  // Estado para el carrusel de noticias
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [selectedVideo, setSelectedVideo] = useState<{ src: string; poster: string } | null>(null)

  // Datos para el carrusel del hero (noticias y eventos)
  const latestArticles = getLatestArticles(3)
  const upcomingEvents = getUpcomingEvents(2)

  // Combinar noticias y eventos para el carrusel
  const heroSlides = [
    // Bienvenida (siempre primera)
    {
      type: "noticia",
      date: latestArticles[0]?.date || "9 de marzo de 2025",
      category: latestArticles[0]?.category || "Institucional",
      title: latestArticles[0]?.title || "Bienvenidos a la Asociación de Comercio y Turismo de Villa del Dique",
      description:
        "Conoce nuestra asociación, nuestros objetivos y todo lo que Villa del Dique tiene para ofrecer a visitantes y comerciantes.",
      image:
        latestArticles[0]?.image ||
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dieque-scaled-1.jpg-bhcArDy6gzaLSUqLV3DZZwHYm9EWli.jpeg",
      href: `/noticias/${latestArticles[0]?.slug || "bienvenidos-asociacion-comercio-turismo"}`,
    },
    // Evento 1
    {
      type: "evento",
      date: upcomingEvents[0]?.date || "25 de marzo de 2025",
      time: upcomingEvents[0]?.time || "10:00 hs",
      location: upcomingEvents[0]?.location || "Via Zoom",
      category: "Webinar",
      title: upcomingEvents[0]?.title || "Turismo receptivo: explorando oportunidades en Brasil",
      description:
        "Únete a nosotros para explorar las oportunidades turísticas en el mercado brasileño y conocer estrategias para atraer visitantes.",
      image: upcomingEvents[0]?.image || "/placeholder.svg?height=600&width=1200&text=Brasil",
      href: `/eventos/${upcomingEvents[0]?.slug || "mercados-mundo-oportunidades-brasil"}`,
    },
    // Noticia 2
    {
      type: "noticia",
      date: latestArticles[1]?.date || "Martes 2 de febrero de 2025",
      category: latestArticles[1]?.category || "Proyección Internacional",
      title:
        latestArticles[1]?.title || "La Asamblea General de Turismo contó con la participación de nuestra Asociación",
      description:
        "Representantes de la Asociación de Comercio y Turismo de Villa del Dique participaron en la asamblea anual de Turismo.",
      image: latestArticles[1]?.image || "/placeholder.svg?height=600&width=1200&text=Slide+2",
      href: `/noticias/${latestArticles[1]?.slug || "asamblea-general-turismo-participacion-asociacion"}`,
    },
    // Evento 2
    {
      type: "evento",
      date: upcomingEvents[1]?.date || "12 de marzo de 2025",
      time: upcomingEvents[1]?.time || "15:00 hs",
      location: upcomingEvents[1]?.location || "Salón Municipal (Villa del Dique)",
      category: "Jornada",
      title: upcomingEvents[1]?.title || "El turismo y su impacto en nuestra comunidad",
      description:
        "Análisis del impacto del turismo en el desarrollo económico y social de Villa del Dique, con la participación de expertos del sector.",
      image: upcomingEvents[1]?.image || "/placeholder.svg?height=600&width=1200&text=Turismo",
      href: `/eventos/${upcomingEvents[1]?.slug || "la-agi-impacto-comunidad"}`,
    },
    // Noticia 3
    {
      type: "noticia",
      date: latestArticles[2]?.date || "Lunes 24 de febrero de 2025",
      category: latestArticles[2]?.category || "Informes Económicos",
      title: latestArticles[2]?.title || "El turismo en Villa del Dique creció un 15% interanual",
      description:
        "Según el último informe económico de la Asociación, el turismo en Villa del Dique mostró signos de recuperación.",
      image: latestArticles[2]?.image || "/placeholder.svg?height=600&width=1200&text=Slide+3",
      href: `/noticias/${latestArticles[2]?.slug || "turismo-villa-dique-crecio-interanual"}`,
    },
  ]

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1))
  }, [heroSlides.length])

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1))
  }, [heroSlides.length])

  // Cambio automático de slides
  useEffect(() => {
    if (autoplay) {
      autoplayTimeoutRef.current = setTimeout(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current)
      }
    }
  }, [nextSlide, currentSlide, autoplay])

  // Pausar autoplay cuando el usuario interactúa con el carrusel
  const pauseAutoplay = () => {
    setAutoplay(false)
    // Reanudar después de 10 segundos de inactividad
    setTimeout(() => setAutoplay(true), 10000)
  }

  // Función para ir a un slide específico
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    pauseAutoplay()
  }

  // Manejar teclas para accesibilidad del carrusel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
      pauseAutoplay()
    } else if (e.key === "ArrowRight") {
      nextSlide()
      pauseAutoplay()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner Carousel */}
      <div
        className="relative h-[60vh] md:h-[600px] w-full overflow-hidden"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Noticias y eventos destacados"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} de ${heroSlides.length}: ${slide.title}`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="" /* Alt vacío porque la imagen es decorativa, el contenido importante está en el texto */
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60 flex flex-col justify-end px-6 pb-16">
              <div className="container mx-auto">
                <div className="inline-block bg-highlight/90 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {slide.type === "evento" ? "EVENTO" : "NOTICIA"}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white text-sm mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {slide.date}
                  </div>

                  {slide.type === "evento" && (
                    <>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {slide.time}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {slide.location}
                      </div>
                    </>
                  )}

                  {slide.type === "noticia" && <div>{slide.category}</div>}
                </div>

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white mb-6 text-sm md:text-base">{slide.description}</p>
                <Link
                  href={slide.href}
                  className="inline-flex items-center justify-center rounded-full border border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {slide.type === "evento" ? "Ver evento" : "Ver noticia"}{" "}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <div className="flex items-center justify-center md:justify-start mt-8 md:mt-12">
                  <button
                    onClick={() => {
                      prevSlide()
                      pauseAutoplay()
                    }}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>

                  <div className="flex space-x-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                          index === currentSlide ? "bg-highlight" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Ir a slide ${index + 1}`}
                        aria-current={index === currentSlide ? "true" : "false"}
                      ></button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      nextSlide()
                      pauseAutoplay()
                    }}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ml-4 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* El resto del contenido de la página permanece igual */}
      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Últimas noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getLatestArticles(4).map((news, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl h-[300px] md:h-[350px] group">
              <Image
                src={news.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm mb-2">{news.date}</div>
                  <div className="text-sm font-medium mb-3">{news.category}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight line-clamp-2">{news.title}</h3>
                  <Link
                    href={`/noticias/${news.slug}`}
                    className="inline-flex items-center text-white hover:opacity-80 transition-opacity focus:outline-none focus:underline"
                    aria-label={`Ver noticia: ${news.title}`}
                  >
                    Ver noticia{" "}
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/noticias"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Ver todas las noticias
          </Link>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-xl mb-4">Nuestros videos</h2>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">#VillaDelDique</div>
          <p className="text-white text-base md:text-lg max-w-3xl mb-8">
            La Asociación de Comercio y Turismo de Villa del Dique trabaja con un sueño compartido: convertir a Villa
            del Dique en un destino turístico de excelencia. Hoy, ese anhelo se renueva con la misma fuerza y convicción
            que movió a sus fundadores.
          </p>
          <Link
            href="https://www.instagram.com/vivivilladeldique?igsh=MXhiZGYxNjd0N2V4MA=="
            target="_blank"
            className="inline-flex items-center bg-secondary/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-secondary transition-colors mb-12 focus:outline-none focus:ring-2 focus:ring-white"
            rel="noopener noreferrer"
            aria-label="Seguinos en Instagram"
          >
            Seguinos en Instagram{" "}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Villa del Dique - Un pueblo para disfrutar y descansar",
                thumbnail:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-video-1.jpg-yskdK1rdAIB0lcAMCZYpjwHuwAWcyG.jpeg",
                videoSrc: "/video-1.mp4",
              },
              {
                title: "Mountain Bike en Villa del Dique",
                thumbnail:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-video-2.jpg-LYWClJPZbr8PEHWrUB0maYEF3m5sZg.jpeg",
                videoSrc: "/video-2.mp4",
              },
            ].map((video, index) => (
              <div key={index} className="relative rounded-3xl overflow-hidden aspect-video group">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                  <button
                    onClick={() => {
                      setSelectedVideo({
                        src: video.videoSrc,
                        poster: video.thumbnail,
                      })
                    }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white"
                    aria-label={`Reproducir video: ${video.title}`}
                  >
                    <span className="sr-only">Reproducir</span>
                    <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] md:border-t-[10px] md:border-b-[10px] md:border-l-[16px] border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8">
            Sumate a <span className="text-primary font-medium">nuestros eventos</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getUpcomingEvents(4).map((event, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl h-[250px] md:h-[300px] group"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#01579B, #03A9F4" : index === 1 ? "#4CAF50, #8BC34A" : "#01579B, #4CAF50"
                  })`,
                }}
              >
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-highlight mr-2 flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-highlight mr-2 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white mt-4 line-clamp-3">{event.title}</h3>
                  </div>
                  <Link
                    href={`/eventos/${event.slug}`}
                    className="inline-flex items-center text-white hover:opacity-80 transition-opacity focus:outline-none focus:underline"
                    aria-label={`Ver evento: ${event.title}`}
                  >
                    Ver evento{" "}
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/eventos"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Ver todos los eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Capacitaciones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Programa de Capacitaciones</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Potenciamos el turismo y comercio local a través de capacitaciones diseñadas para emprendedores,
              comerciantes y alojamientos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calidad-humana-al-serviciocliente.jpg-OZveRZISFZ1nZKGru4wWMlucsppc1R.jpeg"
                  alt="Calidad Humana al Servicio del Cliente"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad Humana al Servicio del Cliente</h3>
                <p className="text-gray-600 mb-4">
                  Aprende a ofrecer una experiencia de atención excepcional que fomente la lealtad y satisfacción del
                  cliente.
                </p>
                <Link
                  href="/capacitacion"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Ver detalles
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crea-tu-emprendimiento-desde-cero.jpg-vQxYkOFtQNYgidTdC4Ehr7jKprU5mJ.jpeg"
                  alt="Crea tu propio emprendimiento desde cero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Crea tu propio emprendimiento desde cero</h3>
                <p className="text-gray-600 mb-4">
                  Convierte tus ideas en proyectos viables con conocimientos clave sobre planificación y estrategias de
                  negocio.
                </p>
                <Link
                  href="/capacitacion"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Ver detalles
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/capacitacion"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Ver todas las capacitaciones
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-12">
        {/* About Us Sections */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 gap-8">
            {/* Quienes Somos */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl overflow-hidden">
              <div className="p-6 md:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                    alt="Logo ACTyA"
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/20 p-2 rounded-xl"
                  />
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                      ¿QUIENES SOMOS?
                    </h2>
                    <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                      Somos la Asociación de Comercio, Turismo y Afines de Villa del Dique, fundada el 28 de agosto de
                      2014. Trabajamos para el fortalecimiento de nuestros comercios a través de la promoción del
                      TURISMO, la principal actividad económica de nuestra comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hacia Donde Vamos */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl overflow-hidden">
              <div className="p-6 md:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                    alt="Logo ACTyA"
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/20 p-2 rounded-xl"
                  />
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                      ¿HACIA DONDE VAMOS?
                    </h2>
                    <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                      Con una mirada prospectiva, imaginamos a Villa del Dique como una de las principales plazas
                      turísticas de Calamuchita y Córdoba. El potencial natural lo tenemos y las propuestas las
                      trabajamos diariamente. Todo ello, pensando en el desarrollo local para nuestros socios.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Que Hacemos */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl overflow-hidden">
              <div className="p-6 md:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                    alt="Logo ACTyA"
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:w-24 object-contain bg-white/20 p-2 rounded-xl"
                  />
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                      ¿QUE HACEMOS?
                    </h2>
                    <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                      Promovemos y acompañamos diferentes eventos culturales, deportivos, empresariales; capacitaciones,
                      campañas de concientizaciones. Todo esto en beneficio de nuestros asociados y fundamentalmente de
                      nuestro pueblo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-primary py-12 text-white mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "2014", label: "Año de fundación" },
                { number: "+100", label: "Comercios asociados" },
                { number: "+9", label: "Años de trayectoria" },
                { number: "+20", label: "Servicios para asociados" },
              ].map((stat) => (
                <div key={stat.label} className="p-4">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-base md:text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <VideoPlayer
        src={selectedVideo?.src || ""}
        poster={selectedVideo?.poster || ""}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Footer />
    </div>
  )
}

