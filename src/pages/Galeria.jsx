import { Link } from "react-router-dom";
import m1 from "../assets/Modelo de Mueble Dormitorio 1.jpeg";
import m2 from "../assets/Modelo de Mueble Dormitorio 2.jpeg";
import m3 from "../assets/Modelo de Mueble Dormitorio 3.jpeg";
import m4 from "../assets/Modelo de Mueble Dormitorio 4.jpeg";
import m5 from "../assets/Modelo de Mueble Dormitorio 5.jpeg";
import m6 from "../assets/Modelo de Mueble Dormitorio 6.jpeg";
import m7 from "../assets/Modelo de Mueble Dormitorio 7.jpeg";
import m8 from "../assets/Modelo de Mueble Dormitorio 8.jpeg";
import m9 from "../assets/Modelo de Mueble Dormitorio 9.jpeg";
import "./Galeria.css";

const modelos = [
  [
    { img: m1, titulo: "Modelo de Mueble Dormitorio 1", alt: "Proyecto 1" },
    { img: m2, titulo: "Modelo de Mueble Dormitorio 2", alt: "Proyecto 2" },
    { img: m3, titulo: "Modelo de Mueble Dormitorio 3", alt: "Proyecto 3" },
  ],
  [
    { img: m4, titulo: "Modelo de Mueble Dormitorio 4", alt: "Proyecto 4" },
    { img: m5, titulo: "Modelo de Mueble Dormitorio 5", alt: "Proyecto 5" },
    { img: m6, titulo: "Modelo de Mueble Dormitorio 6", alt: "Proyecto 6" },
  ],
  [
    { img: m7, titulo: "Modelo de Mueble Dormitorio 7", alt: "Proyecto 7" },
    { img: m8, titulo: "Modelo de Mueble Dormitorio 8", alt: "Proyecto 8" },
    { img: m9, titulo: "Modelo de Mueble Dormitorio 9", alt: "Proyecto 9" },
  ],
];

export default function Galeria() {
  return (
    <table className="tabla-imagenes">
      <tbody>
        {modelos.map((fila, idxFila) => (
          <tr key={idxFila}>
            {fila.map((item) => (
              <td key={item.alt}>
                <img src={item.img} alt={item.alt} />
                <p>{item.titulo}</p>
                <Link to="/contacto" className="btn-cotizar">
                  Cotizar Producto &rarr;
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}