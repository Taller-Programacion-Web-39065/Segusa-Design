import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoRecortado from "../assets/LogoRecortado.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [tema, setTema] = useState(() => localStorage.getItem("tema") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="Header">
      <Link to="/" className="Logo" onClick={cerrarMenu}>
        <img src={logoRecortado} alt="Logo Segusa Design" />
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Abrir menú"
        onClick={() => setMenuAbierto((prev) => !prev)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <nav className={`nav-menu ${menuAbierto ? "is-active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end onClick={cerrarMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" onClick={cerrarMenu}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria" onClick={cerrarMenu}>
              Galería
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={cerrarMenu}>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to="/preguntas" onClick={cerrarMenu}>
              Preguntas
            </NavLink>
          </li>
          <li>
            <button id="theme-toggle" type="button" onClick={alternarTema}>
              {tema === "dark" ? "Modo Claro" : "Modo Oscuro"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}