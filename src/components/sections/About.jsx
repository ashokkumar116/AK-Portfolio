import { personal } from "../../data/personal";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
// import { Globe, Code, Link as LinkIcon } from "lucide-react";
import { FaInstagram,FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";
import ashok from '../../assets/Ashokkumar.jpeg'

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter:FaTwitter ,
};

export function About() {
  const activeSocials = Object.entries(personal.socials).filter(([, url]) => url !== null);
  const initials = personal.name.split(" ").map((w) => w[0]).join("");

  return (
    <section id="about" className="section-surface">
      <div className="container-main">
        <SectionHeader label="About" title="The Builder" />
        <div className="grid-2" style={{ alignItems: "start" }}>
          <ScrollReveal>
            <div className="about-avatar" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-5xl)", fontWeight: 300, color: "var(--color-copper)", position: "relative", zIndex: 1 }}>{initials}</span> */}
              <img src={ashok} alt="Avatar" className="h-full w-full object-cover object-top " />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <p className="about-intro">{personal.bio[0]}</p>
            </ScrollReveal>
            {personal.bio.slice(1).map((para, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                <p style={{ marginBottom: "1rem" }}>{para}</p>
              </ScrollReveal>
            ))}
            {activeSocials.length > 0 && (
              <ScrollReveal delay={0.4}>
                <div className="about-socials">
                  {activeSocials.map(([key, url]) => {
                    const Icon = SOCIAL_ICONS[key];
                    return (
                      <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label={`Visit ${key}`}>
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
