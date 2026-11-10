// About.jsx
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About({ profile }) {
  const ref = useReveal();

  return (
    <section id="about" className="section-container">
      <p className="section-label reveal" ref={ref}>About me</p>
      <h2 className="reveal">Engineer by craft,<br /><em>designer</em> by passion</h2>

      <div className="about-grid">
        {/* Left — bio + code block */}
        <div className="about-text">
          {profile.bio.map((para, i) => (
            <p
              key={i}
              className="reveal"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}

          <div className="swift-block reveal">
            <div className="swift-block-bar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="swift-block-filename">AlonsoSanchez.swift</span>
            </div>
            <pre>
<span className="kw">struct</span> <span className="type">AlonsoSanchez</span>: <span className="type">iOSDeveloper</span> {"{"}
  <span className="kw">let</span> location  = <span className="str">"Madrid, Spain"</span>
  <span className="kw">let</span> experience = <span className="num">8</span>          <span className="cm">// years</span>
  <span className="kw">let</span> passion    = [<span className="str">"Swift"</span>, <span className="str">"SwiftUI"</span>, <span className="str">"Clean Code"</span>]
  <span className="kw">var</span> status: <span className="type">String</span> {"{"}
    <span className="str">"Open to opportunities ✦"</span>
  {"}"}
{"}"}
            </pre>
          </div>
        </div>

        {/* Right — info card */}
        <div className="about-card reveal">
          <p className="about-card-title">Quick Info</p>

          {[
            { label: "Role",            value: "Senior iOS Developer"   },
            { label: "Location",        value: "📍 Madrid, Spain"       },
            { label: "Current company", value: "Capgemini", accent: true },
            { label: "Status",          value: "● Open to opportunities", green: true },
            { label: "Languages",       value: "Swift · Obj-C · JS"     },
            { label: "Experience",      value: `${profile.experience} years` },
            { label: "Specialty",       value: "SwiftUI · Architecture" },
          ].map(({ label, value, accent, green }) => (
            <div key={label} className="info-row">
              <span className="info-label">{label}</span>
              <span className={`info-value${accent ? " accent" : green ? " green" : ""}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
