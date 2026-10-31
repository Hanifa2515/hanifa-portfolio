import { useState } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";
import { review } from "../content";
import Reveal from "./Reveal";

function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="gallery">
      <div className="gallery__stage">
        <img key={active.src} src={active.src} alt={active.alt} width="1100" height="1100" />
      </div>
      <div className="gallery__thumbs">
        {images.map(({ src, label }, index) => (
          <button
            key={src}
            type="button"
            className="gallery__thumb"
            aria-pressed={index === activeIndex}
            aria-label={`Show image: ${label}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={src} alt="" width="1100" height="1100" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Review() {
  const { personalNote, rating } = review;

  return (
    <section id="review" className="section">
      <div className="wrap">
        <header className="review__head">
          <Reveal as="p" className="eyebrow">
            Product review
          </Reveal>
          <Reveal as="h2" delay={60}>
            {review.title}
          </Reveal>
          {rating !== null && (
            <Reveal as="p" delay={80} className="review__rating">
              My rating: <strong>{rating}/5</strong>
            </Reveal>
          )}
          <Reveal as="p" delay={100} className="body">
            {review.intro}
          </Reveal>
          {personalNote && (
            <Reveal as="blockquote" className="review__note">
              {personalNote}
            </Reveal>
          )}
        </header>

        <div className="review__grid">
          <Reveal>
            <Gallery images={review.gallery} />
          </Reveal>
          <Reveal as="aside" delay={120} className="spec">
            <p className="eyebrow">Specifications</p>
            <h3>{review.product}</h3>
            <table className="spec__table">
              <tbody>
                {review.specs.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        <div className="features">
          {review.sections.map(({ title, text, image, alt }, index) => (
            <Reveal as="article" key={title} delay={(index % 2) * 80} className="feature">
              <div className="feature__media">
                <img src={image} alt={alt} width="900" height="563" loading="lazy" />
              </div>
              <div className="feature__copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="body review__bridge">
          {review.downsides}
        </Reveal>

        <div className="proscons">
          <Reveal className="card">
            <h4>What I like</h4>
            <ul className="checklist">
              {review.pros.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="card">
            <h4>What could be better</h4>
            <ul className="checklist checklist--muted">
              {review.cons.map((item) => (
                <li key={item}>
                  <FiMinus aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="verdict">
          <h3>My verdict</h3>
          <p>{review.verdict}</p>
        </Reveal>
      </div>
    </section>
  );
}
