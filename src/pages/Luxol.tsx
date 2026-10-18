
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Gem,
  Globe,
  Layers3,
  MessageCircle,
  Monitor,
  Package,
  Palette,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Luxol.css";

const URL_LUXOL = "https://the-luxold.vercel.app/";
const WHATSAPP = "51964618454";

const caracteristicas = [
  {
    icono: ShoppingBag,
    titulo: "Catálogo de prendas",
    descripcion:
      "Exploración de prendas con imágenes, precios, tallas y detalles para facilitar la selección.",
  },
  {
    icono: Search,
    titulo: "Búsqueda y filtros",
    descripcion:
      "Búsqueda por nombre, filtros por categoría y talla, y opciones para ordenar los precios.",
  },
  {
    icono: Tag,
    titulo: "Ofertas y descuentos",
    descripcion:
      "Secciones de productos destacados y ofertas con etiquetas visuales para identificar promociones.",
  },
  {
    icono: Layers3,
    titulo: "Colecciones organizadas",
    descripcion:
      "Prendas agrupadas en estilos como All Money, Casual Elegante y Clásicos.",
  },
  {
    icono: Package,
    titulo: "Detalle del producto",
    descripcion:
      "Galería de imágenes, descripción, selección de talla y cantidad antes de continuar.",
  },
  {
    icono: ShieldCheck,
    titulo: "Compra simulada",
    descripcion:
      "Flujo demostrativo con resumen del pedido, opciones de pago de prueba y confirmación final.",
  },
];

const tecnologias = ["React", "TypeScript", "CSS", "Vite"];

const categorias = [
  "Polos",
  "Camisas",
  "Pantalones",
  "Blazers",
  "Suéteres",
  "Zapatos",
];

