"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getLatestArticles } from "@/lib/articles"

export default function NoticiasPageClient() {
  const [isTopicsOpen, setIsTopicsOpen] = useState(false)

  // Obtener los artículos ordenados por fecha
  const noticias = getLatestArticles()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Noticias</h1>

          {/* Barra de búsqueda */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Filtro de temas */}
          <div className="mb-8 relative">
            <button
              onClick={() => setIsTopicsOpen(!isTopicsOpen)}
              className="flex items-center justify-between w-full px-6 py-4 bg-white rounded-lg border border-gray-200 text-lg"
            >
              <span>Ver todos los temas</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isTopicsOpen ? "rotate-180" : ""}`} />
            </button>
            {isTopicsOpen && (
              <div className="absolute z-10 w-full mt-2 py-2 bg-white rounded-lg shadow-lg border border-gray-200">
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  Economía
                </a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  Turismo
                </a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  Comunicados de Prensa
                </a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  Eventos
                </a>
              </div>
            )}
          </div>

          {/* Banner publicitario */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_447977303_1261253978198034_4027655341568195616_n.jpg-srE61xHNqDOCJIHNr7H5mG4cZZKXLf.jpeg"
              alt="Te invitamos a conocer nuestra asociación"
              width={1080}
              height={1350}
              className="w-full"
            />
          </div>

          {/* Lista de noticias */}
          <div className="space-y-6">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/noticias/${noticia.slug}`} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="text-sm text-gray-500 mb-2">{noticia.date}</div>
                    <div className="text-sm font-medium text-secondary mb-2">{noticia.category}</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{noticia.title}</h2>
                    <span className="text-secondary font-medium">Leer más →</span>
                  </div>
                </Link>
              </article>
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

