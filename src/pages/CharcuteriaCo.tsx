
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageCircle,
  Package,
  ShoppingBasket,
  Star,
  Utensils,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./CharcuteriaCo.css";

// ========================================
// CONFIGURACIÓN DEL PROYECTO
// ========================================

const URL_CHARCUTERIA = "https://charcuteria-web.vercel.app/";

const WHATSAPP_HAROLD = "51964618454";

const mensajeWhatsApp =
  "Hola, he visto la página web de Charcutería Co y me gustaría implementar una página similar en mi emprendimiento. ¿Podríamos conversar sobre el proyecto?";

const enlaceWhatsApp =
  `https://wa.me/${WHATSAPP_HAROLD}?text=${encodeURIComponent(mensajeWhatsApp)}`;

// ========================================
// FUNCIONALIDADES DEL PROYECTO
// ========================================

const funcionalidades = [
  {
    numero: "01",
    icono: ShoppingBasket,
    titulo: "Catálogo y menú",
    descripcion:
      "Presenta los ingredientes disponibles para preparar las cajas: quesos, toppings, dips, frutas y carnes frías.",
  },
  {
    numero: "02",
    icono: Package,
    titulo: "Arma tu propia caja",
    descripcion:
      "Permite elegir el tamaño de la caja y seleccionar los ingredientes para personalizar el pedido.",
  },
  {
    numero: "03",
    icono: MessageCircle,
    titulo: "Pedidos por WhatsApp",
    descripcion:
      "Genera un resumen del pedido y prepara un mensaje con la selección del cliente para enviarlo por WhatsApp.",
  },
  {
    numero: "04",
    icono: Utensils,
    titulo: "Galería y experiencia gourmet",
    descripcion:
      "Muestra pedidos destacados, información del negocio, precios y reseñas de clientes.",
  },
];

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function CharcuteriaCo() {
  return (
    <div className="charcuteria-detalle">
      {/* =====================================
          PRESENTACIÓN PRINCIPAL
      ====================================== */}

      <section className="charcuteria-hero">
        <div className="charcuteria-contenedor">
          <Link to="/proyectos" className="charcuteria-volver">
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <div className="charcuteria-hero-grid">
            <div className="charcuteria-hero-texto">
              <div className="charcuteria-etiquetas">
                <span className="charcuteria-etiqueta">
                  <CheckCircle2 size={15} />
                  Emprendimiento real
                </span>

                <span className="charcuteria-etiqueta-secundaria">
                  Desarrollo web
                </span>
              </div>

              <p className="charcuteria-sobretitulo">
                PROYECTO DESTACADO · 01
              </p>

              <h1>
                Charcutería <span>Co.</span>
              </h1>

              <p className="charcuteria-resumen">
                Una experiencia digital para descubrir, personalizar y
                solicitar cajas gourmet de una manera práctica y visual.
              </p>

              <div className="charcuteria-hero-acciones">
                <a
                  href={URL_CHARCUTERIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="charcuteria-boton charcuteria-boton-principal"
                >
                  Visitar sitio web
                  <ExternalLink size={18} />
                </a>

                <a
                  href={enlaceWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="charcuteria-boton charcuteria-boton-secundario"
                >
                  <MessageCircle size={18} />
                  Consultar por WhatsApp
                </a>
              </div>

              <div className="charcuteria-datos">
                <div>
                  <span className="charcuteria-dato-titulo">
                    Tipo de proyecto
                  </span>
                  <strong>Sitio web comercial</strong>
                </div>

                <div>
                  <span className="charcuteria-dato-titulo">
                    Tecnologías
                  </span>
                  <strong>React · TypeScript · Tailwind CSS</strong>
                </div>
              </div>
            </div>

            <div className="charcuteria-hero-imagen">
              <div className="charcuteria-imagen-marco">
                <img
                  src="/images/proyectos/charcuteria-co.png"
                  alt="Vista principal del proyecto web Charcutería Co"
                />
              </div>

              <div className="charcuteria-imagen-nota">
                <div className="charcuteria-imagen-nota-icono">
                  <Star size={19} />
                </div>

                <div>
                  <strong>Una experiencia gourmet</strong>
                  <span>Diseño web orientado al cliente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          DESCRIPCIÓN DEL PROYECTO
      ====================================== */}

      <section className="charcuteria-seccion">
        <div className="charcuteria-contenedor">
          <div className="charcuteria-descripcion-grid">
            <div className="charcuteria-titulo-seccion">
              <span className="charcuteria-numero-seccion">
                01 / SOBRE EL PROYECTO
              </span>

              <h2>
                Una vitrina digital para un{" "}
                <span>emprendimiento real.</span>
              </h2>
            </div>

            <div className="charcuteria-descripcion-texto">
              <p>
                Charcutería Co es un emprendimiento dedicado a ofrecer cajas
                gourmet personalizables. Su página web permite conocer la
                propuesta del negocio, explorar los productos y preparar un
                pedido de acuerdo con las preferencias de cada cliente.
              </p>

              <p>
                La experiencia está diseñada para que el usuario pueda
                seleccionar el tipo de caja, elegir sus ingredientes y revisar
                un resumen antes de enviar su solicitud por WhatsApp. Desde
                allí, el negocio coordina directamente los detalles del pago
                digital y la entrega.
              </p>

              <p>
                El objetivo es presentar el negocio de manera atractiva,
                facilitar la elección de productos y simplificar el contacto
                entre el cliente y el emprendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FUNCIONALIDADES PRINCIPALES
      ====================================== */}

      <section className="charcuteria-seccion charcuteria-funcionalidades">
        <div className="charcuteria-contenedor">
          <div className="charcuteria-cabecera-seccion">
            <span className="charcuteria-numero-seccion">
              02 / FUNCIONALIDADES
            </span>

            <h2>
              Diseñada para una experiencia{" "}
              <span>más sencilla.</span>
            </h2>

            <p>
              La web reúne la información del negocio y las herramientas
              necesarias para que los clientes preparen su pedido.
            </p>
          </div>

          <div className="charcuteria-funciones-grid">
            {funcionalidades.map((funcion) => {
              const Icono = funcion.icono;

              return (
                <article
                  className="charcuteria-funcion-card"
                  key={funcion.numero}
                >
                  <div className="charcuteria-funcion-superior">
                    <div className="charcuteria-funcion-icono">
                      <Icono size={23} />
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
          EXPERIENCIA DEL CLIENTE
      ====================================== */}

      <section className="charcuteria-seccion">
        <div className="charcuteria-contenedor">
          <div className="charcuteria-recorrido">
            <div className="charcuteria-recorrido-texto">
              <span className="charcuteria-numero-seccion">
                03 / EXPERIENCIA DE USUARIO
              </span>

              <h2>
                Del menú a un pedido{" "}
                <span>personalizado.</span>
              </h2>

              <p>
                El flujo de compra está planteado para que el cliente pueda
                construir su caja y enviar la selección al negocio sin
                completar un proceso de pago dentro de la web.
              </p>

              <a
                href={URL_CHARCUTERIA}
                target="_blank"
                rel="noopener noreferrer"
                className="charcuteria-enlace-texto"
              >
                Explorar la experiencia
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="charcuteria-pasos">
              <div className="charcuteria-paso">
                <span className="charcuteria-paso-numero">01</span>

                <div>
                  <h3>Elegir una caja</h3>
                  <p>
                    Seleccionar el formato disponible según la opción deseada.
                  </p>
                </div>
              </div>

              <div className="charcuteria-paso">
                <span className="charcuteria-paso-numero">02</span>

                <div>
                  <h3>Personalizar los ingredientes</h3>
                  <p>
                    Elegir quesos, frutas, toppings, dips y carnes frías
                    según las opciones del menú.
                  </p>
                </div>
              </div>

              <div className="charcuteria-paso">
                <span className="charcuteria-paso-numero">03</span>

                <div>
                  <h3>Revisar el resumen</h3>
                  <p>
                    Consultar la selección realizada antes de enviar el pedido.
                  </p>
                </div>
              </div>

              <div className="charcuteria-paso">
                <span className="charcuteria-paso-numero">04</span>

                <div>
                  <h3>Coordinar por WhatsApp</h3>
                  <p>
                    Enviar el mensaje al negocio para coordinar el pago y la
                    entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          TECNOLOGÍAS Y DESARROLLO
      ====================================== */}

      <section className="charcuteria-seccion charcuteria-tecnologias">
        <div className="charcuteria-contenedor">
          <div className="charcuteria-tecnologias-grid">
            <div>
              <span className="charcuteria-numero-seccion">
                04 / DESARROLLO
              </span>

              <h2>
                Tecnología al servicio de la{" "}
                <span>experiencia.</span>
              </h2>

              <p>
                La interfaz está construida con tecnologías de desarrollo
                frontend para organizar el contenido, presentar los productos
                y ofrecer una navegación adaptable a distintos dispositivos.
              </p>
            </div>

            <div className="charcuteria-tecnologias-lista">
              <div className="charcuteria-tecnologia">
                <span className="charcuteria-tecnologia-simbolo">
                  Re
                </span>

                <div>
                  <strong>React</strong>
                  <p>Construcción de la interfaz mediante componentes.</p>
                </div>
              </div>

              <div className="charcuteria-tecnologia">
                <span className="charcuteria-tecnologia-simbolo">
                  TS
                </span>

                <div>
                  <strong>TypeScript</strong>
                  <p>Tipado y organización del código del proyecto.</p>
                </div>
              </div>

              <div className="charcuteria-tecnologia">
                <span className="charcuteria-tecnologia-simbolo">
                  Tw
                </span>

                <div>
                  <strong>Tailwind CSS</strong>
                  <p>Estilos y adaptación visual de la interfaz.</p>
                </div>
              </div>

              <div className="charcuteria-tecnologia">
                <span className="charcuteria-tecnologia-simbolo">
                  <ExternalLink size={20} />
                </span>

                <div>
                  <strong>Vercel</strong>
                  <p>Publicación y acceso al sitio web.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="charcuteria-nota-pagos">
            <Clock size={20} />

            <p>
              <strong>Coordinación directa:</strong> el sitio facilita la
              preparación del pedido y el contacto por WhatsApp. El pago y la
              entrega se coordinan directamente con el emprendimiento; no se
              presenta una pasarela de pago integrada.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACTO COMERCIAL
      ====================================== */}

      <section className="charcuteria-contacto">
        <div className="charcuteria-contenedor">
          <div className="charcuteria-contacto-card">
            <div className="charcuteria-contacto-icono">
              <MessageCircle size={27} />
            </div>

            <span className="charcuteria-numero-seccion">
              ¿TIENES UN EMPRENDIMIENTO?
            </span>

            <h2>
              Hagamos realidad tu{" "}
              <span>próxima idea.</span>
            </h2>

            <p>
              Si te interesa implementar una página web para tu negocio,
              catálogo digital o sistema de pedidos personalizado, podemos
              conversar sobre tu propuesta.
            </p>

            <div className="charcuteria-contacto-acciones">
              <a
                href={enlaceWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="charcuteria-boton charcuteria-boton-whatsapp"
              >
                <MessageCircle size={19} />
                Hablemos por WhatsApp
                <ArrowRight size={18} />
              </a>

              <Link
                to="/proyectos"
                className="charcuteria-boton charcuteria-boton-volver"
              >
                <ArrowLeft size={17} />
                Volver a proyectos
              </Link>
            </div>

            <p className="charcuteria-contacto-nota">
              El botón de WhatsApp abrirá un mensaje listo para enviar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
