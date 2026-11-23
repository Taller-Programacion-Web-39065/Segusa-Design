import { useState } from "react";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import whatsappImg from "../assets/whatsapp.png";
import "./Contacto.css";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola, soy ${nombre}.
Correo: ${correo}
Teléfono: ${telefono}
Consulta: ${mensaje}`;

    const numero = "51947061894";
    alert("Se abrirá WhatsApp para enviar tu consulta.");
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section className="contacto">
      <h1>Contáctanos</h1>
      <p>
        En Segusa Design estamos listos para ayudarte a transformar tus espacios.
        Solicita tu cotización.
      </p>

      <div className="contenedor">
        <div className="informacion">
          <h2>Información de contacto</h2>
          <p>📍 Ubicación: Lima, Perú</p>
          <p>
            📞 Teléfono: <a href="tel:+51944001971">+51 944 001 971</a>
          </p>
          <p>
            ✉️ Correo:{" "}
            <a href="mailto:segusadesign@gmail.com">segusadesign@gmail.com</a>
          </p>

          <h3>¡Síguenos en nuestras redes!</h3>
          <div className="redes">
            <a
              href="https://www.facebook.com/people/Segusa-Design/61588133908589/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookImg} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/segusadesign/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramImg} alt="Instagram" />
            </a>
            <a
              href="https://wa.me/51944001971"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappImg} alt="WhatsApp" />
            </a>
          </div>
        </div>

        <form id="formulario" onSubmit={handleSubmit}>
          <h2>Envíanos un mensaje</h2>

          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            placeholder="Ingresa tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="5"
            placeholder="Escribe tu consulta"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}