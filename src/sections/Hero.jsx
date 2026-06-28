import { PROFILE } from "../data/profile";
import "../styles/hero.css";

export default function Hero() {
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="h-greeting">Hello, I'm</div>

        <h1 className="h-name">
          <em>{PROFILE.firstName}</em> {PROFILE.lastName}
        </h1>

        <div className="h-role">{PROFILE.role}</div>

        <p className="h-desc">{PROFILE.heroBio}</p>

        <div className="h-actions">
          <button type="button" className="btn-fill" onClick={() => scrollTo("projects")}>
            See my work
          </button>
          <button type="button" className="btn-ghost" onClick={() => scrollTo("contact")}>
            Get in touch →
          </button>
        </div>
      </div>
    </section>
  );
}
