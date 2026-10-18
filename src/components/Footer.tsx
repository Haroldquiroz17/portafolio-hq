
import {
  Code2,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer-hq">
      <div className="footer-hq-contenedor">
        {/* PRESENTACIÓN Y MARCA */}
        <div className="footer-hq-principal">
          <Link to="/inicio" className="footer-hq-marca">
            <span className="footer-hq-logo">
              <Code2 size={25} />
            </span>

            <span className="footer-hq-identidad">
              <span className="footer-hq-nombre">
                HAROLD <strong>QUIROZ</strong>
              </span>

              <span className="footer-hq-subtitulo">
                Desarrollo de software
              </span>
            </span>
          </Link>

          <p className="footer-hq-descripcion">
            Creo experiencias digitales modernas, sitios web funcionales
            y soluciones tecnológicas enfocadas en las necesidades de
            cada proyecto.
          </p>

          <span className="footer-hq-etiqueta">
            Desarrollo web · Soluciones digitales
          </span>

          {/* GITHUB */}
          <div>
            <a
              href="https://github.com/Haroldquiroz17"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-hq-github"
              aria-label="Visitar mi perfil de GitHub"
            >
              <Code2 size={19} />
              <span>Visitar mi GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div className="footer-hq-columna">
          <h3>Explora</h3>

          <nav
            className="footer-hq-enlaces"
            aria-label="Navegación del pie de página"
          >
            <Link to="/inicio">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/sobre-mi">Sobre mí</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        {/* CONTACTO */}
        <div className="footer-hq-columna footer-hq-contacto">
          <h3>Hablemos</h3>

          <p className="footer-hq-contacto-texto">
            ¿Tienes una idea o proyecto? Puedes contactarme directamente.
          </p>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/51964618454"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-hq-contacto-item"
            aria-label="Contactarme por WhatsApp"
          >
            <span className="footer-hq-contacto-icono">
              <MessageCircle size={19} />
            </span>

            <span>
              <small>WhatsApp</small>
              <strong>+51 964 618 454</strong>
            </span>

            <ArrowUpRight
              size={16}
              className="footer-hq-flecha"
            />
          </a>

          {/* CORREO ELECTRÓNICO */}
          <a
            href="mailto:hjqc@outlook.es"
            className="footer-hq-contacto-item"
            aria-label="Enviarme un correo electrónico"
          >
            <span className="footer-hq-contacto-icono">
              <Mail size={19} />
            </span>

            <span>
              <small>Correo electrónico</small>
              <strong>hjqc@outlook.es</strong>
            </span>

            <ArrowUpRight
              size={16}
              className="footer-hq-flecha"
            />
          </a>
        </div>
      </div>

      {/* FRANJA INFERIOR */}
      <div className="footer-hq-inferior">
        <p>
          © {anioActual} <strong>Harold Quiroz</strong>.
          Todos los derechos reservados.
        </p>

        <button
          type="button"
          className="footer-hq-volver"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Volver arriba <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
