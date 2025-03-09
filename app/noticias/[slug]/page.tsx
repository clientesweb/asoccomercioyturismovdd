import NoticiaDetalleClient from "./NoticiaDetalleClient"

export const metadata = {
  title: "Noticias | Villa del Dique",
  description:
    "Mantente informado sobre las últimas noticias y novedades de Villa del Dique, eventos, actividades y más.",
  openGraph: {
    title: "Noticias | Villa del Dique",
    description:
      "Mantente informado sobre las últimas noticias y novedades de Villa del Dique, eventos, actividades y más.",
  },
}

// Asegurarnos de exportar correctamente el componente como default
export default function NoticiaDetallePage() {
  return <NoticiaDetalleClient />
}

