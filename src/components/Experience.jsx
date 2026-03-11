// Experience.jsx
import "./Experience.css";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-container">
      <p className="section-label reveal">Experience</p>
      <h2 className="reveal">Where I've <em>built</em></h2>

      <div className="timeline">
        {experience.map((item, i) => (
          <div key={i} className="timeline-item reveal">
            <p className="timeline-date">{item.date}</p>
            <p className="timeline-role">{item.role}</p>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
