export function LocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
    image: "https://www.villadeldique.org/logo.png",
    "@id": "https://www.villadeldique.org",
    url: "https://www.villadeldique.org",
    telephone: "+5493546404083",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Formosa 236, Barrio Comercial",
      addressLocality: "Villa del Dique",
      addressRegion: "Córdoba",
      postalCode: "5862",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.1833,
      longitude: -64.4167,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.facebook.com/vivivilladeldique", "https://www.instagram.com/vivivilladeldique"],
    priceRange: "$$",
    description:
      "La Asociación de Comercio, Turismo y Afines de Villa del Dique trabaja desde 2014 para el desarrollo del comercio y el turismo en nuestra comunidad.",
    foundingDate: "2014-08-28",
    taxID: "30-71499090-6",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

