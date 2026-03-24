import "../styles/chrome.css";

export default function Footer() {
  return (
    <footer>
      <span className="f-copy">© {new Date().getFullYear()} Long Vo. Built with care.</span>
      <button
        className="f-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top ↑
      </button>
    </footer>
  );
}
