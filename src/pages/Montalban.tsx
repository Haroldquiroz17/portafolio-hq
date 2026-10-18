
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChefHat,
  ClipboardList,
  ExternalLink,
  Heart,
  LayoutGrid,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Palette,
  ShoppingBag,
  Star,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Montalban.css";

const FIGMA_URL =
  "https://www.figma.com/proto/F6lTFVswpMbJw23AXdsbAB/PASTELERIA-MONTALVAN?node-id=221-5001&p=f&t=wskYKSMmlXPi1q6g-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=221%3A5001";

const WHATSAPP_URL =
  "https://wa.me/51964618454?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20desarrollar%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.";

const tecnologias = [
  "Figma",
  "Diseño UI/UX",
  "Prototipado interactivo",
  "Diseño de interfaces",
  "Diseño centrado en el usuario",
];

const funcionalidades = [
  {
    icono: <ChefHat size={25} />,
    titulo: "Presentación de la panadería",
    descripcion:
      "Una experiencia visual que comunica la identidad artesanal del negocio, su historia y su propuesta gastronómica.",
  },
  {
    icono: <UtensilsCrossed size={25} />,
    titulo: "Carta y catálogo",
    descripcion:
      "Secciones para explorar productos de panadería, tortas, postres, rollos y otras especialidades, además de consultar el catálogo con precios.",
  },
  {
    icono: <ShoppingBag size={25} />,
    titulo: "Experiencia de compra simulada",
    descripcion:
      "Prototipo de selección de productos, elección de tamaños, carrito, favoritos y consulta de pedidos.",
  },
  {
    icono: <MousePointerClick size={25} />,
    titulo: "Navegación interactiva",
    descripcion:
      "Recorridos entre las secciones, fichas de productos, filtros de categorías y mensajes visuales de confirmación.",
  },
  {
    icono: <MessageCircle size={25} />,
    titulo: "Contacto y atención",
    descripcion:
      "Diseño de una sección de contacto con información del establecimiento, formulario y acceso a WhatsApp.",
  },
  {
    icono: <Star size={25} />,
    titulo: "Testimonios y contenido",
    descripcion:
      "Espacios para opiniones de clientes, historias del equipo y contenido relacionado con la panadería.",
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Organización del contenido",
    descripcion:
      "Distribución de las secciones para facilitar el acceso a la información, los productos y los medios de contacto.",
  },
  {
    numero: "02",
    titulo: "Diseño de la experiencia",
    descripcion:
      "Propuesta visual cálida y elegante, con una jerarquía clara para destacar los productos y sus precios.",
  },
  {
    numero: "03",
    titulo: "Prototipado de interacciones",
    descripcion:
      "Representación de los principales recorridos del usuario, desde la exploración del catálogo hasta la simulación de un pedido.",
  },
];

