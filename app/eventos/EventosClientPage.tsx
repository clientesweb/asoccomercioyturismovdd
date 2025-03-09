"use client"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getUpcomingEvents } from "@/lib/events"

export default function EventosClientPage() {
  // Obtener los eventos ordenados por fecha
  const eventos = getUpcomingEvents()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-primary">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Villa del Dique"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h4 className="text-white text-xl mb-4">Villa del Dique - Córdoba</h4>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              Descubrí <span className="text-highlight font-bold">#VillaDelDique</span>
            </h1>
            <p className="text-white text-xl mb-8">
              Próximamente se viene la gran temporada de verano en Villa del Dique. Enterate de todos los eventos y
              actividades organizados por la Asociación de Comercio y Turismo.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Ver calendario de eventos
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Banner publicitario */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_447977303_1261253978198034_4027655341568195616_n.jpg-srE61xHNqDOCJIHNr7H5mG4cZZKXLf.jpeg"
              alt="Te invitamos a conocer nuestra asociación"
              width={1080}
              height={1350}
              className="w-full"
            />
          </div>

          <h2 className="text-4xl font-bold text-primary mb-8">Eventos</h2>

          {/* Lista de eventos */}
          <div className="grid gap-6">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden p-8 text-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-6 text-highlight">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{evento.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{evento.time}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{evento.title}</h3>
                    <p className="text-white/80 line-clamp-2">
                      {evento.description.split("</p>")[0].replace(/<\/?[^>]+(>|$)/g, "")}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      href={`/eventos/${evento.slug}`}
                      className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
                    >
                      Ver evento
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-8 flex justify-center">
            <nav className="flex space-x-2">
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Anterior
              </a>
              <a href="#" className="px-4 py-2 bg-primary text-white rounded-lg">
                1
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Siguiente
              </a>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

