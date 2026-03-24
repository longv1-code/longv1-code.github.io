import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { IconArrowUpRight, IconChevronLeft, IconChevronRight, IconGH } from "../components/Icons";
import "../styles/projects.css";

export default function Projects() {
  const overflowRef = useRef(null);
  const navigate = useNavigate();
  const ENABLE_CASE_STUDY = false;
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = overflowRef.current;
    if (!el) return;

    const updateEdges = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft >= maxScroll - 1);
    };

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [featuredProjects.length]);

  const scroll = (dir) => {
    const el = overflowRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth ?? 0;
    el.scrollBy({ left: dir * (cardWidth + 2), behavior: "smooth" });
  };

  const openProject = (id) => {
    if (!ENABLE_CASE_STUDY) return;
    window.scrollTo(0, 0);
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects" style={{ background: "var(--bg)" }}>
      <div className="s-label">Projects</div>

      <div className="car-wrap">
        <div className="car-overflow" ref={overflowRef}>
          {featuredProjects.map((p, i) => (
            <div
              key={p.id}
              className={`car-slide ${ENABLE_CASE_STUDY ? "" : "is-disabled"}`}
              onClick={() => openProject(p.id)}
            >
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
                  <div className="car-title-row">
                    <div className="car-title">{p.title}</div>
                    <div className="car-links">
                      {p.repoUrl && p.repoUrl !== "#" && (
                        <a
                          className="car-link"
                          href={p.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${p.title} GitHub repo`}
                        >
                          <IconGH />
                        </a>
                      )}
                      {p.liveUrl && p.liveUrl !== "#" && (
                        <a
                          className="car-link"
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${p.title} live link`}
                        >
                          <IconArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="car-sum">{p.summary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="car-nav">
          <button
            className={`car-arrow ${atStart ? "is-hidden" : ""}`}
            onClick={() => scroll(-1)}
          >
            <IconChevronLeft />
          </button>
          <button
            className={`car-arrow ${atEnd ? "is-hidden" : ""}`}
            onClick={() => scroll(1)}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div className="archive-cta">
        <button className="btn-ghost" onClick={() => navigate("/archive")}>View full archive →</button>
      </div>
    </section>
  );
}
