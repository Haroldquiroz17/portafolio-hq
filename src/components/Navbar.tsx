
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar-hq">
      <div className="navbar-hq-contenedor">
        <NavLink
          to="/inicio"
          className="navbar-hq-marca"
          onClick={cerrarMenu}
          aria-label="Harold Quiroz - Inicio"
        >
          <span className="navbar-hq-logo">
            <Code2 size={25} strokeWidth={2.2} />
          </span>

          <span className="navbar-hq-identidad">
            <span className="navbar-hq-nombre">
              HAROLD <strong>QUIROZ CARRILLO</strong>
            </span>
            <span className="navbar-hq-subtitulo">
              Desarrollador Frontend & Backend
            </span>
          </span>
        </NavLink>

        <button
          type="button"
          className="navbar-hq-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          className={`navbar-hq-navegacion ${
            menuAbierto ? "navbar-hq-navegacion-abierta" : ""
          }`}
          aria-label="Navegación principal"
        >
          <NavLink
            to="/inicio"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              `navbar-hq-enlace ${isActive ? "activo" : ""}`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/proyectos"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              `navbar-hq-enlace ${isActive ? "activo" : ""}`
            }
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/sobre-mi"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              `navbar-hq-enlace ${isActive ? "activo" : ""}`
            }
          >
            Sobre mí
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              `navbar-hq-enlace navbar-hq-contacto ${
                isActive ? "activo" : ""
              }`
            }
          >
            Contacto
            <ArrowUpRight size={16} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
