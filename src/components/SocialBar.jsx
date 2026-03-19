import { useTheme } from "../context/ThemeContext";
import { PROFILE }  from "../data/profile";
import { IconGH, IconLI, IconEM } from "./Icons";
import "../styles/chrome.css";

const SOCIALS = [
  { label: "GitHub",   href: PROFILE.github,              Icon: IconGH },
  { label: "LinkedIn", href: PROFILE.linkedin,             Icon: IconLI },
  { label: "Email",    href: `mailto:${PROFILE.email}`,    Icon: IconEM },
];

export default function SocialBar() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <div className="sbar">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="s-btn"
            title={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>

      <button className="t-tog" onClick={toggle} title="Toggle theme">
        {dark ? "☀" : "☽"}
      </button>
    </>
  );
}
