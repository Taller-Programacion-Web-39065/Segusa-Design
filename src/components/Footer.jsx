import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import whatsappImg from "../assets/whatsapp.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Segusa Design. Todos los derechos reservados.</p>
      <div className="Redes">
        <a
          href="https://www.facebook.com/people/Segusa-Design/61588133908589/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookImg} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/segusadesign"
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
    </footer>
  );
}