
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Laptop,
  Mail,
  Monitor,
  Palette,
  Sparkles,
  Wrench,
} from "lucide-react";

import "./Inicio.css";

const proyectosDestacados = [
  {
    nombre: "Charcuteria Co",
    categoria: "Desarrollo web",
    descripcion:
      "Experiencia web para una marca de charcutería gourmet, con catálogo visual y una presentación elegante de sus productos.",
    imagen: "/images/proyectos/charcuteria-co.png",
    etiqueta: "Web",
    ruta: "/proyectos/charcuteria-co",
  },
  {
    nombre: "Luxold",
    categoria: "E-commerce de moda",
    descripcion:
      "Catálogo de prendas con una presentación moderna, productos organizados y una experiencia de navegación intuitiva.",
    imagen: "/images/proyectos/deluxeol.png",
    etiqueta: "E-commerce",
    ruta: "/proyectos/luxol",
  },
  {
    nombre: "FC Electro",
    categoria: "Proyecto web",
    descripcion:
      "Proyecto de desarrollo web enfocado en una interfaz ordenada, atractiva y fácil de utilizar.",
    imagen: "/images/proyectos/fselect.png",
    etiqueta: "Web",
    ruta: "/proyectos/f-electro",
  },
];

const gruposTecnologias = [
  {
    titulo: "Front-end",
    descripcion: "Interfaces y experiencias web",
    icono: Monitor,
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Bootstrap",
    ],
  },
  {
    titulo: "Back-end y datos",
    descripcion: "Lógica, servicios y almacenamiento",
    icono: Database,
    tecnologias: [
      "Node.js",
      "Python",
      "Java básico",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    titulo: "Herramientas de desarrollo",
    descripcion: "Construcción, pruebas y colaboración",
    icono: Wrench,
    tecnologias: [
      "Visual Studio Code",
      "GitHub",
      "Postman",
      "Docker",
      "Figma",
      "Android Studio",
    ],
  },
  {
    titulo: "Productividad y diseño",
    descripcion: "Contenido, análisis y optimización",
    icono: Palette,
    tecnologias: [
      "Microsoft Office",
      "Excel",
      "Power BI",
      "Photoshop",
      "CorelDRAW",
      "Herramientas de IA",
    ],
  },
];

const otrosProyectos = [
  {
    nombre: "ZooMundo",
    tipo: "Aplicación móvil",
    descripcion:
      "Aplicación móvil desarrollada con React Native y Expo.",
  },
  {
    nombre: "Panadería Montalbán",
    tipo: "Diseño UI/UX",
    descripcion:
      "Prototipo de interfaz y experiencia de usuario desarrollado en Figma.",
  },
  {
    nombre: "Sistema veterinario PetCare",
    tipo: "Sistema de gestión",
    descripcion:
      "Proyecto orientado a la gestión de mascotas, citas e historiales.",
  },
];

