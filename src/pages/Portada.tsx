
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Monitor,
  Smartphone,
  Sparkles,
  Braces,
} from "lucide-react";

import "./Portada.css";

function Portada() {
  return (
    <main className="portada">
      <div className="portada-grid" aria-hidden="true" />

      {/* ENCABEZADO */}
      <header className="portada-header">
        <Link to="/inicio" className="portada-marca">
          <span className="portada-marca-icono">
            <Code2 size={22} />
          </span>

          <span>
            HQC<span className="portada-punto">.</span>
          </span>
        </Link>

        <span className="portada-etiqueta">
          PORTAFOLIO PERSONAL
        </span>
      </header>

      {/* PRESENTACIÓN PRINCIPAL */}
      <section className="portada-contenido">
        <div className="portada-presentacion">
          <div className="portada-disponible">
            <span className="portada-indicador" />
            DESARROLLO WEB Y TECNOLOGÍA
          </div>

          {/* FOTO Y NOMBRE */}
          <div className="portada-identidad">
            <div className="portada-foto">
              <img
                src="/public/images/perfil.jpg"
                alt="Fotografía de Harold Quiroz"
              />
            </div>

            <div className="portada-nombre">
              <p className="portada-saludo">
                Hola, soy
              </p>

              <h1>
                Harold
                <br />
                <span>Quiroz.</span>
              </h1>
            </div>
          </div>

          {/* ESPECIALIDAD */}
          <div className="portada-profesion">
            <span className="portada-linea" />

            FRONTEND & BACKEND

            <span className="portada-separador">&</span>

            WEB DEVELOPER
          </div>

          {/* DESCRIPCIÓN */}
          <p className="portada-descripcion">
            Creo experiencias digitales combinando diseño,
            desarrollo y tecnología para transformar ideas
            en proyectos funcionales.
          </p>

          {/* ESPECIALIDADES */}
          <div className="portada-especialidades">
            <span>
              <Monitor size={16} />
              Desarrollo web
            </span>

            <span>
              <Smartphone size={16} />
              Aplicaciones
            </span>

            <span>
              <Sparkles size={16} />
              IA aplicada
            </span>
          </div>

          {/* BOTÓN PARA ENTRAR */}
          <Link
            to="/inicio"
            className="portada-boton"
          >
            <span>Explorar mi portafolio</span>

            <span className="portada-boton-icono">
              <ArrowRight size={19} />
            </span>
          </Link>

          <p className="portada-nota">
            Explora mis proyectos, habilidades y experiencia.
          </p>
        </div>

        {/* PANEL TECNOLÓGICO */}
        <div
          className="portada-visual"
          aria-hidden="true"
        >
          <div className="portada-orbita portada-orbita-1" />
          <div className="portada-orbita portada-orbita-2" />

          <div className="portada-panel">
            <div className="portada-panel-cabecera">
              <div className="portada-ventana-puntos">
                <span />
                <span />
                <span />
              </div>

              <span className="portada-panel-titulo">
                developer.ts
              </span>

              <Braces size={17} />
            </div>

            <div className="portada-codigo">
              <p>
                <span className="codigo-numero">01</span>
                <span className="codigo-morado">const</span>{" "}
                <span className="codigo-azul">developer</span>{" "}
                = {"{"}
              </p>

              <p>
                <span className="codigo-numero">02</span>
                &nbsp;&nbsp;nombre:{" "}
                <span className="codigo-verde">"Harold"</span>,
              </p>

              <p>
                <span className="codigo-numero">03</span>
                &nbsp;&nbsp;frontend:{" "}
                <span className="codigo-verde">true</span>,
              </p>

              <p>
                <span className="codigo-numero">04</span>
                &nbsp;&nbsp;backend:{" "}
                <span className="codigo-verde">true</span>,
              </p>

              <p>
                <span className="codigo-numero">05</span>
                &nbsp;&nbsp;enfoque: [
              </p>

              <p>
                <span className="codigo-numero">06</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="codigo-verde">"Web"</span>,
              </p>

              <p>
                <span className="codigo-numero">07</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="codigo-verde">"Apps"</span>,
              </p>

              <p>
                <span className="codigo-numero">08</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="codigo-verde">"Innovación"</span>
              </p>

              <p>
                <span className="codigo-numero">09</span>
                &nbsp;&nbsp;]
              </p>

              <p>
                <span className="codigo-numero">10</span>
                {"}"};
              </p>

              <p className="portada-codigo-final">
                <span className="codigo-numero">11</span>
                <span className="codigo-morado">export default</span>{" "}
                <span className="codigo-azul">developer</span>;
              </p>
            </div>

            <div className="portada-panel-pie">
              <span className="portada-pie-icono">
                <Code2 size={15} />
              </span>

              <span>Ideas convertidas en código</span>

              <span className="portada-pie-estado">●</span>
            </div>
          </div>

          {/* ETIQUETAS FLOTANTES */}
          <div className="portada-flotante portada-flotante-1">
            <Code2 size={20} />
            <span>Creatividad + código</span>
          </div>

          <div className="portada-flotante portada-flotante-2">
            <Sparkles size={19} />
            <span>Innovación digital</span>
          </div>
        </div>
      </section>

      {/* PIE DE PORTADA */}
      <footer className="portada-footer">
        <span>
          HAROLD QUIROZ · PORTAFOLIO DE DESARROLLO
        </span>

        <span>
          DISEÑADO CON PROPÓSITO{" "}
          <span className="portada-punto">✦</span>
        </span>
      </footer>
    </main>
  );
}

export default Portada;
