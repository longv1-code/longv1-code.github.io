import { useLocation } from "react-router-dom";
import "../styles/chrome.css";

export default function Footer() {
  const { pathname } = useLocation();
  const showBackToTop = pathname !== "/archive";

  return (
    <footer>
      <span className="f-copy">© {new Date().getFullYear()} Long Vo. Built with care.</span>
      {showBackToTop && (
        <button
          className="f-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
      )}
    </footer>
  );
}
