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

// Update the events array to include these two events with detailed information
export const events: Event[] = [
  {
    slug: "pascuas-serranas-2025",
    title: "Pascuas Serranas 2025: Tradición, sabor y cultura",
    date: "19 de abril de 2025",
    time: "11:00 hs",
    endTime: "18:00 hs",
    location: "Plaza San Martín (Villa del Dique)",
    locationDetail: "Frente a la parroquia Nuestra Señora de Pompeya",
    organizer: "Municipalidad de Villa del Dique",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_489520611_18072294655871230_1356147591489562096_n.jpg-Q0dAZXRWD9KZLV4v2sXMrjhBjA95Th.jpeg",
    description: `
      <p>La Municipalidad de Villa del Dique invita a vecinos, turistas y visitantes a disfrutar de la edición 2025 de Pascuas Serranas, un evento que ya se ha convertido en una tradición en la región. Enmarcado en la celebración de Semana Santa, este encuentro cultural y gastronómico celebra por cuarto año consecutivo las raíces, sabores y costumbres locales.</p>
      
      <p>La gran cita será el sábado 19 de abril, de 11 a 18 horas, en la plaza San Martín, frente a la parroquia Nuestra Señora de Pompeya. La jornada promete una experiencia única para toda la familia, con una amplia variedad de actividades, música en vivo y propuestas gastronómicas que deleitarán todos los sentidos.</p>
      
      <p>Este año, la gran novedad será la <strong>degustación de pejerrey en distintas preparaciones</strong>, disponible para todo el público.</p>
      
      <div class="my-8">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_489520611_18072294655871230_1356147591489562096_n.jpg-Q0dAZXRWD9KZLV4v2sXMrjhBjA95Th.jpeg" alt="Pascuas Serranas 2025 - Degustación de Pejerrey" class="w-full rounded-xl max-h-[500px] object-contain mx-auto" />
      </div>
      
      <h2>Programación artística</h2>
      
      <p>La grilla artística reunirá destacados talentos regionales:</p>
      
      <ul>
        <li>Dúo de Arpas: Adolfo Meza y Natalia Casola</li>
        <li>Banda de flamenco con bailarines en vivo</li>
        <li>Alma Argentina: música folklórica</li>
        <li>Grupos de danzas folklóricas de Villa del Dique</li>
        <li>Academia de Folklore y Malambo "Criollos del Sauce" de Villa General Belgrano</li>
      </ul>
      
      <h2>Actividades destacadas</h2>
      
      <p>Además de la propuesta musical, el evento contará con:</p>
      
      <ul>
        <li><strong>Degustación pública de pejerrey</strong></li>
        <li><strong>Charla y degustación de gin artesanal</strong></li>
        <li>Espacios de recreación familiar:
          <ul>
            <li>Juegos de kermés</li>
            <li>Plaza didáctica con juegos</li>
            <li>Intervención artística de payasas</li>
          </ul>
        </li>
      </ul>
      
      <h2>Propuesta gastronómica</h2>
      
      <p>La oferta culinaria será variada y abundante. En la sección salada se podrán encontrar platos como:</p>
      
      <ul>
        <li>Cazuela de mariscos</li>
        <li>Empanadas de pescado</li>
        <li>Ñoquis y tallarines con salsa de mariscos</li>
        <li>Rabas y conos de pescado frito</li>
        <li>Sándwiches de vacío y bondiola a la llama</li>
        <li>Empanadas y pollo al disco</li>
      </ul>
      
      <p>Para el postre y la merienda, habrá:</p>
      
      <ul>
        <li>Café y chocolate caliente</li>
        <li>Rolls de canela y croissants rellenos</li>
        <li>Productos de masa madre</li>
      </ul>
      
      <p>Las bebidas incluirán jugos naturales, licuados y gin artesanal.</p>
      
      <h2>Otros espacios</h2>
      
      <p>La jornada también contará con un puesto de huevos de Pascua y un paseo de artesanos y emprendedores, ideal para quienes deseen llevarse un recuerdo o conocer el trabajo de los productores locales.</p>
      
      <p>Pascuas Serranas 2025 es una excelente oportunidad para reencontrarse con la tradición, disfrutar de la gastronomía y vivir una jornada inolvidable en familia. ¡Están todos invitados!</p>
      
      <p>Para más información, sigue a la Municipalidad de Villa del Dique en Instagram: <a href="https://www.instagram.com/munivilladeldique" target="_blank" rel="noopener noreferrer">@munivilladeldique</a></p>
    `,
    speakers: [
      {
        name: "Dúo de Arpas",
        position: "Adolfo Meza y Natalia Casola",
        image: "/placeholder.svg?height=100&width=100&text=Dúo+Arpas",
      },
      {
        name: "Banda de flamenco",
        position: "Con bailarines en vivo",
        image: "/placeholder.svg?height=100&width=100&text=Flamenco",
      },
      {
        name: "Alma Argentina",
        position: "Música folklórica",
        image: "/placeholder.svg?height=100&width=100&text=Folklore",
      },
      {
        name: "Criollos del Sauce",
        position: "Academia de Folklore y Malambo",
        image: "/placeholder.svg?height=100&width=100&text=Malambo",
      },
    ],
    tags: ["Gastronomía", "Música en vivo", "Folklore", "Semana Santa", "Familia", "Pejerrey"],
    relatedEvents: ["viernes-peatonales", "festival-jineteada-folclore"],
    registrationLink: null,
  },
  {
    slug: "viernes-peatonales",
    title: "Viernes Peatonales",
    date: "Todos los viernes de verano",
    time: "21:00 hs",
    endTime: "00:00 hs",
    location: "Calle San Martín (Villa del Dique)",
    locationDetail: "Calle San Martín, entre Av. Los Fresnos y Av. Los Espinillos",
    organizer: "Asociación de Comercio, Turismo y Afines de Villa del Dique",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/multimedia.normal.9a23a2fb2927271e.56444420564945524e45532043414c4c454a45524f532030315f6e6f726d616c2e6a7067%20%281%29.jpg-JY4MsEUdsbFL0FOp5Mp3IjT88si3Kz.jpeg",
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
      
      <h3>Programación típica:</h3>
      
      <ul>
        <li><strong>21:00 hs</strong> - Apertura de la feria de artesanos y puestos gastronómicos</li>
        <li><strong>21:30 hs</strong> - Actividades infantiles</li>
        <li><strong>22:00 hs</strong> - Primer show musical</li>
        <li><strong>22:45 hs</strong> - Presentación de danza</li>
        <li><strong>23:15 hs</strong> - Segundo show musical</li>
        <li><strong>00:00 hs</strong> - Cierre</li>
      </ul>
      
      <p>La programación específica de cada viernes se anuncia en nuestras redes sociales durante la semana.</p>
      
      <p>En caso de lluvia, las actividades se trasladan al Salón Municipal o se reprograman para el siguiente viernes, según la disponibilidad.</p>
      
      <p>Para más información, contactar a la Asociación de Comercio, Turismo y Afines de Villa del Dique a través del WhatsApp: 3546 404083.</p>
    `,
    speakers: [
      {
        name: "Artistas locales",
        position: "Músicos y bandas de la región",
        image: "/placeholder.svg?height=100&width=100&text=Artistas",
      },
      {
        name: "Grupos de danza",
        position: "Ballet, folklore y contemporáneo",
        image: "/placeholder.svg?height=100&width=100&text=Danza",
      },
      {
        name: "Artesanos",
        position: "Expositores de productos regionales",
        image: "/placeholder.svg?height=100&width=100&text=Artesanos",
      },
    ],
    tags: ["Verano", "Música en vivo", "Gastronomía", "Artesanías", "Familia"],
    relatedEvents: ["festival-jineteada-folclore", "pascuas-serranas-2025"],
    registrationLink: null,
  },
  {
    slug: "festival-jineteada-folclore",
    title: "Festival de Jineteada y Folclore",
    date: "8 de febrero de 2025",
    time: "12:00 hs",
    endTime: "00:00 hs",
    location: "Centro Tradicionalista Las Espuelas (Villa del Dique)",
    locationDetail: "Ruta Provincial 5, Km 82",
    organizer: "Municipalidad de Villa del Dique",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476597986_1017876430364615_7571482614932357959_n.jpg-WGw7LfWOpLCiy2w7CX1p2ZykSproQj.jpeg",
    description: `
      <p>Villa del Dique se prepara para vivir una de las fiestas más tradicionales de la región: el Festival de Jineteada y Folclore. El Centro Tradicionalista Las Espuelas se convierte en el escenario perfecto para celebrar nuestras tradiciones gauchas y la música folclórica argentina.</p>

      <h3>Programa del Festival:</h3>

      <h4>Sábado 8 de febrero</h4>
      <ul>
        <li><strong>12:00 hs</strong> - Apertura del predio y patio de comidas</li>
        <li><strong>14:00 hs</strong> - Inicio de la jineteada</li>
        <li><strong>17:00 hs</strong> - Muestras de destreza gaucha</li>
        <li><strong>19:00 hs</strong> - Peña folclórica</li>
        <li><strong>21:00 hs</strong> - Festival nocturno con artistas invitados</li>
        <li><strong>23:30 hs</strong> - Gran cierre con Magui Olave</li>
      </ul>

      <h3>Actividades:</h3>
      <ul>
        <li><strong>Jineteada</strong>: Las mejores tropillas y jinetes de la región</li>
        <li><strong>Música en vivo</strong>: Artistas locales y nacionales</li>
        <li><strong>Patio de comidas</strong>: Gastronomía criolla</li>
        <li><strong>Artesanías</strong>: Feria de productos regionales</li>
        <li><strong>Actividades infantiles</strong>: Juegos y entretenimiento para los más pequeños</li>
      </ul>

      <h3>Sobre el Centro Tradicionalista "Las Espuelas":</h3>
      <p>El Centro Tradicionalista "Las Espuelas" de Villa del Dique es una organización dedicada a preservar y promover las tradiciones gauchas y el folclore argentino en la región. A lo largo de los años, ha sido fundamental en la organización de eventos culturales que celebran la herencia criolla.</p>
      
      <p>A través de estas y otras actividades, el Centro Tradicionalista "Las Espuelas" se ha consolidado como un pilar en la promoción y conservación de las tradiciones gauchas en Villa del Dique, ofreciendo a locales y visitantes la oportunidad de conectarse con la rica herencia cultural de la región.</p>

      <p>Las entradas están disponibles en preventa en la Municipalidad y comercios adheridos. Menores de 10 años no pagan entrada.</p>
    `,
    speakers: [
      {
        name: "La Juntada",
        position: "Grupo folclórico",
        image: "/placeholder.svg?height=100&width=100&text=LJ",
      },
      {
        name: 'Jimena la "Negra" Sterpone',
        position: "Cantante",
        image: "/placeholder.svg?height=100&width=100&text=JS",
      },
      {
        name: "Los Cantores del Alba",
        position: "Grupo folclórico",
        image: "/placeholder.svg?height=100&width=100&text=CA",
      },
      {
        name: "Magui Olave",
        position: "Gran cierre",
        image: "/placeholder.svg?height=100&width=100&text=MO",
      },
    ],
    tags: ["Tradición", "Folklore", "Jineteada", "Gastronomía", "Familia"],
    relatedEvents: ["viernes-peatonales", "pascuas-serranas-2025"],
    registrationLink: "https://www.actya.com.ar/eventos/festival-jineteada",
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
  // Buscar el evento directamente en el array de eventos
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
