"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Users, CheckCircle2, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InscripcionForm from "@/components/inscripcion-form"

export default function CapacitacionClientPage() {
  const [selectedCapacitacion, setSelectedCapacitacion] = useState<string | null>(null)

  const capacitaciones = [
    {
      id: "calidad-humana",
      title: "Calidad Humana al Servicio del Cliente",
      description:
        "El servicio al cliente es la base del éxito de cualquier negocio. Este taller tiene como propósito dotar a los comerciantes de las habilidades necesarias para ofrecer una experiencia de atención excepcional que fomente la lealtad y satisfacción del cliente.",
      modalidad: "Teórico - Práctico, Presencial",
      destinatarios: "Público general",
      duracion: "8 horas (4 encuentros de 2 horas cada uno)",
      fechas: ["Martes 15 de abril", "Martes 22 de abril", "Martes 29 de abril", "Martes 6 de mayo"],
      horario: "15:00 a 17:00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calidad-humana-al-serviciocliente.jpg-OZveRZISFZ1nZKGru4wWMlucsppc1R.jpeg",
    },
    {
      id: "emprendimiento",
      title: "Crea tu propio emprendimiento desde cero",
      description:
        "Este curso está diseñado para quienes desean convertir sus ideas en proyectos viables. Durante la capacitación, los participantes recibirán conocimientos clave sobre planificación, estrategias de negocio y herramientas para implementar su emprendimiento de manera efectiva.",
      modalidad: "Teórico - Práctico, Presencial",
      destinatarios: "Emprendedores y público general",
      duracion: "12 horas (6 encuentros de 2 horas cada uno)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crea-tu-emprendimiento-desde-cero.jpg-vQxYkOFtQNYgidTdC4Ehr7jKprU5mJ.jpeg",
      contenidos: [
        "Estructuración y validación de ideas de negocio",
        "Estrategias para el crecimiento sostenible",
        "Desarrollo de un plan de acción paso a paso",
      ],
    },
  ]

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
              <span className="text-gray-900 font-medium">Capacitaciones</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-primary py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-Uw0EWSkVpLLrKs5HUSYsSlkirKKGXm.jpeg"
              alt="Programa de Capacitaciones"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Programa de Capacitaciones</h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Potenciamos el turismo y comercio local a través de capacitaciones diseñadas para emprendedores,
                comerciantes y alojamientos.
              </p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12">
              <div className="prose prose-lg max-w-none">
                <p>
                  La Asociación de Comercio y Turismo de Villa del Dique continúa trabajando en el fortalecimiento del
                  desarrollo local a través de nuevas capacitaciones dirigidas a emprendedores, comerciantes y
                  alojamientos. Este programa tiene como objetivo brindar herramientas estratégicas para mejorar la
                  atención al cliente, potenciar los negocios y fomentar el crecimiento del sector turístico y comercial
                  de la región.
                </p>

                <p>
                  En el marco de este compromiso, se han diseñado diversos talleres teórico-prácticos dictados por
                  especialistas, que abordarán aspectos clave como la calidad en la atención al cliente y la creación de
                  emprendimientos desde cero.
                </p>

                <h2>Compromiso con el desarrollo local</h2>

                <p>
                  Desde la Asociación de Comercio y Turismo de Villa del Dique, destacaron la importancia de estas
                  capacitaciones como parte de una estrategia integral para fortalecer la economía local.
                </p>

                <blockquote>
                  "Estamos convencidos de que la formación continua es una de las mejores herramientas para impulsar el
                  turismo y el comercio en Villa del Dique. A través de estos talleres, buscamos dotar a nuestra
                  comunidad de herramientas que generen un impacto positivo y sostenible"
                </blockquote>

                <p>
                  Además, recalcaron que este es solo el inicio de un plan a largo plazo, con el objetivo de posicionar
                  a Villa del Dique en un nivel digital y comercial superior.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">Nuestras capacitaciones</h2>

            {/* Lista de capacitaciones */}
            <div className="grid gap-8 mb-12">
              {capacitaciones.map((capacitacion) => (
                <div key={capacitacion.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={capacitacion.image || "/placeholder.svg"}
                          alt={capacitacion.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{capacitacion.title}</h3>
                      <p className="text-gray-700 mb-4">{capacitacion.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                          <div>
                            <div className="font-medium">Modalidad</div>
                            <div className="text-sm text-gray-600">{capacitacion.modalidad}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                          <div>
                            <div className="font-medium">Destinatarios</div>
                            <div className="text-sm text-gray-600">{capacitacion.destinatarios}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                          <div>
                            <div className="font-medium">Duración</div>
                            <div className="text-sm text-gray-600">{capacitacion.duracion}</div>
                          </div>
                        </div>
                      </div>

                      {capacitacion.fechas && (
                        <div className="mb-4">
                          <div className="font-medium mb-2">Fechas:</div>
                          <ul className="space-y-1">
                            {capacitacion.fechas.map((fecha, index) => (
                              <li key={index} className="flex items-start">
                                <Calendar className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {fecha} - {capacitacion.horario}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {capacitacion.contenidos && (
                        <div className="mb-6">
                          <div className="font-medium mb-2">Contenidos:</div>
                          <ul className="space-y-1">
                            {capacitacion.contenidos.map((contenido, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{contenido}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedCapacitacion(capacitacion.id)}
                        className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
                      >
                        Inscribirme
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario de inscripción */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" id="inscripcion">
                Formulario de inscripción
              </h2>
              <InscripcionForm
                capacitaciones={capacitaciones.map((c) => ({ id: c.id, title: c.title }))}
                selectedCapacitacion={selectedCapacitacion}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