function Montalban() {
  return (
    <main className="montalban-page">
      <div className="montalban-topbar">
        <div className="montalban-container montalban-topbar-inner">
          <Link to="/proyectos" className="montalban-back">
            <ArrowLeft size={17} />
            <span>Volver a proyectos</span>
          </Link>

          <span className="montalban-topbar-label">
            PORTAFOLIO / DISEÑO UI/UX
          </span>
        </div>
      </div>

      {/* PORTADA */}
      <section className="montalban-hero">
        <div className="montalban-container montalban-hero-grid">
          <div className="montalban-hero-content">
            <span className="montalban-eyebrow">
              <span className="montalban-eyebrow-dot" />
              PROYECTO DE DISEÑO DIGITAL
            </span>

            <h1>
              Panadería
              <span>Montalvan.</span>
            </h1>

            <p className="montalban-hero-description">
              Una experiencia digital inspirada en el mundo de la panadería
              artesanal, donde los productos, la identidad del negocio y una
              navegación intuitiva se unen en un prototipo interactivo.
            </p>

            <div className="montalban-hero-location">
              <MapPin size={17} />
              <span>Piura, Perú</span>
              <span className="montalban-location-separator">·</span>
              <span>Panadería y pastelería</span>
            </div>

            <div className="montalban-hero-actions">
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="montalban-button montalban-button-primary"
              >
                Explorar prototipo
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#montalban-funcionalidades"
                className="montalban-button montalban-button-secondary"
              >
                Conocer el proyecto
              </a>
            </div>

            <div className="montalban-hero-note">
              <CheckCircle2 size={16} />
              <span>Prototipo interactivo realizado en Figma</span>
            </div>
          </div>

          <div className="montalban-cover-wrap">
            <div className="montalban-cover-decoration" />

            <div className="montalban-cover-card">
              <img
                src="/images/proyectos/montalban.png"
                alt="Portada del proyecto de diseño digital Panadería Montalbán"
                className="montalban-cover-image"
                loading="eager"
              />

              <div className="montalban-cover-caption">
                <div>
                  <span className="montalban-cover-caption-label">
                    PROYECTO DESTACADO
                  </span>
                  <h2>Tradición y sabor</h2>
                </div>

                <div className="montalban-cover-icon">
                  <ChefHat size={23} />
                </div>
              </div>
            </div>

            <div className="montalban-floating-badge">
              <Palette size={19} />
              <div>
                <strong>Diseño visual</strong>
                <span>Experiencia de usuario</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN DEL PROYECTO */}
      <section className="montalban-project-info">
        <div className="montalban-container montalban-info-grid">
          <div className="montalban-info-item">
            <span className="montalban-info-label">TIPO DE PROYECTO</span>
            <strong>Prototipo web</strong>
          </div>

          <div className="montalban-info-item">
            <span className="montalban-info-label">HERRAMIENTA</span>
            <strong>Figma</strong>
          </div>

          <div className="montalban-info-item">
            <span className="montalban-info-label">ENFOQUE</span>
            <strong>Diseño UI/UX</strong>
          </div>

          <div className="montalban-info-item">
            <span className="montalban-info-label">ESTADO</span>
            <strong>Prototipo interactivo</strong>
          </div>
        </div>
      </section>

      {/* SOBRE EL PROYECTO */}
      <section className="montalban-section montalban-about">
        <div className="montalban-container montalban-about-grid">
          <div className="montalban-section-heading">
            <span className="montalban-section-kicker">
              <span>01</span> SOBRE EL PROYECTO
            </span>

            <h2>
              Una experiencia digital con
              <em> esencia artesanal.</em>
            </h2>
          </div>

          <div className="montalban-about-text">
            <p>
              Panadería Montalbán es un negocio real de panadería y pastelería
              en Piura. Este proyecto presenta una propuesta de experiencia
              digital diseñada para organizar su contenido, mostrar sus
              productos y facilitar la exploración de su catálogo.
            </p>

            <p>
              El prototipo reúne distintas pantallas y recorridos para
              representar cómo una persona podría conocer la marca, consultar
              precios, explorar especialidades y visualizar el proceso de
              selección de productos.
            </p>

            <div className="montalban-highlight">
              <div className="montalban-highlight-icon">
                <LayoutGrid size={23} />
              </div>

              <div>
                <strong>Diseño pensado para el usuario</strong>
                <p>
                  Una estructura clara que conecta el contenido de la marca
                  con las necesidades de sus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        className="montalban-section montalban-features"
        id="montalban-funcionalidades"
      >
        <div className="montalban-container">
          <div className="montalban-centered-heading">
            <span className="montalban-section-kicker">
              <span>02</span> FUNCIONALIDADES DISEÑADAS
            </span>

            <h2>Mucho más que un catálogo</h2>

            <p>
              El prototipo representa diferentes partes de una experiencia
              digital para una panadería y pastelería.
            </p>
          </div>

          <div className="montalban-features-grid">
            {funcionalidades.map((funcionalidad) => (
              <article
                className="montalban-feature-card"
                key={funcionalidad.titulo}
              >
                <div className="montalban-feature-icon">
                  {funcionalidad.icono}
                </div>

                <h3>{funcionalidad.titulo}</h3>
                <p>{funcionalidad.descripcion}</p>

                <span className="montalban-feature-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA DEL USUARIO */}
      <section className="montalban-section montalban-experience">
        <div className="montalban-container montalban-experience-grid">
          <div className="montalban-experience-copy">
            <span className="montalban-section-kicker">
              <span>03</span> RECORRIDO DEL USUARIO
            </span>

            <h2>
              Del primer vistazo a la
              <em> selección del producto.</em>
            </h2>

            <p>
              La navegación del prototipo busca que cada persona encuentre
              fácilmente las categorías, consulte los detalles de los
              productos y explore una representación del proceso de pedido.
            </p>

            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="montalban-text-link"
            >
              Recorrer las pantallas en Figma
              <ExternalLink size={17} />
            </a>
          </div>

          <div className="montalban-steps">
            {proceso.map((paso) => (
              <article className="montalban-step" key={paso.numero}>
                <div className="montalban-step-number">{paso.numero}</div>

                <div>
                  <h3>{paso.titulo}</h3>
                  <p>{paso.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTIDAD VISUAL */}
      <section className="montalban-section montalban-design">
        <div className="montalban-container">
          <div className="montalban-design-panel">
            <div className="montalban-design-copy">
              <span className="montalban-section-kicker">
                <span>04</span> IDENTIDAD VISUAL
              </span>

              <h2>Calidez en cada detalle.</h2>

              <p>
                La propuesta busca transmitir cercanía, tradición y calidad
                mediante una presentación cuidada, una organización visual
                consistente y una navegación fácil de comprender.
              </p>

              <div className="montalban-tech-list">
                {tecnologias.map((tecnologia) => (
                  <span key={tecnologia}>{tecnologia}</span>
                ))}
              </div>
            </div>

            <div className="montalban-palette">
              <div className="montalban-color-swatch montalban-color-cream">
                <span>Crema</span>
                <small>#F7F0E5</small>
              </div>

              <div className="montalban-color-swatch montalban-color-brown">
                <span>Marrón</span>
                <small>#563A2D</small>
              </div>

              <div className="montalban-color-swatch montalban-color-gold">
                <span>Dorado</span>
                <small>#C5A46D</small>
              </div>

              <div className="montalban-color-swatch montalban-color-white">
                <span>Blanco</span>
                <small>#FFFFFF</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR DEL PROYECTO */}
      <section className="montalban-section montalban-learning">
        <div className="montalban-container montalban-learning-grid">
          <div className="montalban-learning-intro">
            <span className="montalban-section-kicker">
              <span>05</span> VALOR DEL PROYECTO
            </span>

            <h2>Diseñar antes de desarrollar.</h2>

            <p>
              Un prototipo permite visualizar la estructura de una web,
              recorrer sus pantallas y evaluar la organización de la
              información antes de implementar una solución completa.
            </p>
          </div>

          <div className="montalban-learning-points">
            <div>
              <ClipboardList size={22} />
              <span>Organización de contenido y categorías.</span>
            </div>

            <div>
              <Users size={22} />
              <span>Diseño orientado a las necesidades del cliente.</span>
            </div>

            <div>
              <MousePointerClick size={22} />
              <span>Representación visual de interacciones.</span>
            </div>

            <div>
              <Heart size={22} />
              <span>Construcción de una identidad visual coherente.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: EXPLORAR FIGMA */}
      <section className="montalban-cta-section">
        <div className="montalban-container">
          <div className="montalban-cta-card">
            <div className="montalban-cta-decoration">
              <ChefHat size={65} strokeWidth={1} />
            </div>

            <span className="montalban-cta-eyebrow">
              DESCUBRE EL PROTOTIPO
            </span>

            <h2>Explora la experiencia Montalbán.</h2>

            <p>
              Conoce las pantallas, navega por las secciones y descubre la
              propuesta visual del proyecto directamente en Figma.
            </p>

            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="montalban-button montalban-button-light"
            >
              Abrir prototipo en Figma
              <ArrowUpRight size={18} />
            </a>

            <small>
              La navegación y las compras representadas son parte de una
              simulación de diseño.
            </small>
          </div>
        </div>
      </section>

      {/* CTA: CONTACTO PROFESIONAL */}
      <section className="montalban-contact-section">
        <div className="montalban-container">
          <div className="montalban-contact-card">
            <span className="montalban-contact-eyebrow">
              ¿TIENES UNA IDEA EN MENTE?
            </span>

            <h2>
              ¿Te gustaría llevar esta propuesta a tu negocio?
            </h2>

            <p>
              Si te gusta este diseño y quieres una página web similar para tu
              negocio, puedo ayudarte a convertir una propuesta visual en un
              sitio web desarrollado y adaptado a tus necesidades.
            </p>

            <p>
              Podemos conversar sobre tu idea, las funcionalidades que
              necesitas y cómo llevarla a una experiencia web real.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="montalban-contact-button"
            >
              <MessageCircle size={21} />
              Hablemos por WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <span className="montalban-contact-note">
              Cuéntame tu idea y conversemos sobre tu proyecto.
            </span>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="montalban-footer">
        <div className="montalban-container montalban-footer-inner">
          <Link to="/proyectos" className="montalban-footer-back">
            <ArrowLeft size={16} />
            Regresar al portafolio
          </Link>

          <span>Panadería Montalbán · Proyecto de diseño UI/UX</span>
        </div>
      </footer>
    </main>
  );
}

export default Montalban;
