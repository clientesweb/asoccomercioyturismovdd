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
              href="#eventos"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Ver eventos
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-cNdWTisAteyHeZ2vjRRD4Y5Jv67AJz.jpeg"
              alt="Programa de capacitaciones"
              width={1080}
              height={1350}
              className="w-full"
            />
          </div>

          <h2 className="text-4xl font-bold text-primary mb-8" id="eventos">
            Eventos
          </h2>

          {/* Lista de eventos */}
          <div className="grid gap-6">
            {/* Viernes Peatonales */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-highlight">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Todos los viernes de verano</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>Calle San Martín</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>21:00 hs</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Viernes Peatonales</h3>
                  <p className="text-white/80 line-clamp-2">
                    Durante el verano, la calle San Martín se convierte en peatonal todos los viernes a partir de las
                    21:00 horas, ofreciendo una experiencia única para locales y turistas.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href="/eventos/viernes-peatonales"
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Ver evento
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Festival de Jineteada y Folclore */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl overflow-hidden p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-highlight">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>15 y 16 de marzo de 2025</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>Predio Los Eucaliptos</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12:00 hs</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Festival de Jineteada y Folclore</h3>
                  <p className="text-white/80 line-clamp-2">
                    Villa del Dique se prepara para vivir una de las fiestas más tradicionales de la región: el Festival
                    de Jineteada y Folclore.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href="/eventos/festival-jineteada-folclore"
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Ver evento
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

