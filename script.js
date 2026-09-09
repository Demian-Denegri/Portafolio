// script.js
/* ── SVG ICONS ── */
const IC = {
  person: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  bolt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  brief: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l3-3-3-3-3 3z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  grad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  signal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 8.5a13 13 0 0 1 21 0"/><path d="M5 12a9 9 0 0 1 14 0"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.22v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.999V9h3.099v1.562h.043c.431-.816 1.484-1.676 3.053-1.676 3.265 0 3.867 2.149 3.867 4.944v6.622h-.614zM5.337 7.433A1.8 1.8 0 1 1 5.338 3.8a1.8 1.8 0 0 1-.001 3.633zM6.787 20.452H3.887V9h2.9v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  photo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="44" height="44"><rect x="2" y="5" width="20" height="15" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M8 5V3M16 5V3"/></svg>`,
};

/* ── AUDIO ── */
let AC;
function getAC() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  return AC;
}
function tone(f, t, d, v = 0.07, dl = 0) {
  try {
    const ac = getAC();
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.connect(g);
    g.connect(ac.destination);
    o.type = t;
    o.frequency.setValueAtTime(f, ac.currentTime + dl);
    g.gain.setValueAtTime(v, ac.currentTime + dl);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dl + d);
    o.start(ac.currentTime + dl);
    o.stop(ac.currentTime + dl + d + 0.01);
  } catch (e) {}
}
const snd = {
  nav: () => tone(660, "sine", 0.06, 0.04),
  open: () =>
    [440, 550, 660, 880].forEach((f, i) =>
      tone(f, "sine", 0.14, 0.05, i * 0.055),
    ),
  close: () =>
    [880, 660, 440].forEach((f, i) => tone(f, "sine", 0.1, 0.04, i * 0.05)),
  boot: () => {
    [110, 165, 220, 330, 440, 660].forEach((f, i) =>
      tone(f, "sine", 1.8, 0.035, i * 0.17),
    );
    setTimeout(
      () =>
        [880, 1100, 1320].forEach((f, i) =>
          tone(f, "triangle", 0.35, 0.045, i * 0.09),
        ),
      2100,
    );
  },
};
document.body.addEventListener(
  "click",
  () => {
    try {
      getAC();
    } catch (e) {}
  },
  { once: true },
);

/* ── STARFIELD ── */
function initStarfield() {
  const c = document.getElementById("starfield");
  const ctx = c.getContext("2d");
  let W, H;
  const r = () => {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  };
  r();
  window.addEventListener("resize", r);
  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.1 + 0.3,
    sp: Math.random() * 0.00007 + 0.00002,
    op: Math.random() * 0.6 + 0.3,
    tw: Math.random() * Math.PI * 2,
    tws: Math.random() * 0.035 + 0.008,
  }));
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#000510");
    g.addColorStop(0.6, "#000a1e");
    g.addColorStop(1, "#001028");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    stars.forEach((s) => {
      s.tw += s.tws;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(175,205,255,${s.op * (0.55 + 0.45 * Math.sin(s.tw))})`;
      ctx.fill();
      s.x -= s.sp;
      if (s.x < 0) {
        s.x = 1;
        s.y = Math.random();
      }
    });
    requestAnimationFrame(draw);
  })();
}

function initWave() {
  const c = document.getElementById("wave-bg");
  const ctx = c.getContext("2d");
  let W,
    H,
    t = 0;
  const r = () => {
    W = c.width = window.innerWidth;
    H = c.height = c.offsetHeight;
  };
  r();
  window.addEventListener("resize", r);
  const ws = [
    { color: "rgba(0,75,190,.10)", amp: 16, freq: 0.008, ph: 0, sp: 0.011 },
    { color: "rgba(0,50,140,.08)", amp: 22, freq: 0.006, ph: 1, sp: 0.009 },
    { color: "rgba(0,100,255,.05)", amp: 13, freq: 0.013, ph: 2, sp: 0.015 },
  ];
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    ws.forEach((w) => {
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 2) {
        const y =
          H / 2 +
          Math.sin(x * w.freq + t * w.sp + w.ph) * w.amp +
          Math.cos(x * w.freq * 0.5 + t * w.sp * 0.7) * w.amp * 0.5;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.fillStyle = w.color;
      ctx.fill();
    });
    t++;
    requestAnimationFrame(draw);
  })();
}

