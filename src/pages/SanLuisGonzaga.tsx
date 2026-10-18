
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  Globe,
  GraduationCap,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  PlayCircle,
  Send,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./SanLuisGonzaga.css";

const SanLuisGonzaga = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, vi tu portafolio y me interesa desarrollar una aplicación móvil o un sistema para una institución educativa. Me gustaría conversar sobre una propuesta."
  );

  const whatsappUrl = `https://wa.me/51964618454?text=${whatsappMessage}`;

  const facebookUrl = "https://www.facebook.com/slgchiclayo";

  const funcionalidades = [
    {
      icon: GraduationCap,
      title: "Inicio institucional",
      description:
        "Pantalla de bienvenida con información relevante sobre la institución educativa y su ubicación.",
    },
    {
      icon: Users,
      title: "Nosotros",
      description:
        "Información institucional, historia, fecha de fundación, misión, visión y croquis del campus educativo.",
    },
    {
      icon: Globe,
      title: "Contacto y redes sociales",
      description:
        "Accesos a los canales oficiales de comunicación de la institución y visualización de su ubicación mediante Google Maps.",
    },
    {
      icon: Send,
      title: "Solicitudes",
      description:
        "Formulario para ingresar un correo electrónico y el motivo de la consulta, con recepción de los datos mediante Firebase.",
    },
    {
      icon: Mail,
      title: "Comunicados",
      description:
        "Espacio para presentar noticias, avisos e información importante para la comunidad educativa.",
    },
    {
      icon: HelpCircle,
      title: "Preguntas frecuentes",
      description:
        "Respuestas predeterminadas sobre vestimenta, reglas de ingreso y otras consultas habituales.",
    },
    {
      icon: CalendarDays,
      title: "Eventos institucionales",
      description:
        "Calendario para consultar actividades y celebraciones escolares, como el Día de la Gastronomía y el Día del Profesor.",
    },
    {
      icon: ShieldCheck,
      title: "Autenticación",
      description:
        "Acceso mediante correo electrónico y contraseña utilizando los servicios de autenticación de Firebase.",
    },
  ];

  const tecnologias = [
    {
      nombre: "React Native",
      descripcion: "Desarrollo de la aplicación móvil",
      icon: Code2,
    },
    {
      nombre: "TypeScript",
      descripcion: "Tipado y organización del código",
      icon: CheckCircle2,
    },
    {
      nombre: "Expo Go",
      descripcion: "Ejecución y pruebas en dispositivos móviles",
      icon: PlayCircle,
    },
    {
      nombre: "Firebase",
      descripcion: "Autenticación y recepción de solicitudes",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="slg-page">
      {/* NAVEGACIÓN SUPERIOR */}
      <header className="slg-topbar">
        <Link to="/proyectos" className="slg-back-link">
          <ArrowLeft size={18} />
          <span>Volver a proyectos</span>
        </Link>

        <span className="slg-topbar-label">
          Aplicación móvil educativa
        </span>
      </header>

      {/* PORTADA */}
      <section className="slg-hero">
        <div className="slg-hero-inner">
          <div className="slg-hero-content">
            <span className="slg-eyebrow">
              PROYECTO DE DESARROLLO MÓVIL
            </span>

            <h1>
              San Luis <span>Gonzaga.</span>
            </h1>

            <p className="slg-hero-subtitle">
              Aplicación móvil institucional para conectar a la comunidad
              educativa con la información, los comunicados, los eventos y
              los canales de atención del colegio.
            </p>

            <div className="slg-tags">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>Expo Go</span>
              <span>Firebase</span>
            </div>

            <div className="slg-hero-buttons">
              <a
                href="#slg-demostracion"
                className="slg-primary-button"
              >
                <PlayCircle size={19} />
                Ver demostración
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="slg-secondary-button"
              >
                <Globe size={18} />
                Facebook oficial
              </a>
            </div>

            <div className="slg-hero-meta">
              <span>
                <ShieldCheck size={16} />
                Autenticación con Firebase
              </span>

              <span>
                <Compass size={16} />
                Interfaz móvil
              </span>
            </div>
          </div>

          <div className="slg-hero-visual">
            <div className="slg-hero-glow" />

            <div className="slg-hero-image-frame">
              <img
                src="/images/proyectos/san-luis-gonzaga.png"
                alt="Portada del proyecto móvil San Luis Gonzaga"
              />
            </div>

            <div className="slg-hero-image-caption">
              <div className="slg-hero-image-icon">
                <GraduationCap size={23} />
              </div>

              <div>
                <strong>San Luis Gonzaga</strong>
                <span>Aplicación institucional</span>
              </div>

              <CheckCircle2
                size={21}
                className="slg-hero-check"
              />
            </div>

            <div className="slg-floating-card">
              <div className="slg-floating-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Acceso autenticado</strong>
                <span>Servicio Firebase</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slg-hero-index">
          PROYECTO MÓVIL <span>·</span> PORTAFOLIO
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="slg-section slg-intro">
        <div className="slg-section-heading">
          <span className="slg-kicker">01 / DESCRIPCIÓN</span>

          <h2>Una institución más cerca de su comunidad</h2>
        </div>

        <div className="slg-intro-content">
          <p>
            San Luis Gonzaga es una institución educativa privada de
            Chiclayo, Lambayeque. Este proyecto consiste en una aplicación
            móvil orientada a reunir información institucional y facilitar
            el acceso a los canales de comunicación del colegio.
          </p>

          <p>
            La aplicación contempla un inicio de sesión mediante correo
            electrónico y contraseña, apartados informativos, solicitudes,
            comunicados, preguntas frecuentes y un calendario de eventos.
          </p>

          <p>
            El proyecto fue desarrollado con React Native, TypeScript y
            Expo Go, e integrado con Firebase para la autenticación y la
            recepción de solicitudes.
          </p>

          <div className="slg-status">
            <span className="slg-status-dot" />

            <div>
              <strong>Proyecto documentado mediante evidencias</strong>
              <p>
                La página presenta grabaciones del funcionamiento y del
                desarrollo. El código fuente original de la aplicación
                móvil ya no está disponible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMOSTRACIÓN */}
      <section
        className="slg-section slg-demo-section"
        id="slg-demostracion"
      >
        <div className="slg-section-heading">
          <span className="slg-kicker">02 / FUNCIONAMIENTO</span>

          <h2>La aplicación en acción</h2>

          <p>
            Observa el recorrido por las pantallas y las funciones
            principales de la aplicación móvil.
          </p>
        </div>

        <div className="slg-video-grid">
          <article className="slg-video-card">
            <div className="slg-video-card-heading">
              <div className="slg-video-heading-icon">
                <PlayCircle size={22} />
              </div>

              <div>
                <h3>Demostración de la aplicación</h3>
                <p>Recorrido por las funciones y pantallas.</p>
              </div>
            </div>

            <div className="slg-video-container">
              <video
                controls
                preload="metadata"
                playsInline
                className="slg-video"
                aria-label="Demostración de la aplicación San Luis Gonzaga"
              >
                <source
                  src="/videos/san-luis-gonzaga-demostracion.mp4"
                  type="video/mp4"
                />

                Tu navegador no puede reproducir este video.
              </video>
            </div>

            <p className="slg-video-caption">
              Evidencia visual del funcionamiento de la aplicación.
            </p>
          </article>

          <article className="slg-video-card">
            <div className="slg-video-card-heading">
              <div className="slg-video-heading-icon">
                <Video size={22} />
              </div>

              <div>
                <h3>Proceso de programación</h3>
                <p>Registro visual del desarrollo del proyecto.</p>
              </div>
            </div>

            <div className="slg-video-container">
              <video
                controls
                preload="metadata"
                playsInline
                className="slg-video"
                aria-label="Video del proceso de programación de San Luis Gonzaga"
              >
                <source
                  src="/videos/san-luis-gonzaga-codigo.mp4"
                  type="video/mp4"
                />

                Tu navegador no puede reproducir este video.
              </video>
            </div>

            <p className="slg-video-caption">
              Evidencia del proceso de desarrollo y programación.
            </p>
          </article>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="slg-section">
        <div className="slg-section-heading">
          <span className="slg-kicker">03 / FUNCIONALIDADES</span>

          <h2>Todo lo importante en una sola aplicación</h2>

          <p>
            La propuesta reúne información institucional y herramientas
            de comunicación en una interfaz móvil.
          </p>
        </div>

        <div className="slg-features-grid">
          {funcionalidades.map((funcionalidad) => {
            const Icon = funcionalidad.icon;

            return (
              <article
                className="slg-feature-card"
                key={funcionalidad.title}
              >
                <div className="slg-feature-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3>{funcionalidad.title}</h3>

                <p>{funcionalidad.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* FLUJO DE SOLICITUDES */}
      <section className="slg-section slg-request-section">
        <div className="slg-request-panel">
          <div className="slg-request-icon">
            <Mail size={25} />
          </div>

          <div className="slg-request-content">
            <span className="slg-kicker">
              COMUNICACIÓN INSTITUCIONAL
            </span>

            <h2>Solicitudes con Firebase</h2>

            <p>
              El formulario de solicitudes permite introducir un correo
              electrónico y el motivo de la consulta. La información se
              envía para su recepción mediante los servicios de Firebase
              configurados en el proyecto.
            </p>

            <div className="slg-request-steps">
              <div>
                <span>01</span>
                <strong>Ingreso de datos</strong>
              </div>

              <ChevronRight size={19} />

              <div>
                <span>02</span>
                <strong>Envío de solicitud</strong>
              </div>

              <ChevronRight size={19} />

              <div>
                <span>03</span>
                <strong>Recepción en Firebase</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="slg-tech-section">
        <div className="slg-section slg-tech-inner">
          <div className="slg-section-heading">
            <span className="slg-kicker">04 / TECNOLOGÍAS</span>

            <h2>Herramientas utilizadas</h2>

            <p>
              Tecnologías relacionadas con la construcción de la interfaz
              móvil y los servicios de autenticación.
            </p>
          </div>

          <div className="slg-tech-grid">
            {tecnologias.map((tecnologia) => {
              const Icon = tecnologia.icon;

              return (
                <article
                  className="slg-tech-card"
                  key={tecnologia.nombre}
                >
                  <div className="slg-tech-icon">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3>{tecnologia.nombre}</h3>
                    <p>{tecnologia.descripcion}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO DE LA INSTITUCIÓN */}
      <section className="slg-section slg-institution-section">
        <div className="slg-section-heading">
          <span className="slg-kicker">05 / INSTITUCIÓN</span>

          <h2>San Luis Gonzaga de Chiclayo</h2>

          <p>
            Consulta los canales oficiales de la institución educativa
            para obtener información institucional.
          </p>
        </div>

        <div className="slg-institution-card">
          <div className="slg-institution-symbol">
            <GraduationCap size={31} />
          </div>

          <div className="slg-institution-details">
            <h3>Institución educativa privada</h3>

            <p>
              <MapPin size={18} />
              <span>
                Av. Angamos 631, urbanización El Porvenir, Chiclayo,
                Lambayeque, Perú.
              </span>
            </p>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="slg-facebook-link"
            >
              <Globe size={18} />
              Visitar Facebook oficial
            </a>
          </div>
        </div>

        <div className="slg-map-note">
          <MapPin size={19} />

          <p>
            La aplicación original contempla una vista de ubicación
            mediante Google Maps. Este apartado identifica la dirección
            institucional para facilitar su consulta.
          </p>
        </div>
      </section>

      {/* CONTACTO PROFESIONAL */}
      <section className="slg-contact-section">
        <div className="slg-contact-decoration slg-contact-decoration-one" />
        <div className="slg-contact-decoration slg-contact-decoration-two" />

        <div className="slg-contact-content">
          <span className="slg-contact-kicker">
            ¿BUSCAS UNA SOLUCIÓN PARA TU INSTITUCIÓN?
          </span>

          <h2>
            Creemos una aplicación para tu organización
          </h2>

          <p>
            Si buscas una aplicación móvil, una página web o un sistema
            personalizado para una institución educativa o un negocio,
            podemos conversar sobre tu idea.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="slg-whatsapp-button"
          >
            <MessageCircle size={20} />
            Contactarme por WhatsApp
          </a>

          <span className="slg-contact-footnote">
            Contacto profesional para proyectos y propuestas de desarrollo.
          </span>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="slg-footer">
        <div className="slg-footer-inner">
          <div className="slg-footer-brand">
            <GraduationCap size={21} />
            <span>SAN LUIS GONZAGA</span>
          </div>

          <p>
            Proyecto móvil presentado como parte de un portafolio de
            desarrollo.
          </p>

          <Link to="/proyectos" className="slg-footer-link">
            <ArrowLeft size={15} />
            Volver a proyectos
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default SanLuisGonzaga;
