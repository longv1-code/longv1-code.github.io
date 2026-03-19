import { PROFILE } from "../data/profile";
import { IconEM, IconLI, IconGH } from "../components/Icons";
import "../styles/contact.css";

const LINKS = [
  { icon: <IconEM />, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: <IconLI />, label: "linkedin.com/in/longv1", href: PROFILE.linkedin },
  { icon: <IconGH />, label: "github.com/longv1-code", href: PROFILE.github },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="s-label">Contact</div>

      <div className="contact-layout">
        {/* Left: lede + links */}
        <div className="contact-left">
          <div className="contact-lede">
            Let's make<br /><em>something</em><br />together.
          </div>
          <p className="contact-sub">{PROFILE.contactBlurb}</p>

          <div className="contact-links">
            {LINKS.map(({ icon, label, href }) => (
              <a key={label} href={href} className="c-link" target="_blank" rel="noopener noreferrer">
                <div className="c-link-left">{icon}<span>{label}</span></div>
                <span className="c-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {[
            ["Name",    "text",  "Your name"],
            ["Email",   "email", "your@email.com"],
            ["Subject", "text",  "What's on your mind?"],
          ].map(([label, type, placeholder]) => (
            <div className="fg" key={label}>
              <label className="fl">{label}</label>
              <input type={type} placeholder={placeholder} className="fi" />
            </div>
          ))}

          <div className="fg">
            <label className="fl">Message</label>
            <textarea placeholder="Tell me about your project..." className="fi" />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn-fill">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
