import "./globals.css"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { LocalBusiness } from "@/components/schema-org"

// Asegurarnos de que la fuente Inter se cargue correctamente y con los pesos adecuados
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

// Metadatos SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://vivivilladeldique.org"),
  title: {
    default: "Villa del Dique - Asociación de Comercio y Turismo",
    template: "%s | Villa del Dique",
  },
  description:
    "Descubre Villa del Dique, un paraíso turístico en Córdoba. Eventos, alojamientos, gastronomía y actividades para disfrutar en familia.",
  keywords: [
    "Villa del Dique",
    "turismo",
    "Córdoba",
    "Calamuchita",
    "comercio",
    "eventos",
    "alojamiento",
    "vacaciones",
    "lago",
  ],
  authors: [{ name: "Asociación de Comercio, Turismo y Afines de Villa del Dique" }],
  creator: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
  publisher: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://vivivilladeldique.org",
    siteName: "Villa del Dique - Turismo y Comercio",
    title: "Villa del Dique - Descubre el paraíso en Córdoba",
    description:
      "Descubre Villa del Dique, un paraíso turístico en Córdoba. Eventos, alojamientos, gastronomía y actividades para disfrutar en familia.",
    images: [
      {
        url: "https://vivivilladeldique.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique - Paisaje del lago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique - Descubre el paraíso en Córdoba",
    description:
      "Descubre Villa del Dique, un paraíso turístico en Córdoba. Eventos, alojamientos, gastronomía y actividades para disfrutar en familia.",
    images: ["https://vivivilladeldique.org/twitter-image.jpg"],
    creator: "@VilladelDique",
    site: "@VilladelDique",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verificacion_google",
    yandex: "verificacion_yandex",
    yahoo: "verificacion_yahoo",
    other: {
      me: ["info@vivivilladeldique.org"],
    },
  },
  category: "tourism",
}

// Configuración de viewport y tema
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#01579B" },
    { media: "(prefers-color-scheme: dark)", color: "#01579B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#01579B" />
        <meta name="msapplication-TileColor" content="#01579B" />
      </head>
      <body className={`${inter.className} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {/* Schema.org para SEO local */}
          <LocalBusiness />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

