import { Link, useNavigate, useLocation } from "react-router-dom";
import { PROFILE } from "../data/profile";
import { IconArrowUpRight } from "./Icons";
import "../styles/nav.css";

const NAV_LINKS = ["about", "projects", "skills", "contact"];

export default function Nav() {
  const navigate  = useNavigate();
  const { pathname } = useLocation();
  const isHome    = pathname === "/";

  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollTo = (id) => {
    if (!isHome) {
      navigate("/");
      // wait for Home to mount, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  };

  return (
    <nav aria-label="Primary">
      <Link to="/" className="n-logo">{PROFILE.firstName} {PROFILE.lastName}</Link>

      <ul className="n-center">
        {NAV_LINKS.map((s) => (
          <li key={s}>
            <button type="button" className="n-link" onClick={() => scrollTo(s)}>
              {s}
            </button>
          </li>
        ))}
      </ul>

      <a
        href={PROFILE.resumeUrl}
        className="n-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé <IconArrowUpRight />
      </a>
    </nav>
  );
}
