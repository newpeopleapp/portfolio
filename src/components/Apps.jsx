// Apps.jsx
import AppCard from "./AppCard";
import "./Apps.css";

export default function Apps({ apps }) {
  return (
    <section id="apps" className="section-container">
      <p className="section-label reveal">Portfolio</p>
      <h2 className="reveal">Apps I've <em>shipped</em></h2>

      <div className="apps-grid">
        {apps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}
