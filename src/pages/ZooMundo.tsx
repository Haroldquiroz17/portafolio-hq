
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AtSign,
  CheckCircle2,
  ChevronRight,
  Code2,
  CreditCard,
  ExternalLink,
  Heart,
  Leaf,
  Mail,
  Map,
  MapPinned,
  PawPrint,
  Smartphone,
  Sparkles,
  Ticket,
  UserRound,
  Users,
  WalletCards,
  Waves,
  Newspaper,
  ShieldCheck,
  Camera,
  Search,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ZooMundo.css";

const APP_URL =
  "https://appetize.io/app/b_j75r6sthlvizuu5ulsfgoecv2i";

const WHATSAPP_URL =
  "https://wa.me/51964618454?text=" +
  encodeURIComponent(
    "Hola Harold, vi tu proyecto ZooMundo en tu portafolio y me gustaría conversar contigo sobre tu trabajo como desarrollador."
  );

const EMAIL_URL =
  "mailto:hjqc@outlook.es?subject=" +
  encodeURIComponent("Consulta sobre el proyecto ZooMundo");

const funcionalidades = [
  {
    icon: UserRound,
    titulo: "Registro e inicio de sesión",
    descripcion:
      "Acceso a la aplicación mediante una cuenta de usuario y un perfil personal con sus datos.",
    numero: "01",
  },
  {
    icon: PawPrint,
    titulo: "Catálogo de animales",
    descripcion:
      "Exploración de aproximadamente 60 especies con fotografías, nombres científicos e información de cada animal.",
    numero: "02",
  },
  {
    icon: Search,
    titulo: "Búsqueda y filtros",
    descripcion:
      "Localización de animales mediante búsquedas por nombre y filtros por categorías y hábitats.",
    numero: "03",
  },
  {
    icon: Heart,
    titulo: "Lista de favoritos",
    descripcion:
      "Guarda las especies que más te interesan y accede a ellas desde una sección dedicada.",
    numero: "04",
  },
  {
    icon: MapPinned,
    titulo: "Mapa del zoológico",
    descripcion:
      "Consulta una representación visual del recinto para orientarte durante la visita.",
    numero: "05",
  },
  {
    icon: Ticket,
    titulo: "Boletería digital",
    descripcion:
      "Consulta las categorías de entradas y recorre un flujo de compra con una pasarela de pago simulada.",
    numero: "06",
  },
  {
    icon: Newspaper,
    titulo: "Noticias e información",
    descripcion:
      "Accede a novedades, enlaces de interés y datos de contacto relacionados con el zoológico.",
    numero: "07",
  },
  {
    icon: Camera,
    titulo: "Perfil personal",
    descripcion:
      "Consulta tus datos y personaliza la imagen de perfil dentro de la aplicación.",
    numero: "08",
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Explora",
    descripcion:
      "Descubre las especies, consulta sus fichas y guarda tus animales favoritos.",
  },
  {
    numero: "02",
    titulo: "Organiza tu visita",
    descripcion:
      "Revisa el mapa, consulta la información disponible y explora las opciones de boletería.",
  },
  {
    numero: "03",
    titulo: "Conoce la propuesta",
    descripcion:
      "Descubre cómo una aplicación móvil puede complementar la experiencia de visitar un zoológico.",
  },
];

