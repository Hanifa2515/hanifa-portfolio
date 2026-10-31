import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Review from "./components/Review";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Review />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer__inner">
          <span>© 2026 Hanifa Khoirunnisa Nugraha</span>
          <span>English 1 Project · Duta Bangsa University</span>
        </div>
      </footer>
    </>
  );
}