export default function Luxol() {
  return (
    <main className="luxol">
      {/* HERO */}
      <section className="luxol-hero">
        <div className="luxol-hero-luz luxol-hero-luz-uno" />
        <div className="luxol-hero-luz luxol-hero-luz-dos" />

        <div className="luxol-contenedor luxol-hero-grid">
          <div className="luxol-hero-contenido">
            <Link to="/proyectos" className="luxol-volver">
              <ArrowLeft size={17} />
              Volver a proyectos
            </Link>

            <div className="luxol-etiqueta">
              <Gem size={16} />
              <span>PROYECTO DE E-COMMERCE</span>
            </div>

            <h1>
              LUXOL<span>.</span>
            </h1>

            <p className="luxol-hero-subtitulo">
              Elegancia que define tu estilo.
            </p>

            <p className="luxol-hero-descripcion">
              Una propuesta de tienda virtual de moda masculina que combina
              una identidad visual sofisticada con un catálogo de prendas,
              colecciones, ofertas y un recorrido de compra demostrativo.
            </p>

            <div className="luxol-hero-acciones">
              <a
                href={URL_LUXOL}
                target="_blank"
                rel="noreferrer"
                className="luxol-boton luxol-boton-principal"
              >
                Visitar tienda
                <ExternalLink size={18} />
              </a>

              <a
                href="#luxol-funcionalidades"
                className="luxol-boton luxol-boton-secundario"
              >
                Explorar proyecto
                <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="luxol-hero-datos">
              <div>
                <span className="luxol-dato-numero">60+</span>
                <span className="luxol-dato-texto">Prendas en catálogo</span>
              </div>

              <div className="luxol-dato-separador" />

              <div>
                <span className="luxol-dato-numero">06</span>
                <span className="luxol-dato-texto">Categorías de prendas</span>
              </div>

              <div className="luxol-dato-separador" />

              <div>
                <span className="luxol-dato-icono">
                  <Monitor size={23} />
                </span>
                <span className="luxol-dato-texto">Diseño adaptable</span>
              </div>
            </div>
          </div>

          <div className="luxol-hero-visual">
            <div className="luxol-marco-imagen">
              <div className="luxol-imagen-etiqueta">
                <Sparkles size={15} />
                <span>ESTILO CONTEMPORÁNEO</span>
              </div>

              <img
                src="/images/proyectos/deluxeol.png"
                alt="Vista de presentación del proyecto Luxol"
                className="luxol-imagen-portada"
              />

              <div className="luxol-imagen-pie">
                <div>
                  <span className="luxol-imagen-pie-label">
                    COLECCIÓN DIGITAL
                  </span>
                  <strong>Una experiencia de moda</strong>
                </div>
                <ArrowUpRight size={25} />
              </div>
            </div>

            <div className="luxol-sello">
              <Gem size={20} />
              <span>ESTILO</span>
              <span>IDENTIDAD</span>
            </div>
          </div>
        </div>

        <a
          href="#luxol-concepto"
          className="luxol-scroll"
          aria-label="Continuar explorando"
        >
          <span>DESCUBRIR EL PROYECTO</span>
          <ArrowRight size={15} />
        </a>
      </section>

      {/* CONCEPTO */}
      <section
        className="luxol-seccion luxol-concepto"
        id="luxol-concepto"
      >
        <div className="luxol-contenedor luxol-concepto-grid">
          <div>
            <div className="luxol-subtitulo">
              <span>01</span>
              <span>EL CONCEPTO</span>
            </div>

            <h2>
              La moda también es una forma de{" "}
              <span>expresión.</span>
            </h2>
          </div>

          <div className="luxol-concepto-texto">
            <p>
              Luxol es una propuesta personal de comercio electrónico
              enfocada en la moda masculina. Su concepto visual busca
              transmitir elegancia, autenticidad y atemporalidad mediante
              una interfaz organizada y una presentación cuidada de las
              prendas.
            </p>

            <p>
              La experiencia está planteada para que el usuario pueda
              descubrir colecciones, explorar el catálogo, consultar
              características de cada producto y recorrer un proceso de
              compra demostrativo.
            </p>

            <div className="luxol-valores">
              <div>
                <Gem size={20} />
                <span>Elegancia</span>
              </div>
              <div>
                <Sparkles size={20} />
                <span>Autenticidad</span>
              </div>
              <div>
                <Palette size={20} />
                <span>Identidad visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        className="luxol-seccion luxol-funcionalidades"
        id="luxol-funcionalidades"
      >
        <div className="luxol-contenedor">
          <div className="luxol-encabezado">
            <div>
              <div className="luxol-subtitulo">
                <span>02</span>
                <span>FUNCIONALIDADES</span>
              </div>

              <h2>
                Más que un catálogo, una{" "}
                <span>experiencia digital.</span>
              </h2>
            </div>

            <p>
              Las principales funciones que estructuran el recorrido
              del usuario dentro de la tienda.
            </p>
          </div>

          <div className="luxol-funciones-grid">
            {caracteristicas.map((caracteristica, indice) => {
              const Icono = caracteristica.icono;

              return (
                <article
                  className="luxol-funcion-card"
                  key={caracteristica.titulo}
                >
                  <div className="luxol-funcion-arriba">
                    <div className="luxol-funcion-icono">
                      <Icono size={23} />
                    </div>
                    <span>0{indice + 1}</span>
                  </div>

                  <h3>{caracteristica.titulo}</h3>

                  <p>{caracteristica.descripcion}</p>

                  <div className="luxol-funcion-linea" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="luxol-seccion luxol-catalogo">
        <div className="luxol-contenedor luxol-catalogo-grid">
          <div className="luxol-catalogo-contenido">
            <div className="luxol-subtitulo">
              <span>03</span>
              <span>CATÁLOGO Y COLECCIONES</span>
            </div>

            <h2>
              Cada prenda tiene su propio{" "}
              <span>carácter.</span>
            </h2>

            <p>
              El catálogo organiza las prendas en categorías para facilitar
              la navegación. También incorpora búsqueda, filtros y
              ordenamiento de precios para ayudar a encontrar productos
              según los intereses del usuario.
            </p>

            <div className="luxol-categorias">
              {categorias.map((categoria) => (
                <span key={categoria}>
                  <CheckCircle2 size={15} />
                  {categoria}
                </span>
              ))}
            </div>

            <a
              href={URL_LUXOL}
              target="_blank"
              rel="noreferrer"
              className="luxol-enlace-texto"
            >
              Explorar el catálogo
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="luxol-catalogo-panel">
            <div className="luxol-panel-cabecera">
              <div>
                <span className="luxol-panel-overline">LUXOL COLLECTION</span>
                <h3>Encuentra tu estilo</h3>
              </div>
              <ShoppingBag size={24} />
            </div>

            <div className="luxol-coleccion">
              <span className="luxol-coleccion-numero">01</span>
              <div>
                <strong>All Money</strong>
                <span>Estilo urbano y personalidad</span>
              </div>
              <ArrowUpRight size={19} />
            </div>

            <div className="luxol-coleccion">
              <span className="luxol-coleccion-numero">02</span>
              <div>
                <strong>Casual Elegante</strong>
                <span>Versatilidad para cada ocasión</span>
              </div>
              <ArrowUpRight size={19} />
            </div>

            <div className="luxol-coleccion">
              <span className="luxol-coleccion-numero">03</span>
              <div>
                <strong>Clásicos</strong>
                <span>Prendas de estilo atemporal</span>
              </div>
              <ArrowUpRight size={19} />
            </div>

            <div className="luxol-panel-pie">
              <Gem size={17} />
              <span>DISEÑO · ESTILO · EXPERIENCIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA DE COMPRA */}
      <section className="luxol-seccion luxol-compra">
        <div className="luxol-contenedor">
          <div className="luxol-encabezado luxol-encabezado-centro">
            <div className="luxol-subtitulo">
              <span>04</span>
              <span>RECORRIDO DEL USUARIO</span>
            </div>

            <h2>
              Del descubrimiento a la{" "}
              <span>confirmación.</span>
            </h2>

            <p>
              El proyecto presenta un flujo de navegación que permite
              recorrer los principales pasos de una compra en línea.
            </p>
          </div>

          <div className="luxol-pasos">
            <article className="luxol-paso">
              <span className="luxol-paso-numero">01</span>
              <div className="luxol-paso-icono">
                <Search size={22} />
              </div>
              <h3>Descubrir</h3>
              <p>Explorar colecciones, categorías y productos destacados.</p>
            </article>

            <div className="luxol-paso-flecha">
              <ArrowRight size={20} />
            </div>

            <article className="luxol-paso">
              <span className="luxol-paso-numero">02</span>
              <div className="luxol-paso-icono">
                <ShoppingBag size={22} />
              </div>
              <h3>Seleccionar</h3>
              <p>Consultar detalles y elegir talla y cantidad.</p>
            </article>

            <div className="luxol-paso-flecha">
              <ArrowRight size={20} />
            </div>

            <article className="luxol-paso">
              <span className="luxol-paso-numero">03</span>
              <div className="luxol-paso-icono">
                <Monitor size={22} />
              </div>
              <h3>Revisar</h3>
              <p>Visualizar el resumen del pedido y el flujo de pago de prueba.</p>
            </article>

            <div className="luxol-paso-flecha">
              <ArrowRight size={20} />
            </div>

            <article className="luxol-paso">
              <span className="luxol-paso-numero">04</span>
              <div className="luxol-paso-icono">
                <CheckCircle2 size={22} />
              </div>
              <h3>Confirmar</h3>
              <p>Completar la demostración y visualizar la confirmación final.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="luxol-seccion luxol-tecnologias">
        <div className="luxol-contenedor luxol-tecnologias-grid">
          <div>
            <div className="luxol-subtitulo">
              <span>05</span>
              <span>DESARROLLO</span>
            </div>

            <h2>
              Tecnología al servicio de una{" "}
              <span>mejor experiencia.</span>
            </h2>

            <p>
              La interfaz está desarrollada con herramientas del ecosistema
              React y TypeScript, con estilos propios para construir una
              identidad visual coherente y adaptable.
            </p>
          </div>

          <div className="luxol-tecnologias-lista">
            {tecnologias.map((tecnologia, indice) => (
              <div className="luxol-tecnologia" key={tecnologia}>
                <span className="luxol-tecnologia-numero">
                  0{indice + 1}
                </span>
                <strong>{tecnologia}</strong>
                <CheckCircle2 size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALCANCE DEL PROYECTO */}
      <section className="luxol-seccion luxol-alcance">
        <div className="luxol-contenedor">
          <div className="luxol-alcance-card">
            <div className="luxol-alcance-icono">
              <Globe size={27} />
            </div>

            <div className="luxol-alcance-contenido">
              <div className="luxol-subtitulo">
                <span>06</span>
                <span>ALCANCE Y TRANSPARENCIA</span>
              </div>

              <h2>
                Una propuesta para explorar el{" "}
                <span>comercio digital.</span>
              </h2>

              <p>
                Luxol es un proyecto personal de carácter demostrativo.
                El recorrido de compra y el pago forman parte de una
                simulación de interfaz: no se realizan cobros reales ni
                se procesan pagos bancarios.
              </p>

              <p>
                El proyecto permite mostrar la organización de un catálogo,
                la interacción con productos y la construcción de una
                experiencia de compra desde el lado de la interfaz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="luxol-seccion luxol-contacto">
        <div className="luxol-contenedor">
          <div className="luxol-contacto-card">
            <div className="luxol-contacto-decoracion">
              <Gem size={145} />
            </div>

            <div className="luxol-contacto-contenido">
              <div className="luxol-etiqueta">
                <Sparkles size={16} />
                <span>CONOCE LUXOL</span>
              </div>

              <h2>
                Descubre el proyecto{" "}
                <span>por ti mismo.</span>
              </h2>

              <p>
                Visita la tienda para explorar su identidad visual,
                navegar por las colecciones y conocer el recorrido
                de compra demostrativo.
              </p>

              <div className="luxol-contacto-acciones">
                <a
                  href={URL_LUXOL}
                  target="_blank"
                  rel="noreferrer"
                  className="luxol-boton luxol-boton-principal"
                >
                  Visitar Luxol
                  <ExternalLink size={18} />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Hola, vi tu portafolio y quisiera conversar sobre un proyecto web."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="luxol-boton luxol-boton-whatsapp"
                >
                  <MessageCircle size={18} />
                  Contactar por WhatsApp
                </a>
              </div>

              <Link to="/proyectos" className="luxol-volver-final">
                <ArrowLeft size={16} />
                Volver al catálogo de proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
