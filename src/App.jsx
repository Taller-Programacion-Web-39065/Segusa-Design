import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Preguntas from "./pages/Preguntas";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}