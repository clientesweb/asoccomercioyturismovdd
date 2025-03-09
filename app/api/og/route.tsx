import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Parámetros dinámicos para la imagen
    const title = searchParams.get("title") || "Villa del Dique"
    const type = searchParams.get("type") || "default"

    // No necesitamos cargar fuentes locales, usaremos fuentes del sistema
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#01579B",
          backgroundImage: "linear-gradient(to bottom right, #01579B, #03A9F4)",
          fontSize: 60,
          fontWeight: 700,
          textAlign: "center",
          padding: "0 120px",
          color: "white",
          fontFamily: "system-ui, sans-serif", // Usamos fuentes del sistema
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path fill="#FFFFFF" d="M50 5 L95 30 L95 80 L50 95 L5 80 L5 30 Z" />
            <path fill="#4CAF50" d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" />
            <path fill="#FFC107" d="M50 35 L60 40 L60 50 L50 55 L40 50 L40 40 Z" />
            <path fill="#FFE0B2" d="M50 60 L55 65 L50 70 L45 65 Z" />
          </svg>
          <span style={{ fontSize: 24 }}>vivivilladeldique.org</span>
        </div>

        {type === "event" && (
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              backgroundColor: "#FFC107",
              color: "#01579B",
              padding: "4px 12px",
              borderRadius: 16,
              fontSize: 24,
            }}
          >
            EVENTO
          </div>
        )}

        {type === "news" && (
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "4px 12px",
              borderRadius: 16,
              fontSize: 24,
            }}
          >
            NOTICIA
          </div>
        )}

        <div>{title}</div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          Asociación de Comercio y Turismo de Villa del Dique
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        // No necesitamos especificar fuentes personalizadas
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

