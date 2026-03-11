// AppCard.jsx — Single app card with mouse-follow glow
import { useRef } from "react";
import "./AppCard.css";

const AppleIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const techVariants = {
  swift:   "tech-swift",
  swiftui: "tech-swiftui",
  default: "",
};

export default function AppCard({ app }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
    const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
    cardRef.current.style.setProperty("--mx", x + "%");
    cardRef.current.style.setProperty("--my", y + "%");
  };

  return (
    <div className="app-card reveal" ref={cardRef} onMouseMove={onMouseMove}>
      {/* Glow overlay */}
      <div className="app-card-glow" aria-hidden />

      <div className="app-card-header">
        {/* App icon */}
        <div className="app-icon">
          {app.image
            ? <img src={app.image} alt={app.name} onError={(e) => { e.target.style.display = "none"; }} />
            : <span className="app-icon-emoji">{app.icon}</span>
          }
        </div>

        {/* App Store badge */}
        {app.appStore ? (
          <a href={app.appStore} target="_blank" rel="noreferrer" className="store-badge">
            <AppleIcon /> App Store ↗
          </a>
        ) : (
          <span className="store-badge private">🔒 Private</span>
        )}
      </div>

      <p className="app-name">{app.name}</p>
      <p className="app-desc">{app.description}</p>

      <div className="app-tech">
        {app.tech.map((t) => (
          <span key={t.label} className={`tech-pill ${techVariants[t.variant] || ""}`}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
