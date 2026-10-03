import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="blob absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="blob absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-glow/10 blur-3xl" style={{ animationDelay: "-9s" }} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
