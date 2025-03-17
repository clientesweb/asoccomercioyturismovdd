export interface Article {
  slug: string
  title: string
  date: string
  category: string
  author: string
  readTime: string
  image: string
  content: string
  tags: string[]
  relatedNews: string[]
  timestamp?: number // Para ordenar por fecha más fácilmente
}

// Convertir fecha en formato "DD de mes de YYYY" a timestamp para ordenar
function dateStringToTimestamp(dateString: string): number {
  // Manejo simple para fechas en formato "9 de marzo de 2025" o "Viernes 7 de marzo 2025"
  const cleanDate = dateString.replace(/^[A-Za-z]+ /, "") // Eliminar día de la semana si existe
  const parts = cleanDate.split(" de ")

  const day = Number.parseInt(parts[0], 10)

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
  let year = 0

  // Buscar el mes en la cadena
  for (const [monthName, monthNum] of Object.entries(monthMap)) {
    if (cleanDate.includes(monthName)) {
      month = monthNum
      break
    }
  }

  // Extraer el año
  const yearMatch = cleanDate.match(/\d{4}/)
  if (yearMatch) {
    year = Number.parseInt(yearMatch[0], 10)
  }

  if (month >= 0 && year > 0) {
    return new Date(year, month, day).getTime()
  }

  // Si hay algún problema, devolver fecha actual
  return Date.now()
}

