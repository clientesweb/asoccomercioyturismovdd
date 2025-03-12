export interface Event {
  slug: string
  title: string
  date: string
  time: string
  endTime?: string
  location: string
  locationDetail?: string
  organizer?: string
  image: string
  description: string
  speakers?: Array<{
    name: string
    position: string
    image: string
  }>
  tags?: string[]
  relatedEvents?: string[]
  registrationLink?: string | null
  timestamp?: number
}

// Convertir fecha en formato "DD de mes de YYYY" a timestamp para ordenar
function dateStringToTimestamp(dateString: string): number {
  // Manejo para fechas especiales como "Todos los" || "Próximamente"
  if (dateString.includes("Todos los") || dateString.includes("Próximamente")) {
    return Date.now() + 1000 * 60 * 60 * 24 * 365 // Un año en el futuro
  }

  // Extraer solo números si hay una fecha específica
  const dayMatch = dateString.match(/\d+/)
  if (!dayMatch) return Date.now()

  const day = Number.parseInt(dayMatch[0], 10)

  const monthMap: { [key: string]: number } = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  }

  let month = -1
  // Buscar el mes en la cadena
  for (const [monthName, monthNum] of Object.entries(monthMap)) {
    if (dateString.toLowerCase().includes(monthName)) {
      month = monthNum
      break
    }
  }

  // Si no se encuentra un mes, usar el mes actual
  if (month === -1) month = new Date().getMonth()

  // Extraer el año si está presente, de lo contrario usar el año actual
  const yearMatch = dateString.match(/\d{4}/)
  const year = yearMatch ? Number.parseInt(yearMatch[0], 10) : new Date().getFullYear()

  return new Date(year, month, day).getTime()
}

// Keep only these two events in the events array and remove all others
export const events: Event[] = [
  {
    slug: "viernes-peatonales",
    date: "Todos los viernes de verano",
    location: "Calle San Martín (Villa del Dique)",
    time: "21:00 hs",
    endTime: "00:00 hs",
    title: "Viernes Peatonales",
    description: `
      <p>Durante el verano, la calle San Martín se convierte en peatonal todos los viernes a partir de las 21:00 horas, ofreciendo una experiencia única para locales y turistas.</p>
      
      <p>Los Viernes Peatonales son una iniciativa de la Asociación de Comercio, Turismo y Afines de Villa del Dique en colaboración con la Municipalidad, que busca dinamizar el comercio local y ofrecer un espacio de esparcimiento para toda la familia.</p>
      
      <h3>Actividades:</h3>
      
      <ul>
        <li><strong>Espectáculos musicales en vivo</strong>: Bandas y artistas locales se presentan en el escenario principal.</li>
        <li><strong>Danza</strong>: Presentaciones de ballet, folklore, tango y danzas contemporáneas.</li>
        <li><strong>Actividades para niños</strong>: Juegos, pintacaritas, títeres y espectáculos infantiles.</li>
        <li><strong>Feria de artesanos</strong>: Exposición y venta de productos artesanales de la región.</li>
        <li><strong>Gastronomía</strong>: Food trucks y puestos de comida con una variada oferta culinaria.</li>
      </ul>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=Viernes+Peatonales",
    locationDetail: "Calle San Martín, entre Av. Los Fresnos y Av. Los Espinillos",
    organizer: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
    tags: ["Verano", "Música en vivo", "Gastronomía", "Artesanías", "Familia"],
    relatedEvents: ["festival-jineteada-folclore"],
  },
  {
    slug: "festival-jineteada-folclore",
    date: "Próximamente",
    location: "Predio Los Eucaliptos (Villa del Dique)",
    time: "Todo el día",
    title: "Festival de Jineteada y Folclore",
    description: "Evento que combina tradiciones gauchas con música folclórica en vivo en el predio Los Eucaliptos.",
    image: "/placeholder.svg?height=600&width=1200&text=Festival",
    tags: ["Tradición", "Folklore", "Jineteada", "Gastronomía"],
    relatedEvents: ["viernes-peatonales"],
  },
]

// Agregar timestamps para ordenar por fecha
events.forEach((event) => {
  event.timestamp = dateStringToTimestamp(event.date)
})

// Función para obtener los eventos ordenados por fecha (más próximos primero)
export function getUpcomingEvents(count?: number): Event[] {
  const now = Date.now()

  const sortedEvents = [...events].sort((a, b) => {
    const aTimestamp = a.timestamp || dateStringToTimestamp(a.date)
    const bTimestamp = b.timestamp || dateStringToTimestamp(b.date)

    // Si ambos eventos son en fechas futuras o ambos son en fechas pasadas, ordenamos de más próximo a más lejano
    if ((aTimestamp > now && bTimestamp > now) || (aTimestamp < now && bTimestamp < now)) {
      return aTimestamp - bTimestamp
    }

    // Si uno es futuro y otro pasado, priorizamos el futuro
    return bTimestamp > aTimestamp ? 1 : -1
  })

  // Filtrar sólo eventos futuros o recurrentes si es necesario
  const upcomingEvents = sortedEvents.filter((event) => {
    return (
      (event.timestamp && event.timestamp >= now) ||
      event.date.includes("Todos los") ||
      event.date.includes("Próximamente")
    )
  })

  return count ? upcomingEvents.slice(0, count) : upcomingEvents
}

// Función para obtener un evento por su slug
export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug)
}

// Función para obtener eventos relacionados
export function getRelatedEvents(slugs: string[]): Event[] {
  return events.filter((event) => slugs.includes(event.slug))
}

// Función para obtener todos los eventos ordenados por fecha (más recientes primero)
export function getAllEvents(): Event[] {
  return [...events].sort((a, b) => {
    const aTimestamp = a.timestamp || dateStringToTimestamp(a.date)
    const bTimestamp = b.timestamp || dateStringToTimestamp(b.date)
    return aTimestamp - bTimestamp
  })
}

