
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Gamepad2,
  Footprints,
  Sword,
  Save,
  Volume2,
  Settings,
  BookOpen,
  Monitor,
  Download,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import "./RelojDeSombras.css";

// Reemplaza esta dirección cuando tengas el enlace público directo del APK.

const APK_DOWNLOAD_URL =
  "https://www.mediafire.com/file/39braxlacex6cfa/Reloj-de-Sombras.apk/file";


const RelojDeSombras: React.FC = () => {
  const apkDisponible =
    APK_DOWNLOAD_URL.startsWith("https://") ||
    APK_DOWNLOAD_URL.startsWith("http://");

  return (
    <main className="sombras-page">
      <div className="sombras-container">
        <Link to="/proyectos" className="sombras-back">
          <ArrowLeft size={18} />
          Volver a proyectos
        </Link>

        <section className="sombras-hero">
          <div className="sombras-info">
            <div className="sombras-badges">
              <span className="sombras-badge">
                <Gamepad2 size={14} />
                VIDEOJUEGO 2D
              </span>

              <span className="sombras-platform">
                <Smartphone size={14} />
                ANDROID
              </span>
            </div>

            <h1>
              Reloj de <span>Sombras</span>
            </h1>

            <p className="sombras-subtitle">
              Cada sombra esconde una aventura.
            </p>

            <p className="sombras-description">
              Acompaña a Pico en una aventura de plataformas en 2D.
              Explora un mundo misterioso, supera obstáculos, salta,
              combate y cumple objetivos mientras descubres el camino
              de este pequeño aventurero.
            </p>

            <div className="sombras-tech">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>Expo</span>
            </div>

            <div className="sombras-actions">
              {apkDisponible ? (
                <a
                  className="sombras-button sombras-button-primary"
                  href={APK_DOWNLOAD_URL}
                  download="Reloj-de-Sombras.apk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={19} />
                  Descargar APK
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <button
                  className="sombras-button sombras-button-disabled"
                  type="button"
                  disabled
                  title="Agrega el enlace público del APK en el código"
                >
                  <Download size={19} />
                  APK próximamente
                </button>
              )}

              <span className="sombras-availability">
                <ShieldCheck size={16} />
                Versión para Android
              </span>
            </div>
          </div>

          <div className="sombras-cover">
            <div className="sombras-cover-glow" />

            <div className="sombras-cover-frame">
              <img
                src="/images/proyectos/reloj-de-sombras.png"
                alt="Portada del videojuego Reloj de Sombras"
                className="sombras-cover-image"
              />

              <div className="sombras-cover-overlay">
                <span>UNA AVENTURA EN 2D</span>
                <h2>RELOJ DE SOMBRAS</h2>
                <p>La aventura de Pico comienza aquí.</p>
              </div>
            </div>

            <div className="sombras-floating-card">
              <Clock3 size={22} />
              <div>
                <strong>El tiempo continúa</strong>
                <span>Explora. Salta. Sobrevive.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sombras-section">
          <div className="sombras-section-heading">
            <span>01 / LA AVENTURA</span>
            <h2>Un mundo por descubrir</h2>
            <p>
              Guía a Pico a través de sus desafíos y avanza por un
              mundo lleno de obstáculos y objetivos por completar.
            </p>
          </div>

          <div className="sombras-feature-grid">
            <article className="sombras-feature">
              <div className="sombras-feature-icon">
                <Footprints size={24} />
              </div>
              <h3>Explora y salta</h3>
              <p>
                Recorre escenarios en 2D, desplázate por el mapa y
                supera los obstáculos de cada recorrido.
              </p>
            </article>

            <article className="sombras-feature">
              <div className="sombras-feature-icon">
                <Sword size={24} />
              </div>
              <h3>Combate y avanza</h3>
              <p>
                Enfréntate a los desafíos que aparecen durante la
                aventura y sigue avanzando hacia tus objetivos.
              </p>
            </article>

            <article className="sombras-feature">
              <div className="sombras-feature-icon">
                <Save size={24} />
              </div>
              <h3>Guarda tu progreso</h3>
              <p>
                Guarda tu partida y continúa la aventura cuando
                vuelvas a jugar.
              </p>
            </article>
          </div>
        </section>

        <section className="sombras-game-menu">
          <div className="sombras-menu-copy">
            <span>02 / TU PARTIDA</span>
            <h2>Juega a tu manera</h2>
            <p>
              El menú del juego reúne opciones para comenzar o
              continuar la aventura y personalizar algunos ajustes
              de la experiencia.
            </p>
          </div>

          <div className="sombras-menu-list">
            <div>
              <Gamepad2 size={20} />
              <span>Iniciar una nueva aventura</span>
            </div>
            <div>
              <Save size={20} />
              <span>Guardar y continuar el progreso</span>
            </div>
            <div>
              <Volume2 size={20} />
              <span>Ajustar el volumen del audio</span>
            </div>
            <div>
              <Settings size={20} />
              <span>Configurar las opciones gráficas</span>
            </div>
            <div>
              <BookOpen size={20} />
              <span>Consultar la historia del juego</span>
            </div>
            <div>
              <Monitor size={20} />
              <span>Salir de la aventura</span>
            </div>
          </div>
        </section>

        <section className="sombras-download-section">
          <div className="sombras-download-icon">
            <Smartphone size={30} />
          </div>

          <div className="sombras-download-copy">
            <span>03 / VERSIÓN MÓVIL</span>
            <h2>La aventura en Android</h2>
            <p>
              Instala la versión APK compilada con Expo y juega
              directamente en un dispositivo Android compatible,
              sin tener que abrir el proyecto en Expo Go.
            </p>
            <small>
              La instalación puede requerir que autorices la instalación
              de aplicaciones desde la fuente donde descargaste el archivo.
            </small>
          </div>

          {apkDisponible ? (
            <a
              className="sombras-button sombras-button-primary"
              href={APK_DOWNLOAD_URL}
              download="Reloj-de-Sombras.apk"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={19} />
              Obtener APK
            </a>
          ) : (
            <span className="sombras-download-pending">
              <Download size={18} />
              Enlace pendiente
            </span>
          )}
        </section>

        <footer className="sombras-footer">
          <div>
            <strong>RELOJ DE SOMBRAS</strong>
            <p>Un proyecto personal de Harold Quiroz.</p>
          </div>

          <span>Videojuego móvil · Android · 2D</span>
        </footer>
      </div>
    </main>
  );
};

export default RelojDeSombras;
