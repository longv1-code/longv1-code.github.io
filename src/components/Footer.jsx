import { useLocation } from "react-router-dom";
import "../styles/chrome.css";

export default function Footer() {
  const { pathname } = useLocation();
  const showBackToTop = pathname !== "/archive";
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <footer>
      <span className="f-copy">© {new Date().getFullYear()} Long Vo. Built with care.</span>
      {showBackToTop && (
        <button
          className="f-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}
        >
          Back to top ↑
        </button>
      )}
    </footer>
  );
}
