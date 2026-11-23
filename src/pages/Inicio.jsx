import repAlto1 from "../assets/ReposteroAltoEj1.png";
import repAlto2 from "../assets/ReposteroAltoEj2.png";
import repAlto3 from "../assets/ReposteroAltoEj3.png";
import repAlto4 from "../assets/ReposteroAltoEj4.png";
import repAlto5 from "../assets/ReposteroAltoEj5.png";
import repBajo1 from "../assets/ReposteroBajoEj1.png";
import repBajo2 from "../assets/ReposteroBajoEj2.png";
import repBajo3 from "../assets/ReposteroBajoEj3.png";
import "./Inicio.css";

const ejemplosInicio = [
  { src: repAlto1, alt: "Ejemp1" },
  { src: repAlto2, alt: "Ejemp2" },
  { src: repAlto3, alt: "Ejemp3" },
  { src: repAlto4, alt: "Ejemp4" },
  { src: repAlto5, alt: "Ejemp5" },
  { src: repBajo1, alt: "Ejemp6" },
  { src: repBajo2, alt: "Ejemp7" },
  { src: repBajo3, alt: "Ejemp8" },
];

export default function Inicio() {
  return (
    <>
      <div className="Mensaje">
        <h1>Bienvenidos a Segusa Design</h1>
        <p>
          Somos especialistas en diseño, reparación y remodelación de viviendas
          como espacios industriales. <br />
          Convertimos tus ideas en proyectos funcionales, modernos y bien
          ejecutados, cuidando cada detalle <br />
          desde la planificación hasta la entrega final.
        </p>
      </div>

      <div className="inicio-galeria">
        <h2>Galería</h2>
        <div className="imagenes-galeria">
          {ejemplosInicio.map((item) => (
            <img key={item.alt} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </>
  );
}