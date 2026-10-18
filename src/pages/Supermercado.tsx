
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  EyeOff,
  MessageCircle,
  Package,
  Pencil,
  PlayCircle,
  ShoppingBasket,
  Star,
  Tags,
  Trash2,
  Users,
  Wrench,
} from "lucide-react";
import "./Supermercado.css";

const Supermercado = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, vi tu portafolio y me interesa desarrollar un sistema administrativo para mi negocio. Me gustaría conversar sobre una propuesta."
  );

  const whatsappUrl = `https://wa.me/51964618454?text=${whatsappMessage}`;

  const functionalities = [
    {
      icon: Users,
      title: "Gestión de clientes",
      description:
        "Registro de clientes con nombre, correo electrónico, teléfono y dirección, junto con opciones para editar, eliminar u ocultar su información.",
    },
    {
      icon: Package,
      title: "Gestión de productos",
      description:
        "Administración de productos con nombre, descripción, categoría, marca, peso y otros datos necesarios para su organización.",
    },
    {
      icon: Tags,
      title: "Precios y descuentos",
      description:
        "Registro de precios, porcentajes de descuento y categorías para organizar los productos del supermercado.",
    },
    {
      icon: ShoppingBasket,
      title: "Control de inventario",
      description:
        "Gestión de existencias mediante el registro y la actualización del stock disponible de cada producto.",
    },
    {
      icon: Star,
      title: "Calificación de productos",
      description:
        "Campo de rating para registrar la calificación asociada a los productos administrados en el sistema.",
    },
    {
      icon: EyeOff,
      title: "Acciones administrativas",
      description:
        "Opciones de edición, eliminación y ocultación de registros para facilitar la administración de clientes y productos.",
    },
  ];

  const technologies = [
    {
      name: "Vite",
      description: "Entorno de desarrollo",
      icon: Wrench,
    },
    {
      name: "React",
      description: "Construcción de interfaces",
      icon: Code2,
    },
    {
      name: "TypeScript",
      description: "Tipado y organización del código",
      icon: CheckCircle2,
    },
    {
      name: "JavaScript",
      description: "Lógica e interactividad",
      icon: Database,
    },
  ];

  return (
    <main className="supermarket-page">
      {/* NAVEGACIÓN */}
      <div className="supermarket-topbar">
        <Link to="/proyectos" className="supermarket-back-link">
          <ArrowLeft size={18} />
          <span>Volver a proyectos</span>
        </Link>

        <span className="supermarket-topbar-label">
          Proyecto de portafolio
        </span>
      </div>

      {/* PORTADA: TEXTO A LA IZQUIERDA E IMAGEN A LA DERECHA */}
      <section className="supermarket-hero">
        <div className="supermarket-hero-inner">
          <div className="supermarket-hero-content">
            <div className="supermarket-hero-badge">
              <CheckCircle2 size={15} />
              Proyecto de desarrollo web
            </div>

            <span className="supermarket-eyebrow">
              SISTEMA ADMINISTRATIVO
            </span>

            <h1>
              Super<span>market.</span>
            </h1>

            <p className="supermarket-hero-description">
              Una primera aproximación al desarrollo de un sistema
              administrativo para organizar clientes, productos e inventario
              desde una misma interfaz.
            </p>

            <div className="supermarket-hero-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
            </div>

            <a
              href="#supermarket-demo"
              className="supermarket-primary-button"
            >
              <PlayCircle size={19} />
              Ver demostración
            </a>

            <div className="supermarket-hero-meta">
              <span>
                <Code2 size={16} />
                Desarrollo frontend
              </span>

              <span>
                <Package size={16} />
                Gestión administrativa
              </span>
            </div>
          </div>

          <div className="supermarket-hero-visual">
            <div className="supermarket-hero-glow" />

            <div className="supermarket-hero-image">
              <img
                src="/images/proyectos/supermercado.png"
                alt="Vista principal del sistema administrativo Supermarket"
              />
            </div>

            <div className="supermarket-hero-image-caption">
              <div className="supermarket-hero-image-icon">
                <ShoppingBasket size={22} />
              </div>

              <div>
                <strong>Sistema Supermarket</strong>
                <span>Gestión y organización de datos</span>
              </div>

              <CheckCircle2
                className="supermarket-hero-image-check"
                size={21}
              />
            </div>

            <div className="supermarket-hero-floating">
              <div className="supermarket-hero-floating-icon">
                <Database size={19} />
              </div>

              <div>
                <strong>Panel administrativo</strong>
                <span>Interfaz de gestión</span>
              </div>
            </div>
          </div>
        </div>

        <div className="supermarket-hero-index">
          PROYECTO 05 <span>·</span> PORTAFOLIO
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="supermarket-section supermarket-intro">
        <div className="supermarket-section-heading">
          <span className="supermarket-section-kicker">
            01 / DESCRIPCIÓN
          </span>

          <h2>Un proyecto para aprender y construir</h2>
        </div>

        <div className="supermarket-intro-content">
          <p>
            Supermarket es uno de mis primeros proyectos de desarrollo web.
            Su propósito es ofrecer una interfaz administrativa desde la que
            se puedan gestionar registros de clientes y productos de un
            supermercado.
          </p>

          <p>
            El proyecto me permitió trabajar con componentes de React,
            TypeScript, JavaScript y herramientas de desarrollo con Vite,
            además de explorar operaciones habituales de administración de
            datos, como crear, editar, ocultar y eliminar registros.
          </p>

          <div className="supermarket-status">
            <span className="supermarket-status-dot" />

            <div>
              <strong>Estado: en desarrollo</strong>

              <p>
                Es una versión temprana que todavía necesita mejoras y
                funcionalidades adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DE DEMOSTRACIÓN */}
      <section
        className="supermarket-section supermarket-demo-section"
        id="supermarket-demo"
      >
        <div className="supermarket-section-heading">
          <span className="supermarket-section-kicker">
            02 / DEMOSTRACIÓN
          </span>

          <h2>Conoce el sistema</h2>

          <p>
            Reproduce el video para observar la interfaz y algunas de las
            funcionalidades desarrolladas hasta el momento.
          </p>
        </div>

        <div className="supermarket-video-card">
          <div className="supermarket-video-header">
            <div className="supermarket-video-title">
              <PlayCircle size={21} />
              <span>Recorrido del proyecto</span>
            </div>

            <span className="supermarket-video-format">
              VIDEO DEMO
            </span>
          </div>

          <video
            className="supermarket-video"
            controls
            preload="metadata"
            playsInline
            aria-label="Video de demostración del sistema Supermarket"
          >
            <source
              src="/videos/supermercado.mp4"
              type="video/mp4"
            />

            Tu navegador no puede reproducir este video. Prueba con otro
            navegador compatible con MP4.
          </video>

          <p className="supermarket-video-caption">
            Demostración de una versión temprana del sistema administrativo.
          </p>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="supermarket-section">
        <div className="supermarket-section-heading">
          <span className="supermarket-section-kicker">
            03 / FUNCIONALIDADES
          </span>

          <h2>¿Qué permite gestionar?</h2>

          <p>
            Estas son las principales áreas contempladas en el proyecto.
          </p>
        </div>

        <div className="supermarket-features-grid">
          {functionalities.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="supermarket-feature-card"
                key={feature.title}
              >
                <div className="supermarket-feature-icon">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="supermarket-record-actions">
          <div className="supermarket-record-icon">
            <Pencil size={20} />
          </div>

          <div className="supermarket-record-copy">
            <h3>Operaciones sobre los registros</h3>

            <p>
              La propuesta incluye acciones de administración para modificar,
              retirar u ocultar registros según las necesidades de la
              interfaz.
            </p>
          </div>

          <div
            className="supermarket-action-icons"
            aria-label="Acciones del sistema"
          >
            <span title="Editar">
              <Pencil size={17} />
            </span>

            <span title="Eliminar">
              <Trash2 size={17} />
            </span>

            <span title="Ocultar">
              <EyeOff size={17} />
            </span>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="supermarket-tech-section">
        <div className="supermarket-section supermarket-tech-inner">
          <div className="supermarket-section-heading">
            <span className="supermarket-section-kicker">
              04 / TECNOLOGÍAS
            </span>

            <h2>Herramientas utilizadas</h2>

            <p>
              Tecnologías empleadas en la construcción de la interfaz y el
              desarrollo del proyecto.
            </p>
          </div>

          <div className="supermarket-tech-grid">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  className="supermarket-tech-card"
                  key={technology.name}
                >
                  <div className="supermarket-tech-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{technology.name}</h3>
                    <p>{technology.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEJORAS FUTURAS */}
      <section className="supermarket-section">
        <div className="supermarket-future-card">
          <div className="supermarket-future-icon">
            <Wrench size={25} />
          </div>

          <div className="supermarket-future-content">
            <span className="supermarket-section-kicker">
              05 / PRÓXIMAS MEJORAS
            </span>

            <h2>Un proyecto con espacio para crecer</h2>

            <p>
              Al ser uno de mis primeros trabajos, Supermarket representa una
              etapa de aprendizaje. Entre los siguientes pasos se contempla
              perfeccionar la interfaz, ampliar las funcionalidades y reforzar
              la gestión de los datos.
            </p>

            <p className="supermarket-transparency-note">
              <strong>Importante:</strong> el sistema continúa en desarrollo.
              El video muestra una demostración del proyecto y no implica que
              exista una versión pública terminada o desplegada.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="supermarket-contact-section">
        <div className="supermarket-contact-decoration supermarket-contact-decoration-one" />

        <div className="supermarket-contact-decoration supermarket-contact-decoration-two" />

        <div className="supermarket-contact-content">
          <span className="supermarket-contact-kicker">
            ¿TIENES UNA IDEA PARA TU NEGOCIO?
          </span>

          <h2>Hagamos realidad tu próximo proyecto</h2>

          <p>
            Si necesitas una página web o un sistema administrativo adaptado
            a tu negocio, conversemos sobre tus necesidades y las
            funcionalidades que te gustaría implementar.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="supermarket-whatsapp-button"
          >
            <MessageCircle size={20} />
            Contactarme por WhatsApp
          </a>

          <span className="supermarket-contact-footnote">
            Cuéntame tu idea y exploremos una propuesta a tu medida.
          </span>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="supermarket-footer">
        <div className="supermarket-footer-inner">
          <div className="supermarket-footer-brand">
            <ShoppingBasket size={20} />
            <span>SUPERMARKET</span>
          </div>

          <p>Un proyecto de aprendizaje en desarrollo web.</p>

          <Link to="/proyectos" className="supermarket-footer-link">
            Explorar proyectos <ArrowLeft size={15} />
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Supermercado;
