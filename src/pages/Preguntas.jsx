import { useState } from "react";
import "./Preguntas.css";

const FAQ_ITEMS = [
  {
    id: 1,
    pregunta: "¿Cuáles son los plazos de entrega para un proyecto?",
    respuesta:
      "Los plazos varían según la complejidad y tamaño del mobiliario, oscilando generalmente entre 5 a 10 días hábiles tras la aprobación de la cotización y medidas exactas.",
  },
  {
    id: 2,
    pregunta: "¿Ofrecen visitas técnicas a domicilio en Lima?",
    respuesta:
      "Sí, realizamos visitas técnicas de evaluación y toma de medidas en Lima Metropolitana previa coordinación directa por nuestro canal de WhatsApp.",
  },
  {
    id: 3,
    pregunta: "¿Qué garantía tienen los trabajos de carpintería y acabados?",
    respuesta:
      "Todos nuestros muebles fabricados en melamina de alta resistencia y estructuras cuentan con garantía directa ante cualquier defecto de fabricación o instalación.",
  },
  {
    id: 4,
    pregunta: "¿Cómo funciona el proceso de cotización y pago?",
    respuesta:
      "Envías tus medidas aproximadas desde nuestra pestaña de Cotización hacia nuestro WhatsApp. Te respondemos con el presupuesto detallado y, al aprobarlo, se trabaja con un adelanto del 50% para iniciar fabricación y el 50% restante contra entrega instalada.",
  },
];

export default function Preguntas() {
  const [abiertaId, setAbiertaId] = useState(null);

  const togglePregunta = (id) => {
    setAbiertaId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="main-container">
      <section className="faq-section">
        <div className="section-header">
          <h1>Preguntas Frecuentes</h1>
          <p>
            Resuelve tus dudas principales sobre nuestros tiempos de entrega,
            materiales, medidas y procesos de instalación.
          </p>
        </div>

        <div className="faq-container">
          {FAQ_ITEMS.map((item) => {
            const estaActiva = abiertaId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${estaActiva ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => togglePregunta(item.id)}
                >
                  <span>{item.pregunta}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{item.respuesta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}