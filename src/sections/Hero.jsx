import { useState, useEffect } from "react";
import { PROFILE } from "../data/profile";
import "../styles/hero.css";

export default function Hero() {
  const [rIdx,  setRIdx]  = useState(0);
  const [rFade, setRFade] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setRFade(true);
      setTimeout(() => {
        setRIdx((i) => (i + 1) % PROFILE.roles.length);
        setRFade(false);
      }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="h-greeting">Hello, I'm</div>

        <h1 className="h-name">
          <em>{PROFILE.firstName}</em> {PROFILE.lastName}
          <span className="h-wave">👋</span>
        </h1>

        <div className="h-role">
          <span className={rFade ? "r-out" : "r-in"}>
            {PROFILE.roles[rIdx]}
          </span>
        </div>

        <p className="h-desc">{PROFILE.heroBio}</p>

        <div className="h-actions">
          <button className="btn-fill" onClick={() => scrollTo("projects")}>
            See my work
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("contact")}>
            Get in touch →
          </button>
        </div>
      </div>
    </section>
  );
}