// Modificar el array de artículos para mantener solo los dos artículos solicitados
export const articles: Article[] = [
  {
    slug: "bienvenidos-asociacion-comercio-turismo",
    title: "Bienvenidos a la Asociación de Comercio y Turismo de Villa del Dique",
    date: "17 de marzo de 2025",
    category: "INSTITUCIONAL",
    author: "Equipo de Comunicación ACTyA",
    readTime: "5 minutos",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dieque-scaled-1.jpg-bhcArDy6gzaLSUqLV3DZZwHYm9EWli.jpeg",
    content: `
  <p>En Villa del Dique, un pintoresco pueblo enclavado en las Sierras de Córdoba, la Asociación de Comercio y Turismo trabaja incansablemente para promover el turismo y fortalecer el comercio local. Nuestro objetivo es hacer de esta localidad un destino más atractivo para los turistas y una comunidad próspera para los comerciantes.</p>

  <h2>¿Quiénes somos?</h2>

  <p>La Asociación de Comercio y Turismo de Villa del Dique nace con la visión de fomentar el desarrollo sostenible del turismo y apoyar a los emprendedores locales. Estamos comprometidos con el crecimiento de la región, la organización de eventos, la promoción de nuestros atractivos naturales y culturales, y el fortalecimiento de la red comercial de la localidad.</p>

  <h2>Nuestros Objetivos</h2>

  <ul>
    <li><strong>Promover el Turismo:</strong> Con el respaldo de los comerciantes locales, organizamos actividades y eventos que destacan las bellezas naturales, la gastronomía y las tradiciones de Villa del Dique.</li>
    <li><strong>Apoyo a los Comercios Locales:</strong> Ofrecemos capacitaciones, asesoramiento y visibilidad a los comerciantes para potenciar sus negocios y mejorar sus oportunidades de venta.</li>
    <li><strong>Desarrollo Sustentable:</strong> Trabajamos con un enfoque de respeto por el medio ambiente, garantizando que el crecimiento de la comunidad sea responsable y en armonía con la naturaleza.</li>
  </ul>

  <h2>Villa del Dique: Un Destino Inolvidable</h2>

  <p>Villa del Dique es conocida por su lago Los Molinos, que ofrece actividades acuáticas, paseos en bote y pesca. Además, las sierras circundantes permiten disfrutar de caminatas y aventuras al aire libre. La oferta gastronómica de la región es variada, con restaurantes que destacan los sabores tradicionales de Córdoba.</p>

  <h3>Actividades recomendadas:</h3>

  <ul>
    <li>Senderismo en las sierras.</li>
    <li>Disfrutar de un día de sol en las playas del lago.</li>
    <li>Degustar la cocina regional en nuestros restaurantes y parrillas.</li>
    <li>Participar en eventos locales y festivales que se organizan durante todo el año.</li>
  </ul>

  <h2>Nuestro Compromiso con la Comunidad</h2>

  <p>Como asociación, buscamos construir una comunidad inclusiva, próspera y dinámica. Apoyamos a los emprendedores locales y a las pequeñas empresas, fomentando el trabajo conjunto para maximizar el impacto positivo de cada acción que realizamos.</p>

  <h2>¿Cómo puedes formar parte?</h2>

  <p>Ya seas un turista o un comerciante, te invitamos a ser parte de nuestra comunidad:</p>

  <ul>
    <li><strong>Turistas:</strong> Explora nuestras maravillas naturales y disfruta de una experiencia única en Villa del Dique.</li>
    <li><strong>Comerciantes:</strong> Únete a nuestra asociación y accede a herramientas, visibilidad y oportunidades para hacer crecer tu negocio.</li>
  </ul>

  <h2>Contáctanos</h2>

  <p>Si tienes alguna pregunta o deseas obtener más información, no dudes en contactarnos a través de nuestra web. También puedes seguirnos en nuestras redes sociales para estar al tanto de las novedades y eventos.</p>
`,
    tags: ["Institucional", "Turismo", "Comercio", "Villa del Dique", "Comunidad"],
    relatedNews: ["asociacion-lanza-capacitaciones-para-turismo-comercio"],
  },
  {
    slug: "asociacion-lanza-capacitaciones-para-turismo-comercio",
    title: "La Asociación lanza un programa de capacitaciones para potenciar el turismo y comercio local",
    date: "17 de marzo de 2025",
    category: "COMUNICADOS DE PRENSA",
    author: "Equipo de Comunicación ACTyA",
    readTime: "5 minutos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-aIECL47jNFbR4BbMKz2iHb0BFPJYHx.jpeg",
    content: `
  <p>La Asociación de Comercio y Turismo de Villa del Dique sigue impulsando el crecimiento del sector con un nuevo <strong>programa de capacitaciones</strong>, dirigido a emprendedores, comerciantes y alojamientos.</p>

  <p>El objetivo de estas iniciativas es brindar herramientas estratégicas para mejorar la atención al cliente, potenciar los negocios y fomentar el crecimiento del turismo y el comercio en la región.</p>

  <h2>Capacitación: Calidad Humana al Servicio del Cliente</h2>

  <p>Con el fin de mejorar la atención y fortalecer la relación con los clientes, la Asociación presenta este taller que busca dotar a los comerciantes de habilidades esenciales para garantizar un servicio de calidad y fomentar la <strong>lealtad y satisfacción</strong> del cliente.</p>

  <ul>
    <li><strong>Modalidad:</strong> Teórico - Práctico, Presencial</li>
    <li><strong>Destinado a:</strong> Público general</li>
    <li><strong>Duración:</strong> 8 horas (4 encuentros de 2 horas cada uno)</li>
  </ul>

  <p>Desde la Asociación enfatizaron que mejorar la atención al cliente es clave para consolidar a Villa del Dique como un destino turístico de referencia.</p>

  <h2>Taller: Crea tu propio emprendimiento desde cero</h2>

  <p>Este taller está diseñado para aquellos que desean transformar sus ideas en negocios viables. Los participantes recibirán conocimientos fundamentales sobre planificación estratégica, herramientas digitales y desarrollo comercial.</p>

  <ul>
    <li><strong>Planificación y validación de ideas</strong></li>
    <li><strong>Estrategias para el crecimiento sostenible</strong></li>
    <li><strong>Desarrollo de un plan de acción efectivo</strong></li>
  </ul>

  <p>Se trata de una capacitación interactiva y práctica, que permitirá a los emprendedores salir con un proyecto consolidado y una hoja de ruta clara hacia el éxito.</p>

  <h2>Un compromiso con el desarrollo local</h2>

  <p>Desde la Asociación de Comercio y Turismo de Villa del Dique destacaron la importancia de estas capacitaciones como parte de un plan integral para potenciar la economía local.</p>

  <p><em>"Estamos convencidos de que la formación continua es una herramienta clave para impulsar el turismo y el comercio en Villa del Dique. Con estos talleres, buscamos proporcionar conocimientos prácticos que generen un impacto positivo y sostenible en la comunidad"</em>, expresaron desde la dirigencia de la Asociación.</p>

  <p>Además, enfatizaron que este es solo el <strong>primer paso de una estrategia a largo plazo</strong>, con el objetivo de posicionar a Villa del Dique en una <strong>nueva era digital y comercial</strong>.</p>

  <h2>Inscripciones abiertas</h2>

  <p>Los interesados en participar pueden inscribirse directamente en nuestra página de capacitaciones:</p>

  <p>🌐 <a href="/capacitacion">Inscripción a Capacitaciones</a></p>
`,
    tags: ["Capacitación", "Turismo", "Comercio", "Emprendedores", "Atención al Cliente"],
    relatedNews: ["bienvenidos-asociacion-comercio-turismo"],
  },
]

// Agregar timestamps para ordenar por fecha
articles.forEach((article) => {
  article.timestamp = dateStringToTimestamp(article.date)
})

// Función para obtener los artículos ordenados por fecha (más recientes primero)
export function getLatestArticles(count?: number): Article[] {
  const sortedArticles = [...articles].sort((a, b) => {
    const aTimestamp = a.timestamp || dateStringToTimestamp(a.date)
    const bTimestamp = b.timestamp || dateStringToTimestamp(b.date)
    return bTimestamp - aTimestamp
  })

  return count ? sortedArticles.slice(0, count) : sortedArticles
}

// Función para obtener un artículo por su slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

// Función para obtener artículos relacionados
export function getRelatedArticles(slugs: string[]): Article[] {
  return articles.filter((article) => slugs.includes(article.slug))
}

