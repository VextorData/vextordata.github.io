export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      products: "Productos",
      technology: "Tecnología",
      about: "Sobre nosotros",
      contact: "Contacto",
    },
    hero: {
      titleFirst: "Ingeniería",
      titleSecond: "Soluciones de negocio",
      description:
        "Diseñamos software a medida, automatizaciones y productos SaaS que ayudan a las empresas a eliminar tareas manuales, optimizar operaciones y escalar con tecnología.",
      primaryButton: "Explorar soluciones",
      secondaryButton: "Contacta",
    },
    about: {
      title: "Tecnología diseñada para desafíos reales del negocio.",
      paragraph1:
        "VextorData es una empresa de ingeniería de software especializada en soluciones a medida, automatización empresarial y productos SaaS. Trabajamos con organizaciones de todos los tamaños para simplificar procesos, eliminar tareas repetitivas y construir tecnología con impacto real en el negocio.",
      paragraph2:
        "Además de nuestro enfoque en desarrollo de software, contamos con una amplia experiencia en Asuntos Regulatorios y en el ecosistema normativo europeo. Trabajar en entornos altamente regulados nos ha permitido comprender en profundidad cómo la digitalización está transformando los sectores y la creciente necesidad de que las empresas modernicen sus procesos mediante tecnología. Esta perspectiva nos permite crear soluciones prácticas tanto para organizaciones altamente reguladas como para compañías que buscan mejorar su operativa diaria.",
    },
    projects: {
      title: "Productos",
      description:
        "Descubre nuestro portafolio de soluciones digitales diseñadas para automatizar flujos complejos, simplificar procesos regulatorios y ayudar a las empresas a extraer más valor de sus datos.",
      featureDescription:
        "Una plataforma inteligente que supervisa continuamente medicamentos, detecta cambios en los datos de EMA PMS y ofrece un historial completo de tu portfolio mediante comparaciones automatizadas y paneles de control avanzados.",
      comingSoonTitle: "Próximamente",
      comingSoonDescription: "Este producto se encuentra en desarrollo.",
      learnMore: "Saber más →",
    },
    technology: {
      title: "Nuestra tecnología",
      description:
        "Combinamos tecnologías comprobadas para crear software",
      secure: "seguro",
      scalable: "escalable",
      maintainable: "mantenible",
      and: "y",
      descriptionSuffix:
        ". Seleccionamos cada herramienta con precisión para automatizar procesos, integrar sistemas complejos y entregar soluciones fiables que impulsen el crecimiento de las empresas.",
      cards: {
        python: "Desarrollo backend, automatización y procesamiento de datos.",
        react: "Aplicaciones web modernas con experiencias de usuario intuitivas y fluidas.",
        typescript: "Aplicaciones fiables, fáciles de mantener y escalables.",
        fastapi: "APIs de alto rendimiento y servicios backend robustos.",
        cloud: "Arquitecturas nativas en la nube diseñadas para escalar.",
        databases: "Gestión de datos estructurados y no estructurados.",
        docker: "Entornos de despliegue portátiles y consistentes.",
        dataEngineering: "Pipelines ETL, integraciones y automatización de datos.",
      },
    },
    contact: {
      title: "Construyamos algo inteligente",
      description:
        "¿Tienes un proyecto en mente? Ayudamos a las empresas a automatizar procesos, gestionar datos y crear soluciones de software a medida.",
      email: "Correo electrónico",
    },
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      or: "O",
      prefer: "¿Prefieres hablar directamente?",
      schedule: "Agenda una reunión de 30 minutos con uno de nuestros especialistas.",
      book: "Reservar una reunión",
      success: "Tu mensaje se ha enviado correctamente. Te responderemos lo antes posible.",
      error: "No se pudo enviar tu mensaje. Inténtalo de nuevo.",
    },
    footer: {
      tagline: "Ingeniería / Soluciones de negocio",
    },
  },
  en: {
    nav: {
      products: "Products",
      technology: "Technology",
      about: "About",
      contact: "Contact",
    },
    hero: {
      titleFirst: "Engineering",
      titleSecond: "Business Solutions",
      description:
        "We build custom software, automation solutions and SaaS products that help businesses eliminate manual work, streamline operations and grow through technology.",
      primaryButton: "Explore our solutions",
      secondaryButton: "Contact us",
    },
    about: {
      title: "Technology built for real business challenges.",
      paragraph1:
        "VextorData is a software engineering company specialized in custom software, business automation and SaaS solutions. We work with organizations of all sizes to simplify operations, eliminate repetitive tasks and build technology that delivers measurable results.",
      paragraph2:
        "Alongside our software development expertise, we bring extensive experience in Regulatory Affairs and the European regulatory ecosystem. Working with highly regulated environments has given us a deep understanding of how digitalization is reshaping industries and the growing need for businesses to modernize their processes through technology. This unique perspective allows us to develop practical solutions for both highly regulated organizations and companies looking to streamline their everyday operations.",
    },
    projects: {
      title: "Products",
      description:
        "Explore our growing portfolio of software products designed to automate complex workflows, simplify regulatory processes and help businesses make better use of their data.",
      featureDescription:
        "An intelligent platform that continuously monitors medicinal products, detects changes across EMA PMS data and provides a complete history of your portfolio through automated comparisons and advanced dashboards.",
      comingSoonTitle: "Coming Soon",
      comingSoonDescription: "This product is currently under development.",
      learnMore: "Learn more →",
    },
    technology: {
      title: "Our Technology",
      description:
        "We combine proven technologies to build",
      secure: "secure",
      scalable: "scalable",
      maintainable: "maintainable",
      and: "and",
      descriptionSuffix:
        " software. Our technology stack is carefully selected to automate processes, integrate complex systems and deliver reliable solutions that help businesses grow.",
      cards: {
        python: "Backend development, automation and data processing.",
        react: "Modern web applications with intuitive and fluid user experiences.",
        typescript: "Reliable, maintainable and scalable applications.",
        fastapi: "High-performance APIs and robust backend services.",
        cloud: "Cloud-native architectures built to scale.",
        databases: "Management of structured and unstructured data.",
        docker: "Portable and consistent deployment environments.",
        dataEngineering: "ETL pipelines, integrations and data automation.",
      },
    },
    contact: {
      title: "Let's build something intelligent",
      description:
        "Have a project in mind? We help companies automate processes, manage data and build custom software solutions.",
      email: "Email",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      or: "OR",
      prefer: "Prefer to talk directly?",
      schedule: "Book a 30-minute meeting with one of our specialists.",
      book: "Book a meeting",
      success: "Your message has been sent successfully. We'll get back to you as soon as possible.",
      error: "Unable to send your message. Please try again.",
    },
    footer: {
      tagline: "Engineering / Business Solutions",
    },
  },
} as const;
