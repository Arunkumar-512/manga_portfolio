import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import ExperiencePage from "./components/Experience";
import ExtraPage from "./components/ExtraPages";
import ProjectsPage from "./components/Projects";
import ResumePage from "./components/Resume";
import SkillsPage from "./components/Skills";
import Home from "./components/Home";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center gap-12 md:gap-16 py-6">

      {/* 🔲 EACH SECTION WRAPPED FOR CONSISTENT WIDTH */}
      
      <section id="home" className="w-full px-4">
        <Home />
      </section>

      <section id="about" className="w-full px-4">
        <AboutPage />
      </section>

      <section id="skills" className="w-full px-4">
        <SkillsPage />
      </section>

      <section id="projects" className="w-full px-4">
        <ProjectsPage />
      </section>

      <section id="experience" className="w-full px-4">
        <ExperiencePage />
      </section>

      {/* OPTIONAL: Keep resume but it's not in navbar */}
      <section id="resume" className="w-full px-4">
        <ResumePage />
      </section>

      {/* OPTIONAL MANGA BONUS PAGE */}
      <section id="extra" className="w-full px-4">
        <ExtraPage />
      </section>

      <section id="contact" className="w-full px-4">
        <ContactPage />
      </section>

    </main>
  );
}