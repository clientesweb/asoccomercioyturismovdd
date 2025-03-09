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

// Lista de artículos
export const articles: Article[] = [
  {
    slug: "bienvenidos-asociacion-comercio-turismo",
    title: "Bienvenidos a la Asociación de Comercio y Turismo de Villa del Dique",
    date: "9 de marzo de 2025",
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
    relatedNews: [
      "asociacion-renovo-autoridades-comisiones-asesoras",
      "turismo-villa-dique-crecio-interanual",
      "analisis-sector-turistico-villa-dique-2025",
    ],
  },
  {
    slug: "asociacion-renovo-autoridades-comisiones-asesoras",
    title: "La Asociación renovó las autoridades de sus comisiones asesoras de Turismo y Comercio",
    date: "7 de marzo de 2025",
    category: "COMUNICADOS DE PRENSA",
    author: "Equipo de Comunicación ACTyA",
    readTime: "5 minutos",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Los cambios se concretaron en el marco de encuentros que contaron con la participación del presidente de la Entidad, Mario González.</p>
      
      <p>La Asociación de Comercio y Turismo de Villa del Dique renovó las autoridades de sus comisiones asesoras de Turismo y Comercio, en el marco de encuentros que contaron con la participación del presidente de la Entidad, Mario González.</p>
      
      <p>Durante la reunión de la Comisión de Turismo, que tuvo lugar el pasado jueves 20 de febrero, se designó como presidente a Juan Martín Barreiro, mientras que Guillermo Ambrogi y Rodrigo Pérez Graziano fueron elegidos como vicepresidentes primero y segundo, respectivamente.</p>
      
      <p>En tanto, en la Comisión de Comercio, cuyo encuentro se realizó el viernes 21 de febrero, se designó como presidente a Marcelo Elizondo, en tanto que Enrique Mantilla y Ariel Schale fueron elegidos como vicepresidentes primero y segundo, respectivamente.</p>
      
      <p>En ambas reuniones, el presidente de la Asociación, Mario González, destacó la importancia de estas comisiones para el trabajo de la Entidad y agradeció a las autoridades salientes por su labor.</p>
      
      <p>"Las comisiones asesoras son fundamentales para el trabajo de la Asociación, ya que nos permiten contar con la visión y experiencia de especialistas en cada área, lo que enriquece nuestro análisis y propuestas", señaló González.</p>
      
      <p>Asimismo, el titular de la Asociación expresó su confianza en que las nuevas autoridades de ambas comisiones continuarán trabajando con el mismo compromiso y dedicación que sus predecesores.</p>
      
      <p>Por su parte, los flamantes presidentes de las comisiones agradecieron la confianza depositada en ellos y se comprometieron a trabajar para fortalecer el rol de Villa del Dique como destino turístico y comercial.</p>
      
      <p>La Comisión de Turismo tiene como objetivo analizar la problemática del sector turístico y proponer políticas que favorezcan su desarrollo, mientras que la Comisión de Comercio se enfoca en el análisis de las políticas comerciales y la promoción del comercio local.</p>
    `,
    tags: ["Turismo", "Comercio", "Autoridades", "Comisiones"],
    relatedNews: [
      "asamblea-general-turismo-participacion-asociacion",
      "turismo-villa-dique-crecio-interanual",
      "analisis-sector-turistico-villa-dique-2025",
    ],
  },
  {
    slug: "actividad-turistica-aumento-diciembre",
    title: "La actividad turística aumentó un 12% en diciembre",
    date: "6 de marzo de 2025",
    category: "ECONOMÍA",
    author: "Departamento de Estadísticas ACTyA",
    readTime: "5 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    content: `
      <p>Según el último informe de la Asociación de Comercio y Turismo de Villa del Dique, la actividad turística en la localidad registró un importante crecimiento durante el mes de diciembre.</p>
      
      <p>La actividad turística en Villa del Dique aumentó un 12% en diciembre de 2024 respecto al mismo mes del año anterior, según el último informe elaborado por el Departamento de Estadísticas de la Asociación de Comercio y Turismo de Villa del Dique.</p>
      
      <p>El informe destaca que este crecimiento se debe principalmente al aumento de visitantes provenientes de las provincias de Buenos Aires, Santa Fe y Córdoba, así como a la mayor afluencia de turistas extranjeros, especialmente de Brasil y Chile.</p>
      
      <p>"Diciembre ha sido un mes muy positivo para el turismo en Villa del Dique, lo que nos permite ser optimistas respecto a la temporada de verano 2025", señaló Mario González, presidente de la Asociación.</p>
      
      <p>Según el estudio, la ocupación hotelera alcanzó el 85% durante los fines de semana de diciembre, mientras que en los días de semana se mantuvo en torno al 60%, cifras superiores a las registradas en el mismo período del año anterior.</p>
      
      <p>Asimismo, el gasto promedio por turista aumentó un 8% en términos reales, lo que representa una buena noticia para los comercios y prestadores de servicios de la localidad.</p>
      
      <p>El informe también señala que las actividades más demandadas por los turistas fueron los paseos náuticos, las excursiones de senderismo y las visitas a productores locales, lo que refleja una tendencia hacia el turismo de naturaleza y experiencias.</p>
      
      <p>"Estamos viendo un cambio en el perfil del turista que visita Villa del Dique, con un mayor interés por las actividades al aire libre y el contacto con la naturaleza, así como por conocer la cultura y la gastronomía local", explicó González.</p>
      
      <p>De cara a la temporada de verano, el 78% de los prestadores turísticos encuestados espera que la actividad continúe creciendo, mientras que el 18% prevé que se mantenga estable y solo el 4% anticipa una disminución.</p>
      
      <p>El informe completo está disponible en la página web de la Asociación y puede ser consultado por los socios de la entidad.</p>
    `,
    tags: ["Turismo", "Estadísticas", "Economía", "Temporada"],
    relatedNews: [
      "turismo-villa-dique-crecio-interanual",
      "analisis-sector-turistico-villa-dique-2025",
      "villa-dique-promociona-ferias-internacionales",
    ],
  },
  {
    slug: "villa-dique-promociona-ferias-internacionales",
    title: "Villa del Dique se promociona en ferias internacionales",
    date: "5 de marzo de 2025",
    category: "COMERCIO EXTERIOR",
    author: "Departamento de Promoción Turística ACTyA",
    readTime: "4 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Ferias",
    content: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique participó en importantes ferias internacionales para promocionar los atractivos turísticos de la localidad.</p>
      
      <p>Villa del Dique estuvo presente en las principales ferias internacionales de turismo durante el primer trimestre de 2025, como parte de la estrategia de promoción impulsada por la Asociación de Comercio y Turismo local.</p>
      
      <p>La delegación de Villa del Dique, encabezada por representantes de la Asociación de Comercio y Turismo y autoridades municipales, participó en la Feria Internacional de Turismo de Madrid (FITUR), la Bolsa Internacional de Turismo de Berlín (ITB) y la Feria de Turismo de América Latina (FIT) en Buenos Aires.</p>
      
      <p>"Nuestra participación en estas ferias internacionales es fundamental para posicionar a Villa del Dique como un destino turístico de relevancia, tanto a nivel nacional como internacional", señaló Mario González, presidente de la Asociación.</p>
      
      <p>Durante estos eventos, se presentaron los principales atractivos turísticos de Villa del Dique, como sus playas, actividades náuticas, senderismo, gastronomía regional y eventos culturales, así como la variada oferta de alojamiento y servicios.</p>
      
      <p>"Hemos recibido un interés muy positivo por parte de operadores turísticos y agencias de viajes, especialmente de Brasil, Chile, España y Alemania, que han mostrado su intención de incluir a Villa del Dique en sus paquetes turísticos", explicó González.</p>
      
      <p>Además, se firmaron acuerdos de cooperación con asociaciones turísticas de otras regiones, como la Costa Brava (España) y el Valle del Colchagua (Chile), para intercambiar experiencias y buenas prácticas en materia de gestión turística.</p>
      
      <p>"Estos acuerdos nos permitirán aprender de destinos con mayor trayectoria y, al mismo tiempo, dar a conocer nuestros atractivos en esos mercados", destacó el presidente de la Asociación.</p>
      
      <p>La participación en estas ferias forma parte del Plan Estratégico de Promoción Turística 2025-2030, elaborado por la Asociación de Comercio y Turismo de Villa del Dique en colaboración con el municipio, que tiene como objetivo incrementar el flujo de turistas nacionales e internacionales a la localidad.</p>
      
      <p>"Estamos convencidos de que Villa del Dique tiene un enorme potencial turístico que aún no ha sido completamente aprovechado, y estas acciones de promoción son fundamentales para darlo a conocer al mundo", concluyó González.</p>
    `,
    tags: ["Turismo Internacional", "Ferias", "Promoción", "Destinos"],
    relatedNews: [
      "asamblea-general-turismo-participacion-asociacion",
      "analisis-sector-turistico-villa-dique-2025",
      "villa-dique-feria-turismo-madrid",
    ],
  },
  {
    slug: "villa-dique-feria-turismo-madrid",
    title: "Villa del Dique participó en la feria de turismo de Madrid",
    date: "3 de marzo de 2025",
    category: "PROYECCIÓN INTERNACIONAL",
    author: "Departamento de Promoción Turística ACTyA",
    readTime: "4 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Madrid",
    content: `
      <p>Una delegación de la Asociación de Comercio y Turismo de Villa del Dique participó en la Feria Internacional de Turismo (FITUR) de Madrid, uno de los eventos más importantes del sector a nivel mundial.</p>
      
      <p>Villa del Dique estuvo presente en la 45ª edición de la Feria Internacional de Turismo (FITUR) de Madrid, que se celebró del 22 al 26 de enero de 2025 en el recinto ferial IFEMA de la capital española.</p>
      
      <p>La delegación de Villa del Dique, integrada por representantes de la Asociación de Comercio y Turismo y autoridades municipales, participó dentro del stand de la provincia de Córdoba, donde presentó los principales atractivos turísticos de la localidad.</p>
      
      <p>"Nuestra participación en FITUR ha sido muy positiva, ya que nos ha permitido dar a conocer Villa del Dique a operadores turísticos y agencias de viajes de todo el mundo, especialmente del mercado europeo", señaló Mario González, presidente de la Asociación.</p>
      
      <p>Durante los cinco días de la feria, se realizaron presentaciones sobre las playas, actividades náuticas, senderismo, gastronomía regional y eventos culturales de Villa del Dique, así como sobre su variada oferta de alojamiento y servicios.</p>
      
      <p>"Hemos mantenido reuniones con más de 30 operadores turísticos de España, Francia, Alemania e Italia, que han mostrado gran interés en incluir a Villa del Dique en sus paquetes turísticos para la próxima temporada", explicó González.</p>
      
      <p>Además, se firmó un acuerdo de hermanamiento con la localidad de Sanxenxo, importante destino turístico de la costa gallega, para intercambiar experiencias y buenas prácticas en materia de gestión turística.</p>
      
      <p>"Este acuerdo nos permitirá aprender de un destino con gran trayectoria en el turismo de playa y, al mismo tiempo, dar a conocer nuestros atractivos en el mercado español", destacó el presidente de la Asociación.</p>
      
      <p>La participación en FITUR forma parte del Plan Estratégico de Promoción Turística 2025-2030, elaborado por la Asociación de Comercio y Turismo de Villa del Dique en colaboración con el municipio, que tiene como objetivo incrementar el flujo de turistas internacionales a la localidad.</p>
      
      <p>"Estamos convencidos de que Villa del Dique tiene un enorme potencial turístico que aún no ha sido completamente aprovechado, y estas acciones de promoción internacional son fundamentales para darlo a conocer al mundo", concluyó González.</p>
    `,
    tags: ["FITUR", "Madrid", "Promoción Internacional", "Turismo"],
    relatedNews: [
      "villa-dique-promociona-ferias-internacionales",
      "asamblea-general-turismo-participacion-asociacion",
      "analisis-sector-turistico-villa-dique-2025",
    ],
  },
  {
    slug: "turismo-villa-dique-crecio-interanual",
    title: "El turismo en Villa del Dique creció un 15% interanual",
    date: "2 de marzo de 2025",
    category: "INFORMES ECONÓMICOS",
    author: "Departamento de Estadísticas ACTyA",
    readTime: "6 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    content: `
      <p>Según el último informe económico de la Asociación, el turismo en Villa del Dique mostró signos de recuperación.</p>
      
      <p>El turismo en Villa del Dique creció un 15% en enero de 2025 respecto al mismo mes del año anterior, según el último informe elaborado por el Departamento de Estadísticas de la Asociación de Comercio y Turismo de Villa del Dique.</p>
      
      <p>De acuerdo con el estudio, que se basa en datos de ocupación hotelera y consumo en comercios, el sector turístico generó un incremento del 20% en la facturación de los comercios locales en los últimos 12 meses.</p>
      
      <p>"Este crecimiento del turismo en Villa del Dique es una señal positiva para la economía local, ya que muestra una recuperación de la actividad turística y una mayor confianza de los visitantes", señaló el presidente de la Asociación, Mario González.</p>
      
      <p>El informe también destaca que el turismo de cabañas y alojamientos fue el que mostró el mayor dinamismo, con un incremento del 18% interanual en la ocupación, mientras que el turismo de día creció un 12%.</p>
      
      <p>Por regiones de origen, Buenos Aires y Santa Fe fueron las que registraron los mayores aumentos en el flujo turístico hacia Villa del Dique, con incrementos del 22% y 17% interanual, respectivamente.</p>
      
      <p>En cuanto al gasto promedio por turista, el informe señala que creció un 42% interanual en términos nominales, lo que implica un aumento del 8% en términos reales, considerando la inflación del período.</p>
      
      <p>"El aumento del gasto real por turista es una excelente noticia para los comercios y prestadores de servicios de Villa del Dique, ya que indica que no solo vienen más turistas, sino que también gastan más", destacó González.</p>
      
      <p>El informe completo está disponible en la página web de la Asociación y puede ser consultado por los socios de la Entidad.</p>
    `,
    tags: ["Turismo", "Estadísticas", "Economía", "Villa del Dique"],
    relatedNews: [
      "asociacion-renovo-autoridades-comisiones-asesoras",
      "asamblea-general-turismo-participacion-asociacion",
      "analisis-sector-turistico-villa-dique-2025",
    ],
  },
  {
    slug: "asamblea-general-turismo-participacion-asociacion",
    title: "La Asamblea General de Turismo contó con la participación de nuestra Asociación",
    date: "2 de febrero de 2025",
    category: "PROYECCIÓN INTERNACIONAL",
    author: "Departamento de Relaciones Institucionales",
    readTime: "4 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Turismo",
    content: `
      <p>Representantes de la Asociación de Comercio y Turismo de Villa del Dique participaron en la asamblea anual de Turismo provincial.</p>
      
      <p>La Asociación de Comercio y Turismo de Villa del Dique participó de la Asamblea General de Turismo de la Provincia de Córdoba, que se llevó a cabo en la ciudad de Córdoba, el pasado 30 de enero.</p>
      
      <p>La delegación de la Asociación estuvo encabezada por el presidente de la Entidad, Mario González, quien destacó la importancia de la participación de Villa del Dique en este foro provincial.</p>
      
      <p>"La presencia de nuestra Asociación en la Asamblea General de Turismo es una muestra del compromiso de nuestra Entidad con la integración de Villa del Dique en los circuitos turísticos provinciales y con la promoción de políticas que favorezcan el desarrollo turístico y económico", señaló González.</p>
      
      <p>Durante el encuentro, se abordaron temas como la promoción turística, la infraestructura, la sustentabilidad y la inclusión, entre otros.</p>
      
      <p>Asimismo, se eligieron las nuevas autoridades del Consejo de Turismo Provincial para el período 2025-2027, resultando reelecto como presidente Carlos Johnston, de Villa Carlos Paz.</p>
      
      <p>El Consejo de Turismo Provincial es el órgano consultivo del gobierno provincial en materia turística y representa a las principales localidades turísticas de la provincia de Córdoba.</p>
      
      <p>La Asociación de Comercio y Turismo de Villa del Dique es miembro del Consejo desde 2019, lo que le permite participar en los debates sobre políticas públicas a nivel provincial y aportar la visión del sector turístico local.</p>
    `,
    tags: ["Turismo Provincial", "Asamblea", "Relaciones Institucionales", "Promoción Turística"],
    relatedNews: [
      "asociacion-renovo-autoridades-comisiones-asesoras",
      "turismo-villa-dique-crecio-interanual",
      "analisis-sector-turistico-villa-dique-2025",
    ],
  },
  {
    slug: "analisis-sector-turistico-villa-dique-2025",
    title: "Análisis del sector turístico en Villa del Dique 2025",
    date: "24 de febrero de 2025",
    category: "COMERCIO Y SERVICIOS",
    author: "Equipo de Investigación ACTyA",
    readTime: "8 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Análisis",
    content: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique presenta un exhaustivo análisis sobre la situación actual y perspectivas del sector turístico en la localidad.</p>
      
      <p>La Asociación de Comercio y Turismo de Villa del Dique presentó hoy su informe "Análisis del sector turístico en Villa del Dique 2025", un exhaustivo estudio que examina la situación actual y las perspectivas del turismo en la localidad.</p>
      
      <p>El informe, elaborado por el Departamento de Estadísticas de la Asociación, revela que el sector turístico representa el 65% de la actividad económica de Villa del Dique y genera el 58% del empleo total.</p>
      
      <p>"El turismo es el principal motor de la economía de Villa del Dique y un gran generador de empleo, especialmente para jóvenes y mujeres", destacó el presidente de la Asociación, Mario González, durante la presentación del informe.</p>
      
      <p>Según el estudio, el turismo digital continúa ganando terreno y ya representa el 35% de las reservas de alojamiento totales, con un crecimiento del 45% respecto al año anterior.</p>
      
      <p>"La transformación digital del turismo es un proceso irreversible que se aceleró con la pandemia y que presenta tanto desafíos como oportunidades para el sector", señaló González.</p>
      
      <p>El informe también analiza el impacto de la inflación en la actividad turística, señalando que el 72% de los prestadores de servicios turísticos encuestados considera que la inflación es el principal problema que enfrenta el sector.</p>
      
      <p>En cuanto a las perspectivas para el resto del año, el 57% de los comerciantes y prestadores espera que sus ventas aumenten, el 28% prevé que se mantengan estables y el 15% anticipa una disminución.</p>
      
      <p>"A pesar de los desafíos, hay un moderado optimismo en el sector, especialmente entre los comercios y prestadores que han logrado adaptarse a las nuevas tecnologías y a los cambios en los hábitos de los turistas", concluyó el titular de la Asociación.</p>
      
      <p>El informe "Análisis del sector turístico en Villa del Dique 2025" está disponible en la página web de la Asociación y puede ser consultado por los socios de la Entidad.</p>
    `,
    tags: ["Turismo", "Análisis", "Economía", "Villa del Dique"],
    relatedNews: [
      "asociacion-renovo-autoridades-comisiones-asesoras",
      "asamblea-general-turismo-participacion-asociacion",
      "turismo-villa-dique-crecio-interanual",
    ],
  },
  {
    slug: "nuevos-cursos-seminarios-desarrollo-turistico",
    title: "Nuevos cursos y seminarios para el desarrollo turístico y comercial",
    date: "24 de febrero de 2025",
    category: "CAPACITACIÓN",
    author: "Departamento de Capacitación ACTyA",
    readTime: "3 minutos",
    image: "/placeholder.svg?height=600&width=1200&text=Capacitación",
    content: `
      <p>La Asociación de Comercio y Turismo de Villa del Dique lanza su nueva oferta de capacitación para el primer semestre de 2025.</p>
      
      <p>La Asociación de Comercio y Turismo de Villa del Dique presentó su nueva oferta de cursos y seminarios para el primer semestre de 2025, con el objetivo de contribuir al desarrollo y profesionalización del sector turístico y comercial.</p>
      
      <p>La propuesta incluye más de 20 actividades de capacitación, entre cursos, talleres, seminarios y conferencias, que abarcan diversas áreas como marketing turístico, atención al cliente, gestión de redes sociales, finanzas para emprendedores, comercio electrónico y habilidades directivas, entre otras.</p>
      
      <p>"La capacitación es una herramienta fundamental para mejorar la competitividad de los comercios y prestadores de servicios turísticos, y para el desarrollo profesional de quienes trabajan en ellos", señaló el presidente de la Asociación, Mario González.</p>
      
      <p>Entre las novedades de este año, se destacan los cursos sobre inteligencia artificial aplicada al turismo, economía circular y sostenibilidad en el turismo, y nuevas tendencias en gastronomía regional.</p>
      
      <p>Asimismo, se amplía la oferta de cursos en modalidad virtual, que ya representan el 60% del total, lo que permite la participación de personas de todo el país e incluso del exterior.</p>
      
      <p>"La modalidad virtual nos ha permitido llegar a un público mucho más amplio y diverso, democratizando el acceso a la capacitación de calidad", destacó la directora del Departamento de Capacitación de la Asociación, Laura Méndez.</p>
      
      <p>Los cursos están dirigidos tanto a empresarios y directivos como a mandos medios, profesionales independientes y estudiantes avanzados que deseen especializarse en las distintas áreas del turismo y el comercio.</p>
      
      <p>Los socios de la Asociación cuentan con importantes descuentos en todas las actividades de capacitación, y también hay becas disponibles para estudiantes y para pequeños emprendimientos.</p>
      
      <p>La programación completa de cursos y seminarios está disponible en la página web de la Asociación, donde también se pueden realizar las inscripciones.</p>
    `,
    tags: ["Capacitación", "Cursos", "Seminarios", "Desarrollo Turístico"],
    relatedNews: [
      "asociacion-renovo-autoridades-comisiones-asesoras",
      "asamblea-general-turismo-participacion-asociacion",
      "turismo-villa-dique-crecio-interanual",
    ],
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

