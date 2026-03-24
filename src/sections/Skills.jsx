import { SKILL_GROUPS } from "../data/skills";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)" }}>
      <div className="s-label">Technical Skills</div>

      <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
        <h2 className="s-title" style={{ flexShrink: 0, maxWidth: 280 }}>
          Tools of<br /><em>the trade.</em>
        </h2>

        <div className="skills-layout" style={{ flex: 1 }}>
          {SKILL_GROUPS.map(({ label, items }) => (
            <div className="skill-row" key={label}>
              <div className="skill-group-name">{label}</div>
              <div className="skill-items">
                {items.map((s) => (
                  <span className="skill-item" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
