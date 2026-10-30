import { profile } from "../data/profile";
import type { Lang } from "../data/types";
import type { UI } from "../i18n/ui";
import { RequestFlow } from "./RequestFlow";
import "./Hero.css";

interface HeroProps {
  lang: Lang;
  t: UI;
}

export function Hero({ lang, t }: HeroProps) {
  const { links } = profile;

  return (
    <section id="inicio" className="container hero">
      <p className="hero__role">
        {profile.role[lang]}
        <span className="hero__location">{profile.location[lang]}</span>
      </p>

      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__headline">{profile.headline[lang]}</p>
      <p className="hero__intro">{profile.intro[lang]}</p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#proyectos">
          {t.ctaProjects}
        </a>
        {links.github && (
          <a
            className="btn"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaGithub}
          </a>
        )}
        {links.cv && (
          <a className="btn" href={links.cv} download>
            {t.ctaCv}
          </a>
        )}
      </div>

      <p className="hero__availability">{profile.availability[lang]}</p>

      <RequestFlow t={t} />
    </section>
  );
}
