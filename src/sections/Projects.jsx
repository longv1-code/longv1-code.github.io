import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { IconChevronLeft, IconChevronRight } from "../components/Icons";
import "../styles/projects.css";

export default function Projects() {
  const overflowRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (dir) => {
    const el = overflowRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth ?? 0;
    el.scrollBy({ left: dir * (cardWidth + 2), behavior: "smooth" });
  };

  const openProject = (id) => {
    window.scrollTo(0, 0);
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects" style={{ background: "var(--bg)" }}>
      <div className="s-label">Projects</div>

      <div className="car-wrap">
        <div className="car-overflow" ref={overflowRef}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="car-slide" onClick={() => openProject(p.id)}>
              <div className="car-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="car-content">
                <div>
                  <div className="car-num" style={{ marginBottom: 14 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="car-tags">
                    {p.tags.map((t) => <span className="c-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="car-title">{p.title}</div>
                  <div className="car-sum">{p.summary}</div>
                </div>
                <div className="car-bottom">
                  <button className="car-open">Open project →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="car-nav">
          <button className="car-arrow" onClick={() => scroll(-1)}>
            <IconChevronLeft />
          </button>
          <button className="car-arrow" onClick={() => scroll(1)}>
            <IconChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
