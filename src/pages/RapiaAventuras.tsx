
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Coins,
  ExternalLink,
  Gamepad2,
  Gauge,
  Heart,
  Mountain,
  Package,
  Shield,
  ShoppingBasket,
  Star,
  Trophy,
  Truck,
  Footprints,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./RapiaAventuras.css";

// ========================================
// CONFIGURACIÓN DEL PROYECTO
// ========================================

const URL_RAPIA = "https://rapia-aventuras.vercel.app/";

const WHATSAPP_HAROLD = "51964618454";

const mensajeWhatsApp =
  "Hola, he visto tu proyecto Rapia Aventuras y me gustaría conversar contigo sobre el desarrollo de videojuegos y proyectos web.";

const enlaceWhatsApp =
  `https://wa.me/${WHATSAPP_HAROLD}?text=${encodeURIComponent(mensajeWhatsApp)}`;

// ========================================
// FUNCIONALIDADES DEL JUEGO
// ========================================

const funcionalidades = [
  {
    numero: "01",
    icono: Mountain,
    titulo: "Aventura de plataformas",
    descripcion:
      "Acompaña a Ernesto en un recorrido de siete niveles, supera obstáculos y avanza hasta completar su importante entrega.",
  },
  {
    numero: "02",
    icono: Coins,
    titulo: "Monedas y recompensas",
    descripcion:
      "Recoge monedas durante la aventura y utilízalas para conseguir mejoras que te ayuden a continuar el recorrido.",
  },
  {
    numero: "03",
    icono: ShoppingBasket,
    titulo: "Tienda de mejoras",
    descripcion:
      "Mejora las zapatillas, aumenta la velocidad y consigue un casco reforzado para preparar a Ernesto para los desafíos.",
  },
  {
    numero: "04",
    icono: Trophy,
    titulo: "Una entrega por completar",
    descripcion:
      "Supera los diferentes niveles y obstáculos para alcanzar el objetivo final: llegar hasta el cliente que espera su pedido.",
  },
];

// ========================================
// MEJORAS DEL PERSONAJE
// ========================================

