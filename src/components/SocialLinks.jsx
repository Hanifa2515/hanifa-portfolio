import { FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { socials } from "../content";

const icons = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

export default function SocialLinks() {
  const active = socials.filter(({ url }) => url);
  if (active.length === 0) return null;

  return (
    <ul className="socials">
      {active.map(({ name, icon, url, handle }) => {
        const Icon = icons[icon];
        return (
          <li key={name}>
            <a href={url} target="_blank" rel="noreferrer" className={`social social--${icon}`}>
              <Icon aria-hidden="true" />
              <span>{handle || name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
