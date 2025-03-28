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

// Modificar el array de artículos para incluir el nuevo artículo
export const articles: Article[] = [
  {
    slug: "alojamientos-excelencia-villa-dique",
    title: "Alojamientos de Excelencia en Villa del Dique",
    date: "28 de marzo de 2025",
    category: "TURISMO",
    author: "Equipo de Comunicación ACTyA",
    readTime: "7 minutos",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amanecer-en-el-lago.jpg-4NYA9oUjajzw79mgcvh6VOZ07QyalU.jpeg",
    content: `
<p>Si hablamos de las mejores plazas de alojamiento en el Valle de Calamuchita cuando se trata de elegir el destino perfecto para unas vacaciones relajantes o una escapada corta en el corazón del Valle de Calamuchita, sin duda te las ofrecemos en Villa del Dique y destacamos como la opción ideal. En este pintoresco pueblo cordobés, la combinación de naturaleza, tranquilidad, comodidad y atención personalizada crean el lugar perfecto para disfrutar de una estancia de calidad, ideal para todos los gustos y necesidades.</p>

<p>Con un ambiente natural y acogedor, Villa del Dique no solo es famosa por sus impresionantes paisajes que yacen a la vera del Embalse del Río Tercero, sino también por la excelente infraestructura de alojamiento que ofrece a los turistas. Si estás en la búsqueda de un lugar tranquilo para descansar, te ofrecemos cabañas rodeadas de naturaleza, hoteles, hosterías y casas de alquiler turístico con vistas espectaculares. En Villa del Dique encontrarás todo lo que necesitas para hacer de tu salida una experiencia única e irrepetible.</p>

<div class="relative h-[400px] rounded-xl overflow-hidden my-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/establecimiento-1486.jpg-M6uvJh7giEAVfdE2QC6DTmU3slFwBM.jpeg" alt="Vista panorámica del lago en Villa del Dique" class="object-cover w-full h-full" />
</div>

<p>Contamos con alojamiento para todos los gustos, es uno de los principales servicios para ofrecerte compiladas en diferentes modalidades, repartidas en cabañas, hoteles, hosterías y casas de alquiler turístico, contando con la ambientación y privacidad necesaria para quienes buscan confort. Para los más aventureros tenemos un camping municipal que ofrece área de acampe, baños, vestuarios, electricidad, agua caliente y fría, contando también con una pileta olímpica incluida dentro del mismo servicio, todo rodeado en un marco natural junto al lago añadiéndole una vista espectacular de nuestro cerro emblema denominado Cerro de La Cruz, todo invita al disfrute y un contacto directo con la naturaleza.</p>

<p>Nuestras cabañas son una opción ideal, pues si tu objetivo principal es desconectar del ruido de la ciudad, y conectar con la tranquilidad de un entorno natural, éstas son una excelente opción para tal fin. Cuentan con las comodidades modernas y a su vez mantienen un encanto único en entornos privilegiados, ofreciendo muchas de ellas vistas panorámicas del lago y las sierras.</p>

<p>Nuestras hotelería y hosterías de ámbitos privados y sindicales, también poseen vistas privilegiadas, dispuestas para aquellos que prefieren un alojamiento más tradicional pero igualmente cómodo. La hotelería en Villa del Dique ofrece excelentes servicios, algunos cuentan con piscinas externas y climatizadas, excelentes servicios de gastronomía que en algunos casos poseen cartas gourmet, y vistas espectaculares del lago y las sierras también.</p>

<p>El Camping y el hospedaje rural están dispuesto si prefieres un contacto más directo con la naturaleza, donde puedes disfrutar de la frescura de la región, rodeado de verdes paisajes, en un entorno seguro y amigable.</p>

<div class="relative h-[400px] rounded-xl overflow-hidden my-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-01-30.jpg-h53ZcuilUjfsjs25OaIiWNj2vglEaJ.jpeg" alt="Pileta olímpica en el camping municipal de Villa del Dique" class="object-cover w-full h-full" />
</div>

<h2>¿Por qué te ofrecemos Villa del Dique como opción de alojamiento?</h2>

<p>Porque Villa del Dique se ha consolidado como uno de los destinos más recomendados del Valle de Calamuchita, no solo por su impresionante belleza natural, sino por la calidad y la variedad de opciones para alojarse satisfaciendo así la búsqueda de nuestros visitantes.</p>

<p>Te enumeramos algunas razones por las cuales creemos tenés que elegir a Villa del Dique como tu próximo destino:</p>

<ol>
  <li><strong>Alojamiento de Calidad:</strong> Los alojamientos en Villa del Dique son reconocidos por su calidez y atención al detalle. Las opciones varían desde confortables cabañas, cómodos hoteles y hosterías con todos los servicios, asegurando una estancia cómoda y agradable para tu visita. Cada establecimiento se caracteriza por su hospitalidad, ambiente amigable que hace sentir a los huéspedes como en su casa.</li>
  <li><strong>Conexión con la Naturaleza:</strong> Los entornos naturales que rodean a los alojamientos en Villa del Dique, te permiten disfrutar de éstos a su máximo esplendor. Muchos de ellos están rodeados de paisajes impresionantes y se encuentran a pocos minutos de diferentes opciones naturales y culturales que ofrece nuestro Valle de Calamuchita, como paseos en kayacks o lanchas en las aguas del lago, ofertas gastronómicas, caminatas por circuitos y senderos, visitas a museos y el disfrute de los diferentes balnearios en la basta cantidad de ríos que ofrece Calamuchita.</li>
  <li><strong>Variedad y opciones para todos los gustos:</strong> Ofrecemos desde alojamientos económicos hasta opciones de alta gama, hay alternativas para todo tipo de poder adquisitivo. Ya sea que viajes en familia, en pareja o con amigos, encontrarás la opción perfecta que se adapte a tu presupuesto y preferencias.</li>
  <li><strong>Ubicación Privilegiada:</strong> Villa del Dique está estratégicamente ubicada en el Valle de Calamuchita, esto le permite a los turistas acceder fácilmente a otros destinos cercanos como, Almafuerte, Embalse, Villa Rumipal, Santa Rosa de Calamuchita, Villa General Belgrano, Los Reartes, por enumerar solamente los destinos ubicados sobre el corredor turístico que ofrece la ruta provincial N°5.</li>
  <li><strong>Infraestructura y Servicios Completos:</strong> En los alojamientos de Villa del Dique contamos con instalaciones modernas, servicios de calidad que te garantizarán una estancia cómoda y agradable. Las ofertas incluyen en sus servicios, piscinas, spa, restaurantes, wifi, espacios de recreación, alguna refrigeración, garantizando así que tu estancia y de los que la compartan contigo sea de la mejor.</li>
</ol>

<div class="relative h-[400px] rounded-xl overflow-hidden my-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QEQQWXO7B5CTFDCKT2PCCUR3KE.jpg-YWTY5P4ZlPDWB299J91pY2jRLEyoqD.jpeg" alt="Actividades acuáticas en el lago de Villa del Dique" class="object-cover w-full h-full" />
</div>

<h2>Conclusión</h2>

<p>Concluyendo el servicio de alojamiento que ofrecemos en Villa del Dique te invita a una experiencia única de relax y aventura, pues no solo se trata de descansar, sino también de disfrutar de actividades y experiencias inolvidables que te inviten a volver, pues eso es lo que queremos, que vuelvas siempre. Para que eso se dé, la región que nos circunda es ideal para quienes disfrutan de los deportes náuticos, las caminatas, el senderismo, el avistaje de la flora y fauna local y entretenimiento. Por la noche, nuestra oferta gastronómica te invita a probar platos regionales y de excelencia, en algunos restaurantes tendrás vistas al lago, donde puedes disfrutar de una cena mientras observas el atardecer sobre las sierras.</p>

<p>Estamos listos para esperarte pues contamos con alojamientos seguros, bien equipados y de excelencia transformándonos así en un destino ideal para vos que estás buscando un lugar que combine, relax, naturaleza, comodidad, infraestructura de alojamiento y servicios acorde a tus necesidades, para hacer de tu visita una experiencia única.</p>

<p>El contacto directo con la naturaleza, y la calidez de su gente hacen de este encantador pueblo, un destino consolidado y de los mejores en el Valle de Calamuchita.</p>

<p>Ya sabes, que sea para una escapada romántica, unas vacaciones en familia o una aventura especial. Aquí te ofreceremos las mejores plazas para una visita memorable.</p>

<div class="relative h-[400px] rounded-xl overflow-hidden my-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amanecer-en-el-lago.jpg-4NYA9oUjajzw79mgcvh6VOZ07QyalU.jpeg" alt="Vista aérea de cabañas junto al lago en Villa del Dique" class="object-cover w-full h-full" />
</div>

<h2>Información Útil</h2>

<ul>
  <li><strong>Ubicación:</strong> Villa del Dique, Córdoba, Argentina.</li>
  <li><strong>Opciones de alojamiento:</strong> Cabañas, hoteles, hosterías, casas de alojamiento turístico, camping, hospedaje rural.</li>
  <li><strong>Actividades recomendadas:</strong> Deportes acuáticos, caminatas, pesca deportiva, paseos en bote, gastronomía local.</li>
  <li><strong>Accesibilidad:</strong> A 120 km de la ciudad de Córdoba, con rutas asfaltadas y excelente infraestructura.</li>
</ul>

<p>Síguenos en redes sociales <a href="https://www.instagram.com/vivivilladeldique" target="_blank" rel="noopener noreferrer">@Vivivilladeldique</a></p>
`,
    tags: ["Turismo", "Alojamiento", "Cabañas", "Hoteles", "Camping", "Villa del Dique"],
    relatedNews: ["bienvenidos-asociacion-comercio-turismo", "asociacion-lanza-capacitaciones-para-turismo-comercio"],
  },
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
    relatedNews: ["asociacion-lanza-capacitaciones-para-turismo-comercio", "alojamientos-excelencia-villa-dique"],
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
    relatedNews: ["bienvenidos-asociacion-comercio-turismo", "alojamientos-excelencia-villa-dique"],
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

