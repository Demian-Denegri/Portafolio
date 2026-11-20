/* ============================================================================
   Portafolio — Demian Denegri
   Lógica de la interfaz. Todo el DOM se construye con la API nativa:
   createElement, textContent, appendChild, setAttribute y classList.
   Los datos viven en data/content.js.
   ========================================================================== */

"use strict";

const DATOS = window.DATOS_PORTAFOLIO;
const NS_SVG = "http://www.w3.org/2000/svg";

/* ── Audio ────────────────────────────────────────────────────────────────── */

let contextoAudio = null;

function obtenerContextoAudio() {
  const ClaseContextoAudio = window.AudioContext || window.webkitAudioContext;
  if (!ClaseContextoAudio) return null;

  try {
    if (!contextoAudio) contextoAudio = new ClaseContextoAudio();
    if (contextoAudio.state === "suspended") {
      contextoAudio.resume().catch(() => {});
    }
    return contextoAudio;
  } catch {
    return null;
  }
}

function reproducirTono(
  frecuencia,
  tipo,
  duracion,
  volumen = 0.07,
  retraso = 0,
) {
  const contexto = obtenerContextoAudio();
  if (!contexto) return;

  const oscilador = contexto.createOscillator();
  const ganancia = contexto.createGain();
  const horaInicio = contexto.currentTime + retraso;

  oscilador.type = tipo;
  oscilador.frequency.setValueAtTime(frecuencia, horaInicio);
  ganancia.gain.setValueAtTime(volumen, horaInicio);
  ganancia.gain.exponentialRampToValueAtTime(0.0001, horaInicio + duracion);

  oscilador.connect(ganancia).connect(contexto.destination);
  oscilador.start(horaInicio);
  oscilador.stop(horaInicio + duracion + 0.01);
}

const sonidos = {
  navegar: () => reproducirTono(660, "sine", 0.06, 0.04),
  abrir: () =>
    [440, 550, 660, 880].forEach((frecuencia, indice) =>
      reproducirTono(frecuencia, "sine", 0.14, 0.05, indice * 0.055),
    ),
  cerrar: () =>
    [880, 660, 440].forEach((frecuencia, indice) =>
      reproducirTono(frecuencia, "sine", 0.1, 0.04, indice * 0.05),
    ),
  arranque: () => {
    [110, 165, 220, 330, 440, 660].forEach((frecuencia, indice) =>
      reproducirTono(frecuencia, "sine", 1.8, 0.035, indice * 0.17),
    );
    setTimeout(() => {
      [880, 1100, 1320].forEach((frecuencia, indice) =>
        reproducirTono(frecuencia, "triangle", 0.35, 0.045, indice * 0.09),
      );
    }, 2100);
  },
};

// Desbloquea el audio en el primer gesto del usuario.
document.addEventListener("pointerdown", () => obtenerContextoAudio(), {
  once: true,
});

/* ── Fondos animados ─────────────────────────────────────────────────────── */

function iniciarCampoEstelar() {
  const lienzo = document.getElementById("starfield");
  const contexto = lienzo.getContext("2d");
  if (!contexto) return;

  let ancho = 0;
  let alto = 0;
  let fondo = null;

  const redimensionar = () => {
    ancho = lienzo.width = window.innerWidth;
    alto = lienzo.height = window.innerHeight;

    fondo = contexto.createLinearGradient(0, 0, 0, alto);
    fondo.addColorStop(0, "#000510");
    fondo.addColorStop(0.6, "#000a1e");
    fondo.addColorStop(1, "#001028");
  };

  redimensionar();
  window.addEventListener("resize", redimensionar);

  const estrellas = Array.from({ length: 180 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radio: Math.random() * 1.1 + 0.3,
    velocidad: Math.random() * 0.00007 + 0.00002,
    opacidad: Math.random() * 0.6 + 0.3,
    fase: Math.random() * Math.PI * 2,
    velocidadParpadeo: Math.random() * 0.035 + 0.008,
  }));

  function dibujar() {
    contexto.clearRect(0, 0, ancho, alto);
    contexto.fillStyle = fondo;
    contexto.fillRect(0, 0, ancho, alto);

    for (const estrella of estrellas) {
      estrella.fase += estrella.velocidadParpadeo;

      contexto.beginPath();
      contexto.arc(
        estrella.x * ancho,
        estrella.y * alto,
        estrella.radio,
        0,
        Math.PI * 2,
      );
      contexto.fillStyle = `rgba(175, 205, 255, ${
        estrella.opacidad * (0.55 + 0.45 * Math.sin(estrella.fase))
      })`;
      contexto.fill();

      estrella.x -= estrella.velocidad;
      if (estrella.x < 0) {
        estrella.x = 1;
        estrella.y = Math.random();
      }
    }

    requestAnimationFrame(dibujar);
  }

  dibujar();
}

