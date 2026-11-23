import { useState } from "react";
import { Link } from "react-router-dom";
import reposteroAereo from "../assets/repostero_aereo.jpg";
import muebleDormitorio from "../assets/mueble_dormitorio.jpg";
import reposteroAereoCocina from "../assets/repostero_aereo_cocina.jpg";
import reposteroCuatroPuertas from "../assets/repostero_cuatro_puertas.jpg";
import imagen20 from "../assets/imagen20.jpg";
import "./Servicios.css";

const SERVICIOS_DATA = [
  {
    id: 1,
    titulo: "Reposteros Aéreos",
    categoria: "Cocina",
    imagen: reposteroAereo,
    alt: "Repostero Aéreo",
    descripcion:
      "Diseño y fabricación a medida de reposteros aéreos modernos, optimizando el espacio y aportando elegancia a tu cocina.",
  },
  {
    id: 2,
    titulo: "Mueble Dormitorio",
    categoria: "Dormitorio",
    imagen: muebleDormitorio,
    alt: "Mueble Dormitorio",
    descripcion:
      "Transformamos tu lugar de descanso en un espacio más cómodo, funcional y adaptado a tu estilo.",
  },
  {
    id: 3,
    titulo: "Repostero Aéreo de Cocina",
    categoria: "Cocina",
    imagen: reposteroAereoCocina,
    alt: "Repostero Aéreo de Cocina",
    descripcion:
      "Repostero ideal para organizar y guardar utensilios de cocina con acabados resistentes y modernos.",
  },
  {
    id: 4,
    titulo: "Repostero de Cuatro Puertas",
    categoria: "Almacenamiento",
    imagen: reposteroCuatroPuertas,
    alt: "Repostero de cuatro puertas",
    descripcion:
      "Amplia capacidad de almacenamiento ideal para mantener el orden y la estética de tu hogar.",
  },
  {
    id: 5,
    titulo: "Repostero de tres Puertas",
    categoria: "Dormitorio",
    imagen: imagen20,
    alt: "Repostero de tres puertas",
    descripcion: "Dormitorio ideal para guardar cosas personales.",
  },
];

const CATEGORIAS = ["Todos", "Cocina", "Dormitorio", "Almacenamiento"];

export default function Servicios() {
  const [filtro, setFiltro] = useState("Todos");

  const serviciosFiltrados =
    filtro === "Todos"
      ? SERVICIOS_DATA
      : SERVICIOS_DATA.filter((item) => item.categoria === filtro);

  return (
    <section className="contenido servicios-modulo">
      <h1>Nuestros Servicios</h1>

      <div className="servicios-filtros">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat}
            type="button"
            className={filtro === cat ? "filtro-btn activo" : "filtro-btn"}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="lista-servicios">
        {serviciosFiltrados.map((servicio) => (
          <div key={servicio.id} className="item-servicio">
            <img
              src={servicio.imagen}
              alt={servicio.alt}
              className="img-servicio"
            />
            <div className="texto-servicio">
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
              <div className="acciones-servicio">
                <Link to="/contacto" className="btn-cotizar">
                  Cotizar &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}