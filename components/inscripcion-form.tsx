"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

interface Capacitacion {
  id: string
  title: string
}

interface InscripcionFormProps {
  capacitaciones: Capacitacion[]
  selectedCapacitacion: string | null
}

export default function InscripcionForm({ capacitaciones, selectedCapacitacion }: InscripcionFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    capacitaciones: [] as string[],
    localidad: "",
    ocupacion: "",
    comentarios: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Actualizar el formulario cuando cambia la capacitación seleccionada
  useEffect(() => {
    if (selectedCapacitacion) {
      setFormData((prev) => ({
        ...prev,
        capacitaciones: prev.capacitaciones.includes(selectedCapacitacion)
          ? prev.capacitaciones
          : [...prev.capacitaciones, selectedCapacitacion],
      }))
    }
  }, [selectedCapacitacion])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleCheckboxChange = (capacitacionId: string) => {
    setFormData((prev) => {
      const newCapacitaciones = prev.capacitaciones.includes(capacitacionId)
        ? prev.capacitaciones.filter((id) => id !== capacitacionId)
        : [...prev.capacitaciones, capacitacionId]

      // Limpiar error si se selecciona al menos una capacitación
      if (newCapacitaciones.length > 0 && errors.capacitaciones) {
        setErrors((prev) => ({
          ...prev,
          capacitaciones: "",
        }))
      }

      return {
        ...prev,
        capacitaciones: newCapacitaciones,
      }
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

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

    if (formData.capacitaciones.length === 0) {
      newErrors.capacitaciones = "Selecciona al menos una capacitación"
    }

    if (!formData.localidad.trim()) {
      newErrors.localidad = "La localidad es requerida"
    }

    if (!formData.ocupacion.trim()) {
      newErrors.ocupacion = "La ocupación es requerida"
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

    // Obtener los títulos de las capacitaciones seleccionadas
    const capacitacionesTitulos = formData.capacitaciones
      .map((id) => capacitaciones.find((c) => c.id === id)?.title || id)
      .join("\n- ")

    // Construir el mensaje para WhatsApp
    const message = `
*Nueva inscripción a capacitación*
----------------------------------
*Capacitaciones seleccionadas:*
- ${capacitacionesTitulos}

*Nombre:* ${formData.nombre} ${formData.apellido}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Localidad:* ${formData.localidad}
*Ocupación:* ${formData.ocupacion}
*Comentarios:* ${formData.comentarios || "No se incluyeron comentarios"}
  `.trim()

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Número de WhatsApp
    const phoneNumber = "5493512082818"

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
        capacitaciones: [],
        localidad: "",
        ocupacion: "",
        comentarios: "",
      })
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <div>
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">¡Inscripción enviada!</h3>
          <p className="text-green-700 mb-4">
            Tu solicitud ha sido enviada correctamente. Se ha abierto WhatsApp para completar el envío.
          </p>
          <p className="text-green-600 text-sm">
            Si no se abrió automáticamente, por favor revisa la configuración de tu navegador.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Capacitaciones <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {capacitaciones.map((capacitacion) => (
                <div key={capacitacion.id} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`capacitacion-${capacitacion.id}`}
                    checked={formData.capacitaciones.includes(capacitacion.id)}
                    onChange={() => handleCheckboxChange(capacitacion.id)}
                    className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary mt-0.5"
                  />
                  <label
                    htmlFor={`capacitacion-${capacitacion.id}`}
                    className="ml-2 block text-sm text-gray-700 cursor-pointer"
                  >
                    {capacitacion.title}
                  </label>
                </div>
              ))}
            </div>
            {errors.capacitaciones && <p className="text-red-500 text-xs">{errors.capacitaciones}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="localidad" className="block text-sm font-medium text-gray-700">
              Localidad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                errors.localidad ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tu localidad"
            />
            {errors.localidad && <p className="text-red-500 text-xs">{errors.localidad}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700">
              Ocupación <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="ocupacion"
              name="ocupacion"
              value={formData.ocupacion}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                errors.ocupacion ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tu ocupación o profesión"
            />
            {errors.ocupacion && <p className="text-red-500 text-xs">{errors.ocupacion}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700">
              Comentarios adicionales
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="¿Tienes alguna pregunta o comentario adicional?"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Inscribirme"}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Al inscribirte, aceptas recibir información sobre esta y otras capacitaciones.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}

