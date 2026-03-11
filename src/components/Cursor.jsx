// Cursor.jsx — Custom animated cursor
import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dotRef.current.style.left = e.clientX - 4 + "px";
      dotRef.current.style.top  = e.clientY - 4 + "px";
    };

    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ringRef.current.style.left = p.rx + "px";
      ringRef.current.style.top  = p.ry + "px";
      requestAnimationFrame(animate);
    };

    const addHover = () => {
      document.querySelectorAll("a,button,.app-card,.contact-card,.skill-group")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => ringRef.current?.classList.add("hover"));
          el.addEventListener("mouseleave", () => ringRef.current?.classList.remove("hover"));
        });
    };

    document.addEventListener("mousemove", onMove);
    animate();
    // attach hover listeners after DOM settles
    setTimeout(addHover, 800);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
