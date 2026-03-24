import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { IconArrowUpRight, IconGH } from "../components/Icons";
import "../styles/casestudy.css";

export default function ProjectDetail() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const project  = PROJECTS.find((p) => p.id === Number(id));
  const projectDate = project?.month ? `${project.month} ${project.year}` : project?.year;

  // 404 — project not found
  if (!project) {
    return (
      <div style={{ padding: "160px 64px", minHeight: "100vh" }}>
        <p style={{ color: "var(--text2)" }}>Project not found.</p>
        <button className="btn-ghost" onClick={() => navigate("/")}>
          ← Back home
        </button>
      </div>
    );
  }

  return (
    <div className="detail">
      {/* Full-bleed banner */}
      <div className="cs-banner">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="cs-body">
        {/* Back button */}
        <button className="d-back" onClick={() => navigate("/")}>
          ← All projects
        </button>

        {/* Title block */}
        <div className="cs-title-block">
          <div className="cs-eyebrow">{projectDate} · Case Study</div>
          <h1 className="cs-title"><em>{project.title}</em></h1>
          <p className="cs-summary">{project.summary}</p>
        </div>

        {/* TL;DR strip */}
        <div className="cs-tldr">
          <div className="cs-tldr-item">
            <div className="cs-tldr-label">My Role</div>
            <div className="cs-tldr-val">{project.role}</div>
          </div>
          <div className="cs-tldr-item">
            <div className="cs-tldr-label">Timeline</div>
            <div className="cs-tldr-val">{project.duration}</div>
          </div>
          <div className="cs-tldr-item">
            <div className="cs-tldr-label">Date</div>
            <div className="cs-tldr-val">{projectDate}</div>
          </div>
          <div className="cs-tldr-item">
            <div className="cs-tldr-label">Stack</div>
            <div className="cs-tldr-chips">
              {project.tech.map((t) => (
                <span className="cs-chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="cs-links">
          <a
            href={project.liveUrl}
            className="cs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconArrowUpRight /> Live Demo
          </a>
          <a
            href={project.repoUrl}
            className="cs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGH /> Source Code
          </a>
        </div>

        {/* 01 — The Problem */}
        <div className="cs-section">
          <div className="cs-section-label">01 — The Problem</div>
          <div className="cs-section-title">Why did this exist?</div>
          <p className="cs-prose">{project.problem}</p>
        </div>

        {/* 02 — What I Built */}
        <div className="cs-section">
          <div className="cs-section-label">02 — What I Built</div>
          <div className="cs-section-title">The interesting parts.</div>
          <div className="cs-built">
            {project.built.map((item, i) => (
              <div className="cs-built-item" key={i}>
                <div className="cs-built-heading">{item.heading}</div>
                <p className="cs-built-body">{item.body}</p>
                {item.image && (
                  <div className="cs-built-img">
                    <img src={item.image} alt={item.heading} loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 03 — What I Learned */}
        <div className="cs-section">
          <div className="cs-section-label">03 — What I Learned</div>
          <div className="cs-section-title">Honest reflection.</div>
          <div className="cs-learned">
            <p>{project.learned}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