function initClock() {
  const el = document.getElementById("header-time");
  const tick = () => {
    const n = new Date();
    const p = (v) => String(v).padStart(2, "0");
    el.textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ── CARD DATA ── */
const CARDS = [
  {
    id: "sobre",
    icon: IC.person,
    label: "Sobre Mí",
    colorClass: "card-sobre",
    color: "#00ccff",
    content: () => `
      <div class="d-section">
        <div class="photo-placeholder" role="img">
          <img src="img/102878081.jpg" alt="Mi foto" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div class="d-section">
        <div class="stats-row">
          <div class="stat-box"><div class="stat-val">1°</div><div class="stat-lbl">Año en curso</div></div>
          <div class="stat-box"><div class="stat-val">3+</div><div class="stat-lbl">Proyectos propios</div></div>
          <div class="stat-box"><div class="stat-val">5+</div><div class="stat-lbl">Tecnologías</div></div>
          <div class="stat-box"><div class="stat-val">BsAs</div><div class="stat-lbl">Argentina</div></div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Quién soy</div>
        <div class="d-text">Estudiante de primer año de la Tecnicatura en Desarrollo de Software en ISTEA. Tengo base sólida en programación con C#, bases de datos con SQL Server, y desarrollo web con HTML y CSS. Complemento la carrera con proyectos personales — un homelab propio, una API de portafolio en producción y una app de gestión para un negocio real — y aprendizaje autodidacta constante en Linux, seguridad informática y herramientas de IA.</div>
      </div>
      <div class="d-section">
        <div class="d-heading">Objetivo Profesional</div>
        <div class="d-text">Sumarme a un equipo de desarrollo o soporte técnico donde pueda aplicar lo que sé, seguir aprendiendo en un entorno real y contribuir desde el primer día. Apunto a roles junior en desarrollo de software, administración de bases de datos o soporte IT.</div>
      </div>
      <div class="d-section">
        <div class="d-heading">Áreas de Interés</div>
        <div class="d-grid">
          ${["Desarrollo Backend", "Bases de Datos", "Ciberseguridad", "Linux & Servidores", "Soporte IT", "Inteligencia Artificial", "Homelab", "Hardware & Redes"].map((i) => `<div class="d-chip"><span class="chip-dot"></span>${i}</div>`).join("")}
        </div>
      </div>
      <div class="d-quote"><p>"Transformando ideas en soluciones tecnológicas mediante aprendizaje constante, curiosidad y pasión por la informática."</p></div>
    `,
  },
  {
    id: "skills",
    icon: IC.bolt,
    label: "Skills",
    colorClass: "card-skills",
    color: "#00ff88",
    content: () => `
      <div class="d-section">
        <div class="d-heading">Desarrollo Web</div>
        <div class="tech-grid">
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>HTML5 <span class="level intermedio">Intermedio</span></h4><p>Estructura semántica, formularios, accesibilidad.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>CSS3 <span class="level intermedio">Intermedio</span></h4><p>Responsive, Flexbox, Grid, animaciones.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>JavaScript <span class="level basico">Básico</span></h4><p>DOM, eventos, lógica del cliente.</p></div>
          </div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Backend & Datos</div>
        <div class="tech-grid">
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>C# <span class="level basico">Básico-Intermedio</span></h4><p>POO, arrays, colecciones, manejo de errores.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>ASP.NET Core <span class="level aprendiendo">Aprendiendo</span></h4><p>Web APIs RESTful, primer proyecto real.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>SQL Server / T-SQL <span class="level basico">Básico-Intermedio</span></h4><p>Consultas, subconsultas, diseño relacional.</p></div>
          </div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Herramientas & Entorno</div>
        <div class="tech-grid">
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>VS Code <span class="level intermedio">Intermedio</span></h4><p>Entorno principal de desarrollo.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>Visual Studio <span class="level basico">Básico</span></h4><p>Proyectos .NET y C#.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>Git / GitHub <span class="level basico">Básico</span></h4><p>Control de versiones, repositorios propios.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>Linux <span class="level basico">Básico</span></h4><p>CLI, administración de servidor Ubuntu, SSH.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://opencode.ai/favicon.svg" alt="OpenCode" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>OpenCode <span class="level basico">Básico</span></h4><p>Agente de código en terminal para desarrollo asistido.</p></div>
          </div>
          <div class="tech-card">
            <img class="tech-logo-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" onerror="this.style.opacity='.3'">
            <div class="tech-info"><h4>MySQL <span class="level basico">Básico</span></h4><p>Consultas y diseño de bases de datos relacionales.</p></div>
          </div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Inteligencia Artificial — Herramientas de uso</div>
        <div class="ai-grid">
          ${[
            {
              name: "Claude",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/120px-Claude_AI_logo.svg.png",
              pct: "92%",
              desc: "Tutor técnico: hacking ético, SQL, C# y backend.",
            },
            {
              name: "ChatGPT",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png",
              pct: "85%",
              desc: "Debugging, redacción técnica y resolución de errores.",
            },
            {
              name: "Gemini",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/120px-Google_Gemini_logo.svg.png",
              pct: "65%",
              desc: "Búsqueda avanzada y análisis de documentación.",
            },
            {
              name: "DeepSeek",
              logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png",
              pct: "50%",
              desc: "Alternativa técnica para código y algoritmos.",
            },
            {
              name: "Grok (xAI)",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Grok_logo.svg/120px-Grok_logo.svg.png",
              pct: "40%",
              desc: "Consultas técnicas en tiempo real.",
            },
          ]
            .map(
              (ai) => `
            <div class="ai-card">
              <div class="ai-card-header">
                <img class="ai-card-icon" src="${ai.logo}" alt="${ai.name}" onerror="this.style.display='none'">
                <span class="ai-card-name">${ai.name}</span>
              </div>
              <div class="ai-bar-track"><div class="ai-bar-fill" style="--pct:${ai.pct}"></div></div>
              <div class="ai-card-desc">${ai.desc}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "exp",
    icon: IC.brief,
    label: "Experiencia",
    colorClass: "card-exp",
    color: "#ffcc00",
    content: () => `
      <div class="d-section">
        <div class="d-heading">Soporte Técnico Independiente</div>
        <div class="d-item">
          <div class="d-item-title">Reparación y Mantenimiento de PC</div>
          <div class="d-item-sub">Diagnóstico y resolución de fallas de hardware y software para clientes particulares. Instalación y configuración de sistemas operativos Windows y Linux. Optimización de rendimiento, mantenimiento preventivo y asesoramiento tecnológico. Experiencia acumulada con variedad de equipos y escenarios reales.</div>
          <div><span class="d-tag">Hardware</span><span class="d-tag">Windows</span><span class="d-tag">Linux</span><span class="d-tag">Diagnóstico</span><span class="d-tag">Redes</span></div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Desarrollo Web — Proyectos Freelance</div>
        <div class="d-item">
          <div class="d-item-title">Sitios Web para Pequeños Negocios</div>
          <div class="d-item-sub">Diseño y desarrollo de sitios web estáticos para emprendimientos locales. Relevamiento de requerimientos, implementación de diseño responsivo y entrega funcional. Enfoque en soluciones prácticas y accesibles para clientes sin conocimientos técnicos.</div>
          <div><span class="d-tag">HTML</span><span class="d-tag">CSS</span><span class="d-tag">JavaScript</span><span class="d-tag">Responsive</span></div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Homelab Personal</div>
        <div class="d-item">
          <div class="d-item-title">Administración de Servidor Doméstico (Ubuntu Server)</div>
          <div class="d-item-sub">Servidor propio con Nextcloud, Nginx, MariaDB, Fail2Ban y HTTPS via Let's Encrypt. Accesible públicamente con dominio DuckDNS. Administración remota vía SSH, monitoreo de recursos y gestión de servicios en producción real. También aloja un servidor de CS 1.6 con VAC habilitado.</div>
          <div><span class="d-tag">Ubuntu Server</span><span class="d-tag">Nginx</span><span class="d-tag">MariaDB</span><span class="d-tag">SSH</span><span class="d-tag">Seguridad</span><span class="d-tag">Let's Encrypt</span></div>
        </div>
      </div>
    `,
  },
  {
    id: "proyectos",
    icon: IC.rocket,
    label: "Proyectos",
    colorClass: "card-proyectos",
    color: "#ff6644",
    content: () => `
      <div class="d-section">
        <div class="d-heading">Proyectos de Desarrollo</div>
        <div class="d-item">
          <div class="d-item-title">RastroFino API — Tienda de Perfumes</div>
          <div class="d-item-sub">API RESTful desarrollada con ASP.NET Core y SQL Server para un negocio real. Gestión de productos, categorías, clientes y pedidos. Frontend en GitHub Pages, API hosteada en Render. Integración con Cloudinary para imágenes y confirmación de compras vía WhatsApp. Primer proyecto en producción real.</div>
          <div><span class="d-tag">ASP.NET Core</span><span class="d-tag">SQL Server</span><span class="d-tag">REST API</span><span class="d-tag">GitHub Pages</span><span class="d-tag">Render</span></div>
          <div class="d-project-links">
            <a class="d-project-link" style="color:#ff6644" href="https://demian-denegri.github.io/rastrofino-web/" target="_blank" rel="noopener">${IC.rocket.replace("<svg", '<svg style="width:13px;height:13px"')} Ver sitio</a>
            <a class="d-project-link" style="color:#aabbdd" href="https://github.com/Demian-Denegri/rastrofino-web" target="_blank" rel="noopener">${IC.github} Repo Web</a>
            <a class="d-project-link" style="color:#aabbdd" href="https://github.com/Demian-Denegri/RastroFinoAPI" target="_blank" rel="noopener">${IC.github} Repo API</a>
          </div>
        </div>
        <div class="d-item">
          <div class="d-item-title">Project Notas <span class="level aprendiendo" style="margin-left:6px">En desarrollo</span></div>
          <div class="d-item-sub">App de notas estilo Any.do desarrollada en C#. Primer proyecto en solitario, con enfoque en organización de tareas y notas personales. Todavía en construcción.</div>
          <div><span class="d-tag">C#</span><span class="d-tag">.NET</span><span class="d-tag">En progreso</span></div>
          <div class="d-project-links">
            <a class="d-project-link" style="color:#aabbdd" href="https://github.com/Demian-Denegri/Project-notas" target="_blank" rel="noopener">${IC.github} Repo</a>
          </div>
        </div>
        <div class="d-item">
          <div class="d-item-title">Juego de Carreras (Consola)</div>
          <div class="d-item-sub">Juego de carreras por consola desarrollado en C#, con selección aleatoria entre circuitos predefinidos y dibujo de pista carácter por carácter usando manejo de posición del cursor. Trabajado con diseño orientado a objetos, separando cálculo y renderizado.</div>
          <div><span class="d-tag">C#</span><span class="d-tag">POO</span><span class="d-tag">Consola</span></div>
          <div class="d-project-links">
            <a class="d-project-link" style="color:#aabbdd" href="https://github.com/Demian-Denegri/Juego-Carreras-C-" target="_blank" rel="noopener">${IC.github} Repo</a>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "formacion",
    icon: IC.grad,
    label: "Formación",
    colorClass: "card-formacion",
    color: "#cc88ff",
    content: () => `
      <div class="d-section">
        <div class="d-heading">Educación Formal</div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-year">2026 — Presente</div>
            <div class="tl-title">Tecnicatura Superior en Desarrollo de Software</div>
            <div class="tl-sub">ISTEA — Instituto Superior Tecnológico Empresarial Argentino, Buenos Aires.<br>Primer año, 2° cuatrimestre. Cursando: Aplicaciones Web Cliente, Estadística y Probabilidad, Experiencia de Usuario, Laboratorio de Bases de Datos Relacionales, Programación Orientada a Objetos y Redes de Datos.<br>1° cuatrimestre aprobado: Programación (C#), Bases de Datos Relacionales (SQL Server/T-SQL), Arquitectura de Computadoras, Matemática, Ciencia Tecnología y Sociedad.<br>Por su cuenta: cursando Java.</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">2024</div>
            <div class="tl-title">Secundaria Completa</div>
            <div class="tl-sub">Buenos Aires, Argentina.</div>
          </div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Certificaciones</div>
        <div class="cert-grid">
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/120px-Cisco_logo_blue_2016.svg.png" alt="Cisco" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Introduction to Cybersecurity</div>
              <div class="cert-issuer">Cisco Networking Academy</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png" alt="Google" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Technical Support Fundamentals</div>
              <div class="cert-issuer">Google</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png" alt="Microsoft" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Foundational C# with Microsoft</div>
              <div class="cert-issuer">freeCodeCamp</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png" alt="Google" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Gemini AI Fundamentals</div>
              <div class="cert-issuer">Google</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png" alt="Microsoft" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">DP-900: Azure Data Fundamentals</div>
              <div class="cert-issuer">Microsoft Learn (en progreso)</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Banco_Santander_Logotipo.svg/120px-Banco_Santander_Logotipo.svg.png" alt="Santander" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Python + Excel</div>
              <div class="cert-issuer">Santander Open Academy</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://axoft.com/wp-content/uploads/2022/03/logo-axoft.svg" alt="Axoft" onerror="this.src='https://placehold.co/36x36/0a1628/00aaff?text=AX'">
            <div class="cert-info">
              <div class="cert-name">Tango Starter</div>
              <div class="cert-issuer">Axoft Argentina</div>
            </div>
          </div>
          <div class="cert-card">
            <img class="cert-logo" src="https://placehold.co/36x36/1a0a2e/cc88ff?text=BIG" alt="BIG School" onerror="this.style.display='none'">
            <div class="cert-info">
              <div class="cert-name">Ciberseguridad & IA</div>
              <div class="cert-issuer">BIG School</div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-section">
        <div class="d-heading">Aprendizaje Autodidacta</div>
        <div class="d-grid">
          ${["Hacking Ético (Kali / Metasploit)", "Administración Linux CLI", "Redes TCP/IP", "Nmap & Reconocimiento", "SSMS & Azure Data Studio", "Docker (intro)"].map((i) => `<div class="d-chip"><span class="chip-dot" style="background:#9966ff"></span>${i}</div>`).join("")}
        </div>
      </div>
    `,
  },
  {
    id: "contacto",
    icon: IC.signal,
    label: "Contacto",
    colorClass: "card-contacto",
    color: "#ff4488",
    content: () => `
      <div class="d-section">
        <div class="d-heading">Canales de Comunicación</div>
        <div class="contact-link">
          <div class="contact-icon" style="color:#ff4488">${IC.email}</div>
          <div>
            <div class="contact-label">Email</div>
            <div class="contact-value">demiandenegri@gmail.com</div>
          </div>
        </div>
        <div class="contact-link">
          <div class="contact-icon" style="color:#0077b5">${IC.linkedin}</div>
          <div>
            <div class="contact-label">LinkedIn</div>
            <a href="https://linkedin.com/in/demiandenegri" target="_blank">linkedin.com/in/demiandenegri</a>
          </div>
        </div>
        <div class="contact-link">
          <div class="contact-icon" style="color:#aabbdd">${IC.github}</div>
          <div>
            <div class="contact-label">GitHub</div>
            <a href="https://github.com/Demian-Denegri" target="_blank">github.com/Demian-Denegri</a>
          </div>
        </div>
        <div class="contact-link">
          <div class="contact-icon" style="color:#00ccff">${IC.location}</div>
          <div>
            <div class="contact-label">Ubicación</div>
            <div class="contact-value">Buenos Aires, Argentina · Disponible para trabajo remoto y presencial</div>
          </div>
        </div>
      </div>
      <div class="d-quote"><p>"Siempre abierto a nuevas oportunidades, colaboraciones y proyectos donde pueda aprender y aportar valor desde el primer día."</p></div>
    `,
  },
];

/* ── BUILD UI ── */
let activeCard = 0;
let detailOpen = false;

function buildNav() {
  const nav = document.getElementById("cat-nav");
  nav.innerHTML = "";
  CARDS.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = `cat-item${i === activeCard ? " active" : ""}`;
    btn.style.color = c.color;
    btn.setAttribute("aria-label", c.label);
    btn.setAttribute("aria-pressed", i === activeCard ? "true" : "false");
    btn.innerHTML = `<span class="cat-icon">${c.icon.replace("<svg", '<svg style="width:26px;height:26px;stroke:currentColor;fill:none"')}</span><span class="cat-label">${c.label}</span>`;
    btn.addEventListener("click", () => {
      if (i === activeCard) openDetail(i);
      else selectCard(i);
    });
    nav.appendChild(btn);
  });
}

function buildCards() {
  const row = document.getElementById("card-row");
  row.innerHTML = "";
  CARDS.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = `mem-card ${c.colorClass}${i === activeCard ? " active" : ""}`;
    div.setAttribute("role", "listitem");
    div.setAttribute("aria-label", c.label);
    div.setAttribute("tabindex", "0");
    div.dataset.index = i;
    const svgCard = c.icon.replace("<svg", '<svg class="card-icon-svg"');
    div.innerHTML = `<div class="card-notch" aria-hidden="true"></div><div class="card-icon-wrap">${svgCard}</div><div class="card-label">${c.label}</div><div class="card-bar" aria-hidden="true"></div><div class="card-dots" aria-hidden="true"><div class="card-dot"></div><div class="card-dot"></div><div class="card-dot"></div></div>`;
    div.addEventListener("click", () => {
      if (i === activeCard) openDetail(i);
      else selectCard(i);
    });
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (i === activeCard) openDetail(i);
        else selectCard(i);
      }
    });
    row.appendChild(div);
  });
  updateTitle();
}

function selectCard(idx) {
  activeCard = ((idx % CARDS.length) + CARDS.length) % CARDS.length;
  snd.nav();
  document
    .querySelectorAll(".mem-card")
    .forEach((c, i) => c.classList.toggle("active", i === activeCard));
  document.querySelectorAll(".cat-item").forEach((c, i) => {
    c.classList.toggle("active", i === activeCard);
    c.setAttribute("aria-pressed", i === activeCard ? "true" : "false");
  });
  updateTitle();
}

function updateTitle() {
  document.getElementById("sel-name-text").textContent =
    CARDS[activeCard].label;
}

function openDetail(idx) {
  snd.open();
  detailOpen = true;
  const card = CARDS[idx];
  document.getElementById("detail-icon").innerHTML = card.icon.replace(
    "<svg",
    `<svg style="color:${card.color};width:34px;height:34px"`,
  );
  const t = document.getElementById("detail-title");
  t.textContent = card.label;
  t.style.color = card.color;
  document.getElementById("detail-body").innerHTML = card.content();
  const s = document.getElementById("screen-detail");
  s.classList.add("active");
  s.removeAttribute("aria-hidden");
  document.getElementById("detail-body").focus();
}

function closeDetail() {
  if (!detailOpen) return;
  snd.close();
  detailOpen = false;
  const s = document.getElementById("screen-detail");
  s.classList.remove("active");
  s.setAttribute("aria-hidden", "true");
}

document
  .getElementById("detail-backdrop")
  .addEventListener("click", closeDetail);
document.addEventListener("keydown", (e) => {
  if (!detailOpen) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectCard(activeCard - 1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      selectCard(activeCard + 1);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDetail(activeCard);
    }
  } else {
    if (e.key === "Escape" || e.key === "Backspace") closeDetail();
  }
});

/* ── BOOT ── */
window.addEventListener("load", () => {
  setTimeout(() => {
    snd.boot();
    const boot = document.getElementById("screen-boot");
    boot.style.transition = "opacity .75s ease";
    boot.style.opacity = "0";
    setTimeout(() => {
      boot.classList.remove("active");
      boot.setAttribute("aria-hidden", "true");
      document.getElementById("screen-main").classList.add("active");
      initStarfield();
      initWave();
      initClock();
      buildNav();
      buildCards();
    }, 750);
  }, 3800);
});
