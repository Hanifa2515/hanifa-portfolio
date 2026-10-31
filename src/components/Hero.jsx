import { FiArrowDownRight } from "react-icons/fi";
import { hero } from "../content";
import Bow from "./Bow";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero__grid">
        <div>
          <Reveal as="p" className="eyebrow">
            {hero.eyebrow}
          </Reveal>
          <Reveal as="h1" delay={80} className="hero__title">
            {hero.greeting} <em>{hero.name}</em>
          </Reveal>
          <Reveal as="p" delay={160} className="hero__intro">
            {hero.intro}
          </Reveal>
          <Reveal delay={240} className="hero__actions">
            <a className="btn btn--fill" href="#about">
              About me <FiArrowDownRight />
            </a>
            <a className="btn btn--line" href="#review">
              Read my review
            </a>
          </Reveal>
        </div>
        <div className="photo-frame">
          <Bow className="photo-frame__bow" />
          <Reveal delay={120} className="hero__photo">
            <img src={hero.photo.src} alt={hero.photo.alt} width="900" height="1600" />
          </Reveal>
        </div>
      </div>
      <Bow className="float-bow float-bow--one" />
      <Bow className="float-bow float-bow--two" />
      <Bow className="float-bow float-bow--three" />
    </section>
  );
}
