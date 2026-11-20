import { estudio } from "../config";
import type { ClavePagina, Idioma } from "./rutas";

export type ClaveCanal = "whatsapp" | "correo" | "llamada";

interface TextosIdioma {
  meta: {
    ogLocale: string;
    ogLocaleAlterno: string;
    saltar: string;
    ciudad: string;
    horaLocal: string;
    cambiarIdioma: string;
    idiomaActual: string;
    irAEspanol: string;
    irAIngles: string;
  };
  estudio: {
    lema: string;
    atencionPeru: string;
    horarioSemana: string;
    horarioSabado: string;
    logoAlt: string;
  };
  nav: {
    ariaLabel: string;
    abrirMenu: string;
    cerrarMenu: string;
    contacto: string;
    items: readonly { clave: Exclude<ClavePagina, "inicio" | "contacto" | "privacidad" | "accesibilidad">; texto: string }[];
  };
  pie: {
    mapaLabel: string;
    redesLabel: string;
    contacto: string;
    privacidad: string;
    accesibilidad: string;
  };
  categorias: Record<string, string>;
  inicio: {
    titulo: string;
    descripcion: string;
    portadaAria: string;
    verProyectoPrefix: string;
    fotoPendiente: string;
    verProyectos: string;
    escribenosWhatsapp: string;
    etiquetaEnDesarrollo: string;
    tituloEnDesarrollo: string;
    subtituloEnDesarrollo: string;
  };
  grillaFija: {
    etiqueta: string;
    titulo: string;
    boton: string;
  };
  carrusel: {
    anterior: string;
    siguiente: string;
    regionLabel: string;
  };
  tarjeta: {
    render: string;
    porConfirmar: string;
    anioPendiente: string;
    renderPendiente: string;
    fotoPendiente: string;
  };
  proyectos: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    filtrosLabel: string;
    todos: string;
    resultadoSingular: string;
    resultadoPlural: string;
    etiquetaEnDesarrollo: string;
    tituloEnDesarrollo: string;
    subtituloEnDesarrollo: string;
  };
  proyecto: {
    enPrefijo: string;
    descripcionRespaldo: (nombre: string, tipoLower: string, ciudad: string) => string;
    portadaAria: string;
    render: string;
    porConfirmar: string;
    fotoPendiente: string;
    migasAria: string;
    inicio: string;
    proyectos: string;
    infoAria: string;
    sobre: string;
    datosTitulo: string;
    tipo: string;
    ubicacion: string;
    anio: string;
    anioPendiente: string;
    area: string;
    estado: string;
    construido: string;
    enDesarrollo: string;
    visualizacion: string;
    fotografia: string;
    encargoTitulo: string;
    encargoPendiente: string;
    solucionTitulo: string;
    solucionPendiente: string;
    collageRenders: string;
    collageTerminado: string;
    collageProceso: string;
    vecinosAria: string;
    anterior: string;
    siguiente: string;
  };
  collage: {
    ampliarPrefix: string;
    visorAria: string;
    cerrarAria: string;
    cerrarTexto: string;
  };
  servicios: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    proximamente: string;
    lista: readonly { nombre: string; incluye: string; proximamente?: boolean }[];
    comoTrabajamosEtiqueta: string;
    comoTrabajamosTitulo: string;
    pasos: readonly { nombre: string; texto: string }[];
    faqEtiqueta: string;
    faqTitulo: string;
    preguntas: readonly { pregunta: string; respuesta: string }[];
    llamadoTitulo: string;
    llamadoBoton: string;
  };
  cursos: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    intro: string;
    modalidadVirtual: string;
    modalidadPresencial: string;
    pendiente: string;
    inscribirme: string;
    conectorCurso: string;
    proximamente: string;
    certificadoEtiqueta: string;
    certificadoTitulo: string;
    certificadoTexto: string;
    logoCapAlt: string;
    lista: readonly { nombre: string; modalidad: "Virtual" | "Presencial"; hotmart?: string }[];
  };
  estudioPagina: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    intro: string;
    misionEtiqueta: string;
    mision: string;
    visionEtiqueta: string;
    vision: string;
    propositoEtiqueta: string;
    proposito: string;
    equipoHeading: string;
    retratoPendiente: string;
    equipo: readonly string[];
    render: string;
    showroomAlt: string;
    showroomEtiqueta: string;
    showroomTitulo: string;
    showroomNota: string;
    comoLlegar: string;
    abreNuevaPestana: string;
  };
  contacto: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    intro: string;
    asistenteHeading: string;
    sinJsIntro: string;
    escribirWhatsapp: string;
    escribirGmail: string;
    correoAsuntoDirecto: string;
    correoCuerpoDirecto: string;
    acciones: readonly string[];
    tipos: readonly string[];
    canales: readonly { clave: ClaveCanal; nombre: string; detalle: string }[];
    paso1Titulo: string;
    paso1Ayuda: string;
    paso2Titulo: string;
    paso2Ayuda: string;
    paso3Titulo: string;
    paso3Ayuda: string;
    anterior: string;
    paso4Titulo: string;
    paso4Ayuda: string;
    ideaLabel: string;
    ideaPlaceholder: string;
    omitir: string;
    continuar: string;
    paso5Titulo: string;
    cambiarRespuestas: string;
    nombreLabel: string;
    obligatorio: string;
    opcional: string;
    telefonoLabel: string;
    correoLabel: string;
    consentimientoAntes: string;
    consentimientoEnlace: string;
    consentimientoDespues: string;
    enviarWhatsapp: string;
    enviarGmail: string;
    alternativaAntes: string;
    alternativaBoton: string;
    atajoTexto: string;
    infoHeading: string;
    mapaAlt: (direccion: string) => string;
    creditoMapa: string;
    comoLlegar: string;
    abreNuevaPestana: string;
    direccionLabel: string;
    whatsappLabel: string;
    correoLabelDato: string;
    horarioLabel: string;
    sinCita: string;
    js: {
      pasoDe: [string, string];
      telObligatorio: string;
      telOpcional: string;
      btnAbrirGmail: string;
      btnSolicitarLlamada: string;
      btnPedirLlamadaGmail: string;
      btnEnviarWhatsapp: string;
      errNombre: string;
      errTelefono: string;
      errConsentimiento: string;
      resumenUnCampo: string;
      resumenVariosCampos: string;
      defectoTipo: string;
      defectoAccion: string;
      defectoCanal: string;
    };
  };
  privacidad: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    notaIdioma?: string;
    responsableTitulo: string;
    responsableTexto: (razonSocial: string, ruc: string, direccion: string) => string;
    mideTitulo: string;
    mideTexto: string;
    recibenTitulo: string;
    recibenTexto: string;
    enlacesTitulo: string;
    enlacesTexto: string;
    derechosTitulo: string;
    derechosAntes: string;
    derechosDespues: string;
  };
  accesibilidad: {
    titulo: string;
    descripcion: string;
    etiqueta: string;
    h1: string;
    notaIdioma?: string;
    nivelTitulo: string;
    nivelTexto: string;
    limitacionesTitulo: string;
    limitacionesTexto: string;
    reporteTitulo: string;
    reporteAntes: string;
    reporteDespues: string;
  };
}

