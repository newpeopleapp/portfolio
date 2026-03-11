// Marquee.jsx — Infinite scrolling tech strip
import "./Marquee.css";

export default function Marquee({ items }) {
  // duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