function Inicio() {
  const [proyectoActual, setProyectoActual] = useState(0);

  const proyecto = proyectosDestacados[proyectoActual];

  const anteriorProyecto = () => {
    setProyectoActual((actual) =>
      actual === 0
        ? proyectosDestacados.length - 1
        : actual - 1,
    );
  };

  const siguienteProyecto = () => {
    setProyectoActual((actual) =>
      actual === proyectosDestacados.length - 1
        ? 0
        : actual + 1,
    );
  };

  return (
    <div className="inicio-page">
      {/* PRESENTACIÓN PRINCIPAL */}
      <section className="inicio-hero" id="presentacion">
        <div className="inicio-hero-fondo" aria-hidden="true">
          <span className="hero-orb hero-orb-uno" />
          <span className="hero-orb hero-orb-dos" />
          <span className="hero-grid" />
        </div>

        <div className="inicio-contenedor hero-contenido">
          <div className="hero-texto">
            <span className="hero-etiqueta">
              <span className="estado-punto" />
              PORTAFOLIO PROFESIONAL
            </span>

            <div className="hero-perfil">
              <img
                src="/images/perfil.jpg"
                alt="Fotografía de Harold Quiroz"
                className="hero-foto-perfil"
              />
            </div>

            <p className="hero-saludo">Hola, soy</p>

            <h1>
              Harold Quiroz
              <span className="texto-acento">.</span>
            </h1>

            <h2>
              Desarrollador <span>Frontend &amp; Backend</span>
            </h2>

            <p className="hero-descripcion">
              Egresado de Desarrollo de Sistemas Frontend y Backend,
              enfocado en la creación de interfaces web modernas,
              funcionales y adaptables. Me gusta transformar ideas
              en soluciones digitales, aprender nuevas tecnologías
              y optimizar procesos con herramientas de desarrollo
              e inteligencia artificial.
            </p>

            <div className="hero-acciones">
              <Link
                to="/proyectos"
                className="inicio-boton inicio-boton-principal"
              >
                Ver mis proyectos
                <ArrowUpRight size={19} />
              </Link>

              <Link
                to="/contacto"
                className="inicio-boton inicio-boton-secundario"
              >
                <Mail size={18} />
                Contactarme
              </Link>
            </div>

            <a className="hero-bajar" href="#tecnologias">
              Explorar portafolio
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-marco">
              <div className="hero-marco-superior">
                <span />
                <span />
                <span />
                <p>harold-portfolio.tsx</p>
              </div>

              <div className="hero-codigo">
                <p>
                  <span className="codigo-violeta">const</span>{" "}
                  developer = {"{"}
                </p>

                <p className="codigo-indentado">
                  <span className="codigo-azul">name</span>:{" "}
                  <span className="codigo-verde">
                    "Harold Quiroz"
                  </span>
                  ,
                </p>

                <p className="codigo-indentado">
                  <span className="codigo-azul">focus</span>:{" "}
                  <span className="codigo-verde">
                    "Web development"
                  </span>
                  ,
                </p>

                <p className="codigo-indentado">
                  <span className="codigo-azul">passion</span>:{" "}
                  <span className="codigo-verde">
                    "Building ideas"
                  </span>
                  ,
                </p>

                <p className="codigo-indentado">
                  <span className="codigo-azul">learning</span>:{" "}
                  <span className="codigo-verde">true</span>,
                </p>

                <p>{"}"}</p>

                <div className="codigo-linea" />

                <div className="hero-terminal">
                  <span className="terminal-prompt">&gt;</span>
                  <span>npm run build-future</span>
                  <span className="terminal-cursor" />
                </div>
              </div>

              <div className="hero-icono-flotante hero-icono-react">
                <Code2 size={25} />
              </div>

              <div className="hero-icono-flotante hero-icono-laptop">
                <Laptop size={23} />
              </div>
            </div>

            <div className="hero-insignia">
              <Sparkles size={16} />
              <span>Aprendizaje continuo</span>
            </div>
          </div>
        </div>

        <div className="inicio-contenedor hero-resumen">
          <div>
            <strong>Front-end</strong>
            <span>Enfoque principal</span>
          </div>

          <div>
            <strong>React · TypeScript</strong>
            <span>Tecnologías web</span>
          </div>

          <div>
            <strong>Proyectos reales y académicos</strong>
            <span>Experiencia práctica</span>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section
        className="inicio-seccion tecnologias-seccion"
        id="tecnologias"
      >
        <div className="inicio-contenedor">
          <div className="inicio-encabezado">
            <span className="inicio-sobretitulo">
              MI CAJA DE HERRAMIENTAS
            </span>

            <h2>
              Tecnologías con las que <span>trabajo</span>
            </h2>

            <p>
              Herramientas que utilizo en mis proyectos,
              organizadas por área de trabajo.
            </p>
          </div>

          <div className="tecnologias-grid">
            {gruposTecnologias.map((grupo) => {
              const Icono = grupo.icono;

              return (
                <article
                  className="tecnologia-card"
                  key={grupo.titulo}
                >
                  <div className="tecnologia-card-cabecera">
                    <div className="tecnologia-icono">
                      <Icono size={23} />
                    </div>

                    <div>
                      <h3>{grupo.titulo}</h3>
                      <p>{grupo.descripcion}</p>
                    </div>
                  </div>

                  <div className="tecnologia-etiquetas">
                    {grupo.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="tecnologias-nota">
            Las tecnologías están presentadas por áreas de uso;
            mi nivel de experiencia varía según la herramienta
            y el proyecto.
          </p>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section
        className="inicio-seccion proyectos-seccion"
        id="proyectos-destacados"
      >
        <div className="inicio-contenedor">
          <div className="proyectos-encabezado">
            <div className="inicio-encabezado inicio-encabezado-izquierda">
              <span className="inicio-sobretitulo">
                TRABAJO SELECCIONADO
              </span>

              <h2>
                Proyectos <span>destacados</span>
              </h2>

              <p>
                Una selección de trabajos web que muestran mi
                enfoque en el diseño, la organización y la
                experiencia de usuario.
              </p>
            </div>

            <Link
              to="/proyectos"
              className="enlace-ver-todos"
            >
              Ver todos los proyectos
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <article className="proyecto-destacado">
            <div className="proyecto-imagen-contenedor">
              <img
                key={proyecto.imagen}
                src={proyecto.imagen}
                alt={`Vista previa del proyecto ${proyecto.nombre}`}
                className="proyecto-imagen"
                loading="lazy"
              />

              <span className="proyecto-etiqueta">
                {proyecto.etiqueta}
              </span>

              <span className="proyecto-numero">
                0{proyectoActual + 1} / 0
                {proyectosDestacados.length}
              </span>
            </div>

            <div className="proyecto-informacion">
              <span className="proyecto-categoria">
                {proyecto.categoria}
              </span>

              <h3>{proyecto.nombre}</h3>

              <p>{proyecto.descripcion}</p>

              <Link
                to={proyecto.ruta}
                className="proyecto-enlace"
              >
                Explorar proyecto
                <ExternalLink size={17} />
              </Link>

              <div className="proyecto-controles">
                <button
                  type="button"
                  onClick={anteriorProyecto}
                  aria-label="Ver proyecto anterior"
                >
                  <ArrowLeft size={19} />
                </button>

                <div
                  className="proyecto-indicadores"
                  aria-label="Seleccionar proyecto"
                >
                  {proyectosDestacados.map((item, indice) => (
                    <button
                      type="button"
                      key={item.nombre}
                      className={
                        indice === proyectoActual ? "activo" : ""
                      }
                      onClick={() => setProyectoActual(indice)}
                      aria-label={`Ver ${item.nombre}`}
                      aria-pressed={indice === proyectoActual}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={siguienteProyecto}
                  aria-label="Ver siguiente proyecto"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </article>

          <div className="otros-proyectos-grid">
            {otrosProyectos.map((item) => (
              <article
                className="otro-proyecto-card"
                key={item.nombre}
              >
                <span>{item.tipo}</span>

                <h3>{item.nombre}</h3>

                <p>{item.descripcion}</p>

                <Link to="/proyectos">
                  Conocer proyecto
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN PROFESIONAL */}
      <section
        className="inicio-seccion formacion-seccion"
        id="formacion"
      >
        <div className="inicio-contenedor">
          <div className="inicio-encabezado">
            <span className="inicio-sobretitulo">
              FORMACIÓN Y APRENDIZAJE
            </span>

            <h2>
              Mi formación <span>profesional</span>
            </h2>

            <p>
              Una base académica en desarrollo de sistemas
              Frontend y Backend, además de aprendizaje
              complementario en herramientas digitales.
            </p>
          </div>

          <div className="formacion-grid">
            <article className="formacion-card">
              <div className="formacion-icono">
                <GraduationCap size={25} />
              </div>

              <span className="formacion-tipo">
                FORMACIÓN ACADÉMICA
              </span>

              <h3>Desarrollo de Sistemas</h3>

              <p className="formacion-institucion">
                Escuela de Educación Superior Privada IDAT
              </p>

              <p>
                Egresado de la carrera de Desarrollo de Sistemas
                Frontend y Backend, orientada al desarrollo de
                soluciones de software, aplicaciones y sistemas
                informáticos.
              </p>

              <div className="formacion-acciones">
                <span className="formacion-estado">
                  Egresado · Titulación en proceso
                </span>

                <a
                  className="formacion-enlace"
                  href="/documents/constancia-egresado.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver constancia
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>

            <article className="formacion-card">
              <div className="formacion-icono">
                <BriefcaseBusiness size={24} />
              </div>

              <span className="formacion-tipo">
                FORMACIÓN COMPLEMENTARIA
              </span>

              <h3>Ofimática profesional</h3>

              <p className="formacion-institucion">
                Instituto Superior Tecnológico Privado Ábaco
              </p>

              <p>
                Formación en Word, Excel, Access, PowerPoint y
                herramientas de edición gráfica y multimedia.
              </p>

              <a
                className="formacion-enlace"
                href="/documents/certificado-office.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver certificado
                <ExternalLink size={16} />
              </a>
            </article>
          </div>

          <div className="formacion-cv">
            <div className="formacion-cv-icono">
              <Download size={23} />
            </div>

            <div className="formacion-cv-texto">
              <h3>¿Quieres conocer más sobre mi perfil?</h3>
              <p>
                Consulta mi currículum con información académica
                y profesional.
              </p>
            </div>

            <a
              href="/documents/cv-harold-quiroz.pdf"
              className="inicio-boton inicio-boton-principal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver currículum
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA PROFESIONAL */}
      <section
        className="inicio-seccion experiencia-seccion"
        id="experiencia"
      >
        <div className="inicio-contenedor experiencia-layout">
          <div className="inicio-encabezado inicio-encabezado-izquierda">
            <span className="inicio-sobretitulo">
              EXPERIENCIA PROFESIONAL
            </span>

            <h2>
              Más que código:{" "}
              <span>personas y soluciones</span>
            </h2>

            <p>
              Mi experiencia laboral también ha fortalecido mis
              habilidades de comunicación, organización y
              resolución de problemas.
            </p>

            <Link
              to="/sobre-mi"
              className="experiencia-enlace"
            >
              Conocer más sobre mí
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="experiencia-timeline">
            <article className="experiencia-item">
              <span className="experiencia-punto" />

              <span className="experiencia-periodo">
                Experiencia actual
              </span>

              <h3>Konecta</h3>

              <p className="experiencia-cargo">
                Asesor de Atención al Cliente y Cross Ventas
              </p>

              <p>
                Brindé soporte técnico para servicios hogar y
                atención al cliente, resolviendo incidencias de
                internet, cable y telefonía fija. Gestioné ventas
                de servicios móviles y hogar, destacando en
                cumplimiento de objetivos comerciales, negociación
                y cross selling.
              </p>
            </article>

            <article className="experiencia-item">
              <span className="experiencia-punto" />

              <span className="experiencia-periodo">
                Experiencia anterior
              </span>

              <h3>Compact Studios</h3>

              <p className="experiencia-cargo">
                Operario y Asistente de Diseño Gráfico
              </p>

              <p>
                Participé en la producción y personalización de
                prendas y artículos mediante técnicas de vinil,
                DTF e impresión. Elaboré diseños gráficos, edité
                videos promocionales y apoyé en la creación de
                contenido para redes sociales, cuidando la calidad
                de los acabados.
              </p>
            </article>

            <article className="experiencia-item">
              <span className="experiencia-punto" />

              <span className="experiencia-periodo">
                ERNA SAC
              </span>

              <h3>Soporte y herramientas digitales</h3>

              <p className="experiencia-cargo">
                Asistente Comercial y Soporte Tecnológico
              </p>

              <p>
                Gestioné la atención al cliente, asesoría comercial
                y seguimiento de ventas, además de administrar
                redes sociales y crear contenido promocional.
                Desarrollé una página web, herramientas en Python
                y TypeScript, y una base de datos SQL para optimizar
                la gestión de inventario y las operaciones
                comerciales.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        className="inicio-contacto"
        id="contacto-rapido"
      >
        <div className="inicio-contenedor contacto-banner">
          <div>
            <span className="inicio-sobretitulo">
              ¿TRABAJAMOS JUNTOS?
            </span>

            <h2>
              Una buena idea puede convertirse en una gran{" "}
              <span>solución.</span>
            </h2>

            <p>
              Estoy interesado en oportunidades profesionales y
              proyectos relacionados con el desarrollo web y las
              soluciones digitales.
            </p>
          </div>

          <Link
            to="/contacto"
            className="inicio-boton inicio-boton-claro"
          >
            Hablemos
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
