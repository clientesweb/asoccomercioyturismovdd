"use client"

import { useState, useRef, useEffect } from "react"
import { Share2, Facebook, Twitter, Linkedin, Mail, Printer, MessageCircle } from "lucide-react"

interface ShareButtonsProps {
  title: string
  url: string
  vertical?: boolean
}

export default function ShareButtons({ title, url, vertical = false }: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Cerrar el menú con la tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600"
        aria-label="Compartir"
        aria-expanded={isOpen}
        aria-controls="share-menu"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Compartir
      </button>

      {isOpen && (
        <div
          id="share-menu"
          ref={menuRef}
          className={`absolute ${vertical ? "mt-2 right-0" : "mt-2 left-0"} w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200`}
          role="menu"
        >
          <div className="py-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
            >
              <Facebook className="h-4 w-4 mr-3" />
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
            >
              <Twitter className="h-4 w-4 mr-3" />
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
            >
              <Linkedin className="h-4 w-4 mr-3" />
              LinkedIn
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
            >
              <MessageCircle className="h-4 w-4 mr-3 text-green-500" />
              WhatsApp
            </a>
            <a
              href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
            >
              <Mail className="h-4 w-4 mr-3" />
              Email
            </a>
            <button
              onClick={() => window.print()}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none w-full text-left"
              role="menuitem"
            >
              <Printer className="h-4 w-4 mr-3" />
              Imprimir
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

