"use client"

import { useEffect } from "react"

export default function StyleReset() {
  useEffect(() => {
    // Forzar un reflow para asegurar que los estilos se apliquen correctamente
    document.body.style.display = "none"
    document.body.offsetHeight // Forzar reflow
    document.body.style.display = ""

    // Alternativamente, podemos intentar recargar los estilos
    const links = document.querySelectorAll('link[rel="stylesheet"]')
    links.forEach((link) => {
      const href = link.getAttribute("href")
      if (href) {
        link.setAttribute("href", href + "?reload=" + new Date().getTime())
      }
    })
  }, [])

  return null
}

