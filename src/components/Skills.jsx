// Skills.jsx
import "./Skills.css";

export default function Skills({ skills }) {
  return (
    <div className="skills-band">
      <div className="section-container" id="skills">
        <p className="section-label reveal">Skills &amp; Stack</p>
        <h2 className="reveal">The tools I <em>master</em></h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-group reveal">
              <p className="skill-group-title">
                <span>{group.icon}</span> {group.title}
              </p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className={`skill-tag${item.primary ? " primary" : ""}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
