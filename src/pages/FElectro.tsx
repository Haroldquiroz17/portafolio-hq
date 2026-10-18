import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleUserRound,
  ClipboardList,
  CreditCard,
  Database,
  ExternalLink,
  Headphones,
  Laptop,
  MapPin,
  Monitor,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Tag,
  Users,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./FElectro.css";

// ========================================
// CONFIGURACIÓN DEL PROYECTO
// ========================================

const URL_FC_ELECTRO =
  "https://fc-electro-final-v2-six.vercel.app/";

// ========================================
// FUNCIONALIDADES PRINCIPALES
// ========================================

const funcionalidades = [
  {
    numero: "01",
    icono: Search,
    titulo: "Catálogo inteligente",
    descripcion:
      "Explora productos seminuevos reacondicionados mediante categorías y una barra de búsqueda para encontrar lo que necesitas.",
  },
  {
    numero: "02",
    icono: Tag,
    titulo: "Ofertas y promociones",
    descripcion:
      "Accede a una selección de productos en oferta y descubre oportunidades disponibles dentro del catálogo.",
  },
  {
    numero: "03",
    icono: ShoppingCart,
    titulo: "Carrito de compras",
    descripcion:
      "Agrega varios productos, revisa los importes de la selección y elimina artículos antes de continuar con la compra.",
  },
  {
    numero: "04",
    icono: CreditCard,
    titulo: "Compra demostrativa",
    descripcion:
      "Recorre un flujo de compra con confirmación simulada para conocer cómo se presenta la experiencia de adquisición.",
  },
  {
    numero: "05",
    icono: Wrench,
    titulo: "Soporte técnico",
    descripcion:
      "Completa un formulario con tus datos, el tipo de producto y la descripción del problema para presentar una solicitud de soporte.",
  },
  {
    numero: "06",
    icono: CircleUserRound,
    titulo: "Acceso y registro",
    descripcion:
      "Incluye pantallas de inicio de sesión y creación de cuenta, junto con una estructura de usuarios organizada por roles.",
  },
];

// ========================================
// CATEGORÍAS DEL CATÁLOGO
// ========================================

