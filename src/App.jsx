// App.jsx — Root component, composes all sections
import { useEffect } from "react";

// Styles
import "./styles/global.css";

// Data
import { profile, skills, experience, apps, marqueeItems } from "./data/portfolio";

// Components
import Cursor     from "./components/Cursor";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Marquee    from "./components/Marquee";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Apps       from "./components/Apps";
import GitHub     from "./components/GitHub";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

// Global scroll-reveal (runs once)
import useReveal  from "./hooks/useReveal";

export default function App() {
  useReveal(); // attaches IntersectionObserver to all .reveal elements

  return (
    <>
      <Cursor />
      <Navbar cvPath={profile.cv} />

      <main>
        <Hero       profile={profile} />
        <Marquee    items={marqueeItems} />
        <About      profile={profile} />
        <Skills     skills={skills} />
        <Experience experience={experience} />
        <Apps       apps={apps} />
        <GitHub     profile={profile} />
        <Contact    profile={profile} />
      </main>

      <Footer />
    </>
  );
}
