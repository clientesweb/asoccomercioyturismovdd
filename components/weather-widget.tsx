"use client"

import { useEffect, useRef } from "react"

interface WeatherWidgetProps {
  className?: string
  variant?: "default" | "compact" | "sidebar"
}

export default function WeatherWidget({ className = "", variant = "default" }: WeatherWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the script is already loaded
    if (!document.getElementById("weatherwidget-io-js")) {
      const script = document.createElement("script")
      script.id = "weatherwidget-io-js"
      script.src = "https://weatherwidget.io/js/widget.min.js"
      script.async = true
      document.body.appendChild(script)
    } else {
      // If the script is already loaded, we need to re-run the widget initialization
      // @ts-ignore - accessing the window.__weatherwidget_init function that's added by the widget script
      if (window.__weatherwidget_init) {
        // @ts-ignore
        window.__weatherwidget_init()
      }
    }

    return () => {
      // Cleanup is optional here since the script might be used by other instances
    }
  }, [])

  // Different styling based on variant
  const getWidgetStyles = () => {
    switch (variant) {
      case "compact":
        return "max-w-sm rounded-lg overflow-hidden shadow-md"
      case "sidebar":
        return "w-full rounded-lg overflow-hidden shadow-md"
      default:
        return "w-full rounded-xl overflow-hidden shadow-lg"
    }
  }

  return (
    <div ref={widgetRef} className={`${getWidgetStyles()} ${className}`}>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/es/n32d17n64d45/villa-del-dique/"
        data-label_1="VILLA DEL DIQUE"
        data-label_2="Clima"
        data-font="Helvetica"
        data-icons="Climacons Animated"
        data-theme="original"
        data-basecolor="#0891b2"
        data-accent="#01579B"
        data-textcolor="#ffffff"
        data-highcolor="#ff9800"
        data-lowcolor="#03a9f4"
        data-suncolor="#ffc107"
        data-mooncolor="#9e9e9e"
        data-cloudcolor="#ffffff"
        data-cloudfill="#efefef"
        data-raincolor="#03a9f4"
        data-snowcolor="#ffffff"
      >
        VILLA DEL DIQUE Clima
      </a>
    </div>
  )
}

