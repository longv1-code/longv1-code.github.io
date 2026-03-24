import { PROFILE } from "../data/profile";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="s-label">About</div>

      <div className="about-layout">
        {/* Left: bio + résumé buttons */}
        <div>
          <h2 className="s-title">
            Crafting with<br /><em>care & intent.</em>
          </h2>

          <div className="about-text" style={{ marginTop: 40 }}>
            {PROFILE.aboutBio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>

          <div className="about-actions">
            <a
              href={PROFILE.resumeUrl}
              download
              className="btn-fill"
              style={{ fontSize: 11 }}
            >
              Download Résumé
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 11 }}
            >
              View Résumé →
            </a>
          </div>
        </div>

        <div className="about-divider" />

        {/* Right: portrait placeholder */}
        <div className="about-right">
          <div className="portrait-sm">
            <div className="portrait-sm-inner">
              <div className="p-icon">
                <img className="portrait-img" src="/portrait.jpg" alt="Long Vo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