const categorias = [
  "Laptops",
  "Televisores",
  "Celulares",
  "Tablets",
  "Sonidos",
  "Consolas",
  "Cámaras",
  "Computadoras",
  "Impresoras",
  "Otros",
];

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function FElectro() {
  return (
    <div className="felectro-detalle">
      {/* =====================================
          PRESENTACIÓN PRINCIPAL
      ====================================== */}

      <section className="felectro-hero">
        <div className="felectro-fondo" aria-hidden="true">
          <span className="felectro-orbe felectro-orbe-uno" />
          <span className="felectro-orbe felectro-orbe-dos" />
          <span className="felectro-cuadricula" />
        </div>

        <div className="felectro-contenedor">
          <Link to="/proyectos" className="felectro-volver">
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <div className="felectro-hero-grid">
            <div className="felectro-hero-texto">
              <div className="felectro-etiquetas">
                <span className="felectro-etiqueta">
                  <CheckCircle2 size={15} />
                  Proyecto destacado
                </span>

                <span className="felectro-etiqueta-secundaria">
                  E-commerce
                </span>
              </div>

              <p className="felectro-sobretitulo">
                PROYECTO DESTACADO · FC ELECTRO
              </p>

              <h1>
                FC <span>Electro.</span>
              </h1>

              <p className="felectro-resumen">
                Una experiencia de comercio electrónico para
                descubrir tecnología seminueva, explorar ofertas
                y recorrer un proceso de compra intuitivo.
              </p>

              <div className="felectro-hero-acciones">
                <a
                  href={URL_FC_ELECTRO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="felectro-boton felectro-boton-principal"
                >
                  Visitar tienda
                  <ExternalLink size={18} />
                </a>

                <a
                  href="#felectro-funcionalidades"
                  className="felectro-boton felectro-boton-secundario"
                >
                  Explorar proyecto
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="felectro-datos">
                <div>
                  <span className="felectro-dato-titulo">
                    Tipo de proyecto
                  </span>
                  <strong>
                    Plataforma de comercio electrónico
                  </strong>
                </div>

                <div>
                  <span className="felectro-dato-titulo">
                    Tecnologías
                  </span>
                  <strong>Angular · TypeScript · MongoDB</strong>
                </div>
              </div>
            </div>

            <div className="felectro-hero-visual">
              <div className="felectro-imagen-marco">
                <div className="felectro-imagen-barra">
                  <div className="felectro-ventana-puntos">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>fc-electro.store</span>

                  <Monitor size={17} />
                </div>

                <img
                  src="/images/proyectos/fselect.png"
                  alt="Vista previa de la tienda virtual FC Electro"
                  className="felectro-imagen-principal"
                />

                <div className="felectro-imagen-pie">
                  <span className="felectro-pie-punto" />
                  Experiencia de compra digital
                </div>
              </div>

              <div className="felectro-flotante felectro-flotante-productos">
                <div className="felectro-flotante-icono">
                  <Package size={20} />
                </div>

                <div>
                  <strong>Catálogo variado</strong>
                  <span>Distintas categorías</span>
                </div>
              </div>

              <div className="felectro-flotante felectro-flotante-seguridad">
                <ShieldCheck size={20} />
                <span>Compra demostrativa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          DESCRIPCIÓN DEL PROYECTO
      ====================================== */}

      <section className="felectro-seccion">
        <div className="felectro-contenedor">
          <div className="felectro-descripcion-grid">
            <div className="felectro-titulo-seccion">
              <span className="felectro-numero-seccion">
                01 / SOBRE EL PROYECTO
              </span>

              <h2>
                Tecnología al alcance de todos, con una experiencia
                <span> digital intuitiva.</span>
              </h2>
            </div>

            <div className="felectro-descripcion-texto">
              <p>
                FC Electro es un proyecto de comercio electrónico
                inspirado en un establecimiento real dedicado a la
                venta de productos seminuevos reacondicionados.
                La plataforma presenta una forma organizada de
                descubrir dispositivos electrónicos y conocer
                sus características.
              </p>

              <p>
                La experiencia reúne categorías de productos,
                búsqueda, filtros, promociones, fichas individuales
                y un carrito donde se pueden reunir varios artículos
                antes de recorrer una compra demostrativa.
              </p>

              <p>
                Además, integra secciones de soporte técnico,
                acceso de usuarios e información de contacto
                para acercar la experiencia digital a las
                necesidades de una tienda de tecnología.
              </p>
            </div>
          </div>

          <div className="felectro-cifras">
            <article className="felectro-cifra">
              <div className="felectro-cifra-icono">
                <Package size={22} />
              </div>

              <strong>Catálogo amplio</strong>

              <span>
                Productos organizados por categorías
              </span>
            </article>

            <article className="felectro-cifra">
              <div className="felectro-cifra-icono">
                <ShoppingCart size={22} />
              </div>

              <strong>Compra guiada</strong>

              <span>
                Selección, carrito y confirmación simulada
              </span>
            </article>

            <article className="felectro-cifra">
              <div className="felectro-cifra-icono">
                <Headphones size={22} />
              </div>

              <strong>Soporte técnico</strong>

              <span>
                Formulario para comunicar incidencias
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================
          FUNCIONALIDADES PRINCIPALES
      ====================================== */}

      <section
        className="felectro-seccion felectro-funcionalidades"
        id="felectro-funcionalidades"
      >
        <div className="felectro-contenedor">
          <div className="felectro-cabecera-seccion">
            <span className="felectro-numero-seccion">
              02 / FUNCIONALIDADES
            </span>

            <h2>
              Mucho más que un catálogo de{" "}
              <span>productos.</span>
            </h2>

            <p>
              Una plataforma que reúne las principales etapas de
              exploración, selección y gestión de una compra en
              una experiencia integrada.
            </p>
          </div>

          <div className="felectro-funciones-grid">
            {funcionalidades.map((funcion) => {
              const Icono = funcion.icono;

              return (
                <article
                  className="felectro-funcion-card"
                  key={funcion.numero}
                >
                  <div className="felectro-funcion-superior">
                    <div className="felectro-funcion-icono">
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
          CATEGORÍAS DEL CATÁLOGO
      ====================================== */}

      <section className="felectro-seccion">
        <div className="felectro-contenedor">
          <div className="felectro-catalogo-grid">
            <div className="felectro-catalogo-texto">
              <span className="felectro-numero-seccion">
                03 / EXPLORACIÓN DE PRODUCTOS
              </span>

              <h2>
                Encuentra tu próximo dispositivo
                <span> ideal.</span>
              </h2>

              <p>
                El catálogo permite explorar distintas familias
                de productos electrónicos, utilizar una barra
                de búsqueda y filtrar los resultados según
                la categoría seleccionada.
              </p>

              <div className="felectro-busqueda-ejemplo">
                <Search size={19} />

                <span>
                  Buscar laptops, celulares, consolas...
                </span>

                <span className="felectro-busqueda-tecla">
                  Buscar
                </span>
              </div>

              <a
                href={URL_FC_ELECTRO}
                target="_blank"
                rel="noopener noreferrer"
                className="felectro-enlace-texto"
              >
                Explorar el catálogo
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="felectro-categorias-panel">
              <div className="felectro-categorias-cabecera">
                <div className="felectro-categorias-icono">
                  <Laptop size={22} />
                </div>

                <div>
                  <strong>Explora por categoría</strong>
                  <span>Productos electrónicos</span>
                </div>
              </div>

              <div className="felectro-categorias-lista">
                {categorias.map((categoria, indice) => (
                  <div
                    className="felectro-categoria"
                    key={categoria}
                  >
                    <span className="felectro-categoria-numero">
                      {String(indice + 1).padStart(2, "0")}
                    </span>

                    <span>{categoria}</span>

                    <ArrowUpRight size={16} />
                  </div>
                ))}
              </div>

              <div className="felectro-categorias-pie">
                <Smartphone size={18} />

                <span>
                  Diferentes dispositivos en una sola tienda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          EXPERIENCIA DE COMPRA
      ====================================== */}

      <section className="felectro-seccion felectro-compra">
        <div className="felectro-contenedor">
          <div className="felectro-cabecera-seccion">
            <span className="felectro-numero-seccion">
              04 / EXPERIENCIA DE COMPRA
            </span>

            <h2>
              Del producto seleccionado a la compra
              <span> demostrativa.</span>
            </h2>

            <p>
              El recorrido permite visualizar cómo se organiza
              una compra en una tienda virtual, desde la selección
              de los artículos hasta la confirmación final.
            </p>
          </div>

          <div className="felectro-pasos">
            <article className="felectro-paso">
              <span className="felectro-paso-numero">01</span>

              <div className="felectro-paso-icono">
                <Search size={23} />
              </div>

              <h3>Explorar</h3>

              <p>
                Buscar productos, consultar categorías y descubrir
                las ofertas disponibles.
              </p>
            </article>

            <div className="felectro-paso-flecha">
              <ArrowRight size={21} />
            </div>

            <article className="felectro-paso">
              <span className="felectro-paso-numero">02</span>

              <div className="felectro-paso-icono">
                <Package size={23} />
              </div>

              <h3>Seleccionar</h3>

              <p>
                Abrir la ficha del producto, revisar sus detalles
                y agregarlo al carrito.
              </p>
            </article>

            <div className="felectro-paso-flecha">
              <ArrowRight size={21} />
            </div>

            <article className="felectro-paso">
              <span className="felectro-paso-numero">03</span>

              <div className="felectro-paso-icono">
                <ShoppingCart size={23} />
              </div>

              <h3>Revisar</h3>

              <p>
                Consultar los productos elegidos y modificar
                el contenido del carrito.
              </p>
            </article>

            <div className="felectro-paso-flecha">
              <ArrowRight size={21} />
            </div>

            <article className="felectro-paso">
              <span className="felectro-paso-numero">04</span>

              <div className="felectro-paso-icono">
                <CheckCircle2 size={23} />
              </div>

              <h3>Confirmar</h3>

              <p>
                Recorrer el flujo de pago demostrativo y visualizar
                la confirmación simulada.
              </p>
            </article>
          </div>

          <div className="felectro-aviso-demo">
            <div className="felectro-aviso-icono">
              <ShieldCheck size={22} />
            </div>

            <div>
              <strong>Una demostración del proceso de compra</strong>

              <p>
                El flujo de pago es demostrativo. No representa
                una transacción bancaria real ni procesa cobros
                mediante una pasarela de pago oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SOPORTE Y ROLES DE USUARIO
      ====================================== */}

      <section className="felectro-seccion">
        <div className="felectro-contenedor">
          <div className="felectro-soporte-grid">
            <div className="felectro-soporte-texto">
              <span className="felectro-numero-seccion">
                05 / SOPORTE Y GESTIÓN
              </span>

              <h2>
                Atención técnica y una experiencia pensada para
                <span> diferentes usuarios.</span>
              </h2>

              <p>
                FC Electro incorpora una sección de soporte
                técnico donde se puede describir una incidencia
                y registrar información relacionada con el
                producto que necesita atención.
              </p>

              <p>
                También presenta pantallas de inicio de sesión
                y registro, con una estructura de acceso
                diferenciada para los distintos perfiles
                contemplados en el proyecto.
              </p>

              <a
                href={URL_FC_ELECTRO}
                target="_blank"
                rel="noopener noreferrer"
                className="felectro-enlace-texto"
              >
                Conocer la plataforma
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="felectro-soporte-panel">
              <div className="felectro-soporte-cabecera">
                <div className="felectro-soporte-cabecera-icono">
                  <Headphones size={22} />
                </div>

                <div>
                  <strong>Centro de soporte</strong>
                  <span>Atención de incidencias</span>
                </div>

                <span className="felectro-soporte-punto" />
              </div>

              <div className="felectro-soporte-contenido">
                <div className="felectro-soporte-linea">
                  <div className="felectro-soporte-mini-icono">
                    <CircleUserRound size={19} />
                  </div>

                  <div>
                    <strong>Datos del usuario</strong>
                    <span>Nombre y correo electrónico</span>
                  </div>
                </div>

                <div className="felectro-soporte-linea">
                  <div className="felectro-soporte-mini-icono">
                    <Laptop size={19} />
                  </div>

                  <div>
                    <strong>Información del producto</strong>
                    <span>Tipo de dispositivo e incidencia</span>
                  </div>
                </div>

                <div className="felectro-soporte-linea">
                  <div className="felectro-soporte-mini-icono">
                    <ClipboardList size={19} />
                  </div>

                  <div>
                    <strong>Solicitud de asistencia</strong>
                    <span>Registro de la descripción del problema</span>
                  </div>
                </div>
              </div>

              <div className="felectro-roles">
                <span className="felectro-roles-titulo">
                  Perfiles contemplados
                </span>

                <div className="felectro-roles-lista">
                  <span>
                    <Users size={15} />
                    Administrador
                  </span>

                  <span>
                    <Package size={15} />
                    Vendedor
                  </span>

                  <span>
                    <Wrench size={15} />
                    Técnico
                  </span>

                  <span>
                    <CircleUserRound size={15} />
                    Cliente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          TECNOLOGÍAS UTILIZADAS
      ====================================== */}

      <section className="felectro-seccion felectro-tecnologias">
        <div className="felectro-contenedor">
          <div className="felectro-tecnologias-grid">
            <div>
              <span className="felectro-numero-seccion">
                06 / DESARROLLO
              </span>

              <h2>
                Una base tecnológica para una experiencia
                <span> organizada.</span>
              </h2>

              <p>
                El proyecto combina herramientas para construir
                la interfaz, estructurar el código y organizar
                la información de la plataforma.
              </p>
            </div>

            <div className="felectro-tecnologias-lista">
              <article className="felectro-tecnologia">
                <div className="felectro-tecnologia-simbolo">
                  <span>Ng</span>
                </div>

                <div>
                  <strong>Angular</strong>
                  <p>
                    Organización de la interfaz mediante componentes.
                  </p>
                </div>
              </article>

              <article className="felectro-tecnologia">
                <div className="felectro-tecnologia-simbolo">
                  <span>TS</span>
                </div>

                <div>
                  <strong>TypeScript</strong>
                  <p>
                    Tipado y organización de la lógica del proyecto.
                  </p>
                </div>
              </article>

              <article className="felectro-tecnologia">
                <div className="felectro-tecnologia-simbolo">
                  <Database size={23} />
                </div>

                <div>
                  <strong>MongoDB</strong>
                  <p>
                    Base de datos utilizada en el proyecto.
                  </p>
                </div>
              </article>

              <article className="felectro-tecnologia">
                <div className="felectro-tecnologia-simbolo">
                  <ExternalLink size={22} />
                </div>

                <div>
                  <strong>Vercel</strong>
                  <p>
                    Publicación de la versión demostrativa.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          NEGOCIO Y CONTACTO
      ====================================== */}

      <section className="felectro-seccion felectro-negocio">
        <div className="felectro-contenedor">
          <div className="felectro-negocio-card">
            <div className="felectro-negocio-icono">
              <MapPin size={26} />
            </div>

            <span className="felectro-numero-seccion">
              INSPIRADO EN UN ESTABLECIMIENTO REAL
            </span>

            <h2>
              Una propuesta digital para una tienda de
              <span> tecnología.</span>
            </h2>

            <p>
              FC Electro toma como referencia un negocio real
              dedicado a la comercialización de productos
              electrónicos seminuevos reacondicionados.
              La experiencia contempla información comercial,
              canales de contacto y acceso a la tienda.
            </p>

            <div className="felectro-negocio-nota">
              <ShieldCheck size={19} />

              <span>
                Proyecto personal desarrollado con el
                consentimiento del establecimiento. La compra
                y el pago que se muestran en esta versión
                son demostrativos.
              </span>
            </div>

            <div className="felectro-negocio-acciones">
              <a
                href={URL_FC_ELECTRO}
                target="_blank"
                rel="noopener noreferrer"
                className="felectro-boton felectro-boton-principal"
              >
                Visitar FC Electro
                <ExternalLink size={18} />
              </a>

              <Link
                to="/proyectos"
                className="felectro-boton felectro-boton-secundario"
              >
                <ArrowLeft size={17} />
                Volver a proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}