// Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by{" "}
        <span className="footer-name">Alonso Sánchez Espejo</span>
        {" · "}
        <span className="footer-accent">© {new Date().getFullYear()}</span>
        {" · "}
        Made with Swift in mind 🍎
      </p>
    </footer>
  );
}
