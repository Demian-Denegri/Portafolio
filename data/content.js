/* ============================================================================
   Portafolio — Demian Denegri
   Capa de contenido (datos) separada de la lógica de renderizado.
   Se carga como script clásico para que funcione también con file://.
   ========================================================================== */

window.DATOS_PORTAFOLIO = {
  /* ── Iconos (definiciones de formas SVG) ──────────────────────────────── */
  iconos: {
    persona: {
      formas: [
        { tag: "circle", attrs: { cx: "12", cy: "8", r: "4" } },
        { tag: "path", attrs: { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7" } },
      ],
    },
    rayo: {
      formas: [
        {
          tag: "polygon",
          attrs: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" },
        },
      ],
    },
    maletin: {
      formas: [
        {
          tag: "rect",
          attrs: { x: "2", y: "7", width: "20", height: "14", rx: "2" },
        },
        {
          tag: "path",
          attrs: { d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" },
        },
      ],
    },
    cohete: {
      formas: [
        {
          tag: "path",
          attrs: {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l3-3-3-3-3 3z",
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
          },
        },
        {
          tag: "path",
          attrs: { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" },
        },
        {
          tag: "path",
          attrs: { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" },
        },
      ],
    },
    birrete: {
      formas: [
        {
          tag: "path",
          attrs: { d: "M22 10v6M2 10l10-5 10 5-10 5z" },
        },
        {
          tag: "path",
          attrs: { d: "M6 12v5c3 3 9 3 12 0v-5" },
        },
      ],
    },
    senal: {
      formas: [
        { tag: "path", attrs: { d: "M1.5 8.5a13 13 0 0 1 21 0" } },
        { tag: "path", attrs: { d: "M5 12a9 9 0 0 1 14 0" } },
        { tag: "path", attrs: { d: "M8.5 15.5a5 5 0 0 1 7 0" } },
        { tag: "circle", attrs: { cx: "12", cy: "19", r: "1" } },
      ],
    },
    correo: {
      formas: [
        {
          tag: "rect",
          attrs: { x: "2", y: "4", width: "20", height: "16", rx: "2" },
        },
        {
          tag: "path",
          attrs: { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" },
        },
      ],
    },
    linkedin: {
      relleno: true,
      formas: [
        {
          tag: "path",
          attrs: {
            d: "M20.447 20.452H17.22v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.999V9h3.099v1.562h.043c.431-.816 1.484-1.676 3.053-1.676 3.265 0 3.867 2.149 3.867 4.944v6.622h-.614zM5.337 7.433A1.8 1.8 0 1 1 5.338 3.8a1.8 1.8 0 0 1-.001 3.633zM6.787 20.452H3.887V9h2.9v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
          },
        },
      ],
    },
    github: {
      relleno: true,
      formas: [
        {
          tag: "path",
          attrs: {
            d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
          },
        },
      ],
    },
    ubicacion: {
      formas: [
        {
          tag: "path",
          attrs: { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" },
        },
        { tag: "circle", attrs: { cx: "12", cy: "10", r: "3" } },
      ],
    },
  },

  /* ── Tarjetas / navegación ────────────────────────────────────────────── */
  tarjetas: [
    { id: "sobre", icono: "persona", etiqueta: "Sobre Mí", acento: "#00ccff" },
    { id: "skills", icono: "rayo", etiqueta: "Skills", acento: "#00ff88" },
    { id: "exp", icono: "maletin", etiqueta: "Experiencia", acento: "#ffcc00" },
    {
      id: "proyectos",
      icono: "cohete",
      etiqueta: "Proyectos",
      acento: "#ff6644",
    },
    {
      id: "formacion",
      icono: "birrete",
      etiqueta: "Formación",
      acento: "#cc88ff",
    },
    { id: "contacto", icono: "senal", etiqueta: "Contacto", acento: "#ff4488" },
  ],

  /* ── Sobre mí ─────────────────────────────────────────────────────────── */
  sobreMi: {
    foto: {
      ruta: "img/102878081.jpg",
      textoAlternativo: "Foto de perfil de Demian Denegri",
      ancho: "190",
      alto: "190",
    },
    estadisticas: [
      { valor: "1°", etiqueta: "Año en curso" },
      { valor: "3+", etiqueta: "Proyectos propios" },
      { valor: "5+", etiqueta: "Tecnologías" },
      { valor: "BsAs", etiqueta: "Argentina" },
    ],
    bloques: [
      {
        titulo: "Quién soy",
        texto:
          "Estudiante de primer año de la Tecnicatura en Desarrollo de Software en ISTEA. Tengo base sólida en programación con C#, bases de datos con SQL Server, y desarrollo web con HTML y CSS. Complemento la carrera con proyectos personales — un homelab propio, una API de portafolio en producción y una app de gestión para un negocio real — y aprendizaje autodidacta constante en Linux, seguridad informática y herramientas de IA.",
      },
      {
        titulo: "Objetivo Profesional",
        texto:
          "Sumarme a un equipo de desarrollo o soporte técnico donde pueda aplicar lo que sé, seguir aprendiendo en un entorno real y contribuir desde el primer día. Apunto a roles junior en desarrollo de software, administración de bases de datos o soporte IT.",
      },
    ],
    tituloIntereses: "Áreas de Interés",
    intereses: [
      "Desarrollo Backend",
      "Bases de Datos",
      "Ciberseguridad",
      "Linux & Servidores",
      "Soporte IT",
      "Inteligencia Artificial",
      "Homelab",
      "Hardware & Redes",
    ],
    cita: '"Transformando ideas en soluciones tecnológicas mediante aprendizaje constante, curiosidad y pasión por la informática."',
  },

  /* ── Skills ───────────────────────────────────────────────────────────── */
  habilidades: {
    gruposTecnologias: [
      {
        titulo: "Desarrollo Web",
        elementos: [
          {
            nombre: "HTML5",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion: "Estructura semántica, formularios, accesibilidad.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          },
          {
            nombre: "CSS3",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion: "Responsive, Flexbox, Grid, animaciones.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          },
          {
            nombre: "JavaScript",
            nivel: "Básico",
            claseNivel: "basico",
            descripcion: "DOM, eventos, lógica del cliente.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
        ],
      },
      {
        titulo: "Backend & Datos",
        elementos: [
          {
            nombre: "C#",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion: "POO, arrays, colecciones, manejo de errores.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          },
          {
            nombre: "ASP.NET Core",
            nivel: "Aprendiendo",
            claseNivel: "aprendiendo",
            descripcion: "Web APIs RESTful, primer proyecto real.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
          },
          {
            nombre: "SQL Server / T-SQL",
            nivel: "Básico-Intermedio",
            claseNivel: "basico",
            descripcion: "Consultas, subconsultas, diseño relacional.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
          },
          {
            nombre: "MySQL",
            nivel: "Básico",
            claseNivel: "basico",
            descripcion: "Consultas y diseño de bases de datos relacionales.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          },
        ],
      },
      {
        titulo: "Herramientas & Entorno",
        elementos: [
          {
            nombre: "VS Code",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion: "Entorno principal de desarrollo.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          },
          {
            nombre: "Visual Studio",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion: "Proyectos .NET y C#.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
          },
          {
            nombre: "Git / GitHub",
            nivel: "Básico",
            claseNivel: "basico",
            descripcion: "Control de versiones, repositorios propios.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            nombre: "Linux",
            nivel: "Básico",
            claseNivel: "basico",
            descripcion: "CLI, administración de servidor Ubuntu, SSH.",
            logotipo:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          },
          {
            nombre: "OpenCode",
            nivel: "Intermedio",
            claseNivel: "intermedio",
            descripcion:
              "Agente de código en terminal para desarrollo asistido.",
            logotipo: "https://opencode.ai/favicon.svg",
          },
        ],
      },
    ],
    tituloIA: "Inteligencia Artificial — Herramientas de uso",
    herramientasIA: [
      {
        nombre: "Claude",
        logotipo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/120px-Claude_AI_logo.svg.png",
        porcentaje: "92%",
        descripcion: "Tutor técnico: hacking ético, SQL, C# y backend.",
      },
      {
        nombre: "ChatGPT",
        logotipo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png",
        porcentaje: "85%",
        descripcion: "Debugging, redacción técnica y resolución de errores.",
      },
      {
        nombre: "Gemini",
        logotipo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/120px-Google_Gemini_logo.svg.png",
        porcentaje: "65%",
        descripcion: "Búsqueda avanzada y análisis de documentación.",
      },
      {
        nombre: "DeepSeek",
        logotipo:
          "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png",
        porcentaje: "50%",
        descripcion: "Alternativa técnica para código y algoritmos.",
      },
      {
        nombre: "Grok (xAI)",
        logotipo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Grok_logo.svg/120px-Grok_logo.svg.png",
        porcentaje: "40%",
        descripcion: "Consultas técnicas en tiempo real.",
      },
    ],
  },

  /* ── Experiencia ──────────────────────────────────────────────────────── */
  experiencia: [
    {
      encabezado: "Soporte Técnico · Dic. 2024 – Actualidad",
      titulo: "Reparación y Mantenimiento de PC",
      descripcion:
        "Diagnóstico y resolución de fallas de hardware y software para clientes particulares. Instalación y configuración de sistemas operativos Windows y Linux. Optimización de rendimiento, mantenimiento preventivo y asesoramiento tecnológico. Experiencia acumulada con variedad de equipos y escenarios reales.",
      etiquetas: ["Hardware", "Windows", "Linux", "Diagnóstico", "Redes"],
    },
    {
      encabezado: "Desarrollo Web — Proyectos Freelance",
      titulo: "Sitios Web para Pequeños Negocios",
      descripcion:
        "Diseño y desarrollo de sitios web estáticos para emprendimientos locales. Relevamiento de requerimientos, implementación de diseño responsivo y entrega funcional. Enfoque en soluciones prácticas y accesibles para clientes sin conocimientos técnicos.",
      etiquetas: ["HTML", "CSS", "JavaScript", "Responsive"],
    },
    {
      encabezado: "Homelab Personal",
      titulo: "Administración de Servidor Doméstico (Ubuntu Server)",
      descripcion:
        "Servidor propio con Nextcloud, Nginx, MariaDB, Fail2Ban y HTTPS via Let's Encrypt. Accesible públicamente con dominio DuckDNS. Administración remota vía SSH, monitoreo de recursos y gestión de servicios en producción real. También aloja un servidor de CS 1.6 con VAC habilitado.",
      etiquetas: [
        "Ubuntu Server",
        "Nginx",
        "MariaDB",
        "SSH",
        "Seguridad",
        "Let's Encrypt",
      ],
    },
    {
      encabezado: "Emprendimiento / Proyecto Personal — Matecito3D",
      titulo: "Modelado e Impresión 3D",
      descripcion:
        "Diseño y fabricación de piezas 3D a medida y personalizadas para clientes. Control de stock de insumos y materiales, atención al cliente y gestión de pedidos de principio a fin.",
      etiquetas: [
        "Impresión 3D",
        "Modelado 3D",
        "Personalización",
        "Gestión de Stock",
        "Atención al Cliente",
      ],
    },
    {
      encabezado: "City Movil · Dic. 2024 – Mar. 2025",
      titulo: "Empleado Polivalente",
      descripcion:
        "Armado y preparación de pedidos para Mercado Libre y Rappi, junto con gestión de envíos y control de stock. Atención al cliente tanto de forma presencial en local como vía WhatsApp.",
      etiquetas: [
        "Atención al Cliente",
        "Control de Stock",
        "Logística & Envíos",
        "Mercado Libre",
        "Rappi",
      ],
    },
  ],

  /* ── Proyectos ────────────────────────────────────────────────────────── */
  tituloProyectos: "Proyectos de Desarrollo",
  proyectos: [
    {
      titulo: "Lol Analyzer (Web App)",
      descripcion:
        "Un analizador de perfiles de League of Legends. Este proyecto permite buscar un invocador por Nombre + Tag (Riot ID), obtener su información de perfil, estadísticas en clasificatorias (Solo/Dúo y Flexible) y su historial reciente de partidas, mostrando los datos de una forma más clara.",
      etiquetas: ["HTML", "CSS", "JavaScript", "Responsive", "API"],
      enlaces: [
        {
          texto: "Ver sitio",
          enlace: "https://demian-denegri.github.io/lolanalyzer2.0/",
          icono: "cohete",
          esPrincipal: true,
        },
        {
          texto: "Repo",
          enlace: "https://github.com/Demian-Denegri/lolanalyzer2.0",
          icono: "github",
          esPrincipal: false,
        },
      ],
    },

    ///--------------------------------------------------
    {
      titulo: "RastroFino API — Tienda de Perfumes",
      descripcion:
        "API RESTful desarrollada con ASP.NET Core y SQL Server para un negocio real. Gestión de productos, categorías, clientes y pedidos. Frontend en GitHub Pages, API hosteada en Render. Integración con Cloudinary para imágenes y confirmación de compras vía WhatsApp. Primer proyecto en producción real.",
      etiquetas: [
        "ASP.NET Core",
        "SQL Server",
        "REST API",
        "GitHub Pages",
        "Render",
      ],
      enlaces: [
        {
          texto: "Ver sitio",
          enlace: "https://demian-denegri.github.io/rastrofino-web/",
          icono: "cohete",
          esPrincipal: true,
        },
        {
          texto: "Repo Web",
          enlace: "https://github.com/Demian-Denegri/rastrofino-web",
        },
        {
          texto: "Repo API",
          enlace: "https://github.com/Demian-Denegri/RastroFinoAPI",
        },
      ],
    },
    {
      titulo: "Project Notas",
      insignia: { texto: "En desarrollo", clase: "aprendiendo" },
      descripcion:
        "App de notas estilo Any.do desarrollada en C#. Primer proyecto en solitario, con enfoque en organización de tareas y notas personales. Todavía en construcción.",
      etiquetas: ["C#", ".NET", "En progreso"],
      enlaces: [
        {
          texto: "Repo",
          enlace: "https://github.com/Demian-Denegri/Project-notas",
        },
      ],
    },
    {
      titulo: "Juego de Carreras (Consola)",
      descripcion:
        "Juego de carreras por consola desarrollado en C#, con selección aleatoria entre circuitos predefinidos y dibujo de pista carácter por carácter usando manejo de posición del cursor. Trabajado con diseño orientado a objetos, separando cálculo y renderizado.",
      etiquetas: ["C#", "POO", "Consola"],
      enlaces: [
        {
          texto: "Repo",
          enlace: "https://github.com/Demian-Denegri/Juego-Carreras-C-",
        },
      ],
    },
  ],

  /* ── Formación ────────────────────────────────────────────────────────── */
  tituloEducacion: "Educación Formal",
  educacion: [
    {
      anio: "2026 — Presente",
      titulo: "Tecnicatura Superior en Desarrollo de Software",
      lineas: [
        "ISTEA — Instituto Superior Tecnológico Empresarial Argentino, Buenos Aires.",
        "Primer año, 2° cuatrimestre. Cursando: Aplicaciones Web Cliente, Estadística y Probabilidad, Experiencia de Usuario, Laboratorio de Bases de Datos Relacionales, Programación Orientada a Objetos y Redes de Datos.",
        "1° cuatrimestre aprobado: Programación (C#), Bases de Datos Relacionales (SQL Server/T-SQL), Arquitectura de Computadoras, Matemática, Ciencia Tecnología y Sociedad.",
        "Por su cuenta: cursando Java.",
      ],
    },
    {
      anio: "2024",
      titulo: "Secundaria Completa",
      lineas: ["Buenos Aires, Argentina."],
    },
  ],

  tituloCertificaciones: "Certificaciones",
  certificaciones: [
    {
      nombre: "Introduction to Cybersecurity",
      emisor: "Cisco Networking Academy",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/120px-Cisco_logo_blue_2016.svg.png",
    },
    {
      nombre: "Technical Support Fundamentals",
      emisor: "Google",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png",
    },
    {
      nombre: "Foundational C# with Microsoft",
      emisor: "freeCodeCamp",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png",
    },
    {
      nombre: "Gemini AI Fundamentals",
      emisor: "Google",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png",
    },
    {
      nombre: "DP-900: Azure Data Fundamentals",
      emisor: "Microsoft Learn (en progreso)",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png",
    },
    {
      nombre: "Python + Excel",
      emisor: "Santander Open Academy",
      logotipo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Banco_Santander_Logotipo.svg/120px-Banco_Santander_Logotipo.svg.png",
    },
    {
      nombre: "Tango Starter",
      emisor: "Axoft Argentina",
      logotipo: "https://axoft.com/wp-content/uploads/2022/03/logo-axoft.svg",
      respaldo: "https://placehold.co/36x36/0a1628/00aaff?text=AX",
    },
    {
      nombre: "Ciberseguridad & IA",
      emisor: "BIG School",
      logotipo: "https://placehold.co/36x36/1a0a2e/cc88ff?text=BIG",
    },
  ],

  tituloAutodidacta: "Aprendizaje Autodidacta",
  autodidacta: [
    "Hacking Ético (Kali / Metasploit)",
    "Administración Linux CLI",
    "Redes TCP/IP",
    "Nmap & Reconocimiento",
    "SSMS & Azure Data Studio",
    "Docker (intro)",
  ],

  /* ── Contacto ─────────────────────────────────────────────────────────── */
  tituloContacto: "Canales de Comunicación",
  contactos: [
    {
      icono: "correo",
      etiqueta: "Email",
      valor: "demiandenegri@gmail.com",
      claseIcono: "contact-icon--email",
    },
    {
      icono: "linkedin",
      etiqueta: "LinkedIn",
      valor: "linkedin.com/in/demiandenegri",
      enlace: "https://linkedin.com/in/demiandenegri",
      claseIcono: "contact-icon--linkedin",
    },
    {
      icono: "github",
      etiqueta: "GitHub",
      valor: "github.com/Demian-Denegri",
      enlace: "https://github.com/Demian-Denegri",
      claseIcono: "contact-icon--github",
    },
    {
      icono: "ubicacion",
      etiqueta: "Ubicación",
      valor:
        "Buenos Aires, Argentina · Disponible para trabajo remoto y presencial",
      claseIcono: "contact-icon--location",
    },
  ],
  citaContacto:
    '"Siempre abierto a nuevas oportunidades, colaboraciones y proyectos donde pueda aprender y aportar valor desde el primer día."',
};
