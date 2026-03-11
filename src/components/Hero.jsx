// Hero.jsx
import "./Hero.css";

const stats = [
  { num: "8+", label: "Years Exp."  },
  { num: "20+", label: "Apps Shipped"},
  { num: "3",  label: "Companies"   },
  { num: "∞",  label: "Commits"     },
];

export default function Hero({ profile }) {
  return (
    <section className="hero">
      {/* Ambient glows */}
      <div className="hero-glow"  aria-hidden />
      <div className="hero-glow2" aria-hidden />

      {/* Photo + badge row */}
      <div className="hero-top">
        <div className="hero-photo-wrap">
          <img
            src={profile.photo}
            alt={profile.name}
            className="hero-photo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="hero-photo-ring" aria-hidden />
        </div>

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          {profile.status}
        </div>
      </div>

      {/* Headline */}
      <h1 className="hero-title">
        Senior <em>iOS</em>
      </h1>
      <p className="hero-subtitle">Developer &amp; Designer</p>

      <p className="hero-desc">
<p className="hero-desc">
  <strong>{profile.name}</strong>
  <br />
  <span>Crafting beautiful, high-performance iOS applications with </span>
  <span className="hero-desc-highlight">{profile.experience} years of experience.</span>
  <br />
  <span>From Objective-C legacy systems to cutting-edge SwiftUI architectures.</span>
</p>
      </p>

      {/* CTAs */}
      <div className="hero-actions">
        <a href="#apps" className="btn-primary">
          <AppsIcon /> View My Work
        </a>
        <a href={profile.cv} download className="btn-secondary">
          <DownloadIcon /> Download CV
        </a>
      </div>

      {/* Stats */}
      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <span className="hero-stat-num">
              {s.num === "∞" ? "∞" : <>{s.num.replace("+", "")}<em>+</em></>}
              {s.num === "3" && null}
            </span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden>
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

// ── inline micro-icons ──────────────────────
const AppsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
