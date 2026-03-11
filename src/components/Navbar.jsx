// Navbar.jsx
import "./Navbar.css";

const links = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#experience", label: "Experience" },
  { href: "#apps",       label: "Apps"       },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar({ cvPath }) {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">alonso.swift</span>

      <div className="navbar-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>

      <a href={cvPath} download className="navbar-cta">
        ↓ Resume
      </a>
    </nav>
  );
}
