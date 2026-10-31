import { useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { contact } from "../content";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

function ContactForm({ email }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Opens the visitor's mail app, so the static site needs no backend.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input required value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Your message
        <textarea required rows="5" value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button type="submit" className="btn btn--fill">
        Send message
      </button>
    </form>
  );
}

export default function Contact() {
  const { email } = contact;

  return (
    <section id="contact" className="section section--tint">
      <div className="wrap contact__grid">
        <div>
          <Reveal as="p" className="eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" delay={60}>
            {contact.title}
          </Reveal>
          <Reveal as="p" delay={100} className="body">
            {contact.text}
          </Reveal>
          <Reveal as="ul" delay={140} className="contact__list">
            <li>
              <FiMapPin aria-hidden="true" /> {contact.location}
            </li>
            {email && (
              <li>
                <FiMail aria-hidden="true" /> <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
          </Reveal>
          <Reveal delay={180}>
            <SocialLinks />
          </Reveal>
        </div>
        {email && (
          <Reveal delay={120}>
            <ContactForm email={email} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
