"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface NavItemProps {
  title: string
  links: { title: string; href: string }[]
}

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex space-x-6">
      <NavItem
        title="Institucional"
        links={[
          { title: "Historia", href: "#" },
          { title: "Autoridades", href: "#" },
          { title: "Cámaras Asociadas", href: "#" },
        ]}
      />
      <NavItem
        title="Servicios"
        links={[
          { title: "Certificaciones", href: "#" },
          { title: "Capacitación", href: "#" },
          { title: "Asesoramiento", href: "#" },
        ]}
      />
      <NavItem
        title="Capacitación"
        links={[
          { title: "Cursos", href: "#" },
          { title: "Seminarios", href: "#" },
          { title: "Webinars", href: "#" },
        ]}
      />
      <NavItem
        title="Comercio Exterior"
        links={[
          { title: "Exportación", href: "#" },
          { title: "Importación", href: "#" },
          { title: "Aranceles", href: "#" },
        ]}
      />
      <NavItem
        title="Información"
        links={[
          { title: "Estadísticas", href: "#" },
          { title: "Informes", href: "#" },
          { title: "Publicaciones", href: "#" },
        ]}
      />
      <NavItem
        title="Noticias"
        links={[
          { title: "Últimas Noticias", href: "#" },
          { title: "Comunicados", href: "#" },
          { title: "Prensa", href: "#" },
        ]}
      />
    </nav>
  )
}

function NavItem({ title, links }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="flex items-center text-white font-medium hover:text-blue-200 transition-colors">
        {title}
        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isHovered ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-all duration-300 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-2">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

