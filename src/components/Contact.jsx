// Contact.jsx
import "./Contact.css";

export default function Contact({ profile }) {
  const links = [
    {
      icon: "💼",
      title: "LinkedIn",
      sub: "linkedin.com/in/alonsoespejo",
      href: profile.linkedin,
    },
    {
      icon: "⌨️",
      title: "GitHub",
      sub: "github.com/newpeopleapp",
      href: profile.github,
    },
    {
      icon: "📄",
      title: "Download CV",
      sub: "Full resume in PDF",
      href: profile.cv,
      download: true,
      highlight: true,
    },
    {
      icon: "✉️",
      title: "Email",
      sub: profile.email || "Add your email in portfolio.js",
      href: profile.email ? `mailto:${profile.email}` : null,
      muted: !profile.email,
    },
  ];

  return (
    <section id="contact" className="section-container">
      <p className="section-label reveal">Get in touch</p>
      <h2 className="reveal">Let's <em>build</em> together</h2>
      <p className="contact-sub reveal">
        Open to new opportunities, freelance projects, and interesting collaborations.
      </p>

      <div className="contact-grid">
        {links.map((l) =>
          l.href ? (
            <a
              key={l.title}
              href={l.href}
              target={l.download ? undefined : "_blank"}
              rel="noreferrer"
              download={l.download || undefined}
              className={`contact-card reveal${l.highlight ? " highlight" : ""}${l.muted ? " muted" : ""}`}
            >
              <span className="contact-icon">{l.icon}</span>
              <div>
                <p className="contact-title">{l.title}</p>
                <p className="contact-sub-label">{l.sub}</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          ) : (
            <div
              key={l.title}
              className={`contact-card reveal muted`}
            >
              <span className="contact-icon">{l.icon}</span>
              <div>
                <p className="contact-title">{l.title}</p>
                <p className="contact-sub-label">{l.sub}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
