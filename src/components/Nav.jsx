import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { navLinks } from "../content";
import Bow from "./Bow";

const THEME_KEY = "theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function initialTheme() {
  return readStoredTheme() ?? "light";
}

export default function Nav() {
  const [theme, setTheme] = useState(initialTheme);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const range = scrollHeight - clientHeight;
      setScrolled(window.scrollY > 16);
      progressRef.current.style.transform = `scaleX(${range > 0 ? window.scrollY / range : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__progress" ref={progressRef} aria-hidden="true" />
      <div className="wrap nav__inner">
        <a href="#home" className="nav__logo" aria-label="Hanifa, back to top">
          <Bow className="nav__bow" />
          Hanifa<span>.</span>
        </a>
        <nav aria-label="Main">
          <ul className="nav__links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="nav__theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
}