const mejoras = [
  {
    icono: Footprints,
    nombre: "Zapatillas mejoradas",
    descripcion:
      "Una mejora pensada para ayudar a Ernesto a afrontar el recorrido.",
  },
  {
    icono: Zap,
    nombre: "Velocidad",
    descripcion:
      "Invierte las monedas recogidas para mejorar su capacidad de desplazamiento.",
  },
  {
    icono: Shield,
    nombre: "Casco reforzado",
    descripcion:
      "Una mejora de protección para prepararse ante los desafíos de la aventura.",
  },
];

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function RapiaAventuras() {
  return (
    <div className="rapia-detalle">
      {/* =====================================
          PRESENTACIÓN PRINCIPAL
      ====================================== */}

      <section className="rapia-hero">
        <div className="rapia-contenedor">
          <Link to="/proyectos" className="rapia-volver">
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <div className="rapia-hero-grid">
            <div className="rapia-hero-texto">
              <div className="rapia-etiquetas">
                <span className="rapia-etiqueta">
                  <CheckCircle2 size={15} />
                  Videojuego original
                </span>

                <span className="rapia-etiqueta-secundaria">
                  Juego de plataformas
                </span>
              </div>

              <p className="rapia-sobretitulo">
                PROYECTO DESTACADO · VIDEOJUEGOS
              </p>

              <h1>
                Rapia <span>Aventuras</span>
              </h1>

              <p className="rapia-resumen">
                Una entrega, siete niveles y un repartidor decidido a llegar
                hasta su destino. Acompaña a Ernesto en una aventura de
                plataformas donde las monedas y las mejoras pueden marcar
                la diferencia.
              </p>

              <div className="rapia-hero-acciones">
                <a
                  href={URL_RAPIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rapia-boton rapia-boton-principal"
                >
                  <Gamepad2 size={19} />
                  Jugar ahora
                  <ExternalLink size={17} />
                </a>

                <a
                  href={enlaceWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rapia-boton rapia-boton-secundario"
                >
                  Consultar por WhatsApp
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="rapia-datos">
                <div>
                  <span className="rapia-dato-titulo">
                    Tipo de proyecto
                  </span>
                  <strong>Videojuego web 2D</strong>
                </div>

                <div>
                  <span className="rapia-dato-titulo">
                    Contenido
                  </span>
                  <strong>7 niveles · Monedas · Mejoras</strong>
                </div>

                <div>
                  <span className="rapia-dato-titulo">
                    Plataforma principal
                  </span>
                  <strong>Navegador web</strong>
                </div>
              </div>
            </div>

            <div className="rapia-hero-imagen">
              <div className="rapia-imagen-marco">
                <img
                  src="/images/proyectos/rapia-aventuras.png"
                  alt="Imagen principal del videojuego Rapia Aventuras"
                />
              </div>

              <div className="rapia-imagen-nota">
                <div className="rapia-imagen-nota-icono">
                  <Gamepad2 size={21} />
                </div>

                <div>
                  <strong>La aventura de Ernesto</strong>
                  <span>Tu próximo destino está por delante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          DESCRIPCIÓN DEL PROYECTO
      ====================================== */}

      <section className="rapia-seccion">
        <div className="rapia-contenedor">
          <div className="rapia-descripcion-grid">
            <div className="rapia-titulo-seccion">
              <span className="rapia-numero-seccion">
                01 / SOBRE EL PROYECTO
              </span>

              <h2>
                Una entrega que se convierte en una{" "}
                <span>gran aventura.</span>
              </h2>
            </div>

            <div className="rapia-descripcion-texto">
              <p>
                Rapia Aventuras es un videojuego de plataformas original
                creado por Harold Quiroz. La historia sigue a Ernesto, un
                repartidor que sufre un incidente con su moto y debe continuar
                a pie para completar su entrega.
              </p>

              <p>
                A lo largo de siete niveles, el jugador debe avanzar por
                diferentes escenarios, superar obstáculos, recoger monedas
                y administrar sus recursos para progresar en la aventura.
              </p>

              <p>
                Las monedas también permiten adquirir mejoras para el
                personaje. El objetivo es llegar al final del recorrido y
                entregar el pedido al cliente que está esperando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FUNCIONALIDADES PRINCIPALES
      ====================================== */}

      <section className="rapia-seccion rapia-funcionalidades">
        <div className="rapia-contenedor">
          <div className="rapia-cabecera-seccion">
            <span className="rapia-numero-seccion">
              02 / CARACTERÍSTICAS DEL JUEGO
            </span>

            <h2>
              Cada nivel acerca a Ernesto a su{" "}
              <span>destino.</span>
            </h2>

            <p>
              Una experiencia de plataformas que combina exploración,
              obstáculos, recolección de monedas y progresión mediante
              mejoras.
            </p>
          </div>

          <div className="rapia-funciones-grid">
            {funcionalidades.map((funcion) => {
              const Icono = funcion.icono;

              return (
                <article
                  className="rapia-funcion-card"
                  key={funcion.numero}
                >
                  <div className="rapia-funcion-superior">
                    <div className="rapia-funcion-icono">
                      <Icono size={24} />
                    </div>

                    <span>{funcion.numero}</span>
                  </div>

                  <h3>{funcion.titulo}</h3>
                  <p>{funcion.descripcion}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          RECORRIDO DE LA AVENTURA
      ====================================== */}

      <section className="rapia-seccion">
        <div className="rapia-contenedor">
          <div className="rapia-recorrido">
            <div className="rapia-recorrido-texto">
              <span className="rapia-numero-seccion">
                03 / EL RECORRIDO
              </span>

              <h2>
                De repartidor en moto a una aventura{" "}
                <span>a pie.</span>
              </h2>

              <p>
                La historia comienza con un contratiempo: después de un
                incidente con su moto, Ernesto debe continuar su recorrido
                a pie. A partir de ese momento, cada nivel representa un
                nuevo paso hacia la entrega final.
              </p>

              <a
                href={URL_RAPIA}
                target="_blank"
                rel="noopener noreferrer"
                className="rapia-enlace-texto"
              >
                Descubrir el juego
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="rapia-pasos">
              <div className="rapia-paso">
                <span className="rapia-paso-numero">01</span>

                <div>
                  <h3>Comienza la misión</h3>
                  <p>
                    Ernesto tiene un pedido por entregar y un destino al
                    que necesita llegar.
                  </p>
                </div>
              </div>

              <div className="rapia-paso">
                <span className="rapia-paso-numero">02</span>

                <div>
                  <h3>Continúa a pie</h3>
                  <p>
                    Tras el incidente con la moto, la aventura continúa
                    mediante niveles de plataformas.
                  </p>
                </div>
              </div>

              <div className="rapia-paso">
                <span className="rapia-paso-numero">03</span>

                <div>
                  <h3>Supera obstáculos y recoge monedas</h3>
                  <p>
                    Explora cada nivel, avanza por el recorrido y reúne
                    monedas para invertirlas en mejoras.
                  </p>
                </div>
              </div>

              <div className="rapia-paso">
                <span className="rapia-paso-numero">04</span>

                <div>
                  <h3>Completa los siete niveles</h3>
                  <p>
                    Sigue adelante hasta alcanzar al cliente y completar
                    la misión de entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SISTEMA DE MEJORAS
      ====================================== */}

      <section className="rapia-seccion rapia-mejoras">
        <div className="rapia-contenedor">
          <div className="rapia-cabecera-seccion">
            <span className="rapia-numero-seccion">
              04 / PROGRESIÓN DEL PERSONAJE
            </span>

            <h2>
              Invierte tus monedas y prepárate para el{" "}
              <span>desafío.</span>
            </h2>

            <p>
              Las monedas recogidas durante el recorrido sirven para
              adquirir mejoras y preparar a Ernesto para continuar su misión.
            </p>
          </div>

          <div className="rapia-mejoras-grid">
            {mejoras.map((mejora) => {
              const Icono = mejora.icono;

              return (
                <article
                  className="rapia-mejora-card"
                  key={mejora.nombre}
                >
                  <div className="rapia-mejora-icono">
                    <Icono size={27} />
                  </div>

                  <h3>{mejora.nombre}</h3>
                  <p>{mejora.descripcion}</p>
                </article>
              );
            })}
          </div>

          <div className="rapia-nota-monedas">
            <Coins size={22} />

            <p>
              <strong>Administra tus recursos:</strong> las monedas forman
              parte de la progresión del juego y permiten acceder a mejoras
              para ayudar a Ernesto durante su recorrido.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          TECNOLOGÍAS
      ====================================== */}

      <section className="rapia-seccion rapia-tecnologias">
        <div className="rapia-contenedor">
          <div className="rapia-tecnologias-grid">
            <div>
              <span className="rapia-numero-seccion">
                05 / DESARROLLO
              </span>

              <h2>
                Una idea propia llevada al{" "}
                <span>navegador.</span>
              </h2>

              <p>
                Rapia Aventuras fue concebido como un proyecto de desarrollo
                de videojuegos para web. Su implementación utiliza
                tecnologías del ecosistema frontend para construir y ejecutar
                la experiencia en el navegador.
              </p>
            </div>

            <div className="rapia-tecnologias-lista">
              <div className="rapia-tecnologia">
                <span className="rapia-tecnologia-simbolo">TS</span>

                <div>
                  <strong>TypeScript</strong>
                  <p>
                    Tipado y organización de la lógica del proyecto.
                  </p>
                </div>
              </div>

              <div className="rapia-tecnologia">
                <span className="rapia-tecnologia-simbolo">Re</span>

                <div>
                  <strong>React</strong>
                  <p>
                    Desarrollo de interfaces y componentes de la aplicación.
                  </p>
                </div>
              </div>

              <div className="rapia-tecnologia">
                <span className="rapia-tecnologia-simbolo">Vi</span>

                <div>
                  <strong>Vite</strong>
                  <p>
                    Herramientas de desarrollo y construcción del proyecto.
                  </p>
                </div>
              </div>

              <div className="rapia-tecnologia">
                <span className="rapia-tecnologia-simbolo">
                  <ExternalLink size={21} />
                </span>

                <div>
                  <strong>Vercel</strong>
                  <p>
                    Publicación de la versión web para acceder desde el
                    navegador.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rapia-nota-plataforma">
            <Gamepad2 size={22} />

            <p>
              <strong>Plataforma principal:</strong> el juego está pensado
              principalmente para navegador web de escritorio. Es posible
              abrirlo desde un móvil, aunque la experiencia puede variar
              según el dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          AUTORÍA Y CONTACTO
      ====================================== */}

      <section className="rapia-contacto">
        <div className="rapia-contenedor">
          <div className="rapia-contacto-card">
            <div className="rapia-contacto-icono">
              <Star size={28} />
            </div>

            <span className="rapia-numero-seccion">
              UNA CREACIÓN ORIGINAL
            </span>

            <h2>
              Cada aventura comienza con una{" "}
              <span>idea.</span>
            </h2>

            <p>
              Rapia Aventuras es un proyecto original desarrollado por
              Harold Quiroz, desde la idea del juego hasta la creación de
              su experiencia de plataformas. Un proyecto que combina
              creatividad, programación y desarrollo web.
            </p>

            <div className="rapia-contacto-acciones">
              <a
                href={URL_RAPIA}
                target="_blank"
                rel="noopener noreferrer"
                className="rapia-boton rapia-boton-jugar"
              >
                <Gamepad2 size={19} />
                Jugar Rapia Aventuras
                <ArrowRight size={18} />
              </a>

              <Link
                to="/proyectos"
                className="rapia-boton rapia-boton-volver"
              >
                <ArrowLeft size={17} />
                Volver a proyectos
              </Link>
            </div>

            <p className="rapia-copyright">
              © 2026 Harold Quiroz. Rapia Aventuras.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
