
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import "./Contacto.css";

const contactos = [
  {
    nombre: "WhatsApp",
    descripcion: "Conversemos directamente sobre tu idea o proyecto.",
    detalle: "Disponible para conversar",
    enlace: "https://wa.me/51TU_NUMERO",
    icono: MessageCircle,
    clase: "contacto-whatsapp",
    textoBoton: "Escribirme",
  },
  {
    nombre: "Correo electrónico",
    descripcion: "Envíame un mensaje para consultas y oportunidades.",
    detalle: "Contacto profesional",
    enlace: "mailto:TU_CORREO@ejemplo.com",
    icono: Mail,
    clase: "contacto-correo",
    textoBoton: "Enviar correo",
  },
  {
    nombre: "GitHub",
    descripcion: "Explora mis proyectos y trabajos de desarrollo.",
    detalle: "Código y proyectos",
    enlace: "https://github.com/Haroldquiroz17",
    icono: Code2,
    clase: "contacto-github",
    textoBoton: "Ver GitHub",
  },
  {
    nombre: "LinkedIn",
    descripcion: "Conectemos profesionalmente y exploremos oportunidades.",
    detalle: "Red profesional",
    enlace: "https://www.linkedin.com/in/harold-quiroz-carrillo-57479b445/",
    icono: BriefcaseBusiness,
    clase: "contacto-linkedin",
    textoBoton: "Ver LinkedIn",
  },
];

export default function Contacto() {
  return (
    <main className="contacto">
      <section className="contacto-hero">
        <div className="contacto-etiqueta">
          <Sparkles size={16} />
          <span>CONTACTO</span>
        </div>

        <h1>
          Hablemos de tu próximo <span>proyecto.</span>
        </h1>

        <p className="contacto-descripcion">
          Conectemos para conversar sobre proyectos, ideas y oportunidades
          profesionales. Estoy dispuesto a aprender, colaborar y aportar
          soluciones.
        </p>

        <a href="#contacto-opciones" className="contacto-scroll">
          Explorar formas de contacto
          <ArrowDownRight size={18} />
        </a>
      </section>

      <section
        className="contacto-opciones"
        id="contacto-opciones"
        aria-label="Opciones de contacto"
      >
        <div className="contacto-seccion-titulo">
          <div>
            <span className="contacto-subtitulo">ESTOY A UN MENSAJE</span>
            <h2>¿Cómo podemos conectar?</h2>
          </div>

          <p>
            Elige el canal que prefieras para comunicarte conmigo.
          </p>
        </div>

        <div className="contacto-grid">
          {contactos.map((contacto) => {
            const Icono = contacto.icono;

            return (
              <article
                className={`contacto-card ${contacto.clase}`}
                key={contacto.nombre}
              >
                <div className="contacto-card-superior">
                  <div className="contacto-icono">
                    <Icono size={27} strokeWidth={1.8} />
                  </div>

                  <ExternalLink
                    className="contacto-icono-enlace"
                    size={19}
                  />
                </div>

                <span className="contacto-card-detalle">
                  {contacto.detalle}
                </span>

                <h3>{contacto.nombre}</h3>

                <p>{contacto.descripcion}</p>

                <a
                  href={contacto.enlace}
                  className="contacto-card-boton"
                  target={
                    contacto.nombre === "Correo electrónico"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contacto.nombre === "Correo electrónico"
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  {contacto.textoBoton}
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contacto-oportunidades">
        <div className="contacto-oportunidades-icono">
          <BriefcaseBusiness size={28} />
        </div>

        <div className="contacto-oportunidades-texto">
          <span className="contacto-subtitulo">NUEVAS OPORTUNIDADES</span>
          <h2>¿Tienes una propuesta en mente?</h2>
          <p>
            Si buscas colaborar en un proyecto o conversar sobre una
            oportunidad profesional, estaré encantado de leerte.
          </p>
        </div>

        <a
          href="mailto:TU_CORREO@ejemplo.com?subject=Oportunidad%20profesional"
          className="contacto-oportunidades-boton"
        >
          Enviar propuesta
          <Send size={17} />
        </a>
      </section>

      <footer className="contacto-cierre">
        <Code2 size={20} />
        <p>
          Las buenas ideas comienzan con una conversación.
        </p>
      </footer>
    </main>
  );
}