function ZooMundo() {
  return (
    <main className="zoomundo-page">
      {/* Navegación superior */}
      <header className="zoomundo-topbar">
        <Link to="/proyectos" className="zoomundo-back">
          <ArrowLeft size={18} />
          <span>Volver a proyectos</span>
        </Link>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="zoomundo-topbar-action"
        >
          Probar aplicación
          <ExternalLink size={15} />
        </a>
      </header>

      {/* Portada principal */}
      <section className="zoomundo-hero">
        <div className="zoomundo-hero-background" />

        <div className="zoomundo-hero-inner">
          <div className="zoomundo-hero-content">
            <div className="zoomundo-eyebrow">
              <span className="zoomundo-eyebrow-dot" />
              PROYECTO PERSONAL · APLICACIÓN MÓVIL
            </div>

            <div className="zoomundo-brand">
              <span className="zoomundo-brand-icon">
                <PawPrint size={27} />
              </span>
              <span>ZooMundo</span>
            </div>

            <h1>
              La naturaleza
              <br />
              <span>en tus manos.</span>
            </h1>

            <p className="zoomundo-hero-description">
              Una propuesta de innovación digital que busca acercar a las
              personas al mundo animal y transformar la manera de explorar,
              conocer y planificar una visita al zoológico.
            </p>

            <div className="zoomundo-tags">
              <span>
                <Smartphone size={14} />
                Aplicación móvil
              </span>
              <span>
                <Code2 size={14} />
                JavaScript
              </span>
              <span>
                <PawPrint size={14} />
                60 especies aprox.
              </span>
            </div>

            <div className="zoomundo-hero-buttons">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zoomundo-button zoomundo-button-primary"
              >
                <Smartphone size={19} />
                Probar aplicación
                <ExternalLink size={16} />
              </a>

              <a
                href="#zoomundo-proyecto"
                className="zoomundo-button zoomundo-button-outline"
              >
                Conocer el proyecto
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="zoomundo-hero-note">
              <ShieldCheck size={17} />
              <span>
                Acceso mediante Appetize. La disponibilidad depende de la
                plataforma de emulación.
              </span>
            </div>
          </div>

          <div className="zoomundo-hero-visual">
            <div className="zoomundo-image-frame">
              <img
              src="/images/proyectos/zoomundo.png"
                alt="Portada del proyecto ZooMundo"
                className="zoomundo-cover-image"
              />

              <div className="zoomundo-image-shade" />

              <div className="zoomundo-image-top-label">
                <Leaf size={16} />
                EXPLORA LA VIDA SILVESTRE
              </div>

              <div className="zoomundo-image-caption">
                <span className="zoomundo-image-caption-icon">
                  <PawPrint size={24} />
                </span>
                <div>
                  <strong>Una experiencia por descubrir</strong>
                  <span>Conoce. Explora. Protege.</span>
                </div>
              </div>

              <span className="zoomundo-image-number">01 / APP</span>
            </div>

            <div className="zoomundo-floating-card zoomundo-floating-top">
              <span className="zoomundo-floating-icon">
                <Heart size={19} />
              </span>
              <div>
                <strong>Tus favoritos</strong>
                <span>Guarda tus especies</span>
              </div>
            </div>

            <div className="zoomundo-floating-card zoomundo-floating-bottom">
              <span className="zoomundo-floating-icon zoomundo-floating-icon-green">
                <Map size={19} />
              </span>
              <div>
                <strong>Explora el zoológico</strong>
                <span>Mapa e información</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#zoomundo-proyecto" className="zoomundo-scroll-indicator">
          <span>DESCUBRE EL PROYECTO</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* Introducción */}
      <section
        className="zoomundo-section zoomundo-intro"
        id="zoomundo-proyecto"
      >
        <div className="zoomundo-section-inner zoomundo-intro-grid">
          <div className="zoomundo-section-heading">
            <span className="zoomundo-kicker">
              <Sparkles size={15} />
              SOBRE EL PROYECTO
            </span>

            <h2>
              Tecnología con un
              <br />
              propósito <span>natural.</span>
            </h2>
          </div>

          <div className="zoomundo-intro-content">
            <p className="zoomundo-lead">
              ZooMundo es una aplicación móvil concebida como una propuesta
              tecnológica para modernizar la experiencia de los visitantes de
              un zoológico real ubicado en Arequipa, Perú.
            </p>

            <p>
              La iniciativa busca complementar los procesos tradicionales de
              información y boletería mediante herramientas digitales que
              permitan explorar las especies, organizar una visita y consultar
              información relevante desde un dispositivo móvil.
            </p>

            <p>
              El proyecto cuenta con una aplicación emulada y funcionalidades
              desarrolladas como parte de una propuesta personal de innovación.
              No ha sido encargado ni implementado oficialmente por el
              zoológico.
            </p>

            <div className="zoomundo-status">
              <span className="zoomundo-status-dot" />
              <div>
                <strong>Proyecto en desarrollo</strong>
                <span>
                  Propuesta personal en una fase avanzada de desarrollo.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="zoomundo-section zoomundo-features">
        <div className="zoomundo-section-inner">
          <div className="zoomundo-section-heading zoomundo-heading-centered">
            <span className="zoomundo-kicker">
              <PawPrint size={15} />
              FUNCIONALIDADES
            </span>

            <h2>
              Mucho más que un
              <br />
              <span>catálogo de animales.</span>
            </h2>

            <p>
              Una experiencia móvil que reúne herramientas de exploración,
              personalización e información en un solo lugar.
            </p>
          </div>

          <div className="zoomundo-features-grid">
            {funcionalidades.map((funcion) => {
              const Icon = funcion.icon;

              return (
                <article
                  className="zoomundo-feature-card"
                  key={funcion.numero}
                >
                  <div className="zoomundo-feature-card-top">
                    <span className="zoomundo-feature-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="zoomundo-feature-number">
                      {funcion.numero}
                    </span>
                  </div>

                  <h3>{funcion.titulo}</h3>
                  <p>{funcion.descripcion}</p>

                  <div className="zoomundo-feature-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recorrido de usuario */}
      <section className="zoomundo-section zoomundo-experience">
        <div className="zoomundo-section-inner zoomundo-experience-grid">
          <div className="zoomundo-experience-copy">
            <span className="zoomundo-kicker">
              <Smartphone size={15} />
              EXPERIENCIA DEL USUARIO
            </span>

            <h2>
              Todo comienza
              <br />
              con <span>explorar.</span>
            </h2>

            <p>
              La aplicación propone una navegación organizada para que los
              usuarios puedan descubrir especies, guardar información de
              interés y consultar los recursos disponibles para su visita.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zoomundo-text-link"
            >
              Explorar ZooMundo
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="zoomundo-steps">
            {etapas.map((etapa) => (
              <article className="zoomundo-step" key={etapa.numero}>
                <div className="zoomundo-step-number">{etapa.numero}</div>
                <div className="zoomundo-step-content">
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.descripcion}</p>
                </div>
                <ChevronRight
                  className="zoomundo-step-arrow"
                  size={21}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Boletería */}
      <section className="zoomundo-section zoomundo-ticket-section">
        <div className="zoomundo-section-inner">
          <div className="zoomundo-ticket-panel">
            <div className="zoomundo-ticket-decoration">
              <Ticket size={110} strokeWidth={0.8} />
            </div>

            <div className="zoomundo-ticket-content">
              <span className="zoomundo-kicker">
                <WalletCards size={15} />
                BOLETERÍA DIGITAL
              </span>

              <h2>
                Una experiencia
                <br />
                de compra <span>simulada.</span>
              </h2>

              <p>
                ZooMundo incorpora un flujo demostrativo de boletería con
                categorías de visitantes y una pasarela de pago simulada para
                ilustrar cómo podría funcionar una compra digital.
              </p>

              <div className="zoomundo-ticket-warning">
                <ShieldCheck size={19} />
                <div>
                  <strong>Demostración, no pago real</strong>
                  <span>
                    No ingreses datos bancarios reales. La pasarela tiene
                    fines demostrativos y no realiza cobros.
                  </span>
                </div>
              </div>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zoomundo-button zoomundo-button-primary"
              >
                <CreditCard size={18} />
                Ver demostración
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="zoomundo-ticket-side">
              <span className="zoomundo-ticket-side-icon">
                <Ticket size={32} />
              </span>
              <span>BOLETERÍA</span>
              <strong>Digital</strong>
              <span className="zoomundo-ticket-side-caption">
                Flujo de compra de demostración
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="zoomundo-section zoomundo-tech-section">
        <div className="zoomundo-section-inner">
          <div className="zoomundo-section-heading zoomundo-heading-centered">
            <span className="zoomundo-kicker">
              <Code2 size={15} />
              DESARROLLO
            </span>

            <h2>
              Tecnología al servicio
              <br />
              <span>de la naturaleza.</span>
            </h2>

            <p>
              Una propuesta de software móvil centrada en la exploración y
              organización de información sobre especies y servicios.
            </p>
          </div>

          <div className="zoomundo-tech-grid">
            <article className="zoomundo-tech-card">
              <span className="zoomundo-tech-icon">
                <Code2 size={25} />
              </span>
              <h3>JavaScript</h3>
              <p>
                Lenguaje utilizado para desarrollar la lógica de la aplicación.
              </p>
            </article>

            <article className="zoomundo-tech-card">
              <span className="zoomundo-tech-icon">
                <Waves size={25} />
              </span>
              <h3>Integración con API</h3>
              <p>
                La propuesta contempla comunicación con una API; su
                disponibilidad actual debe verificarse.
              </p>
            </article>

            <article className="zoomundo-tech-card">
              <span className="zoomundo-tech-icon">
                <Smartphone size={25} />
              </span>
              <h3>Aplicación móvil</h3>
              <p>
                Interfaz diseñada para el uso desde dispositivos móviles.
              </p>
            </article>

            <article className="zoomundo-tech-card">
              <span className="zoomundo-tech-icon">
                <Users size={25} />
              </span>
              <h3>Experiencia de usuario</h3>
              <p>
                Navegación por secciones, búsqueda de especies y organización
                de funciones para el visitante.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Impacto y propuesta */}
      <section className="zoomundo-section zoomundo-impact">
        <div className="zoomundo-section-inner zoomundo-impact-grid">
          <div className="zoomundo-impact-icon">
            <Leaf size={39} />
          </div>

          <div className="zoomundo-impact-copy">
            <span className="zoomundo-kicker">VISIÓN DEL PROYECTO</span>
            <h2>
              Una propuesta para
              <br />
              conectar personas y naturaleza.
            </h2>
            <p>
              La iniciativa explora cómo las herramientas digitales pueden
              complementar la información para visitantes y ofrecer nuevas
              posibilidades de organización, orientación y acceso a contenidos
              sobre la vida animal.
            </p>
          </div>

          <div className="zoomundo-impact-points">
            <div>
              <CheckCircle2 size={18} />
              <span>Información centralizada</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Exploración de especies</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Propuesta de innovación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto del desarrollador */}
      <section
        className="zoomundo-contact-section"
        id="contacto-desarrollador"
      >
        <div className="zoomundo-contact-glow" />

        <div className="zoomundo-contact-inner">
          <div className="zoomundo-contact-icon">
            <Send size={27} />
          </div>

          <span className="zoomundo-contact-kicker">
            ¿TIENES UNA IDEA EN MENTE?
          </span>

          <h2>
            ¿Te gustó ZooMundo?
            <br />
            <span>Hablemos de tu próximo proyecto.</span>
          </h2>

          <p>
            Soy Harold Quiroz, desarrollador de software. Si te interesa esta
            propuesta, quieres conocer más sobre su desarrollo o necesitas una
            solución digital para tu negocio, estaré encantado de conversar
            contigo.
          </p>

          <div className="zoomundo-contact-buttons">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zoomundo-button zoomundo-button-primary"
            >
              <Send size={18} />
              Contactar por WhatsApp
              <ArrowRight size={17} />
            </a>

            <a
              href={EMAIL_URL}
              className="zoomundo-button zoomundo-button-outline"
            >
              <Mail size={18} />
              Enviar un correo
            </a>
          </div>

          <div className="zoomundo-contact-details">
            <a href={EMAIL_URL}>
              <AtSign size={16} />
              hjqc@outlook.es
            </a>

            <a
              href="https://github.com/Haroldquiroz17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={16} />
              GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="zoomundo-footer">
        <div className="zoomundo-footer-inner">
          <Link to="/proyectos" className="zoomundo-footer-brand">
            <span className="zoomundo-footer-logo">
              <PawPrint size={21} />
            </span>
            <span>
              <strong>ZooMundo</strong>
              <small>Proyecto móvil</small>
            </span>
          </Link>

          <p>
            Propuesta personal de innovación digital para el entorno
            zoológico. No representa un servicio oficial del zoológico.
          </p>

          <Link to="/proyectos" className="zoomundo-footer-link">
            Regresar al portafolio
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="zoomundo-footer-bottom">
          <span>© {new Date().getFullYear()} Harold Quiroz</span>
          <span>Diseñado con propósito y tecnología.</span>
        </div>
      </footer>
    </main>
  );
}

export default ZooMundo;
