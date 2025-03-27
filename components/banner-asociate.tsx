"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BannerAsociate() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-highlight blur-3xl"></div>
        <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            ¡Potencia tu negocio asociándote con nosotros!
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-6">
            Únete a la Asociación de Comercio y Turismo de Villa del Dique y accede a beneficios exclusivos,
            visibilidad, capacitaciones y una red de contactos que impulsará tu emprendimiento.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/asociate"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-6 py-3 text-base font-medium hover:bg-white/90 transition-colors"
            >
              Quiero asociarme
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/asociate#beneficios"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-6 py-3 text-base font-medium hover:bg-white/10 transition-colors"
            >
              Ver beneficios
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                alt="Logo Villa del Dique"
                width={180}
                height={180}
                className="w-36 h-36 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

