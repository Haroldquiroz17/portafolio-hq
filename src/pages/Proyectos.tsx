
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  Monitor,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Tag,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Proyectos.css";

type Categoria =
  | "E-commerce"
  | "Sistemas de gestión"
  | "Diseño UI/UX"
  | "Aplicaciones móviles";

interface Proyecto {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  categoria: Categoria;
  imagen: string;
  tecnologias: string[];
  destacado?: boolean;
  tipo: "Principal" | "Sistema" | "Diseño" | "Aplicación";
  detalle: string;
}

const proyectos: Proyecto[] = [
  {
    id: "charcuteria-co",
    nombre: "Charcuteria Co",
    subtitulo: "Experiencia gourmet",
    descripcion:
      "Propuesta web para una marca de charcuteria, enfocada en presentar sus productos, transmitir su identidad y facilitar el contacto con sus clientes.",
    categoria: "E-commerce",
    imagen: "/images/proyectos/charcuteria-co.png",
    tecnologias: ["React", "TypeScript", "Bootstrap"],
    destacado: true,
    tipo: "Principal",
    detalle: "Detalle de Charcutería Co",
  },
  {
    id: "luxol",
    nombre: "Luxold",
    subtitulo: "Moda y catálogo digital",
    descripcion:
      "Tienda virtual de ropa con catálogo de prendas, colecciones, ofertas y una experiencia de navegación orientada al usuario.",
    categoria: "E-commerce",
    imagen: "/images/proyectos/deluxeol.png",
    tecnologias: ["React", "TypeScript", "Bootstrap"],
    destacado: true,
    tipo: "Principal",
    detalle: "Detalle de Luxol",
  },
  {
    id: "f-electro",
    nombre: "FC Electro",
    subtitulo: "Tecnología al alcance",
    descripcion:
      "Propuesta de comercio electrónico para productos tecnológicos, con categorías, catálogo y una estructura pensada para organizar los productos.",
    categoria: "E-commerce",
    imagen: "/images/proyectos/fselect.png",
    tecnologias: ["React", "TypeScript", "Bootstrap", "MongoDB"],
    destacado: true,
    tipo: "Principal",
    detalle: "Detalle de F Electro",
  },
  {
    id: "veterinaria",
    nombre: "Sistema veterinario PetCare",
    subtitulo: "Gestión de atención veterinaria",
    descripcion:
      "Sistema orientado a organizar información de mascotas, citas y registros de atención dentro de una solución para una veterinaria.",
    categoria: "Sistemas de gestión",
    imagen: "/images/proyectos/veterinaria.png",
    tecnologias: ["Angular", "TypeScript", "Bootstrap"],
    tipo: "Sistema",
    detalle: "Detalle del sistema veterinario",
  },
  {
    id: "supermercado",
    nombre: "Sistema de supermercado",
    subtitulo: "Organización y control",
    descripcion:
      "Sistema administrativo en desarrollo para gestionar clientes, productos, precios, descuentos e inventario.",
    categoria: "Sistemas de gestión",
    imagen: "/images/proyectos/supermercado.png",
    tecnologias: ["Vite", "React", "TypeScript", "JavaScript"],
    tipo: "Sistema",
    detalle: "Detalle del sistema de supermercado",
  },
  {
    id: "montalban",
    nombre: "Panaderia Montalban",
    subtitulo: "Diseño de experiencia digital",
    descripcion:
      "Propuesta de diseño UI/UX para una panadería, con identidad visual, organización de contenido y una experiencia de navegación planificada en Figma.",
    categoria: "Diseño UI/UX",
    imagen: "/images/proyectos/montalban.png",
    tecnologias: ["Figma", "UI/UX"],
    tipo: "Diseño",
    detalle: "Detalle de Panadería Montalbán",
  },
  {
    id: "san-luis-gonzaga",
    nombre: "App San Luis Gonzaga",
    subtitulo: "Aplicación educativa",
    descripcion:
      "Aplicación móvil planteada para una institución educativa, con una propuesta centrada en facilitar el acceso a información y servicios escolares.",
    categoria: "Aplicaciones móviles",
    imagen: "/images/proyectos/san-luis-gonzaga.png",
    tecnologias: ["Expo","TypeScript", "Bootstrap"],
    tipo: "Aplicación",
    detalle: "Detalle de San Luis Gonzaga",
  },
  {
    id: "zoomundo",
    nombre: "App ZooMundo",
    subtitulo: "Aplicación movil",
    descripcion:
      "Proyecto móvil con una propuesta propia de funcionalidades e interfaz. Su página de detalle presentará el funcionamiento y los aspectos técnicos que se puedan mostrar.",
    categoria: "Aplicaciones móviles",
    imagen: "/images/proyectos/zoomundo.jpg",
    tecnologias: ["Expo", "React Native"],
    tipo: "Aplicación",
    detalle: "Detalle de ZooMundo",
  },
];

