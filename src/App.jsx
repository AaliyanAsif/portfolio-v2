import { useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const yCoordinate =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 96; // Match your navbar height
        window.scrollTo({ top: yCoordinate - offset, behavior: "smooth" });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className=" bg-neutral-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
