import NoticiasPageClient from "./NoticiasPageClient"

export const metadata = {
  title: "Noticias y Novedades | Villa del Dique",
  description:
    "Mantente informado sobre las últimas noticias y novedades de Villa del Dique, eventos, actividades y más.",
  openGraph: {
    title: "Noticias y Novedades | Villa del Dique",
    description:
      "Mantente informado sobre las últimas noticias y novedades de Villa del Dique, eventos, actividades y más.",
  },
}

export default function NoticiasPage() {
  return <NoticiasPageClient />
}