const categorias = [
  "Todos",
  "E-commerce",
  "Sistemas de gestión",
  "Diseño UI/UX",
  "Aplicaciones móviles",
] as const;

type FiltroCategoria = (typeof categorias)[number];

const iconosCategoria = {
  "E-commerce": Monitor,
  "Sistemas de gestión": Layers3,
  "Diseño UI/UX": Palette,
  "Aplicaciones móviles": Smartphone,
};

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] =
    useState<FiltroCategoria>("Todos");

  const [busqueda, setBusqueda] = useState("");

  const proyectosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();

    return proyectos.filter((proyecto) => {
      const coincideCategoria =
        categoriaActiva === "Todos" ||
        proyecto.categoria === categoriaActiva;

      const coincideBusqueda =
        termino.length === 0 ||
        proyecto.nombre.toLowerCase().includes(termino) ||
        proyecto.descripcion.toLowerCase().includes(termino) ||
        proyecto.tecnologias.some((tecnologia) =>
          tecnologia.toLowerCase().includes(termino),
        );

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaActiva, busqueda]);

  const proyectosDestacados = proyectos.filter(
    (proyecto) => proyecto.destacado,
  );

  const cantidadProyectos = proyectos.length;
  const cantidadCategorias = categorias.length - 1;

  return (
    <main className="proyectos">
      {/* =====================================
          PRESENTACIÓN PRINCIPAL
      ====================================== */}

      <section className="proyectos-hero">
        <div className="proyectos-hero-luz proyectos-hero-luz-uno" />
        <div className="proyectos-hero-luz proyectos-hero-luz-dos" />

        <div className="proyectos-contenedor proyectos-hero-contenido">
          <div className="proyectos-etiqueta">
            <Sparkles size={16} />
            <span>PORTAFOLIO DE PROYECTOS</span>
          </div>

          <h1>
            Ideas que toman forma
            <br />
            a través de la <span>tecnología.</span>
          </h1>

          <p className="proyectos-hero-descripcion">
            Explora proyectos de desarrollo web, sistemas de gestión,
            aplicaciones móviles y diseño de interfaces. Cada uno representa
            una oportunidad para aprender, experimentar y construir soluciones
            digitales.
          </p>

          <div className="proyectos-hero-acciones">
            <a href="#proyectos-destacados" className="proyectos-boton-principal">
              Explorar proyectos
              <ArrowRight size={18} />
            </a>

            <Link to="/contacto" className="proyectos-boton-secundario">
              Hablemos de una idea
              <ArrowDownRight size={18} />
            </Link>
          </div>

          <div className="proyectos-hero-estadisticas">
            <div className="proyectos-estadistica">
              <span className="proyectos-estadistica-numero">
                {String(cantidadProyectos).padStart(2, "0")}
              </span>
              <span className="proyectos-estadistica-texto">
                Proyectos en catálogo
              </span>
            </div>

            <div className="proyectos-estadistica-separador" />

            <div className="proyectos-estadistica">
              <span className="proyectos-estadistica-numero">
                {String(cantidadCategorias).padStart(2, "0")}
              </span>
              <span className="proyectos-estadistica-texto">
                Categorías
              </span>
            </div>

            <div className="proyectos-estadistica-separador" />

            <div className="proyectos-estadistica">
              <span className="proyectos-estadistica-icono">
                <Code2 size={22} />
              </span>
              <span className="proyectos-estadistica-texto">
                Aprendizaje continuo
              </span>
            </div>
          </div>
        </div>

        <a
          href="#proyectos-destacados"
          className="proyectos-indicador-scroll"
          aria-label="Desplazarse a los proyectos"
        >
          <span>DESCUBRIR</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* =====================================
          PROYECTOS DESTACADOS
      ====================================== */}

      <section
        className="proyectos-seccion proyectos-destacados"
        id="proyectos-destacados"
      >
        <div className="proyectos-contenedor">
          <div className="proyectos-encabezado">
            <div>
              <div className="proyectos-subtitulo">
                <Star size={15} />
                <span>PROYECTOS ESTRELLA</span>
              </div>

              <h2>
                Mis proyectos <span>destacados.</span>
              </h2>
            </div>

            <p>
              Tres propuestas principales que reúnen mi interés por el
              desarrollo web y las experiencias digitales.
            </p>
          </div>

          <div className="proyectos-destacados-grid">
            {proyectosDestacados.map((proyecto, indice) => (
              <article
                className={`proyecto-card proyecto-card-destacado proyecto-card-destacado-${indice + 1}`}
                key={proyecto.id}
              >
                <Link
                  to={`/proyectos/${proyecto.id}`}
                  className="proyecto-imagen-enlace"
                  aria-label={`Ver detalle de ${proyecto.nombre}`}
                >
                  <div className="proyecto-imagen-contenedor">
                    <img
                      src={proyecto.imagen}
                      alt={`Portada de ${proyecto.nombre}`}
                      className="proyecto-imagen"
                      loading={indice === 0 ? "eager" : "lazy"}
                    />

                    <div className="proyecto-imagen-overlay" />

                    <span className="proyecto-numero">
                      0{indice + 1}
                    </span>

                    <span className="proyecto-etiqueta-destacado">
                      <Star size={13} />
                      Destacado
                    </span>

                    <span className="proyecto-imagen-flecha">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </Link>

                <div className="proyecto-card-contenido">
                  <div className="proyecto-card-categoria">
                    {proyecto.categoria}
                  </div>

                  <h3>{proyecto.nombre}</h3>

                  <p className="proyecto-card-subtitulo">
                    {proyecto.subtitulo}
                  </p>

                  <p className="proyecto-card-descripcion">
                    {proyecto.descripcion}
                  </p>

                  <div className="proyecto-tecnologias">
                    {proyecto.tecnologias.map((tecnologia) => (
                      <span className="proyecto-tecnologia" key={tecnologia}>
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/proyectos/${proyecto.id}`}
                    className="proyecto-boton-detalle"
                  >
                    Ver detalle
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          CATÁLOGO GENERAL
      ====================================== */}

      <section className="proyectos-seccion proyectos-catalogo" id="catalogo">
        <div className="proyectos-contenedor">
          <div className="proyectos-encabezado proyectos-encabezado-catalogo">
            <div>
              <div className="proyectos-subtitulo">
                <Layers3 size={15} />
                <span>EXPLORA EL CATÁLOGO</span>
              </div>

              <h2>
                Más ideas, <span>más soluciones.</span>
              </h2>
            </div>

            <p>
              Explora las diferentes áreas y encuentra el proyecto que más
              te interese.
            </p>
          </div>

          {/* Filtros por categoría */}

          <div className="proyectos-controles">
            <div
              className="proyectos-filtros"
              role="group"
              aria-label="Filtrar proyectos por categoría"
            >
              {categorias.map((categoria) => (
                <button
                  type="button"
                  key={categoria}
                  className={`proyectos-filtro ${
                    categoriaActiva === categoria
                      ? "proyectos-filtro-activo"
                      : ""
                  }`}
                  onClick={() => setCategoriaActiva(categoria)}
                  aria-pressed={categoriaActiva === categoria}
                >
                  {categoria !== "Todos" &&
                    (() => {
                      const Icono =
                        iconosCategoria[
                          categoria as keyof typeof iconosCategoria
                        ];

                      return <Icono size={15} />;
                    })()}

                  {categoria}
                </button>
              ))}
            </div>

            <label className="proyectos-buscador">
              <Search size={18} />

              <input
                type="search"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
                placeholder="Buscar proyecto..."
                aria-label="Buscar proyecto"
              />

              {busqueda && (
                <button
                  type="button"
                  className="proyectos-buscador-limpiar"
                  onClick={() => setBusqueda("")}
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </label>
          </div>

          <div className="proyectos-resultados">
            <span>
              {proyectosFiltrados.length === 1
                ? "1 proyecto encontrado"
                : `${proyectosFiltrados.length} proyectos encontrados`}
            </span>
          </div>

          {/* Tarjetas de proyectos */}

          {proyectosFiltrados.length > 0 ? (
            <div className="proyectos-galeria">
              {proyectosFiltrados.map((proyecto, indice) => {
                const IconoCategoria =
                  iconosCategoria[proyecto.categoria];

                return (
                  <article
                    className="proyecto-card proyecto-card-catalogo"
                    key={proyecto.id}
                    style={{ animationDelay: `${indice * 60}ms` }}
                  >
                    <Link
                      to={`/proyectos/${proyecto.id}`}
                      className="proyecto-imagen-enlace"
                      aria-label={`Ver detalle de ${proyecto.nombre}`}
                    >
                      <div className="proyecto-imagen-contenedor">
                        <img
                          src={proyecto.imagen}
                          alt={`Portada de ${proyecto.nombre}`}
                          className={`proyecto-imagen ${
                            proyecto.id === "zoomundo"
                              ? "proyecto-imagen-vertical"
                              : ""
                          }`}
                          loading="lazy"
                        />

                        <div className="proyecto-imagen-overlay" />

                        <span className="proyecto-categoria-imagen">
                          <IconoCategoria size={14} />
                          {proyecto.categoria}
                        </span>

                        <span className="proyecto-imagen-flecha">
                          <ArrowUpRightIcon />
                        </span>
                      </div>
                    </Link>

                    <div className="proyecto-card-contenido">
                      <div className="proyecto-card-tipo">
                        <span className="proyecto-punto-tipo" />
                        {proyecto.tipo}
                      </div>

                      <h3>{proyecto.nombre}</h3>

                      <p className="proyecto-card-subtitulo">
                        {proyecto.subtitulo}
                      </p>

                      <p className="proyecto-card-descripcion">
                        {proyecto.descripcion}
                      </p>

                      <div className="proyecto-tecnologias">
                        {proyecto.tecnologias.map((tecnologia) => (
                          <span
                            className="proyecto-tecnologia"
                            key={tecnologia}
                          >
                            {tecnologia}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/proyectos/${proyecto.id}`}
                        className="proyecto-boton-detalle"
                      >
                        Ver detalle
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="proyectos-sin-resultados">
              <div className="proyectos-sin-resultados-icono">
                <Search size={27} />
              </div>

              <h3>No encontramos proyectos</h3>

              <p>
                Prueba con otro nombre o selecciona una categoría diferente.
              </p>

              <button
                type="button"
                className="proyectos-boton-principal"
                onClick={() => {
                  setBusqueda("");
                  setCategoriaActiva("Todos");
                }}
              >
                Ver todos los proyectos
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          ENFOQUE DE DESARROLLO
      ====================================== */}

      <section className="proyectos-seccion proyectos-enfoque">
        <div className="proyectos-contenedor">
          <div className="proyectos-encabezado proyectos-encabezado-centro">
            <div className="proyectos-subtitulo">
              <Code2 size={15} />
              <span>MI ENFOQUE</span>
            </div>

            <h2>
              De una idea a una <span>solución digital.</span>
            </h2>

            <p>
              Cada proyecto es una oportunidad para comprender necesidades,
              explorar alternativas y aplicar lo aprendido.
            </p>
          </div>

          <div className="proyectos-proceso">
            <article className="proyectos-proceso-paso">
              <div className="proyectos-proceso-numero">01</div>
              <div className="proyectos-proceso-icono">
                <Search size={23} />
              </div>
              <h3>Comprender</h3>
              <p>
                Identificar el propósito del proyecto, sus necesidades y el
                problema que busca resolver.
              </p>
            </article>

            <article className="proyectos-proceso-paso">
              <div className="proyectos-proceso-numero">02</div>
              <div className="proyectos-proceso-icono">
                <Palette size={23} />
              </div>
              <h3>Diseñar</h3>
              <p>
                Organizar la experiencia, la interfaz y la estructura de la
                solución según su objetivo.
              </p>
            </article>

            <article className="proyectos-proceso-paso">
              <div className="proyectos-proceso-numero">03</div>
              <div className="proyectos-proceso-icono">
                <Code2 size={23} />
              </div>
              <h3>Desarrollar</h3>
              <p>
                Implementar componentes y funcionalidades con las tecnologías
                adecuadas para cada proyecto.
              </p>
            </article>

            <article className="proyectos-proceso-paso">
              <div className="proyectos-proceso-numero">04</div>
              <div className="proyectos-proceso-icono">
                <CheckCircle2 size={23} />
              </div>
              <h3>Mejorar</h3>
              <p>
                Revisar el resultado, corregir errores y seguir aprendiendo a
                partir de cada experiencia.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================
          TRANSPARENCIA Y CRÉDITOS
      ====================================== */}

      <section className="proyectos-seccion proyectos-transparencia">
        <div className="proyectos-contenedor">
          <div className="proyectos-transparencia-card">
            <div className="proyectos-transparencia-icono">
              <BriefcaseBusiness size={27} />
            </div>

            <div className="proyectos-transparencia-contenido">
              <div className="proyectos-subtitulo">
                <Tag size={15} />
                <span>TRANSPARENCIA Y CRÉDITOS</span>
              </div>

              <h2>
                Cada proyecto tiene su <span>propio contexto.</span>
              </h2>

              <p>
                Este catálogo reúne proyectos personales, académicos y
                propuestas relacionadas con contextos reales. Algunos son
                ejercicios de aprendizaje y experimentación; otros están
                vinculados con empresas o instituciones existentes.
              </p>

              <p>
                En cada detalle se explicará el propósito y el alcance del
                proyecto. Cuando se utilicen marcas, información, imágenes u
                otros recursos de terceros, se procurará reconocer las fuentes
                y otorgar los créditos correspondientes.
              </p>

              <p className="proyectos-transparencia-nota">
                Los proyectos se presentan según su alcance real. No todos
                representan productos comerciales publicados ni sistemas
                desplegados en producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          INVITACIÓN A COLABORAR
      ====================================== */}

      <section className="proyectos-seccion proyectos-contacto">
        <div className="proyectos-contenedor">
          <div className="proyectos-contacto-card">
            <div className="proyectos-contacto-decoracion">
              <Sparkles size={130} />
            </div>

            <div className="proyectos-contacto-contenido">
              <div className="proyectos-etiqueta">
                <BriefcaseBusiness size={16} />
                <span>¿TRABAJAMOS JUNTOS?</span>
              </div>

              <h2>
                Tu próxima idea puede convertirse en un{" "}
                <span>proyecto real.</span>
              </h2>

              <p>
                ¿Tienes un emprendimiento, negocio o institución y necesitas
                una solución digital? Podemos conversar sobre tu idea y
                explorar una propuesta que se adapte a tus necesidades.
              </p>

              <div className="proyectos-contacto-servicios">
                <span>
                  <CheckCircle2 size={16} />
                  Páginas web y tiendas virtuales
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Sistemas y herramientas de gestión
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Prototipos y diseño de interfaces
                </span>
              </div>

              <div className="proyectos-contacto-acciones">
                <Link
                  to="/contacto"
                  className="proyectos-boton-principal"
                >
                  Hablemos de tu proyecto
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/sobre-mi"
                  className="proyectos-boton-secundario"
                >
                  Conoce más sobre mí
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CIERRE
      ====================================== */}

      <footer className="proyectos-cierre">
        <div className="proyectos-contenedor proyectos-cierre-contenido">
          <div className="proyectos-cierre-marca">
            <Code2 size={20} />
            <span>Harold Quiroz</span>
          </div>

          <p>
            Construyendo, aprendiendo y convirtiendo ideas en experiencias
            digitales.
          </p>

          <a href="#top" onClick={(evento) => {
            evento.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            Volver arriba
            <ArrowDownRight size={16} />
          </a>
        </div>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight size={20} className="proyecto-flecha-diagonal" />;
}
