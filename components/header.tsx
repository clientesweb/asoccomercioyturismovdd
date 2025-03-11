"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, ChevronDown, X } from "lucide-react"
import { usePathname } from "next/navigation"

// Componente para el menú de navegación móvil
function MobileNavItem({
  title,
  links,
  isOpen,
  toggleOpen,
}: {
  title: string
  links: { href: string; text: string }[]
  isOpen: boolean
  toggleOpen: () => void
}) {
  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-white py-2"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`mobile-submenu-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        id={`mobile-submenu-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={`pl-4 mt-2 space-y-2 border-l border-blue-800 ${isOpen ? "block" : "hidden"}`}
        aria-hidden={!isOpen}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="block text-blue-200 hover:text-white py-1">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

function NavItem({
  title,
  links,
}: {
  title: string
  links: { href: string; text: string }[]
}) {
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 100)
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        className="flex items-center text-white font-medium hover:text-blue-200 transition-colors"
        aria-expanded={isHovered}
        aria-controls={`submenu-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {title}
        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isHovered ? "rotate-180" : ""}`} />
      </button>
      <div
        id={`submenu-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-all duration-300 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isHovered}
      >
        <div className="py-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Toggle para el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Cerrar todos los submenús cuando se cierra el menú principal
    if (isMenuOpen) setOpenSubmenu(null)
  }

  // Toggle para los submenús en móvil
  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Modificar el array navItems para incluir solo las opciones solicitadas
  const navItems = [
    {
      title: "Institucional",
      links: [
        { href: "/institucional/historia", text: "Historia" },
        { href: "/institucional/autoridades", text: "Autoridades" },
        { href: "/institucional/asociados", text: "Asociados" },
      ],
    },
    {
      title: "Capacitación",
      links: [
        { href: "/capacitacion", text: "Programa de Capacitaciones" },
        { href: "/capacitacion#inscripcion", text: "Inscripción" },
        { href: "/capacitacion/cursos", text: "Cursos" },
        { href: "/capacitacion/seminarios", text: "Seminarios" },
      ],
    },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-gradient-to-r from-primary to-secondary py-4 px-4 transition-shadow ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Inicio - Asociación de Comercio y Turismo Villa del Dique"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                alt="Logo Villa del Dique"
                width={50}
                height={50}
                className="h-12 w-auto mr-3"
              />
              <div className="text-white">
                <div className="text-sm font-medium leading-tight">Asociación de</div>
                <div className="text-sm font-medium leading-tight">Comercio y Turismo</div>
                <div className="text-sm font-medium leading-tight">Villa del Dique</div>
              </div>
            </Link>
          </div>

          {/* Menú de navegación desktop */}
          <nav className="hidden lg:flex space-x-6" aria-label="Navegación principal">
            {navItems.map((item, index) => (
              <NavItem key={index} title={item.title} links={item.links} />
            ))}
            <Link
              href="/noticias"
              className="flex items-center text-white font-medium hover:text-blue-200 transition-colors"
            >
              Noticias
            </Link>
            <Link
              href="/eventos"
              className="flex items-center text-white font-medium hover:text-blue-200 transition-colors"
            >
              Eventos
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button
              aria-label="Buscar"
              className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            >
              <Search className="h-6 w-6 text-white hover:text-secondary transition-colors" />
            </button>
            <button
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white hover:text-secondary transition-colors" />
              ) : (
                <Menu className="h-6 w-6 text-white hover:text-secondary transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil - solo visible en móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-primary z-40 lg:hidden overflow-y-auto" aria-label="Menú móvil">
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <MobileNavItem
                    key={index}
                    title={item.title}
                    links={item.links}
                    isOpen={openSubmenu === item.title}
                    toggleOpen={() => toggleSubmenu(item.title)}
                  />
                ))}
                <Link href="/noticias" className="block text-white hover:text-secondary py-2">
                  Noticias
                </Link>
                <Link href="/eventos" className="block text-white hover:text-secondary py-2">
                  Eventos
                </Link>
              </nav>
              <div className="mt-4 pt-4 border-t border-blue-800">
                <Link href="#" className="block text-white hover:text-secondary py-2">
                  Contacto
                </Link>
                <Link href="#" className="block text-white hover:text-secondary py-2">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

