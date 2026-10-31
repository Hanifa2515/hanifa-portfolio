import { about } from "../content";
import Bow from "./Bow";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section id="about" className="section section--tint">
      <div className="wrap">
        <div className="about__grid">
          <div className="photo-frame">
            <Bow className="photo-frame__bow" />
            <Reveal className="about__photo">
              <img src={about.photo.src} alt={about.photo.alt} width="560" height="766" />
            </Reveal>
          </div>
          <div>
            <Reveal as="p" className="eyebrow">
              About
            </Reveal>
            <Reveal as="h2" delay={60}>
              {about.title}
            </Reveal>
            {about.paragraphs.map((text, index) => (
              <Reveal as="p" key={index} delay={100 + index * 40} className="body">
                {text}
              </Reveal>
            ))}
            <Reveal as="dl" delay={220} className="facts">
              {about.facts.map(({ label, value }) => (
                <div key={label} className="fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </Reveal>
            <Reveal delay={260}>
              <SocialLinks />
            </Reveal>
          </div>
        </div>

        <Reveal as="h3" className="about__orgs-title">
          {about.organizationsTitle}
        </Reveal>
        <div className="cards">
          {about.organizations.map(({ name, role, period, text }, index) => (
            <Reveal as="article" key={name} delay={index * 80} className="card">
              <span className="card__tag">{period}</span>
              <h4>{name}</h4>
              <p className="card__role">{role}</p>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="about__orgs-title">
          {about.speakingTitle}
        </Reveal>
        <div className="cards">
          {about.speaking.map(({ name, role, tag, text }, index) => (
            <Reveal as="article" key={name} delay={index * 80} className="card">
              <span className="card__tag">{tag}</span>
              <h4>{name}</h4>
              <p className="card__role">{role}</p>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
