import { personal } from "../../data/personal";
import { Globe, Code, Link as LinkIcon, AtSign } from "lucide-react";
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa"

/**
 * Maps social platform keys to Lucide icons (brand icons removed from lucide).
 * Using generic alternatives that convey the meaning.
 */
const SOCIAL_ICONS = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

/**
 * Footer — Social links and copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = Object.entries(personal.socials).filter(
    ([, url]) => url !== null
  );

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} {personal.name}.
        </p>

        {activeSocials.length > 0 && (
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {activeSocials.map(([key, url]) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  aria-label={`Visit ${key}`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
}