function iniciarOndas() {
  const lienzo = document.getElementById("wave-bg");
  const contexto = lienzo.getContext("2d");
  if (!contexto) return;

  let ancho = 0;
  let alto = 0;
  let tiempo = 0;

  const redimensionar = () => {
    ancho = lienzo.width = window.innerWidth;
    alto = lienzo.height = lienzo.offsetHeight;
  };

  redimensionar();
  window.addEventListener("resize", redimensionar);
  //logica ondas fondo
  const ondas = [
    {
      color: "rgba(0, 75, 190, 0.10)",
      amplitud: 16,
      frecuencia: 0.008,
      fase: 0,
      velocidad: 0.011,
    },
    {
      color: "rgba(0, 50, 140, 0.08)",
      amplitud: 22,
      frecuencia: 0.006,
      fase: 1,
      velocidad: 0.009,
    },
    {
      color: "rgba(0, 100, 255, 0.05)",
      amplitud: 13,
      frecuencia: 0.013,
      fase: 2,
      velocidad: 0.015,
    },
  ];

  function dibujar() {
    contexto.clearRect(0, 0, ancho, alto);

    for (const onda of ondas) {
      contexto.beginPath();
      contexto.moveTo(0, alto);

      for (let x = 0; x <= ancho; x += 2) {
        const y =
          alto / 2 +
          Math.sin(x * onda.frecuencia + tiempo * onda.velocidad + onda.fase) *
            onda.amplitud +
          Math.cos(x * onda.frecuencia * 0.5 + tiempo * onda.velocidad * 0.7) *
            onda.amplitud *
            0.5;

        contexto.lineTo(x, y);
      }

      contexto.lineTo(ancho, alto);
      contexto.closePath();
      contexto.fillStyle = onda.color;
      contexto.fill();
    }

    tiempo += 1;
    requestAnimationFrame(dibujar);
  }

  dibujar();
}

/* ── Reloj ───────────────────────────────────────────────────────────────── */

function iniciarReloj() {
  const elemento = document.getElementById("header-time");
  const rellenarConCeros = (valor) => String(valor).padStart(2, "0");

  const actualizarHora = () => {
    const ahora = new Date();
    elemento.textContent = `${rellenarConCeros(ahora.getHours())}:${rellenarConCeros(ahora.getMinutes())}:${rellenarConCeros(ahora.getSeconds())}`;
  };

  actualizarHora();
  setInterval(actualizarHora, 1000);
}

/* ── Ayudantes de DOM ────────────────────────────────────────────────────── */

