
import {
  ArrowDownToLine,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Laptop,
  Layers3,
  Mail,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./SobreMi.css";

const tecnologias = [
  {
    categoria: "Frontend",
    icono: Monitor,
    elementos: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Bootstrap",
    ],
  },
  {
    categoria: "Backend",
    icono: Code2,
    elementos: ["Node.js", "Java", "Spring Boot", "Python"],
  },
  {
    categoria: "Bases de datos",
    icono: Database,
    elementos: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    categoria: "Herramientas y diseño",
    icono: Layers3,
    elementos: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Figma",
      "Microsoft Office",
    ],
  },
];

const documentos = [
  {
    titulo: "Constancia de egresado",
    descripcion:
      "Documento que acredita la culminación de mi formación académica.",
    imagen: "/images/certificados/constancia-egresado.png",
    archivo: "/documents/constancia-egresado.pdf",
    etiqueta: "Formación académica",
    icono: GraduationCap,
  },
  {
    titulo: "Certificado de Ofimática",
    descripcion:
      "Formación en herramientas ofimáticas y programas de edición.",
    imagen: "/images/certificados/certificado-office.png",
    archivo: "/documents/certificado-office.pdf",
    etiqueta: "Certificación",
    icono: Award,
  },
  {
    titulo: "Currículum vitae",
    descripcion:
      "Mi perfil profesional, experiencia laboral, formación y conocimientos.",
    imagen: "/images/documentos/cv-preview.png",
    archivo: "/documents/cv-harold-quiroz.pdf",
    etiqueta: "Perfil profesional",
    icono: FileText,
  },
];

