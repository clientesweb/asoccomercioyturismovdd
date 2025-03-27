"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AsociateClientPage() {
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    // Datos del comercio
    nombreComercio: "",
    rubroComercio: "",
    direccionComercio: "",
    localidad: "Villa del Dique", // Valor fijo
    // Datos adicionales
    tipoSocio: "comerciante", // comerciante, emprendedor, otro
    observaciones: "",
    aceptaTerminos: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Validar datos personales
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    }

    // Validar datos del comercio
    if (!formData.nombreComercio.trim()) {
      newErrors.nombreComercio = "El nombre del comercio es requerido"
    }

    if (!formData.rubroComercio.trim()) {
      newErrors.rubroComercio = "El rubro del comercio es requerido"
    }

    if (!formData.direccionComercio.trim()) {
      newErrors.direccionComercio = "La dirección del comercio es requerida"
    }

    // Validar aceptación de términos
    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = "Debes aceptar los términos y condiciones"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Obtener la fecha actual
    const fechaActual = new Date().toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

    // Construir el mensaje para WhatsApp
    const message = `
*Nueva solicitud de asociación*
----------------------------------
*Fecha de solicitud:* ${fechaActual}

*DATOS PERSONALES*
*Nombre:* ${formData.nombre} ${formData.apellido}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}

*DATOS DEL COMERCIO*
*Nombre del comercio:* ${formData.nombreComercio}
*Rubro:* ${formData.rubroComercio}
*Dirección:* ${formData.direccionComercio}
*Localidad:* ${formData.localidad}
*Tipo de socio:* ${formData.tipoSocio === "comerciante" ? "Comerciante" : formData.tipoSocio === "emprendedor" ? "Emprendedor" : "Otro"}

${formData.observaciones ? `*Observaciones:* ${formData.observaciones}` : ""}

*DATOS DE PAGO*
*Valor mensual:* $5.000
*Banco:* Santander
*Cuenta:* CC$ 453-004471/6
*CBU:* 0720453520000000447168
*ALIAS:* asoc.comercio.vdd
`.trim()

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Número de WhatsApp
    const phoneNumber = "5493546404083"

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank")

    // Mostrar mensaje de éxito
    setIsSuccess(true)
    setIsSubmitting(false)

    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        nombreComercio: "",
        rubroComercio: "",
        direccionComercio: "",
        localidad: "Villa del Dique",
        tipoSocio: "comerciante",
        observaciones: "",
        aceptaTerminos: false,
      })
      setIsSuccess(false)
    }, 3000)
  }

  const beneficios = [
    "Visibilidad en nuestra web y redes sociales",
    "Participación en eventos y ferias organizadas por la Asociación",
    "Descuentos exclusivos en capacitaciones y talleres",
    "Asesoramiento legal y contable",
    "Representación ante organismos públicos",
    "Networking con otros comerciantes y emprendedores",
    "Promoción de tu negocio en guías turísticas locales",
    "Acceso a información privilegiada del sector",
    "Acceso a bolsa de trabajo para publicar y encontrar oportunidades laborales",
    "Diseño y distribución de folletería y cartelería publicitaria",
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
              <span className="text-gray-900 font-medium">Asociate</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-primary py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dieque-scaled-1.jpg-bhcArDy6gzaLSUqLV3DZZwHYm9EWli.jpeg"
              alt="Asociate a Villa del Dique"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Asociate y sé parte de nuestra comunidad
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Únete a la Asociación de Comercio, Turismo y Afines de Villa del Dique y potencia tu negocio con
                beneficios exclusivos para socios.
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-3 text-base font-medium hover:bg-white/90 transition-colors"
              >
                Quiero asociarme
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Sección de beneficios */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12" id="beneficios">
              <h2 className="text-2xl font-bold text-primary mb-6">Beneficios de ser socio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Información de cuota */}
            <div className="bg-primary/10 rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Valor de la cuota social</h2>
                  <p className="text-gray-700 mb-4">La cuota mensual para asociados es de:</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-3xl font-bold text-primary">$5.000</span>
                  <span className="text-gray-600 ml-2">por mes</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Datos bancarios para el pago</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Titular</p>
                    <p className="text-gray-700">Asociación de comercio y turismo a fines de villa del dique</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Banco</p>
                    <p className="text-gray-700">Santander</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Cuenta</p>
                    <p className="text-gray-700">CC$ 453-004471/6</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">CBU</p>
                    <p className="text-gray-700">0720453520000000447168</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">ALIAS</p>
                    <p className="text-gray-700">asoc.comercio.vdd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de solicitud */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8" id="formulario">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulario de solicitud</h2>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">¡Solicitud enviada!</h3>
                  <p className="text-green-700 mb-4">
                    Tu solicitud ha sido enviada correctamente. Se ha abierto WhatsApp para completar el envío.
                  </p>
                  <p className="text-green-600 text-sm">
                    Nos pondremos en contacto contigo a la brevedad para finalizar el proceso de asociación.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Datos personales */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Datos personales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                          Nombre <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.nombre ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Tu nombre"
                        />
                        {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                          Apellido <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.apellido ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Tu apellido"
                        />
                        {errors.apellido && <p className="text-red-500 text-xs">{errors.apellido}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                          Teléfono <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.telefono ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Tu número de teléfono"
                        />
                        {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Datos del comercio */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Datos del comercio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombreComercio" className="block text-sm font-medium text-gray-700">
                          Nombre del comercio <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nombreComercio"
                          name="nombreComercio"
                          value={formData.nombreComercio}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.nombreComercio ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Nombre de tu comercio o emprendimiento"
                        />
                        {errors.nombreComercio && <p className="text-red-500 text-xs">{errors.nombreComercio}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="rubroComercio" className="block text-sm font-medium text-gray-700">
                          Rubro <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="rubroComercio"
                          name="rubroComercio"
                          value={formData.rubroComercio}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.rubroComercio ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Ej: Gastronomía, Alojamiento, Comercio, etc."
                        />
                        {errors.rubroComercio && <p className="text-red-500 text-xs">{errors.rubroComercio}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="direccionComercio" className="block text-sm font-medium text-gray-700">
                          Dirección <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="direccionComercio"
                          name="direccionComercio"
                          value={formData.direccionComercio}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                            errors.direccionComercio ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Dirección de tu comercio"
                        />
                        {errors.direccionComercio && <p className="text-red-500 text-xs">{errors.direccionComercio}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="localidad" className="block text-sm font-medium text-gray-700">
                          Localidad <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="localidad"
                          name="localidad"
                          value="Villa del Dique"
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <p className="text-xs text-gray-500">Solo se aceptan comercios ubicados en Villa del Dique</p>
                      </div>
                    </div>
                  </div>

                  {/* Datos adicionales */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Datos adicionales</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="tipoSocio" className="block text-sm font-medium text-gray-700">
                          Tipo de socio
                        </label>
                        <select
                          id="tipoSocio"
                          name="tipoSocio"
                          value={formData.tipoSocio}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                          <option value="comerciante">Comerciante</option>
                          <option value="emprendedor">Emprendedor</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">
                          Observaciones o comentarios adicionales
                        </label>
                        <textarea
                          id="observaciones"
                          name="observaciones"
                          value={formData.observaciones}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                          placeholder="¿Tienes alguna pregunta o comentario adicional?"
                        ></textarea>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="aceptaTerminos"
                            name="aceptaTerminos"
                            type="checkbox"
                            checked={formData.aceptaTerminos}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="aceptaTerminos" className="text-gray-700">
                            Acepto los{" "}
                            <Link href="#" className="text-primary hover:underline">
                              términos y condiciones
                            </Link>{" "}
                            de la Asociación de Comercio, Turismo y Afines de Villa del Dique{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          {errors.aceptaTerminos && (
                            <p className="text-red-500 text-xs mt-1">{errors.aceptaTerminos}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nota informativa */}
                  <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-700">
                      <p className="font-medium mb-1">Información importante</p>
                      <p>
                        Al enviar este formulario, recibirás un mensaje en WhatsApp con los datos de tu solicitud y la
                        información de pago. Una vez realizado el pago, envíanos el comprobante para completar tu
                        asociación.
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

