"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Printer,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"

function NoticiaDetalleClientComponent() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [noticia, setNoticia] = useState<any>(null)
  const [relatedNews, setRelatedNews] = useState<any[]>([])
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  useEffect(() => {
    // Buscar la noticia por slug
    const noticiaEncontrada = getArticleBySlug(slug)

    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada)

      // Obtener noticias relacionadas
      if (noticiaEncontrada.relatedNews && noticiaEncontrada.relatedNews.length > 0) {
        const related = getRelatedArticles(noticiaEncontrada.relatedNews)
        setRelatedNews(related)
      }
    } else {
      // Si no se encuentra la noticia, redirigir a la página de noticias
      router.push("/noticias")
    }
  }, [slug, router])

  if (!noticia) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Cargando noticia...</h1>
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
  const shareTitle = noticia.title

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
              <Link href="/noticias" className="hover:text-primary">
                Noticias
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-gray-900 font-medium truncate">{noticia.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Categoría y botón volver */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm font-medium text-secondary">{noticia.category}</div>
            <Link href="/noticias" className="flex items-center text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver a noticias
            </Link>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {noticia.title}
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {noticia.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {noticia.author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {noticia.readTime} de lectura
            </div>
            <div className="relative ml-auto">
              <button
                onClick={toggleShareMenu}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
                aria-label="Compartir"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </button>

              {isShareMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Facebook className="h-4 w-4 mr-3" />
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Twitter className="h-4 w-4 mr-3" />
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Linkedin className="h-4 w-4 mr-3" />
                      LinkedIn
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle)}%20${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <MessageCircle className="h-4 w-4 mr-3 text-green-500" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Mail className="h-4 w-4 mr-3" />
                      Email
                    </a>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Printer className="h-4 w-4 mr-3" />
                      Imprimir
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src={noticia.image || "/placeholder.svg"}
              alt={noticia.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Contenido */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: noticia.content }} />

            {/* Tags */}
            {noticia.tags && noticia.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Etiquetas:</h3>
                <div className="flex flex-wrap gap-2">
                  {noticia.tags.map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/noticias?tag=${tag}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Noticias relacionadas */}
          {relatedNews.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((noticia) => (
                  <Link
                    key={noticia.slug}
                    href={`/noticias/${noticia.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-medium text-secondary mb-1">{noticia.category}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{noticia.title}</h3>
                      <div className="text-sm text-gray-600">{noticia.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NoticiaDetalleClientComponent

