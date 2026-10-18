
import {
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  PawPrint,
  CalendarDays,
  ClipboardList,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Clock3,
  Dog,
  Cat,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Veterinaria.css";

const veterinariaUrl = "https://veterinaria-app-eta.vercel.app/";

const whatsappNumber = "51964618454";

const whatsappMessage = encodeURIComponent(
  "Hola, vi el proyecto Pecare en tu portafolio y me gustaría conversar sobre el desarrollo de un sistema similar para mi negocio."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const funcionalidades = [
  {
    icon: PawPrint,
    title: "Registro de mascotas",
    description:
      "Permite registrar el nombre de cada mascota, su especie, raza y edad, junto con los datos básicos de su propietario.",
  },
  {
    icon: CalendarDays,
    title: "Gestión de citas",
    description:
      "Facilita la programación de citas mediante la mascota, fecha, hora, motivo de consulta y estado de atención.",
  },
  {
    icon: ClipboardList,
    title: "Historial médico",
    description:
      "Organiza la información médica de las mascotas mediante diagnósticos, fechas, tratamientos y observaciones.",
  },
  {
    icon: HeartPulse,
    title: "Consulta de registros",
    description:
      "Permite revisar las mascotas registradas, consultar las citas programadas y acceder a los historiales guardados.",
  },
];

const tecnologias = [
  "Angular",
  "TypeScript",
  "Bootstrap",
  "Vercel",
];

function Veterinaria() {
  return (
    <main className="pecare-detalle">
      <section className="pecare-hero">
        <div className="pecare-hero-fondo" />

        <div className="pecare-contenedor pecare-hero-contenido">
          <Link to="/proyectos" className="pecare-volver">
            <ArrowLeft size={18} />
            Volver a proyectos
          </Link>

          <div className="pecare-etiqueta">
            <PawPrint size={16} />
            Proyecto personal
          </div>

          <div className="pecare-hero-grid">
            <div className="pecare-hero-texto">
              <span className="pecare-sobre-titulo">
                SISTEMA DE GESTIÓN VETERINARIA
              </span>

              <h1>
                PetCare<span>.</span>
              </h1>

              <p className="pecare-hero-descripcion">
                Una solución sencilla para organizar mascotas, citas
                veterinarias e historiales médicos desde un solo lugar.
              </p>

              <div className="pecare-hero-badges">
                <span>
                  <Dog size={16} />
                  Mascotas
                </span>

                <span>
                  <CalendarDays size={16} />
                  Citas
                </span>

                <span>
                  <HeartPulse size={16} />
                  Historial médico
                </span>
              </div>

              <div className="pecare-hero-acciones">
                <a
                  href={veterinariaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pecare-boton pecare-boton-principal"
                >
                  Explorar sistema
                  <ExternalLink size={18} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pecare-boton pecare-boton-secundario"
                >
                  <MessageCircle size={18} />
                  Contactarme
                </a>
              </div>
            </div>

            <div className="pecare-portada-marco">
              <div className="pecare-portada-decoracion pecare-decoracion-uno">
                <PawPrint size={24} />
              </div>

              <img
                src="/images/proyectos/veterinaria.png"
                alt="Portada del sistema veterinario Pecare"
                className="pecare-portada-imagen"
              />

              <div className="pecare-portada-pie">
                <div className="pecare-portada-icono">
                  <Stethoscope size={22} />
                </div>

                <div>
                  <strong>Pecare</strong>
                  <span>Gestión y cuidado de mascotas</span>
                </div>

                <PawPrint
                  className="pecare-portada-patita"
                  size={25}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pecare-seccion pecare-introduccion">
        <div className="pecare-contenedor pecare-intro-grid">
          <div>
            <span className="pecare-sobre-titulo">
              SOBRE EL PROYECTO
            </span>

            <h2>
              Organización para el cuidado de cada mascota.
            </h2>
          </div>

          <div className="pecare-intro-texto">
            <p>
              Pecare es un sistema de gestión veterinaria desarrollado
              como proyecto personal con fines de aprendizaje,
              demostración y experimentación. Su objetivo es mostrar
              cómo una aplicación puede ayudar a organizar la
              información básica de una veterinaria.
            </p>

            <p>
              La plataforma reúne funciones para registrar mascotas,
              programar citas y consultar historiales médicos, con una
              experiencia sencilla y orientada a la administración
              cotidiana de los registros.
            </p>
          </div>
        </div>
      </section>

      <section className="pecare-seccion pecare-funcionalidades">
        <div className="pecare-contenedor">
          <div className="pecare-encabezado-seccion">
            <span className="pecare-sobre-titulo">
              FUNCIONALIDADES PRINCIPALES
            </span>

            <h2>Todo organizado en un mismo sistema.</h2>

            <p>
              Estas son las principales funciones que componen la
              experiencia de Pecare.
            </p>
          </div>

          <div className="pecare-funciones-grid">
            {funcionalidades.map((funcion, index) => {
              const Icono = funcion.icon;

              return (
                <article
                  className="pecare-funcion-card"
                  key={funcion.title}
                >
                  <div className="pecare-funcion-numero">
                    0{index + 1}
                  </div>

                  <div className="pecare-funcion-icono">
                    <Icono size={27} strokeWidth={1.8} />
                  </div>

                  <h3>{funcion.title}</h3>

                  <p>{funcion.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pecare-seccion pecare-flujo">
        <div className="pecare-contenedor">
          <div className="pecare-encabezado-seccion">
            <span className="pecare-sobre-titulo">
              FLUJO DEL SISTEMA
            </span>

            <h2>De los datos al seguimiento.</h2>

            <p>
              Una estructura pensada para mantener la información
              veterinaria ordenada y fácil de consultar.
            </p>
          </div>

          <div className="pecare-flujo-grid">
            <article className="pecare-flujo-item">
              <div className="pecare-flujo-icono">
                <PawPrint size={25} />
              </div>

              <span>PASO 01</span>

              <h3>Registrar mascota</h3>

              <p>
                Introducir los datos de la mascota y la información
                básica de su propietario.
              </p>
            </article>

            <div className="pecare-flujo-conector" />

            <article className="pecare-flujo-item">
              <div className="pecare-flujo-icono">
                <CalendarDays size={25} />
              </div>

              <span>PASO 02</span>

              <h3>Agendar una cita</h3>

              <p>
                Definir fecha, hora, motivo de consulta y estado de
                la cita veterinaria.
              </p>
            </article>

            <div className="pecare-flujo-conector" />

            <article className="pecare-flujo-item">
              <div className="pecare-flujo-icono">
                <ClipboardList size={25} />
              </div>

              <span>PASO 03</span>

              <h3>Consultar historial</h3>

              <p>
                Registrar y revisar diagnósticos, tratamientos y
                observaciones de cada mascota.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pecare-seccion pecare-aviso">
        <div className="pecare-contenedor">
          <div className="pecare-aviso-card">
            <div className="pecare-aviso-icono">
              <ShieldCheck size={29} />
            </div>

            <div className="pecare-aviso-contenido">
              <span className="pecare-sobre-titulo">
                IMPORTANTE
              </span>

              <h2>Un proyecto personal y demostrativo.</h2>

              <p>
                Pecare representa una veterinaria ficticia creada
                exclusivamente para este proyecto personal. No
                corresponde a un establecimiento real ni implica una
                implementación para una empresa existente.
              </p>

              <p>
                Puedes interactuar con el sistema para probar sus
                funciones utilizando información ficticia. Los
                registros de prueba pueden eliminarse periódicamente;
                no introduzcas datos personales, información de
                contacto real ni historiales médicos reales.
              </p>
            </div>

            <div className="pecare-aviso-sello">
              <CheckCircle2 size={17} />
              Demo interactiva
            </div>
          </div>
        </div>
      </section>

      <section className="pecare-seccion pecare-tecnologias">
        <div className="pecare-contenedor pecare-tecnologias-grid">
          <div>
            <span className="pecare-sobre-titulo">
              DESARROLLO
            </span>

            <h2>Tecnología al servicio de la organización.</h2>

            <p>
              El proyecto reúne herramientas de desarrollo web para
              construir una interfaz de gestión veterinaria y
              publicarla como demostración accesible desde internet.
            </p>
          </div>

          <div className="pecare-tecnologias-lista">
            {tecnologias.map((tecnologia) => (
              <span
                className="pecare-tecnologia"
                key={tecnologia}
              >
                <CheckCircle2 size={17} />
                {tecnologia}
              </span>
            ))}

            <span className="pecare-tecnologia pecare-tecnologia-nota">
              <Clock3 size={17} />
              Proyecto demostrativo
            </span>
          </div>
        </div>
      </section>

      <section className="pecare-cierre">
        <div className="pecare-contenedor pecare-cierre-contenido">
          <div className="pecare-cierre-patita">
            <Cat size={35} />
            <PawPrint size={21} />
          </div>

          <span className="pecare-sobre-titulo">
            ¿TIENES UNA IDEA?
          </span>

          <h2>
            ¿Te gustaría implementar un sistema similar para tu negocio?
          </h2>

          <p>
            Si buscas una solución web adaptada a tus necesidades,
            contáctame y conversemos sobre tu proyecto.
          </p>

          <div className="pecare-cierre-acciones">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pecare-boton pecare-boton-principal"
            >
              <MessageCircle size={19} />
              Hablemos de tu proyecto
            </a>

            <Link
              to="/proyectos"
              className="pecare-boton pecare-boton-secundario"
            >
              <ArrowLeft size={18} />
              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Veterinaria;