function crearElemento(etiqueta, clase, texto) {
  //para crear elementos HTML
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.classList.add(clase);
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

function crearIcono(nombre, clase) {
  //para crear iconos SVG
  const definicion = DATOS.iconos[nombre] || DATOS.iconos.persona;
  const nodo = document.createElementNS(NS_SVG, "svg");

  nodo.setAttribute("viewBox", "0 0 24 24");

  if (definicion.relleno) {
    nodo.setAttribute("fill", "currentColor");
  } else {
    nodo.setAttribute("fill", "none");
    nodo.setAttribute("stroke", "currentColor");
    nodo.setAttribute("stroke-width", "1.8");
    nodo.setAttribute("stroke-linecap", "round");
    nodo.setAttribute("stroke-linejoin", "round");
  }

  if (clase) nodo.classList.add(clase);

  for (const forma of definicion.formas) {
    const hijo = document.createElementNS(NS_SVG, forma.tag);
    for (const [atributo, valor] of Object.entries(forma.attrs)) {
      hijo.setAttribute(atributo, valor);
    }
    nodo.appendChild(hijo);
  }

  return nodo;
}

function crearSeccion(titulo) {
  const nodo = crearElemento("div", "d-section");
  if (titulo) nodo.appendChild(crearElemento("h3", "d-heading", titulo));
  return nodo;
}

function crearCita(texto) {
  const nodo = crearElemento("blockquote", "d-quote");
  nodo.appendChild(crearElemento("p", null, texto));
  return nodo;
}

function crearListaFichas(coleccion, clasePuntoExtra) {
  const cuadricula = crearElemento("div", "d-grid");

  for (const texto of coleccion) {
    const ficha = crearElemento("div", "d-chip");
    const punto = crearElemento("span", "chip-dot");
    if (clasePuntoExtra) punto.classList.add(clasePuntoExtra);

    ficha.appendChild(punto);
    ficha.appendChild(crearElemento("span", null, texto));
    cuadricula.appendChild(ficha);
  }

  return cuadricula;
}

function crearListaEtiquetas(etiquetas) {
  const contenedor = crearElemento("div", "d-tags");
  for (const etiqueta of etiquetas) {
    contenedor.appendChild(crearElemento("span", "d-tag", etiqueta));
  }
  return contenedor;
}

/* ── Componentes de contenido ────────────────────────────────────────────── */

function crearEnlaceProyecto({ enlace, texto, icono, esPrincipal }) {
  const nodoEnlace = crearElemento("a", "d-project-link");
  if (esPrincipal) nodoEnlace.classList.add("d-project-link--primary");
  nodoEnlace.setAttribute("href", enlace);
  nodoEnlace.setAttribute("target", "_blank");
  nodoEnlace.setAttribute("rel", "noopener noreferrer");

  nodoEnlace.appendChild(crearIcono(icono || "github"));
  nodoEnlace.appendChild(crearElemento("span", null, texto));
  return nodoEnlace;
}

function renderizarTecnologia({
  nombre,
  nivel,
  claseNivel,
  descripcion,
  logotipo,
}) {
  const tarjeta = crearElemento("div", "tech-card");

  const imagen = crearElemento("img", "tech-logo-img");
  imagen.setAttribute("src", logotipo);
  imagen.setAttribute("alt", nombre);
  imagen.setAttribute("loading", "lazy");
  imagen.setAttribute("data-error", "fade");

  const informacion = crearElemento("div", "tech-info");
  const titulo = crearElemento("h4", null, nombre + " ");
  const elementoNivel = crearElemento("span", "level", nivel);
  elementoNivel.classList.add(claseNivel);
  titulo.appendChild(elementoNivel);

  informacion.appendChild(titulo);
  informacion.appendChild(crearElemento("p", null, descripcion));

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(informacion);
  return tarjeta;
}

function renderizarGrupoTecnologias({ titulo, elementos }) {
  const seccion = crearSeccion(titulo);
  const cuadricula = crearElemento("div", "tech-grid");

  for (const elemento of elementos) {
    cuadricula.appendChild(renderizarTecnologia(elemento));
  }

  seccion.appendChild(cuadricula);
  return seccion;
}

function renderizarHerramientaIA({
  nombre,
  logotipo,
  porcentaje,
  descripcion,
}) {
  const tarjeta = crearElemento("div", "ai-card");
  const encabezado = crearElemento("div", "ai-card-header");
  const imagen = crearElemento("img", "ai-card-icon");
  imagen.setAttribute("src", logotipo);
  imagen.setAttribute("alt", nombre);
  imagen.setAttribute("loading", "lazy");
  imagen.setAttribute("data-error", "hide");

  encabezado.appendChild(imagen);
  encabezado.appendChild(crearElemento("span", "ai-card-name", nombre));

  const pista = crearElemento("div", "ai-bar-track");
  const relleno = crearElemento("div", "ai-bar-fill");
  relleno.style.setProperty("--pct", porcentaje);
  pista.appendChild(relleno);

  tarjeta.appendChild(encabezado);
  tarjeta.appendChild(pista);
  tarjeta.appendChild(crearElemento("div", "ai-card-desc", descripcion));
  return tarjeta;
}

function renderizarElementoExperiencia({ titulo, descripcion, etiquetas }) {
  const elemento = crearElemento("div", "d-item");

  elemento.appendChild(crearElemento("h4", "d-item-title", titulo));
  elemento.appendChild(crearElemento("p", "d-item-sub", descripcion));
  elemento.appendChild(crearListaEtiquetas(etiquetas));
  return elemento;
}

function renderizarProyecto({
  titulo,
  insignia,
  descripcion,
  etiquetas,
  enlaces,
}) {
  const elemento = crearElemento("div", "d-item");

  const tituloElemento = crearElemento("h4", "d-item-title", titulo);
  if (insignia) {
    const elementoInsignia = crearElemento("span", "level", insignia.texto);
    elementoInsignia.classList.add(insignia.clase);
    tituloElemento.appendChild(elementoInsignia);
  }

  const filaEnlaces = crearElemento("div", "d-project-links");
  for (const enlace of enlaces) {
    filaEnlaces.appendChild(crearEnlaceProyecto(enlace));
  }

  elemento.appendChild(tituloElemento);
  elemento.appendChild(crearElemento("p", "d-item-sub", descripcion));
  elemento.appendChild(crearListaEtiquetas(etiquetas));
  elemento.appendChild(filaEnlaces);
  return elemento;
}

function renderizarElementoFormacion({ anio, titulo, lineas }) {
  const elemento = crearElemento("div", "tl-item");

  elemento.appendChild(crearElemento("div", "tl-year", anio));
  elemento.appendChild(crearElemento("h4", "tl-title", titulo));

  const descripcion = crearElemento("p", "tl-sub");
  lineas.forEach((linea, indice) => {
    if (indice > 0) descripcion.appendChild(document.createElement("br"));
    descripcion.appendChild(crearElemento("span", null, linea));
  });
  elemento.appendChild(descripcion);

  return elemento;
}

function renderizarCertificacion({ nombre, emisor, logotipo, respaldo }) {
  const tarjeta = crearElemento("div", "cert-card");

  const imagen = crearElemento("img", "cert-logo");
  imagen.setAttribute("src", logotipo);
  imagen.setAttribute("alt", emisor);
  imagen.setAttribute("loading", "lazy");
  imagen.setAttribute("data-error", "hide");
  if (respaldo) imagen.setAttribute("data-fallback", respaldo);

  const informacion = crearElemento("div", "cert-info");
  informacion.appendChild(crearElemento("div", "cert-name", nombre));
  informacion.appendChild(crearElemento("div", "cert-issuer", emisor));

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(informacion);
  return tarjeta;
}

function renderizarContacto({ icono, etiqueta, valor, enlace, claseIcono }) {
  const fila = crearElemento("div", "contact-link");

  const contenedorIcono = crearElemento("div", "contact-icon");
  contenedorIcono.classList.add(claseIcono);
  contenedorIcono.appendChild(crearIcono(icono));

  const informacion = crearElemento("div");
  informacion.appendChild(crearElemento("div", "contact-label", etiqueta));

  if (enlace) {
    const nodoEnlace = crearElemento("a", null, valor);
    nodoEnlace.setAttribute("href", enlace);
    nodoEnlace.setAttribute("target", "_blank");
    nodoEnlace.setAttribute("rel", "noopener noreferrer");
    informacion.appendChild(nodoEnlace);
  } else {
    informacion.appendChild(crearElemento("div", "contact-value", valor));
  }

  fila.appendChild(contenedorIcono);
  fila.appendChild(informacion);
  return fila;
}

/* ── Render de cada tarjeta ──────────────────────────────────────────────── */

function renderizarSobreMi() {
  const { sobreMi } = DATOS;

  const seccionFoto = crearSeccion();
  const marco = crearElemento("div", "profile-photo");
  const foto = crearElemento("img");
  foto.setAttribute("src", sobreMi.foto.ruta);
  foto.setAttribute("alt", sobreMi.foto.textoAlternativo);
  foto.setAttribute("width", sobreMi.foto.ancho);
  foto.setAttribute("height", sobreMi.foto.alto);
  foto.setAttribute("data-error", "fade");
  marco.appendChild(foto);
  seccionFoto.appendChild(marco);

  const seccionEstadisticas = crearSeccion();
  const filaEstadisticas = crearElemento("div", "stats-row");
  for (const estadistica of sobreMi.estadisticas) {
    const caja = crearElemento("div", "stat-box");
    caja.appendChild(crearElemento("div", "stat-val", estadistica.valor));
    caja.appendChild(crearElemento("div", "stat-lbl", estadistica.etiqueta));
    filaEstadisticas.appendChild(caja);
  }
  seccionEstadisticas.appendChild(filaEstadisticas);

  const nodos = [seccionFoto, seccionEstadisticas];

  for (const bloque of sobreMi.bloques) {
    const seccionBloque = crearSeccion(bloque.titulo);
    seccionBloque.appendChild(crearElemento("p", "d-text", bloque.texto));
    nodos.push(seccionBloque);
  }

  const seccionIntereses = crearSeccion(sobreMi.tituloIntereses);
  seccionIntereses.appendChild(crearListaFichas(sobreMi.intereses));
  nodos.push(seccionIntereses);

  nodos.push(crearCita(sobreMi.cita));
  return nodos;
}

function renderizarHabilidades() {
  const { habilidades } = DATOS;
  const nodos = habilidades.gruposTecnologias.map(renderizarGrupoTecnologias);

  const seccionIA = crearSeccion(habilidades.tituloIA);
  const cuadriculaIA = crearElemento("div", "ai-grid");
  for (const herramienta of habilidades.herramientasIA) {
    cuadriculaIA.appendChild(renderizarHerramientaIA(herramienta));
  }
  seccionIA.appendChild(cuadriculaIA);
  nodos.push(seccionIA);

  return nodos;
}

function renderizarExperiencia() {
  return DATOS.experiencia.map((experiencia) => {
    const seccion = crearSeccion(experiencia.encabezado);
    seccion.appendChild(renderizarElementoExperiencia(experiencia));
    return seccion;
  });
}

function renderizarProyectos() {
  const seccion = crearSeccion(DATOS.tituloProyectos);
  for (const proyecto of DATOS.proyectos) {
    seccion.appendChild(renderizarProyecto(proyecto));
  }
  return [seccion];
}

function renderizarFormacion() {
  const seccionEducacion = crearSeccion(DATOS.tituloEducacion);
  const lineaTiempo = crearElemento("div", "timeline");
  for (const entrada of DATOS.educacion) {
    lineaTiempo.appendChild(renderizarElementoFormacion(entrada));
  }
  seccionEducacion.appendChild(lineaTiempo);

  const seccionCertificaciones = crearSeccion(DATOS.tituloCertificaciones);
  const cuadriculaCertificaciones = crearElemento("div", "cert-grid");
  for (const certificacion of DATOS.certificaciones) {
    cuadriculaCertificaciones.appendChild(
      renderizarCertificacion(certificacion),
    );
  }
  seccionCertificaciones.appendChild(cuadriculaCertificaciones);

  const seccionAutodidacta = crearSeccion(DATOS.tituloAutodidacta);
  seccionAutodidacta.appendChild(
    crearListaFichas(DATOS.autodidacta, "chip-dot--purple"),
  );

  return [seccionEducacion, seccionCertificaciones, seccionAutodidacta];
}

function renderizarInfoContacto() {
  const seccion = crearSeccion(DATOS.tituloContacto);
  for (const contacto of DATOS.contactos) {
    seccion.appendChild(renderizarContacto(contacto));
  }
  return [seccion, crearCita(DATOS.citaContacto)];
}

const RENDERIZADORES_POR_TARJETA = {
  sobre: renderizarSobreMi,
  skills: renderizarHabilidades,
  exp: renderizarExperiencia,
  proyectos: renderizarProyectos,
  formacion: renderizarFormacion,
  contacto: renderizarInfoContacto,
};

/* ── Referencias del DOM ─────────────────────────────────────────────────── */

const referencias = {
  arranque: document.getElementById("screen-boot"),
  principal: document.getElementById("screen-main"),
  navegacion: document.getElementById("cat-nav"),
  tarjetas: document.getElementById("card-row"),
  nombreSeleccionado: document.getElementById("sel-name-text"),
  pantallaDetalle: document.getElementById("screen-detail"),
  panelDetalle: document.getElementById("detail-panel"),
  iconoDetalle: document.getElementById("detail-icon"),
  tituloDetalle: document.getElementById("detail-title"),
  cuerpoDetalle: document.getElementById("detail-body"),
  fondoDetalle: document.getElementById("detail-backdrop"),
};

/* ── Estado de la interfaz ───────────────────────────────────────────────── */

let indiceActivo = 0;
let detalleAbierto = false;
let ultimoEnfocado = null;

/* ── Construcción de la interfaz ─────────────────────────────────────────── */

function construirNavegacion() {
  const botones = DATOS.tarjetas.map((tarjeta, indice) => {
    const boton = crearElemento("button", "cat-item");
    boton.setAttribute("type", "button");
    boton.style.setProperty("--accent", tarjeta.acento);
    boton.setAttribute("data-card", tarjeta.id);
    boton.setAttribute("aria-pressed", String(indice === indiceActivo));

    boton.appendChild(crearIcono(tarjeta.icono, "cat-svg"));
    boton.appendChild(crearElemento("span", "cat-label", tarjeta.etiqueta));
    boton.addEventListener("click", () => activarTarjeta(indice));

    return boton;
  });

  referencias.navegacion.replaceChildren(...botones);
}

function construirTarjetas() {
  const tarjetas = DATOS.tarjetas.map((tarjeta, indice) => {
    const elemento = crearElemento("div", "mem-card");
    elemento.style.setProperty("--accent", tarjeta.acento);
    elemento.setAttribute("role", "listitem");
    elemento.setAttribute("aria-label", tarjeta.etiqueta);
    elemento.setAttribute("tabindex", "0");
    elemento.setAttribute("data-card", tarjeta.id);

    const muesca = crearElemento("div", "card-notch");
    muesca.setAttribute("aria-hidden", "true");
    elemento.appendChild(muesca);

    const contenedorIcono = crearElemento("div", "card-icon-wrap");
    contenedorIcono.appendChild(crearIcono(tarjeta.icono, "card-icon-svg"));
    elemento.appendChild(contenedorIcono);

    elemento.appendChild(crearElemento("div", "card-label", tarjeta.etiqueta));

    const barra = crearElemento("div", "card-bar");
    barra.setAttribute("aria-hidden", "true");
    elemento.appendChild(barra);

    const puntos = crearElemento("div", "card-dots");
    puntos.setAttribute("aria-hidden", "true");
    for (let posicion = 0; posicion < 3; posicion += 1) {
      // Crear puntos
      puntos.appendChild(crearElemento("span", "card-dot"));
    }
    elemento.appendChild(puntos);

    elemento.addEventListener("click", () => activarTarjeta(indice));
    elemento.addEventListener("keydown", (evento) => {
      if (evento.key !== "Enter" && evento.key !== " ") return;
      evento.preventDefault();
      activarTarjeta(indice);
    });

    return elemento;
  });

  referencias.tarjetas.replaceChildren(...tarjetas);
  actualizarEstadosActivos();
}

function actualizarEstadosActivos() {
  Array.from(referencias.navegacion.children).forEach((boton, indice) => {
    const esActivo = indice === indiceActivo;
    boton.classList.toggle("active", esActivo);
    boton.setAttribute("aria-pressed", String(esActivo));
  });

  Array.from(referencias.tarjetas.children).forEach((tarjeta, indice) => {
    tarjeta.classList.toggle("active", indice === indiceActivo);
  });

  referencias.navegacion.children[indiceActivo]?.scrollIntoView({
    block: "nearest",
    inline: "nearest",
    behavior: reducirMovimiento ? "auto" : "smooth",
  });

  referencias.nombreSeleccionado.textContent =
    DATOS.tarjetas[indiceActivo].etiqueta;
}

/* ── Navegación ──────────────────────────────────────────────────────────── */

function activarTarjeta(indice) {
  if (indice === indiceActivo) abrirDetalle(indice);
  else seleccionarTarjeta(indice);
}

function seleccionarTarjeta(indice) {
  indiceActivo = (indice + DATOS.tarjetas.length) % DATOS.tarjetas.length;
  sonidos.navegar();
  actualizarEstadosActivos();
}

function abrirDetalle(indice = indiceActivo) {
  if (detalleAbierto) return;

  const tarjeta = DATOS.tarjetas[indice];
  if (!tarjeta) return;

  sonidos.abrir();
  detalleAbierto = true;
  ultimoEnfocado = document.activeElement;
  referencias.principal.inert = true;

  const renderizador = RENDERIZADORES_POR_TARJETA[tarjeta.id];
  const contenido = renderizador ? renderizador() : [];

  referencias.panelDetalle.style.setProperty("--accent", tarjeta.acento);
  referencias.iconoDetalle.replaceChildren(crearIcono(tarjeta.icono));
  referencias.tituloDetalle.textContent = tarjeta.etiqueta;
  referencias.cuerpoDetalle.replaceChildren(...contenido);

  configurarImagenes(referencias.cuerpoDetalle);

  referencias.pantallaDetalle.classList.add("active");
  referencias.pantallaDetalle.removeAttribute("aria-hidden");
  referencias.cuerpoDetalle.scrollTop = 0;
  referencias.cuerpoDetalle.focus();
}

function cerrarDetalle() {
  if (!detalleAbierto) return;

  sonidos.cerrar();
  detalleAbierto = false;

  referencias.pantallaDetalle.classList.remove("active");
  referencias.pantallaDetalle.setAttribute("aria-hidden", "true");
  referencias.principal.inert = false;

  const puedeRestaurarEnfoque =
    ultimoEnfocado instanceof HTMLElement && ultimoEnfocado !== document.body;
  const objetivoEnfoque = puedeRestaurarEnfoque
    ? ultimoEnfocado
    : referencias.tarjetas.children[indiceActivo];

  if (objetivoEnfoque instanceof HTMLElement) objetivoEnfoque.focus();
}

/* ── Imágenes con respaldo / ocultamiento ────────────────────────────────── */

function configurarImagenes(raiz) {
  raiz.querySelectorAll("img[data-error]").forEach((imagen) => {
    const manejarError = () => {
      const respaldo = imagen.dataset.fallback;

      if (respaldo) {
        delete imagen.dataset.fallback;
        imagen.src = respaldo;
        return;
      }

      if (imagen.dataset.error === "hide") imagen.hidden = true;
      else imagen.classList.add("is-missing");
    };

    imagen.addEventListener("error", manejarError);
    if (imagen.complete && imagen.naturalWidth === 0) manejarError();
  });
}

/* ── Eventos globales ────────────────────────────────────────────────────── */

referencias.fondoDetalle.addEventListener("click", cerrarDetalle);

function esObjetivoInteractivo(objetivo) {
  return (
    objetivo instanceof Element &&
    objetivo.closest("button, a, [tabindex], input, select, textarea") !== null
  );
}

document.addEventListener("keydown", (evento) => {
  if (detalleAbierto) {
    if (evento.key === "Escape" || evento.key === "Backspace") {
      evento.preventDefault();
      cerrarDetalle();
    }
    return;
  }

  if (evento.key === "ArrowLeft" || evento.key === "ArrowRight") {
    evento.preventDefault();
    seleccionarTarjeta(indiceActivo + (evento.key === "ArrowRight" ? 1 : -1));
    return;
  }

  const esTeclaActivacion = evento.key === "Enter" || evento.key === " ";
  if (esTeclaActivacion && !esObjetivoInteractivo(evento.target)) {
    evento.preventDefault();
    abrirDetalle(indiceActivo);
  }
});

/* ── Arranque ────────────────────────────────────────────────────────────── */

const reducirMovimiento = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const retrasoArranque = reducirMovimiento ? 300 : 3800;
const duracionDesvanecido = reducirMovimiento ? 0 : 750;

function iniciarAplicacion() {
  referencias.arranque.style.opacity = "0";

  setTimeout(() => {
    referencias.arranque.classList.remove("active");
    referencias.arranque.setAttribute("aria-hidden", "true");
    referencias.principal.classList.add("active");

    iniciarCampoEstelar();
    iniciarOndas();
    iniciarReloj();
    construirNavegacion();
    construirTarjetas();
  }, duracionDesvanecido);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    sonidos.arranque();
    iniciarAplicacion();
  }, retrasoArranque);
});