export default function SobreMi() {
  return (
    <div className="sobre-mi-page">
      {/* PRESENTACIÓN */}
      <section className="sm-hero">
        <div className="sm-contenedor sm-hero-grid">
          <div className="sm-hero-contenido">
            <span className="sm-etiqueta">
              <Sparkles size={15} />
              CONOCE MI PERFIL
            </span>

            <h1>
              Sobre <span>mí.</span>
            </h1>

            <p className="sm-hero-intro">
              Soy Harold Quiroz, egresado de Desarrollo de Sistemas Frontend
              &amp; Backend, interesado en la creación de experiencias
              digitales, el desarrollo web y las soluciones tecnológicas.
            </p>

            <p className="sm-hero-descripcion">
              Me gusta transformar ideas en proyectos funcionales, combinar
              diseño y tecnología, y seguir aprendiendo herramientas que me
              permitan desarrollar mejores soluciones.
            </p>

            <div className="sm-hero-botones">
              <a
                href="/documents/cv-harold-quiroz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="sm-boton sm-boton-principal"
              >
                <FileText size={18} />
                Ver mi CV
                <ExternalLink size={15} />
              </a>

              <Link
                to="/proyectos"
                className="sm-boton sm-boton-secundario"
              >
                Explorar proyectos
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="sm-hero-datos">
              <div>
                <Code2 size={19} />
                <span>Desarrollo web</span>
              </div>

              <div>
                <Laptop size={19} />
                <span>Soluciones digitales</span>
              </div>

              <div>
                <Globe size={19} />
                <span>Chiclayo, Perú</span>
              </div>
            </div>
          </div>

          <div className="sm-hero-visual">
            <div className="sm-hero-marco">
              <div className="sm-hero-icono">
                <Code2 size={72} strokeWidth={1.3} />
              </div>

              <span className="sm-hero-simbolo sm-simbolo-uno">
                {"< />"}
              </span>

              <span className="sm-hero-simbolo sm-simbolo-dos">
                {"{ }"}
              </span>

              <div className="sm-hero-tarjeta">
                <span className="sm-estado-punto" />
                <div>
                  <strong>Harold Quiroz</strong>
                  <small>Desarrollador Frontend & Backend</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL PROFESIONAL */}
      <section className="sm-seccion sm-perfil">
        <div className="sm-contenedor">
          <div className="sm-titulo-seccion">
            <span className="sm-etiqueta">MI PERFIL</span>
            <h2>¿Qué puedo aportar?</h2>
            <p>
              Una combinación de conocimientos técnicos, creatividad y
              experiencia en atención al cliente.
            </p>
          </div>

          <div className="sm-perfil-grid">
            <article className="sm-perfil-card">
              <span className="sm-card-icono">
                <Code2 size={24} />
              </span>

              <h3>Desarrollo de software</h3>

              <p>
                Creación de interfaces web, componentes reutilizables y
                funcionalidades orientadas a las necesidades de cada proyecto.
              </p>
            </article>

            <article className="sm-perfil-card">
              <span className="sm-card-icono">
                <BriefcaseBusiness size={24} />
              </span>

              <h3>Experiencia profesional</h3>

              <p>
                Experiencia en atención al cliente, soporte, ventas y
                seguimiento de procesos, con enfoque en la comunicación y la
                resolución de problemas.
              </p>
            </article>

            <article className="sm-perfil-card">
              <span className="sm-card-icono">
                <Sparkles size={24} />
              </span>

              <h3>Aprendizaje continuo</h3>

              <p>
                Interés por nuevas tecnologías, herramientas de inteligencia
                artificial y formas de optimizar el trabajo y los proyectos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="sm-seccion sm-tecnologias">
        <div className="sm-contenedor">
          <div className="sm-titulo-seccion">
            <span className="sm-etiqueta">MI CAJA DE HERRAMIENTAS</span>
            <h2>Tecnologías y herramientas</h2>
            <p>
              Tecnologías que he utilizado en mi formación y en el desarrollo
              de proyectos académicos y personales.
            </p>
          </div>

          <div className="sm-tecnologias-grid">
            {tecnologias.map((grupo) => {
              const Icono = grupo.icono;

              return (
                <article
                  className="sm-tecnologia-card"
                  key={grupo.categoria}
                >
                  <div className="sm-tecnologia-titulo">
                    <span className="sm-card-icono">
                      <Icono size={22} />
                    </span>

                    <h3>{grupo.categoria}</h3>
                  </div>

                  <div className="sm-tecnologia-etiquetas">
                    {grupo.elementos.map((elemento) => (
                      <span key={elemento}>{elemento}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="sm-nota-tecnologias">
            Mi experiencia con cada tecnología es diferente y continúo
            fortaleciendo mis conocimientos mediante la práctica.
          </p>
        </div>
      </section>

      {/* FORMACIÓN Y CERTIFICACIONES */}
      <section className="sm-seccion sm-formacion">
        <div className="sm-contenedor">
          <div className="sm-titulo-seccion">
            <span className="sm-etiqueta">MI FORMACIÓN</span>
            <h2>Educación y certificaciones</h2>
            <p>
              Mi preparación académica y complementaria, orientada al
              desarrollo de sistemas, las herramientas digitales y la
              aplicación de la tecnología en entornos profesionales.
            </p>
          </div>

          <div className="sm-formacion-grid">
            {/* FORMACIÓN EN DESARROLLO DE SISTEMAS */}
            <article className="sm-formacion-card">
              <div className="sm-formacion-icono">
                <GraduationCap size={30} />
              </div>

              <div className="sm-formacion-contenido">
                <span className="sm-formacion-tipo">
                  FORMACIÓN PROFESIONAL
                </span>

                <h3>Desarrollo de Sistemas Front-end y Back-end</h3>

                <p className="sm-formacion-institucion">
                  Instituto de Educación Superior Privado IDAT
                </p>

                <p>
                  Formación profesional orientada al análisis, diseño y
                  desarrollo de sistemas informáticos, incluyendo la creación
                  de interfaces web, la programación de funcionalidades, el
                  manejo de bases de datos y el desarrollo de soluciones
                  tecnológicas.
                </p>

                <p className="sm-formacion-detalle">
                  Egresado de la carrera, con titulación en proceso.
                </p>

                <span className="sm-formacion-estado">Egresado</span>
              </div>
            </article>

            {/* FORMACIÓN EN OFIMÁTICA PROFESIONAL */}
            <article className="sm-formacion-card">
              <div className="sm-formacion-icono">
                <Award size={30} />
              </div>

              <div className="sm-formacion-contenido">
                <span className="sm-formacion-tipo">
                  FORMACIÓN COMPLEMENTARIA
                </span>

                <h3>Ofimática Profesional</h3>

                <p className="sm-formacion-institucion">
                  Instituto de Educación Superior Tecnológico Privado Ábaco
                </p>

                <p>
                  Formación en herramientas de Microsoft Office, incluyendo
                  Word, Excel, Access y PowerPoint, además de programas de
                  edición y diseño como Photoshop, CorelDRAW y Sony Vegas.
                </p>

                <p className="sm-formacion-detalle">
                  Formación complementaria respaldada por certificado.
                </p>

                <a
                  href="/documents/certificado-office.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm-formacion-enlace"
                >
                  Ver certificado
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="sm-seccion sm-documentos">
        <div className="sm-contenedor">
          <div className="sm-titulo-seccion">
            <span className="sm-etiqueta">DOCUMENTOS</span>
            <h2>Mis credenciales profesionales</h2>
            <p>
              Consulta las vistas previas y abre los documentos completos en
              formato PDF.
            </p>
          </div>

          <div className="sm-documentos-grid">
            {documentos.map((documento) => {
              const Icono = documento.icono;

              return (
                <article
                  className="sm-documento-card"
                  key={documento.titulo}
                >
                  <div className="sm-documento-imagen">
                    <img
                      src={documento.imagen}
                      alt={`Vista previa: ${documento.titulo}`}
                      loading="lazy"
                    />

                    <span className="sm-documento-etiqueta">
                      <Icono size={14} />
                      {documento.etiqueta}
                    </span>
                  </div>

                  <div className="sm-documento-contenido">
                    <h3>{documento.titulo}</h3>
                    <p>{documento.descripcion}</p>

                    <div className="sm-documento-acciones">
                      <a
                        href={documento.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-documento-boton sm-documento-ver"
                      >
                        Ver documento
                        <ExternalLink size={15} />
                      </a>

                      <a
                        href={documento.archivo}
                        download
                        className="sm-documento-boton sm-documento-descargar"
                        aria-label={`Descargar ${documento.titulo}`}
                      >
                        <ArrowDownToLine size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="sm-documentos-nota">
            Las imágenes son vistas previas. Los enlaces abren o descargan
            los archivos PDF correspondientes.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="sm-cierre">
        <div className="sm-contenedor sm-cierre-contenido">
          <div>
            <span className="sm-etiqueta">SIGAMOS EN CONTACTO</span>
            <h2>¿Tienes una idea en mente?</h2>
            <p>
              Me interesa conocer nuevas oportunidades, proyectos y
              colaboraciones en las que pueda aportar mis conocimientos.
            </p>
          </div>

          <Link to="/contacto" className="sm-boton sm-boton-principal">
            Hablemos
            <Mail size={18} />
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