export const TEXTOS: Record<Idioma, TextosIdioma> = {
  es: {
    meta: {
      ogLocale: "es_PE",
      ogLocaleAlterno: "en_US",
      saltar: "Saltar al contenido",
      ciudad: estudio.ciudad,
      horaLocal: "Hora local",
      cambiarIdioma: "Idioma",
      idiomaActual: "Idioma actual",
      irAEspanol: "Cambiar a español",
      irAIngles: "Cambiar a inglés",
    },
    estudio: {
      lema: estudio.lema,
      atencionPeru: "Atención en todo el Perú",
      horarioSemana: estudio.horario.semana,
      horarioSabado: estudio.horario.sabado,
      logoAlt: "1903 Arquitectos, inicio",
    },
    nav: {
      ariaLabel: "Principal",
      abrirMenu: "Abrir menú",
      cerrarMenu: "Cerrar menú",
      contacto: "Contacto",
      items: [
        { clave: "proyectos", texto: "Proyectos" },
        { clave: "servicios", texto: "Servicios" },
        { clave: "cursos", texto: "Cursos" },
        { clave: "estudio", texto: "Estudio" },
      ],
    },
    pie: {
      mapaLabel: "Mapa del sitio",
      redesLabel: "Redes sociales",
      contacto: "Contacto",
      privacidad: "Aviso de privacidad",
      accesibilidad: "Declaración de accesibilidad",
    },
    categorias: {
      Arquitectura: "Arquitectura",
      "Interiorismo comercial": "Interiorismo comercial",
      "Interiorismo residencial": "Interiorismo residencial",
    },
    inicio: {
      titulo: "1903 Arquitectos — Arquitectura e interiorismo comercial en Cajamarca",
      descripcion:
        "Estudio de arquitectura e interiorismo en Cajamarca. Diseñamos y construimos cafés, restaurantes, locales comerciales y viviendas con identidad cajamarquina.",
      portadaAria: "Proyecto destacado",
      verProyectoPrefix: "Ver el proyecto ",
      fotoPendiente: "Foto pendiente",
      verProyectos: "Ver proyectos",
      escribenosWhatsapp: "Escríbenos por WhatsApp",
      etiquetaEnDesarrollo: "En desarrollo",
      tituloEnDesarrollo: "Proyectos en diseño",
      subtituloEnDesarrollo: "Visualizaciones de proyectos que todavía no se construyen.",
    },
    grillaFija: {
      etiqueta: "Proyectos",
      titulo: "Obra terminada",
      boton: "Ver todos los proyectos",
    },
    carrusel: {
      anterior: "Proyecto anterior en diseño",
      siguiente: "Siguiente proyecto en diseño",
      regionLabel: "Proyectos en diseño: desliza para ver más",
    },
    tarjeta: {
      render: "Render",
      porConfirmar: " [por confirmar]",
      anioPendiente: "Año",
      renderPendiente: "Render pendiente",
      fotoPendiente: "Foto pendiente",
    },
    proyectos: {
      titulo: "Proyectos — 1903 Arquitectos",
      descripcion:
        "Obras terminadas del estudio: cafés, restaurantes, locales comerciales y viviendas en Cajamarca y el norte del Perú.",
      etiqueta: "Proyectos",
      h1: "Obra terminada",
      filtrosLabel: "Filtrar por categoría",
      todos: "Todos",
      resultadoSingular: "proyecto",
      resultadoPlural: "proyectos",
      etiquetaEnDesarrollo: "En desarrollo",
      tituloEnDesarrollo: "Proyectos en diseño",
      subtituloEnDesarrollo: "Visualizaciones de proyectos que todavía no se construyen.",
    },
    proyecto: {
      enPrefijo: " en ",
      descripcionRespaldo: (nombre, tipoLower, ciudad) =>
        `Conoce ${nombre}, un proyecto de ${tipoLower} en ${ciudad} de 1903 Arquitectos.`,
      portadaAria: "Foto principal",
      render: "Render",
      porConfirmar: " [por confirmar]",
      fotoPendiente: "Foto principal pendiente",
      migasAria: "Migas de pan",
      inicio: "Inicio",
      proyectos: "Proyectos",
      infoAria: "Información del proyecto",
      sobre: "Sobre el proyecto",
      datosTitulo: "Datos del proyecto",
      tipo: "Tipo",
      ubicacion: "Ubicación",
      anio: "Año",
      anioPendiente: "Año",
      area: "Área",
      estado: "Estado",
      construido: "Construido",
      enDesarrollo: "En desarrollo",
      visualizacion: "Visualización",
      fotografia: "Fotografía",
      encargoTitulo: "El encargo",
      encargoPendiente: "[Qué pidió el cliente, 2–3 líneas. Por confirmar con el estudio.]",
      solucionTitulo: "La solución",
      solucionPendiente: "[Qué hizo el estudio, 2–3 líneas. Por confirmar con el estudio.]",
      collageRenders: "Renders",
      collageTerminado: "Proyecto terminado",
      collageProceso: "Proceso",
      vecinosAria: "Otros proyectos",
      anterior: "Proyecto anterior",
      siguiente: "Proyecto siguiente",
    },
    collage: {
      ampliarPrefix: "Ampliar fotografía: ",
      visorAria: "Vista ampliada de la fotografía",
      cerrarAria: "Cerrar vista ampliada",
      cerrarTexto: "Cerrar ×",
    },
    servicios: {
      titulo: "Servicios — 1903 Arquitectos",
      descripcion:
        "Diseño arquitectónico, interiorismo, visualización 3D, coordinación de proyectos, supervisión y construcción de obra de inicio a fin.",
      etiqueta: "Servicios",
      h1: "Qué hacemos",
      proximamente: "Próximamente",
      lista: [
        {
          nombre: "Diseño arquitectónico",
          incluye:
            "Diseño de viviendas · Diseño de edificios y proyectos multifamiliares · Diseño de locales comerciales y oficinas · Anteproyectos y proyectos arquitectónicos · Ampliaciones y remodelaciones",
        },
        {
          nombre: "Diseño de interiores",
          incluye:
            "Diseño y distribución de espacios interiores · Diseño de salas, dormitorios, cocinas y baños · Diseño de oficinas y locales comerciales · Selección de materiales y acabados · Diseño de mobiliario personalizado · Propuesta de iluminación y decoración",
        },
        {
          nombre: "Modelado 3D y visualización",
          incluye:
            "Modelado arquitectónico en 3D · Renders fotorrealistas de interiores · Renders fotorrealistas de exteriores · Recorridos virtuales y presentación de proyectos · Animaciones arquitectónicas, según requerimiento",
        },
        {
          nombre: "Desarrollo y coordinación de proyectos",
          incluye:
            "Desarrollo integral de proyectos · Coordinación con especialidades · Planos estructurales · Instalaciones eléctricas · Instalaciones sanitarias · Documentación técnica para ejecución de obra",
        },
        {
          nombre: "Supervisión y asesoría",
          incluye:
            "Asesoría arquitectónica · Supervisión de obra · Visitas técnicas · Coordinación durante la ejecución del proyecto · Asesoría en materiales y acabados",
        },
        { nombre: "Construcción de obra, de inicio a fin", incluye: "[Descripción por confirmar con el estudio.]" },
        {
          nombre: "Lotizaciones y trámites municipales",
          incluye: "[Descripción por confirmar con el estudio.]",
          proximamente: true,
        },
      ],
      comoTrabajamosEtiqueta: "Cómo trabajamos",
      comoTrabajamosTitulo: "De la idea a la obra",
      pasos: [
        { nombre: "Conversamos", texto: "Tu idea, el terreno o local y el presupuesto." },
        { nombre: "Diseñamos", texto: "Propuesta, renders y planos." },
        { nombre: "Elegimos materiales", texto: "Acabados, mobiliario e iluminación." },
        { nombre: "Construimos", texto: "Llevamos la obra de inicio a fin." },
      ],
      faqEtiqueta: "Preguntas frecuentes",
      faqTitulo: "Antes de empezar",
      preguntas: [
        {
          pregunta: "¿Qué información o documentos necesitan que les entregue para poder empezar a diseñar?",
          respuesta:
            'Para iniciar, necesitamos el levantamiento topográfico del terreno, el certificado de parámetros urbanísticos o regulaciones de la zona y, si las hay, fotos del entorno, en caso contrario se podría realizar una visita a campo. Sin embargo, lo más importante para nosotros es un "brief" o lista de tus necesidades de espacio, tu presupuesto estimado y que nos compartas cómo imaginas tu día a día en el lugar.',
        },
        {
          pregunta:
            "Me gusta su enfoque regional, pero ¿cómo se aseguran de que el diseño también refleje mis gustos personales y mi estilo de vida?",
          respuesta:
            "Nuestro proceso es de co-creación. El arraigo local pone las reglas del clima, la luz y los materiales idóneos para el lugar, pero tú pones las reglas de cómo se habita. Diseñamos a partir de tus rutinas, pasatiempos y necesidades familiares. El resultado final es una fusión perfecta: una arquitectura que pertenece a su entorno, pero que se siente 100% tuya.",
        },
        {
          pregunta: "¿De qué manera nos mostrarán las propuestas de diseño para que podamos entenderlas bien?",
          respuesta:
            "Sabemos que interpretar planos técnicos puede ser difícil. Por eso, te presentaremos el proyecto de forma muy visual y didáctica. Utilizamos combinaciones de bocetos conceptuales, planos arquitectónicos simplificados, maquetas de estudio de materiales y renders (imágenes 3D hiperrealistas). Así podrás previsualizar con total claridad los volúmenes, la luz natural y las texturas antes de aprobar el diseño.",
        },
        {
          pregunta: "¿Trabajan fuera de Cajamarca?",
          respuesta:
            "¡Por supuesto! Nos encanta llevar nuestro trabajo a distintas partes del país, aunque nuestra sede principal está en Cajamarca. Ya hemos desarrollado proyectos en Trujillo, Arequipa y Tumbes, y estamos listos para viajar o trabajar de forma remota según lo que tu proyecto necesite.",
        },
        {
          pregunta: "¿Cuántas opciones de diseño nos presentan y cuántas modificaciones podemos hacerle al proyecto?",
          respuesta:
            "En la fase inicial te presentaremos un concepto base sólido con variantes de distribución para explorar el potencial del terreno. Una vez elegida la dirección, pasamos a una etapa de retroalimentación donde realizamos hasta 3 rondas de revisiones y ajustes finos. Nuestro objetivo es que firmes el diseño definitivo sintiéndote completamente seguro y entusiasmado, antes de pasar a planos técnicos.",
        },
        {
          pregunta:
            "El clima de la región es complejo (mucho calor / frío / lluvia), ¿cómo lo consideran en la etapa de diseño?",
          respuesta:
            "Ese es el núcleo de nuestra arquitectura. Diseñamos bajo principios bioclimáticos, analizando el recorrido del sol y los vientos predominantes de la zona. Usamos la arquitectura contemporánea para reinterpretar soluciones tradicionales como patios interiores, ventilaciones cruzadas, aleros pronunciados o muros de gran masa térmica. Diseñamos para que tu espacio sea naturalmente confortable, reduciendo al mínimo el uso de aire acondicionado o calefacción artificial.",
        },
        {
          pregunta: "¿Cuánto tiempo toma la etapa de diseño antes de poder tramitar los permisos o construir?",
          respuesta:
            "Un diseño maduro y bien detallado toma aproximadamente entre 2 y 4 meses, dependiendo de la complejidad y escala del proyecto. Este tiempo se divide entre la conceptualización, el desarrollo de planos arquitectónicos y la elaboración de los proyectos de ingenierías (estructural, eléctrica, sanitaria). Invertir el tiempo correcto en esta etapa es lo que garantiza que la construcción fluya rápido y sin costosos errores de improvisación.",
        },
        {
          pregunta: "¿Ustedes nos ayudan a elegir los materiales y acabados de la región, o debemos buscarlos nosotros?",
          respuesta:
            "Nosotros nos encargamos de todo el proceso de curaduría y selección de materiales. Como parte del diseño, creamos un moodboard o paleta de texturas físicas y digitales con muestras reales de las piedras, maderas, tierras o textiles artesanales de la zona. Te guiaremos para elegir combinaciones que no solo se vean espectaculares y contemporáneas, sino que también cumplan con los estándares técnicos de resistencia y durabilidad para tu proyecto.",
        },
        {
          pregunta: "¿El diseño contempla también el paisajismo y la relación del proyecto con la naturaleza que lo rodea?",
          respuesta:
            "Totalmente. Para nuestro estudio, la arquitectura no termina en los muros; el entorno es parte de la obra. Diseñamos el proyecto integrando el paisaje exterior desde el primer día, planificando visuales hacia la naturaleza, integrando vegetación nativa que requiera poco riego y diseñando espacios de transición como terrazas o patios. El objetivo es que el interior y el exterior dialoguen de manera fluida y armónica.",
        },
        {
          pregunta: "¿Qué pasa si el diseño que nos gusta supera el presupuesto que tenemos pensado invertir?",
          respuesta:
            'Para evitar sorpresas, diseñamos con una "conciencia de costos" desde la primera línea. Conforme avanzamos en las propuestas de diseño, vamos realizando estimaciones económicas paramétricas. Si en algún momento una idea arquitectónica supera el presupuesto objetivo, te propondremos alternativas de optimización antes de pasar a la etapa ejecutiva, ya sea ajustando sutilmente el área, modulando etapas constructivas o modificando ciertos acabados, sin perder la esencia ni la calidad del espacio.',
        },
        {
          pregunta: "¿También construyen?",
          respuesta:
            "Sí, ofrecemos el servicio integral de ejecución de obra de inicio a fin. Contamos con un equipo propio de profesionales y personal técnico calificado para llevar el proyecto del plano a la realidad, garantizando el cumplimiento de los plazos, el presupuesto y los más altos estándares de calidad.",
        },
        {
          pregunta: "¿Cuánto cuesta un proyecto?",
          respuesta:
            "Cada presupuesto es personalizado. Depende del área, el tipo y la complejidad del diseño, la ubicación, el nivel de detalle y la cantidad de planos, renders o entregables que necesites.",
        },
        {
          pregunta: "¿Cuánto tiempo toma?",
          respuesta:
            "El plazo mínimo es un mes, pero se define según la magnitud del servicio que contrates. Te lo indicamos en la cotización.",
        },
        {
          pregunta: "¿Puedo pedir servicios que no estaban en la cotización?",
          respuesta: "Sí. Los servicios adicionales se cotizan por separado.",
        },
      ],
      llamadoTitulo: "¿Tienes un proyecto en mente?",
      llamadoBoton: "Escríbenos",
    },
    cursos: {
      titulo: "Cursos de AutoCAD, V-Ray y Revit — 1903 Arquitectos",
      descripcion:
        "Cursos para arquitectos dictados por el estudio: AutoCAD, lectura de planos, V-Ray y Revit, con certificado en asociación con el Colegio de Arquitectos del Perú.",
      etiqueta: "Cursos",
      h1: "Aprende con el estudio",
      intro: "Los cursos virtuales se inscriben en Hotmart; los presenciales, por WhatsApp.",
      modalidadVirtual: "Virtual",
      modalidadPresencial: "Presencial",
      pendiente: "[Duración] · [Fechas]",
      inscribirme: "Inscribirme",
      conectorCurso: " en ",
      proximamente: "Inscripción próximamente [enlace de Hotmart pendiente]",
      certificadoEtiqueta: "Certificado",
      certificadoTitulo: "Con respaldo profesional",
      certificadoTexto: "Los cursos entregan un certificado en asociación con el Colegio de Arquitectos del Perú.",
      logoCapAlt: "Colegio de Arquitectos del Perú — Consejo Nacional",
      lista: [
        { nombre: "AutoCAD para arquitectos", modalidad: "Virtual" },
        { nombre: "Lectura de planos", modalidad: "Virtual" },
        { nombre: "V-Ray: visualización arquitectónica", modalidad: "Presencial" },
        { nombre: "Revit", modalidad: "Presencial" },
      ],
    },
    estudioPagina: {
      titulo: "Estudio — 1903 Arquitectos",
      descripcion:
        "Diecinueve cero tres: un estudio de Cajamarca con obra construida. Conoce nuestra historia, al equipo y el showroom de materiales.",
      etiqueta: "Estudio",
      h1: "Diecinueve cero tres",
      intro:
        '1903 (pronunciado "diecinueve cero tres") nace de la unión de dos socios y el homenaje a nuestras raíces. El nombre surge al combinar los últimos dígitos de las casas familiares donde crecimos: el 19 (del Jr. Amazonas 919 en Cajamarca, hogar de Jorge) y el 03 (de la calle Amazonas 103 en Arequipa, hogar de Carla). Es el punto de partida que nos recuerda de dónde venimos y el valor de construir espacios con identidad propia.',
      misionEtiqueta: "Misión",
      mision:
        "Diseñamos espacios bellos y funcionales que respetan la identidad local y responden a lo que cada cliente necesita.",
      visionEtiqueta: "Visión",
      vision:
        "Ser un estudio referente de arquitectura y diseño de interiores en el Perú, reconocido por transformar espacios en experiencias memorables con sentido cultural y social.",
      propositoEtiqueta: "Propósito",
      proposito:
        "Transformar la manera en que se habita el espacio en el Perú, creando arquitectura que conecta emocionalmente con las personas, honra nuestra cultura y mejora la calidad de vida de quienes la viven.",
      equipoHeading: "Equipo",
      retratoPendiente: "Retrato pendiente",
      equipo: ["Arq. Jorge Muñoz", "Arq. Carla Llerena", "Arq. Loren Bazán"],
      render: "Render",
      showroomAlt: "Render del showroom de materiales y oficinas en mezzanine de 1903 Arquitectos",
      showroomEtiqueta: "Showroom",
      showroomTitulo: "Ven a ver los materiales en persona",
      showroomNota:
        "Abre a inicios de diciembre, en el mismo espacio del estudio y con el mismo horario. [Fecha exacta y materiales por confirmar.]",
      comoLlegar: "Cómo llegar",
      abreNuevaPestana: " (se abre en otra pestaña)",
    },
    contacto: {
      titulo: "Contacto — 1903 Arquitectos",
      descripcion:
        "Escríbenos por WhatsApp o correo, o visítanos en Jr. Amancaes 262, Cajamarca. Lunes a viernes de 8:30 a 13:00 y de 15:00 a 19:00; sábados de 8:30 a 13:00.",
      etiqueta: "Contacto",
      h1: "¿Tienes un proyecto en mente?",
      intro: "Cuéntanos en pocos clics qué necesitas, o escríbenos directamente.",
      asistenteHeading: "Asistente de contacto paso a paso",
      sinJsIntro: "Escríbenos directamente por tu canal preferido:",
      escribirWhatsapp: "Escríbenos por WhatsApp",
      escribirGmail: "Escribir por Gmail",
      correoAsuntoDirecto: "Consulta desde la web de 1903 Arquitectos",
      correoCuerpoDirecto: "Hola, 1903 Arquitectos. Quisiera consultar sobre un proyecto.",
      acciones: ["Diseñar", "Construir", "Remodelar"],
      tipos: ["Arquitectura", "Interiorismo comercial", "Interiorismo residencial"],
      canales: [
        { clave: "whatsapp", nombre: "WhatsApp", detalle: "Respuesta rápida por chat" },
        { clave: "correo", nombre: "Correo", detalle: "Abre Gmail con tu consulta lista" },
        { clave: "llamada", nombre: "Llamada", detalle: "Te llamamos al número que dejes" },
      ],
      paso1Titulo: "¿Qué es lo que quieres hacer?",
      paso1Ayuda: "Elige una opción para avanzar.",
      paso2Titulo: "¿Qué tipo de proyecto es?",
      paso2Ayuda: "Selecciona la categoría que mejor encaja.",
      paso3Titulo: "¿Cómo prefieres que te contactemos?",
      paso3Ayuda: "Adaptamos el envío según tu preferencia.",
      anterior: "← Anterior",
      paso4Titulo: "¿Quieres contarnos algo más de tu idea?",
      paso4Ayuda: "Este paso es opcional; puedes omitirlo si prefieres hablarlo directo.",
      ideaLabel: "Cuéntanos tu idea (opcional)",
      ideaPlaceholder: "Medidas aproximadas, ubicación, plazos o cualquier detalle que quieras adelantar...",
      omitir: "Omitir",
      continuar: "Continuar",
      paso5Titulo: "Tus datos de contacto",
      cambiarRespuestas: "Cambiar respuestas",
      nombreLabel: "Nombre",
      obligatorio: "(obligatorio)",
      opcional: "(opcional)",
      telefonoLabel: "WhatsApp o teléfono",
      correoLabel: "Tu correo electrónico",
      consentimientoAntes: "Acepto el ",
      consentimientoEnlace: "aviso de privacidad",
      consentimientoDespues: " y que el estudio use mis datos para responder mi consulta. ",
      enviarWhatsapp: "Enviar por WhatsApp",
      enviarGmail: "Enviar por Gmail",
      alternativaAntes: "¿Usas Outlook o Apple Mail en vez de Gmail? ",
      alternativaBoton: "Abrir en tu aplicación de correo",
      atajoTexto: "¿Prefieres contactarnos tú directamente sin pasos?",
      infoHeading: "Información y ubicación",
      mapaAlt: (direccion) =>
        `Mapa de ubicación del estudio y showroom de 1903 Arquitectos en ${direccion}, esquina con Jr. Arnaldo Márquez — abrir en Google Maps (se abre en otra pestaña)`,
      creditoMapa: "© OpenStreetMap",
      comoLlegar: "Cómo llegar",
      abreNuevaPestana: " (se abre en otra pestaña)",
      direccionLabel: "Dirección",
      whatsappLabel: "WhatsApp",
      correoLabelDato: "Correo",
      horarioLabel: "Horario",
      sinCita: "También te recibimos sin cita.",
      js: {
        pasoDe: ["Paso ", " de "],
        telObligatorio: "(obligatorio para llamarte)",
        telOpcional: "(opcional)",
        btnAbrirGmail: "Abrir en Gmail",
        btnSolicitarLlamada: "Solicitar llamada por WhatsApp",
        btnPedirLlamadaGmail: "O pedir llamada por Gmail",
        btnEnviarWhatsapp: "Enviar por WhatsApp",
        errNombre: "Escribe tu nombre.",
        errTelefono: "Déjanos tu número para poder llamarte.",
        errConsentimiento: "Marca la casilla del aviso de privacidad para continuar.",
        resumenUnCampo: "campo obligatorio",
        resumenVariosCampos: "campos obligatorios",
        defectoTipo: "Sin especificar",
        defectoAccion: "Consultar",
        defectoCanal: "WhatsApp",
      },
    },
    privacidad: {
      titulo: "Aviso de privacidad — 1903 Arquitectos",
      descripcion: "Qué datos trata esta web, quién los recibe y cómo pedir acceso, corrección o borrado.",
      etiqueta: "Aviso de privacidad",
      h1: "Tus datos en esta web",
      responsableTitulo: "Quién es el responsable",
      responsableTexto: (razonSocial, ruc, direccion) => `${razonSocial}, RUC ${ruc}, ${direccion}.`,
      mideTitulo: "Qué mide la web",
      mideTexto:
        "Qué páginas se visitan, desde qué país, en qué tipo de dispositivo y de dónde llegó el visitante. No identifica a nadie y no usa cookies.",
      recibenTitulo: "Quiénes reciben datos",
      recibenTexto:
        "Cloudflare, que aloja la web y mide las visitas, y WhatsApp, que recibe el mensaje del formulario cuando tú lo envías. La web no guarda lo que escribes en el formulario.",
      enlacesTitulo: "Enlaces a otros sitios",
      enlacesTexto:
        "Algunos enlaces te llevan a otros sitios (Hotmart, Google Maps, Instagram y Facebook), que tienen sus propias políticas de privacidad.",
      derechosTitulo: "Tus derechos",
      derechosAntes: "Puedes pedir acceso, corrección, cancelación u oposición sobre tus datos escribiendo a ",
      derechosDespues: ", según la Ley 29733 de Protección de Datos Personales.",
    },
    accesibilidad: {
      titulo: "Declaración de accesibilidad — 1903 Arquitectos",
      descripcion: "Nivel de accesibilidad que busca esta web, limitaciones conocidas y dónde reportar un problema.",
      etiqueta: "Declaración de accesibilidad",
      h1: "Una web para todas las personas",
      nivelTitulo: "Nivel que busca la web",
      nivelTexto:
        "Esta web busca cumplir las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2, nivel AA, como criterio técnico para cumplir el artículo 23.2 de la Ley 29973, Ley General de la Persona con Discapacidad.",
      limitacionesTitulo: "Limitaciones conocidas",
      limitacionesTexto:
        "[Lista de limitaciones conocidas: se completa y actualiza en cada publicación, después de la revisión manual.]",
      reporteTitulo: "¿Algo no te funciona?",
      reporteAntes: "Cuéntanos qué página y qué problema encontraste, escribiendo a ",
      reporteDespues: ".",
    },
  },
  en: {
    meta: {
      ogLocale: "en_US",
      ogLocaleAlterno: "es_PE",
      saltar: "Skip to content",
      ciudad: "Cajamarca, Peru",
      horaLocal: "Local time",
      cambiarIdioma: "Language",
      idiomaActual: "Current language",
      irAEspanol: "Switch to Spanish",
      irAIngles: "Switch to English",
    },
    estudio: {
      lema: "We celebrate culture through design.",
      atencionPeru: "Serving all of Peru",
      horarioSemana: "Monday to Friday, 8:30 AM–1:00 PM and 3:00 PM–7:00 PM",
      horarioSabado: "Saturdays, 8:30 AM–1:00 PM",
      logoAlt: "1903 Arquitectos, home",
    },
    nav: {
      ariaLabel: "Primary",
      abrirMenu: "Open menu",
      cerrarMenu: "Close menu",
      contacto: "Contact",
      items: [
        { clave: "proyectos", texto: "Projects" },
        { clave: "servicios", texto: "Services" },
        { clave: "cursos", texto: "Courses" },
        { clave: "estudio", texto: "Studio" },
      ],
    },
    pie: {
      mapaLabel: "Site map",
      redesLabel: "Social media",
      contacto: "Contact",
      privacidad: "Privacy notice",
      accesibilidad: "Accessibility statement",
    },
    categorias: {
      Arquitectura: "Architecture",
      "Interiorismo comercial": "Commercial interior design",
      "Interiorismo residencial": "Residential interior design",
    },
    inicio: {
      titulo: "1903 Arquitectos — Commercial Architecture & Interior Design in Cajamarca",
      descripcion:
        "Architecture and interior design studio in Cajamarca, Peru. We design and build cafés, restaurants, commercial spaces, and homes with Cajamarcan identity.",
      portadaAria: "Featured project",
      verProyectoPrefix: "View project ",
      fotoPendiente: "Photo pending",
      verProyectos: "View projects",
      escribenosWhatsapp: "Message us on WhatsApp",
      etiquetaEnDesarrollo: "In development",
      tituloEnDesarrollo: "Projects in design",
      subtituloEnDesarrollo: "Visualizations of projects not yet built.",
    },
    grillaFija: {
      etiqueta: "Projects",
      titulo: "Completed work",
      boton: "View all projects",
    },
    carrusel: {
      anterior: "Previous project in design",
      siguiente: "Next project in design",
      regionLabel: "Projects in design: scroll to see more",
    },
    tarjeta: {
      render: "Render",
      porConfirmar: " [to be confirmed]",
      anioPendiente: "Year",
      renderPendiente: "Render pending",
      fotoPendiente: "Photo pending",
    },
    proyectos: {
      titulo: "Projects — 1903 Arquitectos",
      descripcion:
        "Completed work by the studio: cafés, restaurants, retail spaces, and homes in Cajamarca and northern Peru.",
      etiqueta: "Projects",
      h1: "Completed work",
      filtrosLabel: "Filter by category",
      todos: "All",
      resultadoSingular: "project",
      resultadoPlural: "projects",
      etiquetaEnDesarrollo: "In development",
      tituloEnDesarrollo: "Projects in design",
      subtituloEnDesarrollo: "Visualizations of projects not yet built.",
    },
    proyecto: {
      enPrefijo: " in ",
      descripcionRespaldo: (nombre, tipoLower, ciudad) =>
        `Explore ${nombre}, a ${tipoLower} project in ${ciudad} by 1903 Arquitectos.`,
      portadaAria: "Main photograph",
      render: "Render",
      porConfirmar: " [to be confirmed]",
      fotoPendiente: "Main photograph pending",
      migasAria: "Breadcrumb",
      inicio: "Home",
      proyectos: "Projects",
      infoAria: "Project information",
      sobre: "About the project",
      datosTitulo: "Project details",
      tipo: "Type",
      ubicacion: "Location",
      anio: "Year",
      anioPendiente: "Year",
      area: "Area",
      estado: "Status",
      construido: "Built",
      enDesarrollo: "In development",
      visualizacion: "Visualization",
      fotografia: "Photography",
      encargoTitulo: "The brief",
      encargoPendiente: "[What the client requested, 2–3 lines. To be confirmed with the studio.]",
      solucionTitulo: "The solution",
      solucionPendiente: "[What the studio designed and built, 2–3 lines. To be confirmed with the studio.]",
      collageRenders: "Renders",
      collageTerminado: "Completed project",
      collageProceso: "Process",
      vecinosAria: "Other projects",
      anterior: "Previous project",
      siguiente: "Next project",
    },
    collage: {
      ampliarPrefix: "Enlarge photograph: ",
      visorAria: "Enlarged view of the photograph",
      cerrarAria: "Close enlarged view",
      cerrarTexto: "Close ×",
    },
    servicios: {
      titulo: "Services — 1903 Arquitectos",
      descripcion:
        "Architectural design, interior design, 3D visualization, project coordination, supervision, and end-to-end construction.",
      etiqueta: "Services",
      h1: "What we do",
      proximamente: "Coming soon",
      lista: [
        {
          nombre: "Architectural design",
          incluye:
            "Residential design · Multi-family and building design · Commercial spaces and offices · Preliminary and architectural design projects · Extensions and renovations",
        },
        {
          nombre: "Interior design",
          incluye:
            "Interior space planning and layout · Living rooms, bedrooms, kitchens, and bathrooms · Offices and retail spaces · Materials and finishes curation · Custom furniture design · Lighting and decor proposals",
        },
        {
          nombre: "3D modeling and visualization",
          incluye:
            "3D architectural modeling · Photorealistic interior renders · Photorealistic exterior renders · Virtual tours and project presentations · Architectural animations, upon request",
        },
        {
          nombre: "Project development and coordination",
          incluye:
            "Comprehensive project development · Engineering coordination · Structural drawings · Electrical installations · Plumbing installations · Technical documentation for construction",
        },
        {
          nombre: "Supervision and advisory",
          incluye:
            "Architectural advisory · Construction supervision · Site visits · Coordination during execution · Materials and finishes guidance",
        },
        {
          nombre: "End-to-end construction",
          incluye: "[Description to be confirmed with the studio.]",
        },
        {
          nombre: "Land subdivision and municipal permits",
          incluye: "[Description to be confirmed with the studio.]",
          proximamente: true,
        },
      ],
      comoTrabajamosEtiqueta: "How we work",
      comoTrabajamosTitulo: "From idea to built work",
      pasos: [
        { nombre: "We talk", texto: "Your idea, the site or space, and your budget." },
        { nombre: "We design", texto: "Concept proposal, renders, and drawings." },
        { nombre: "We select materials", texto: "Finishes, furniture, and lighting." },
        { nombre: "We build", texto: "We manage construction from start to finish." },
      ],
      faqEtiqueta: "Frequently asked questions",
      faqTitulo: "Before getting started",
      preguntas: [
        {
          pregunta: "What information or documents do you need from us to start designing?",
          respuesta:
            "To get started, we need the site's topographic survey, the local zoning and urban parameters certificate, and photos of the surroundings if available—otherwise we can schedule a site visit. Most importantly, we need a brief listing your spatial needs, your estimated budget, and how you envision day-to-day life in the space.",
        },
        {
          pregunta:
            "I like your regional focus, but how do you make sure the design also reflects my personal taste and lifestyle?",
          respuesta:
            "Our process is built around co-creation. Local roots set the rules for climate, natural light, and the right materials for the place, while you set the rules for how the space is lived in. We design around your routines, hobbies, and family needs. The result is a seamless blend: architecture that belongs to its setting yet feels 100% yours.",
        },
        {
          pregunta: "How will you present the design proposals so we can clearly understand them?",
          respuesta:
            "We know technical drawings can be hard to read, so we present every project in a visual and accessible way. We combine conceptual sketches, simplified floor plans, material sample boards, and photorealistic 3D renders so you can clearly preview volumes, natural light, and textures before signing off on the design.",
        },
        {
          pregunta: "Do you work outside Cajamarca?",
          respuesta:
            "Of course! While our main studio is in Cajamarca, we love bringing our work to different regions across Peru. We have already developed projects in Trujillo, Arequipa, and Tumbes, and we are ready to travel or collaborate remotely depending on what your project requires.",
        },
        {
          pregunta: "How many design options do you present, and how many revisions can we make?",
          respuesta:
            "In the initial stage, we present a solid core concept with layout variations to explore the site's full potential. Once a direction is chosen, we move into a feedback phase with up to 3 rounds of revisions and fine adjustments. Our goal is for you to approve the final design feeling completely confident and excited before moving into technical drawings.",
        },
        {
          pregunta:
            "The region's climate can be demanding (strong heat, cold, and rain). How do you factor that into the design?",
          respuesta:
            "It sits at the core of our architecture. We design under bioclimatic principles, studying solar paths and prevailing winds on the site. Through contemporary architecture, we reinterpret traditional solutions such as interior courtyards, cross ventilation, generous eaves, and high thermal-mass walls so your space stays naturally comfortable and relies far less on mechanical heating or cooling.",
        },
        {
          pregunta: "How long does the design stage take before we can apply for permits or start construction?",
          respuesta:
            "A well-developed, detailed design takes roughly 2 to 4 months, depending on the project's scale and complexity. This time covers conceptualization, architectural drawings, and engineering packages (structural, electrical, and plumbing). Investing the right time here ensures construction flows smoothly without costly on-site improvisation.",
        },
        {
          pregunta: "Do you help us choose regional materials and finishes, or do we have to source them ourselves?",
          respuesta:
            "We take care of the entire curation and material selection process. As part of the design, we build a physical and digital moodboard with real samples of local stone, timber, earth finishes, and artisan textiles. We guide you toward combinations that look contemporary and striking while meeting technical standards for strength and durability.",
        },
        {
          pregunta: "Does the design also consider landscaping and how the building relates to nature around it?",
          respuesta:
            "Absolutely. For our studio, architecture does not stop at the walls—the surrounding landscape is part of the work. We integrate outdoor areas from day one, framing views toward nature, choosing low-water native vegetation, and crafting transitional spaces like terraces and courtyards so indoors and outdoors dialogue naturally.",
        },
        {
          pregunta: "What happens if the design we like exceeds our target budget?",
          respuesta:
            "To avoid surprises, we design with cost awareness from the very first line. As proposals evolve, we prepare parametric cost estimates. If a design direction exceeds your target budget, we propose optimization alternatives before moving into construction documents—adjusting floor area slightly, phasing construction, or swapping specific finishes—without losing the essence or quality of the space.",
        },
        {
          pregunta: "Do you also handle construction?",
          respuesta:
            "Yes, we provide end-to-end construction execution. Our own team of professionals and qualified technical crew takes the project from blueprint to built reality, safeguarding timelines, budget, and the highest quality standards.",
        },
        {
          pregunta: "How much does a project cost?",
          respuesta:
            "Every quote is tailored to the project. Cost depends on floor area, design type and complexity, location, level of detail, and the scope of drawings, renders, or deliverables you need.",
        },
        {
          pregunta: "How long does it take?",
          respuesta:
            "The minimum timeline is one month, with the exact schedule defined by the scope of the service you commission. We specify this in your quote.",
        },
        {
          pregunta: "Can I request additional services not included in the initial quote?",
          respuesta: "Yes. Additional services are quoted separately.",
        },
      ],
      llamadoTitulo: "Have a project in mind?",
      llamadoBoton: "Write to us",
    },
    cursos: {
      titulo: "AutoCAD, V-Ray & Revit Courses — 1903 Arquitectos",
      descripcion:
        "Architecture courses taught by the studio: AutoCAD, plan reading, V-Ray, and Revit, with certification in association with the College of Architects of Peru.",
      etiqueta: "Courses",
      h1: "Learn with the studio",
      intro: "Online courses are enrolled via Hotmart; in-person courses, via WhatsApp.",
      modalidadVirtual: "Online",
      modalidadPresencial: "In-person",
      pendiente: "[Duration] · [Dates]",
      inscribirme: "Enroll",
      conectorCurso: " in ",
      proximamente: "Enrollment opening soon [Hotmart link pending]",
      certificadoEtiqueta: "Certificate",
      certificadoTitulo: "Professional backing",
      certificadoTexto:
        "Courses award a certificate issued in association with the College of Architects of Peru.",
      logoCapAlt: "College of Architects of Peru — National Council",
      lista: [
        { nombre: "AutoCAD for Architects", modalidad: "Virtual" },
        { nombre: "Architectural Plan Reading", modalidad: "Virtual" },
        { nombre: "V-Ray: Architectural Visualization", modalidad: "Presencial" },
        { nombre: "Revit", modalidad: "Presencial" },
      ],
    },
    estudioPagina: {
      titulo: "Studio — 1903 Arquitectos",
      descripcion:
        "Nineteen zero three: a Cajamarca studio with built work. Discover our story, our team, and the materials showroom.",
      etiqueta: "Studio",
      h1: "Nineteen zero three",
      intro:
        '1903 (pronounced "nineteen zero three" — "diecinueve cero tres" in Spanish) comes from the partnership of two founders and a tribute to our roots. The name combines the last two digits of the family homes where we grew up: 19 (from Jr. Amazonas 919 in Cajamarca, Jorge’s home) and 03 (from Calle Amazonas 103 in Arequipa, Carla’s home). It reminds us where we come from and why we build spaces with authentic identity.',
      misionEtiqueta: "Mission",
      mision:
        "We design beautiful, functional spaces that honor local identity and respond directly to each client’s needs.",
      visionEtiqueta: "Vision",
      vision:
        "To become a leading architecture and interior design studio in Peru, recognized for turning spaces into memorable experiences with cultural and social meaning.",
      propositoEtiqueta: "Purpose",
      proposito:
        "To transform the way spaces are inhabited in Peru, creating architecture that connects emotionally with people, honors our culture, and improves everyday quality of life.",
      equipoHeading: "Team",
      retratoPendiente: "Portrait pending",
      equipo: ["Arch. Jorge Muñoz", "Arch. Carla Llerena", "Arch. Loren Bazán"],
      render: "Render",
      showroomAlt: "Render of the 1903 Arquitectos materials showroom and mezzanine studio offices",
      showroomEtiqueta: "Showroom",
      showroomTitulo: "Come experience the materials in person",
      showroomNota:
        "Opening in early December, inside the studio’s own space with the same visiting hours. [Exact date and materials to be confirmed.]",
      comoLlegar: "Get directions",
      abreNuevaPestana: " (opens in a new tab)",
    },
    contacto: {
      titulo: "Contact — 1903 Arquitectos",
      descripcion:
        "Write to us on WhatsApp or email, or visit us at Jr. Amancaes 262, Cajamarca. Monday to Friday, 8:30 AM–1:00 PM and 3:00 PM–7:00 PM; Saturdays, 8:30 AM–1:00 PM.",
      etiqueta: "Contact",
      h1: "Have a project in mind?",
      intro: "Tell us what you need in a few clicks, or write to us directly.",
      asistenteHeading: "Step-by-step contact assistant",
      sinJsIntro: "Write to us directly through your preferred channel:",
      escribirWhatsapp: "Message us on WhatsApp",
      escribirGmail: "Write via Gmail",
      correoAsuntoDirecto: "Inquiry from the 1903 Arquitectos website",
      correoCuerpoDirecto: "Hello, 1903 Arquitectos. I would like to inquire about a project.",
      acciones: ["Design", "Build", "Remodel"],
      tipos: ["Architecture", "Commercial interior design", "Residential interior design"],
      canales: [
        { clave: "whatsapp", nombre: "WhatsApp", detalle: "Quick response via chat" },
        { clave: "correo", nombre: "Email", detalle: "Opens Gmail with your inquiry ready" },
        { clave: "llamada", nombre: "Phone call", detalle: "We'll call the number you leave" },
      ],
      paso1Titulo: "What would you like to do?",
      paso1Ayuda: "Choose an option to continue.",
      paso2Titulo: "What type of project is it?",
      paso2Ayuda: "Select the category that best fits.",
      paso3Titulo: "How would you prefer we contact you?",
      paso3Ayuda: "We tailor the message delivery to your preference.",
      anterior: "← Back",
      paso4Titulo: "Would you like to share anything else about your idea?",
      paso4Ayuda: "This step is optional; feel free to skip it if you prefer to talk directly.",
      ideaLabel: "Tell us about your idea (optional)",
      ideaPlaceholder: "Approximate dimensions, location, timeline, or any details you want to share...",
      omitir: "Skip",
      continuar: "Continue",
      paso5Titulo: "Your contact details",
      cambiarRespuestas: "Change answers",
      nombreLabel: "Name",
      obligatorio: "(required)",
      opcional: "(optional)",
      telefonoLabel: "WhatsApp or phone number",
      correoLabel: "Your email address",
      consentimientoAntes: "I accept the ",
      consentimientoEnlace: "privacy notice",
      consentimientoDespues: " and allow the studio to use my details to reply to my inquiry. ",
      enviarWhatsapp: "Send via WhatsApp",
      enviarGmail: "Send via Gmail",
      alternativaAntes: "Using Outlook or Apple Mail instead of Gmail? ",
      alternativaBoton: "Open in your email app",
      atajoTexto: "Prefer to reach out directly without the steps?",
      infoHeading: "Information and location",
      mapaAlt: (direccion) =>
        `Location map of the 1903 Arquitectos studio and showroom at ${direccion}, corner with Jr. Arnaldo Márquez — open in Google Maps (opens in a new tab)`,
      creditoMapa: "© OpenStreetMap",
      comoLlegar: "Get directions",
      abreNuevaPestana: " (opens in a new tab)",
      direccionLabel: "Address",
      whatsappLabel: "WhatsApp",
      correoLabelDato: "Email",
      horarioLabel: "Hours",
      sinCita: "Walk-ins are also welcome.",
      js: {
        pasoDe: ["Step ", " of "],
        telObligatorio: "(required to call you)",
        telOpcional: "(optional)",
        btnAbrirGmail: "Open in Gmail",
        btnSolicitarLlamada: "Request a call via WhatsApp",
        btnPedirLlamadaGmail: "Or request a call via Gmail",
        btnEnviarWhatsapp: "Send via WhatsApp",
        errNombre: "Please enter your name.",
        errTelefono: "Please leave your phone number so we can call you.",
        errConsentimiento: "Please check the privacy notice box to continue.",
        resumenUnCampo: "required field",
        resumenVariosCampos: "required fields",
        defectoTipo: "Not specified",
        defectoAccion: "General inquiry",
        defectoCanal: "WhatsApp",
      },
    },
    privacidad: {
      titulo: "Privacy Notice — 1903 Arquitectos",
      descripcion: "What data this website processes, who receives it, and how to request access, correction, or deletion.",
      etiqueta: "Privacy notice",
      h1: "Your data on this website",
      notaIdioma:
        "Note: This English version is provided for convenience. Under Peruvian Law No. 29733 on Personal Data Protection, the Spanish Privacy Notice is the legally binding reference.",
      responsableTitulo: "Data controller",
      responsableTexto: (razonSocial, ruc, direccion) => `${razonSocial}, Tax ID (RUC) ${ruc}, ${direccion}.`,
      mideTitulo: "What the website measures",
      mideTexto:
        "Which pages are visited, from which country, on what type of device, and where the visitor came from. It does not identify anyone personally and does not use cookies.",
      recibenTitulo: "Who receives data",
      recibenTexto:
        "Cloudflare, which hosts the website and measures visits, and WhatsApp, which receives your contact form message when you choose to send it. The website does not store what you type into the form.",
      enlacesTitulo: "Links to external websites",
      enlacesTexto:
        "Some links take you to third-party sites (Hotmart, Google Maps, Instagram, and Facebook), which operate under their own privacy policies.",
      derechosTitulo: "Your rights",
      derechosAntes: "You may request access, correction, cancellation, or objection regarding your personal data by writing to ",
      derechosDespues: ", in accordance with Peruvian Law No. 29733 on Personal Data Protection.",
    },
    accesibilidad: {
      titulo: "Accessibility Statement — 1903 Arquitectos",
      descripcion: "Accessibility level this website targets, known limitations, and where to report an issue.",
      etiqueta: "Accessibility statement",
      h1: "A website for everyone",
      notaIdioma:
        "Note: This English version is provided for convenience. Under Peruvian Law No. 29973, the Spanish Accessibility Statement serves as the primary local reference.",
      nivelTitulo: "Target accessibility level",
      nivelTexto:
        "This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, as a technical benchmark to fulfill Article 23.2 of Peruvian Law No. 29973 (General Law on Persons with Disabilities).",
      limitacionesTitulo: "Known limitations",
      limitacionesTexto:
        "[List of known limitations: completed and updated with each release following manual review.]",
      reporteTitulo: "Something not working for you?",
      reporteAntes: "Let us know which page and what issue you encountered by writing to ",
      reporteDespues: ".",
    },
  },
};

export function textos(lang: Idioma = "es"): TextosIdioma {
  return TEXTOS[lang];
}

export function traducirCategoria(valor: string, lang: Idioma = "es"): string {
  if (lang === "es" || valor.startsWith("[")) return valor;
  return TEXTOS.en.categorias[valor] ?? valor;
}
