
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers3,
  Lightbulb,
  MessageCircle,
  Monitor,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./WTS.css";

// ========================================
// CONFIGURACIÓN DE CONTACTO
// ========================================

const WHATSAPP_HAROLD = "51964618454";
const WHATSAPP_RONNIE = "51959349818";

const MENSAJE_CONTACTO =
  "Hola, he visto World Technology System y me gustaría recibir información sobre sus servicios tecnológicos.";

const enlaceWhatsApp = (numero: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(MENSAJE_CONTACTO)}`;

// ========================================
// SERVICIOS
// ========================================

const servicios = [
  {
    numero: "01",
    icono: Monitor,
    titulo: "Desarrollo web",
    descripcion:
      "Diseño y desarrollo de páginas web, plataformas digitales e interfaces adaptables a distintos dispositivos.",
  },
  {
    numero: "02",
    icono: Database,
    titulo: "Desarrollo backend",
    descripcion:
      "Implementación de lógica de negocio, APIs, gestión de datos y funcionalidades para sistemas digitales.",
  },
  {
    numero: "03",
    icono: Smartphone,
    titulo: "Aplicaciones móviles",
    descripcion:
      "Desarrollo de experiencias móviles orientadas a las necesidades de cada proyecto y sus usuarios.",
  },
  {
    numero: "04",
    icono: BarChart3,
    titulo: "Análisis de datos",
    descripcion:
      "Organización, exploración y análisis de datos para facilitar la comprensión de la información y apoyar decisiones.",
  },
];

// ========================================
// CAPACIDADES DEL EQUIPO
// ========================================

const capacidades = [
  "Sitios web comerciales y corporativos",
  "Sistemas de gestión personalizados",
  "Aplicaciones y soluciones digitales",
  "Integración y gestión de bases de datos",
  "Análisis y presentación de información",
  "Prototipos y demostraciones funcionales",
];

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function WTS() {
  return (
    <main className="wts-detalle">
      {/* PRESENTACIÓN PRINCIPAL */}

      <section className="wts-hero">
        <div className="wts-contenedor">
          <Link to="/proyectos" className="wts-volver">
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <div className="wts-hero-grid">
            <div className="wts-hero-texto">
              <div className="wts-etiquetas">
                <span className="wts-etiqueta">
                  <CheckCircle2 size={15} />
                  Emprendimiento colaborativo
                </span>

                <span className="wts-etiqueta-secundaria">
                  Soluciones tecnológicas
                </span>
              </div>

              <p className="wts-sobretitulo">
                DESARROLLO · INNOVACIÓN · TECNOLOGÍA
              </p>

              <h1>
                World Technology <span>System.</span>
              </h1>

              <p className="wts-resumen">
                Transformamos ideas en soluciones digitales mediante el
                desarrollo de sistemas, aplicaciones y herramientas
                tecnológicas adaptadas a las necesidades de cada proyecto.
              </p>

              <div className="wts-hero-acciones">

                <a
                href="https://world-technology-system.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="wts-boton wts-boton-principal"
                >
                <Globe size={18} />
                Visitar sitio web
                <ArrowUpRight size={17} />
                </a>

                <a
                  href="#wts-servicios"
                  className="wts-boton wts-boton-secundario"
                >
                  Conocer los servicios
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="wts-datos">
                <div>
                  <span className="wts-dato-titulo">Iniciativa</span>
                  <strong>Emprendimiento tecnológico</strong>
                </div>

                <div>
                  <span className="wts-dato-titulo">Equipo</span>
                  <strong>Harold Quiroz · Ronnie Catunta</strong>
                </div>
              </div>
            </div>

            <div className="wts-hero-visual">
              <div className="wts-imagen-marco">
                <img
                  src="/images/proyectos/logo-wsp.png"
                  alt="Imagen demostrativa de World Technology System"
                />

                <div className="wts-imagen-overlay">
                  <span className="wts-punto-verde" />
                  <span>Ideas que se convierten en soluciones</span>
                </div>
              </div>

              <div className="wts-flotante">
                <div className="wts-flotante-icono">
                  <Code2 size={22} />
                </div>

                <div>
                  <strong>Desarrollo digital</strong>
                  <span>Soluciones para diferentes necesidades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE EL EMPRENDIMIENTO */}

      <section className="wts-seccion">
        <div className="wts-contenedor">
          <div className="wts-descripcion-grid">
            <div className="wts-titulo-seccion">
              <span className="wts-numero-seccion">
                01 / SOBRE WTS
              </span>

              <h2>
                Tecnología con una visión{" "}
                <span>colaborativa.</span>
              </h2>
            </div>

            <div className="wts-descripcion-texto">
              <p>
                World Technology System es un emprendimiento tecnológico
                impulsado por Harold Quiroz y Ronnie Catunta, ambos egresados
                de la carrera de Desarrollo de Sistemas Front-end y Back-end.
                Nuestra iniciativa busca ofrecer servicios de desarrollo de
                software y soluciones digitales para personas, negocios y
                organizaciones.
              </p>

              <p>
                Combinamos nuestros conocimientos y capacidades para abordar
                proyectos que pueden abarcar desde una página web comercial
                hasta sistemas de gestión, aplicaciones móviles, soluciones
                backend y análisis de datos.
              </p>

              <p>
                La propuesta se basa en comprender las necesidades de cada
                cliente, plantear una solución adecuada y trabajar de manera
                colaborativa para convertir ideas en productos digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}

      <section
        className="wts-seccion wts-servicios"
        id="wts-servicios"
      >
        <div className="wts-contenedor">
          <div className="wts-cabecera-seccion">
            <span className="wts-numero-seccion">
              02 / NUESTROS SERVICIOS
            </span>

            <h2>
              Soluciones para impulsar{" "}
              <span>tus ideas.</span>
            </h2>

            <p>
              Desarrollamos propuestas tecnológicas según los objetivos,
              funcionalidades y necesidades de cada proyecto.
            </p>
          </div>

          <div className="wts-servicios-grid">
            {servicios.map((servicio) => {
              const Icono = servicio.icono;

              return (
                <article
                  className="wts-servicio-card"
                  key={servicio.numero}
                >
                  <div className="wts-servicio-superior">
                    <div className="wts-servicio-icono">
                      <Icono size={24} />
                    </div>

                    <span>{servicio.numero}</span>
                  </div>

                  <h3>{servicio.titulo}</h3>

                  <p>{servicio.descripcion}</p>

                  <div className="wts-servicio-linea" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}

      <section className="wts-seccion">
        <div className="wts-contenedor">
          <div className="wts-capacidades-grid">
            <div className="wts-capacidades-texto">
              <span className="wts-numero-seccion">
                03 / QUÉ PODEMOS DESARROLLAR
              </span>

              <h2>
                Cada proyecto comienza con una{" "}
                <span>idea.</span>
              </h2>

              <p>
                Nuestro enfoque permite explorar distintas alternativas
                tecnológicas y construir soluciones alineadas con los
                requerimientos de cada cliente.
              </p>

              <a
                href={enlaceWhatsApp(WHATSAPP_HAROLD)}
                target="_blank"
                rel="noopener noreferrer"
                className="wts-enlace-texto"
              >
                Cuéntanos tu idea
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="wts-capacidades-lista">
              {capacidades.map((capacidad, index) => (
                <div className="wts-capacidad" key={capacidad}>
                  <span className="wts-capacidad-check">
                    <CheckCircle2 size={19} />
                  </span>

                  <span>{capacidad}</span>

                  <span className="wts-capacidad-numero">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS DEMOSTRATIVOS Y AUTORÍA */}

      <section className="wts-seccion wts-demostraciones">
        <div className="wts-contenedor">
          <div className="wts-demostraciones-cabecera">
            <div>
              <span className="wts-numero-seccion">
                04 / PORTAFOLIO DEMOSTRATIVO
              </span>

              <h2>
                Proyectos que muestran{" "}
                <span>nuestras capacidades.</span>
              </h2>
            </div>

            <div className="wts-demostraciones-icono">
              <Layers3 size={27} />
            </div>
          </div>

          <div className="wts-demostraciones-contenido">
            <div className="wts-demostraciones-texto">
              <p>
                Como parte de la presentación de WTS, se incluyen proyectos
                desarrollados por Harold Quiroz como ejemplos demostrativos
                de su experiencia técnica y de las capacidades que puede
                aportar al equipo.
              </p>

              <p>
                Estas demostraciones permiten conocer distintos tipos de
                soluciones y sirven como referencia del trabajo que podemos
                abordar en conjunto, además de los nuevos desarrollos que
                se realicen de manera colaborativa.
              </p>

              <div className="wts-nota-autor">
                <ShieldCheck size={23} />

                <div>
                  <strong>Autoría y propiedad intelectual</strong>

                  <p>
                    La inclusión de proyectos personales en esta página tiene
                    una finalidad demostrativa y promocional. Su exhibición
                    no supone, por sí sola, una transferencia de derechos de
                    autor ni un cambio de titularidad. La autoría y los
                    derechos correspondientes se mantienen conforme a la
                    titularidad de cada obra y a los acuerdos aplicables.
                  </p>
                </div>
              </div>
            </div>

            <div className="wts-demostraciones-panel">
              <div className="wts-panel-icono">
                <Lightbulb size={25} />
              </div>

              <h3>Experiencia aplicada</h3>

              <p>
                Proyectos web, sistemas de gestión y aplicaciones que
                permiten mostrar soluciones funcionales y enfoques de
                desarrollo para distintos escenarios.
              </p>

              <Link
                to="/proyectos"
                className="wts-boton wts-boton-panel"
              >
                Explorar portafolio
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}

      <section className="wts-seccion wts-equipo">
        <div className="wts-contenedor">
          <div className="wts-cabecera-seccion">
            <span className="wts-numero-seccion">
              05 / EQUIPO DE TRABAJO
            </span>

            <h2>
              Conocimiento que se construye{" "}
              <span>en equipo.</span>
            </h2>

            <p>
              Dos desarrolladores que comparten una visión tecnológica y
              colaboran para convertir ideas en soluciones digitales.
            </p>
          </div>

          <div className="wts-equipo-grid">
            <article className="wts-persona-card">
              <div className="wts-persona-icono">
                <Code2 size={25} />
              </div>

              <span className="wts-persona-rol">
                DESARROLLO Y COLABORACIÓN
              </span>

              <h3>Harold Quiroz</h3>

              <p>
                Participación en el desarrollo web y en la construcción de
                soluciones digitales, aportando experiencia práctica en
                proyectos frontend y sistemas.
              </p>

              <a
                href={enlaceWhatsApp(WHATSAPP_HAROLD)}
                target="_blank"
                rel="noopener noreferrer"
                className="wts-contacto-persona"
              >
                <MessageCircle size={17} />
                Contactar a Harold
                <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="wts-persona-card">
              <div className="wts-persona-icono">
                <Users size={25} />
              </div>

              <span className="wts-persona-rol">
                DESARROLLO Y COLABORACIÓN
              </span>

              <h3>Ronnie Catunta</h3>

              <p>
                Participación en el emprendimiento y colaboración en el
                desarrollo de soluciones tecnológicas junto con el equipo.
              </p>

              <a
                href={enlaceWhatsApp(WHATSAPP_RONNIE)}
                target="_blank"
                rel="noopener noreferrer"
                className="wts-contacto-persona"
              >
                <MessageCircle size={17} />
                Contactar a Ronnie
                <ArrowUpRight size={16} />
              </a>
            </article>
          </div>

          <div className="wts-equipo-nota">
            <Sparkles size={19} />

            <p>
              Ambos somos egresados de Desarrollo de Sistemas Front-end y
              Back-end y compartimos el objetivo de seguir construyendo
              soluciones digitales.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO FINAL */}

      <section className="wts-contacto">
        <div className="wts-contenedor">
          <div className="wts-contacto-card">
            <div className="wts-contacto-decoracion">
              <Globe size={80} />
            </div>

            <div className="wts-contacto-icono">
              <MessageCircle size={27} />
            </div>

            <span className="wts-numero-seccion">
              ¿TIENES UN PROYECTO EN MENTE?
            </span>

            <h2>
              Hablemos de tu próxima{" "}
              <span>solución digital.</span>
            </h2>

            <p>
              Cuéntanos qué necesitas y conversemos sobre las alternativas
              tecnológicas que podemos desarrollar para tu proyecto.
            </p>

            <div className="wts-contacto-acciones">
              <a
                href={enlaceWhatsApp(WHATSAPP_HAROLD)}
                target="_blank"
                rel="noopener noreferrer"
                className="wts-boton wts-boton-principal"
              >
                Contactar a Harold
                <ArrowUpRight size={18} />
              </a>

              <a
                href={enlaceWhatsApp(WHATSAPP_RONNIE)}
                target="_blank"
                rel="noopener noreferrer"
                className="wts-boton wts-boton-secundario"
              >
                Contactar a Ronnie
                <MessageCircle size={18} />
              </a>
            </div>

            <Link to="/proyectos" className="wts-volver-final">
              <ArrowLeft size={17} />
              Volver a proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
