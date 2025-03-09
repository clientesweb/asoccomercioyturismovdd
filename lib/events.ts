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
  // Manejo para fechas especiales como "Todos los viernes de verano"
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

// Lista de eventos
export const events: Event[] = [
  {
    slug: "mercados-mundo-oportunidades-brasil",
    title: "Turismo receptivo: explorando oportunidades en Brasil",
    date: "25 de marzo de 2025",
    time: "10:00 hs",
    endTime: "12:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Comisión de Turismo ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Brasil",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Turismo receptivo: explorando oportunidades en Brasil", que se llevará a cabo el próximo 25 de marzo a las 10 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo brindar información actualizada sobre el mercado brasileño y las oportunidades que ofrece para los comercios y prestadores turísticos de Villa del Dique, en el marco de la relación turística bilateral entre ambos países.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Emb. Daniel Raimondi</strong>, Embajador de Argentina en Brasil</li>
        <li><strong>Lic. Marcelo Elizondo</strong>, Presidente de la Comisión de Turismo de la ACTyA</li>
        <li><strong>Dr. Paulo Solimeo</strong>, Economista Jefe de la Asociación de Hoteles de São Paulo</li>
        <li><strong>Ing. Roberto Domenech</strong>, Presidente de la Cámara Argentina de Turismo</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Panorama turístico de Brasil: situación actual y perspectivas</li>
        <li>Relación turística Argentina-Brasil: evolución reciente y tendencias</li>
        <li>Oportunidades para prestadores turísticos de Villa del Dique en el mercado brasileño</li>
        <li>Aspectos prácticos para recibir turistas brasileños: requisitos, idioma, costumbres</li>
        <li>Experiencias exitosas de destinos argentinos en Brasil</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Turismo de la ACTyA a través del correo electrónico turismo@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Emb. Daniel Raimondi",
        position: "Embajador de Argentina en Brasil",
        image: "/placeholder.svg?height=100&width=100&text=DR",
      },
      {
        name: "Lic. Marcelo Elizondo",
        position: "Presidente de la Comisión de Turismo de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=ME",
      },
      {
        name: "Dr. Paulo Solimeo",
        position: "Economista Jefe de la Asociación de Hoteles de São Paulo",
        image: "/placeholder.svg?height=100&width=100&text=PS",
      },
      {
        name: "Ing. Roberto Domenech",
        position: "Presidente de la Cámara Argentina de Turismo",
        image: "/placeholder.svg?height=100&width=100&text=RD",
      },
    ],
    tags: ["Brasil", "Turismo", "Oportunidades", "Webinar"],
    relatedEvents: [
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "la-agi-impacto-comunidad",
    title: "El turismo y su impacto en nuestra comunidad",
    date: "12 de marzo de 2025",
    time: "15:00 hs",
    endTime: "17:30 hs",
    location: "Salón Municipal (Villa del Dique)",
    locationDetail: "Plaza Central, Salón de Usos Múltiples",
    organizer: "Comisión de Desarrollo Local ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar de la jornada "El turismo y su impacto en nuestra comunidad", que se llevará a cabo el próximo 12 de marzo a las 15 horas en el Salón Municipal de Villa del Dique.</p>
      
      <p>El encuentro tiene como objetivo analizar el impacto del turismo en el desarrollo económico y social de Villa del Dique, así como debatir sobre su rol en el actual contexto económico.</p>
      
      <h3>Programa:</h3>
      
      <ul>
        <li><strong>15:00 hs</strong> - Acreditación</li>
        <li><strong>15:30 hs</strong> - Apertura a cargo del Presidente de la ACTyA, Mario González</li>
        <li><strong>15:45 hs</strong> - Panel: "El turismo como motor del desarrollo local"
          <ul>
            <li>Lic. Martín Rodríguez, Secretario de Turismo de Villa del Dique</li>
            <li>Dr. Carlos Pérez, Intendente de Villa del Dique</li>
            <li>Ing. Laura Fernández, Directora de Desarrollo Productivo</li>
          </ul>
        </li>
        <li><strong>16:45 hs</strong> - Coffee break</li>
        <li><strong>17:00 hs</strong> - Panel: "Desafíos y oportunidades para el turismo en el contexto actual"
          <ul>
            <li>Lic. Roberto Sánchez, Economista</li>
            <li>Dra. María González, Asesora Legal de la ACTyA</li>
            <li>Ing. Juan Martínez, Empresario del sector</li>
          </ul>
        </li>
        <li><strong>17:30 hs</strong> - Cierre y conclusiones</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Eventos de la ACTyA a través del correo electrónico eventos@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Mario González",
        position: "Presidente de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=MG",
      },
      {
        name: "Lic. Martín Rodríguez",
        position: "Secretario de Turismo de Villa del Dique",
        image: "/placeholder.svg?height=100&width=100&text=MR",
      },
      {
        name: "Dr. Carlos Pérez",
        position: "Intendente de Villa del Dique",
        image: "/placeholder.svg?height=100&width=100&text=CP",
      },
      {
        name: "Ing. Laura Fernández",
        position: "Directora de Desarrollo Productivo",
        image: "/placeholder.svg?height=100&width=100&text=LF",
      },
    ],
    tags: ["Turismo", "Desarrollo Local", "Comunidad", "Jornada"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "perspectivas-economicas-segundo-trimestre",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "perspectivas-economicas-segundo-trimestre",
    title: "Perspectivas turísticas para la temporada alta",
    date: "10 de marzo de 2025",
    time: "14:00 hs",
    endTime: "16:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Departamento de Estadísticas ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Perspectivas turísticas para la temporada alta", que se llevará a cabo el próximo 10 de marzo a las 14 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo analizar las proyecciones turísticas para la próxima temporada alta, con foco en las variables que más impactan en el sector turístico y comercial de Villa del Dique.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Dr. Martín Vauthier</strong>, Economista Jefe de la ACTyA</li>
        <li><strong>Lic. Marina Dal Poggetto</strong>, Directora Ejecutiva de EcoGo</li>
        <li><strong>Dr. Miguel Kiguel</strong>, Director de Econviews</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Contexto macroeconómico: inflación, tipo de cambio, poder adquisitivo</li>
        <li>Comportamiento del turismo: evolución reciente y proyecciones</li>
        <li>Tendencias en alojamiento y gastronomía</li>
        <li>Turismo internacional: llegada de extranjeros, principales mercados</li>
        <li>Impacto de las políticas económicas en el sector turístico</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita para socios de la ACTyA. No socios: $5.000.</p>
      
      <p>Para más información, contactar al Departamento de Estadísticas de la ACTyA a través del correo electrónico estadisticas@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Dr. Martín Vauthier",
        position: "Economista Jefe de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=MV",
      },
      {
        name: "Lic. Marina Dal Poggetto",
        position: "Directora Ejecutiva de EcoGo",
        image: "/placeholder.svg?height=100&width=100&text=MDP",
      },
      {
        name: "Dr. Miguel Kiguel",
        position: "Director de Econviews",
        image: "/placeholder.svg?height=100&width=100&text=MK",
      },
    ],
    tags: ["Turismo", "Proyecciones", "Webinar", "Temporada Alta"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "foro-comercio-internacional-mercados-asia",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
  {
    slug: "foro-comercio-internacional-mercados-asia",
    title: "Feria de productos regionales",
    date: "5 de marzo de 2025",
    time: "11:00 hs",
    endTime: "20:00 hs",
    location: "Plaza Central (Villa del Dique)",
    locationDetail: "Plaza Central, área peatonal",
    organizer: "Comisión de Desarrollo Local ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Feria",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar de la "Feria de productos regionales", que se llevará a cabo el próximo 5 de marzo de 11 a 20 horas en la Plaza Central de Villa del Dique.</p>
      
      <p>El evento tiene como objetivo promover y dar visibilidad a los productos regionales de Villa del Dique y alrededores, brindando un espacio para que productores y artesanos puedan comercializar sus productos directamente al público.</p>
      
      <h3>Programa:</h3>
      
      <ul>
        <li><strong>11:00 hs</strong> - Apertura de la feria</li>
        <li><strong>12:30 hs</strong> - Demostración de cocina regional a cargo del chef Carlos Martínez</li>
        <li><strong>15:00 hs</strong> - Espectáculo musical: Grupo folclórico "Las Sierras"</li>
        <li><strong>17:00 hs</strong> - Taller para niños: "Pequeños artesanos"</li>
        <li><strong>18:30 hs</strong> - Espectáculo musical: Banda "Alma de Pueblo"</li>
        <li><strong>20:00 hs</strong> - Cierre de la feria</li>
      </ul>
      
      <h3>Rubros presentes:</h3>
      
      <ul>
        <li>Productos gourmet (dulces, conservas, quesos, embutidos, etc.)</li>
        <li>Artesanías en madera, cuero, tejidos y cerámica</li>
        <li>Productos cosméticos naturales</li>
        <li>Vinos y licores regionales</li>
        <li>Miel y productos derivados</li>
        <li>Plantas y flores</li>
        <li>Gastronomía regional</li>
      </ul>
      
      <p>La entrada es libre y gratuita. En caso de lluvia, la feria se trasladará al Salón Municipal.</p>
      
      <p>Para más información, contactar al Departamento de Eventos de la ACTyA a través del correo electrónico eventos@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Carlos Martínez",
        position: "Chef especializado en cocina regional",
        image: "/placeholder.svg?height=100&width=100&text=CM",
      },
      {
        name: "Grupo folclórico 'Las Sierras'",
        position: "Música tradicional de la región",
        image: "/placeholder.svg?height=100&width=100&text=LS",
      },
      {
        name: "Banda 'Alma de Pueblo'",
        position: "Música popular argentina",
        image: "/placeholder.svg?height=100&width=100&text=AP",
      },
    ],
    tags: ["Feria", "Productos Regionales", "Artesanías", "Gastronomía"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
    ],
    registrationLink: null,
  },
  {
    slug: "webinar-transformacion-digital-comercio-minorista",
    title: "Webinar: Transformación digital en el turismo",
    date: "28 de febrero de 2025",
    time: "16:00 hs",
    endTime: "18:00 hs",
    location: "Via Zoom",
    locationDetail: "Evento virtual - Se enviará el enlace a los inscriptos",
    organizer: "Departamento de Innovación y Tecnología ACTyA",
    image: "/placeholder.svg?height=600&width=1200&text=Digital",
    description: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique invita a participar del webinar "Transformación digital en el turismo", que se llevará a cabo el próximo 28 de febrero a las 16 horas a través de la plataforma Zoom.</p>
      
      <p>El encuentro tiene como objetivo brindar estrategias y herramientas para que los prestadores turísticos puedan implementar tecnologías digitales que les permitan mejorar su competitividad y adaptarse a los nuevos hábitos de los turistas.</p>
      
      <h3>Disertantes:</h3>
      
      <ul>
        <li><strong>Ing. Alejandro Martínez</strong>, Director del Departamento de Innovación y Tecnología de la ACTyA</li>
        <li><strong>Lic. Carolina Sánchez</strong>, Especialista en Marketing Digital Turístico</li>
        <li><strong>Sr. Martín Rodríguez</strong>, Fundador de Reserva Fácil</li>
        <li><strong>Ing. Pablo González</strong>, Gerente de Tecnología de Despegar</li>
      </ul>
      
      <h3>Temario:</h3>
      
      <ul>
        <li>Diagnóstico digital: ¿dónde está tu negocio turístico hoy?</li>
        <li>Herramientas digitales básicas para prestadores turísticos</li>
        <li>Plataformas de reservas online: opciones para comenzar a vender</li>
        <li>Marketing digital para el sector turístico</li>
        <li>Medios de pago electrónicos</li>
        <li>Redes sociales para promoción turística</li>
        <li>Casos de éxito y lecciones aprendidas</li>
        <li>Preguntas y respuestas</li>
      </ul>
      
      <p>La actividad es gratuita, pero requiere inscripción previa. Los cupos son limitados.</p>
      
      <p>Para más información, contactar al Departamento de Innovación y Tecnología de la ACTyA a través del correo electrónico innovacion@actya.com.ar o al teléfono +54 9 351 208-2818.</p>
    `,
    speakers: [
      {
        name: "Ing. Alejandro Martínez",
        position: "Director del Departamento de Innovación y Tecnología de la ACTyA",
        image: "/placeholder.svg?height=100&width=100&text=AM",
      },
      {
        name: "Lic. Carolina Sánchez",
        position: "Especialista en Marketing Digital Turístico",
        image: "/placeholder.svg?height=100&width=100&text=CS",
      },
      {
        name: "Sr. Martín Rodríguez",
        position: "Fundador de Reserva Fácil",
        image: "/placeholder.svg?height=100&width=100&text=MR",
      },
      {
        name: "Ing. Pablo González",
        position: "Gerente de Tecnología de Despegar",
        image: "/placeholder.svg?height=100&width=100&text=PG",
      },
    ],
    tags: ["Transformación Digital", "Turismo", "Marketing Digital", "Webinar"],
    relatedEvents: [
      "mercados-mundo-oportunidades-brasil",
      "la-agi-impacto-comunidad",
      "perspectivas-economicas-segundo-trimestre",
    ],
    registrationLink: "https://www.actya.com.ar/eventos/registro",
  },
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
    relatedEvents: ["festival-jineteada-folclore", "dia-del-pueblo", "festival-provincial-pejerrey"],
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
    relatedEvents: ["viernes-peatonales", "dia-del-pueblo"],
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

