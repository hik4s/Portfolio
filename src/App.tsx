import { useRef } from "react";
import { projects } from "./data/projects";
import {
  Header,
  Hero,
  TechnologyStrip,
  Story,
  Contact,
} from "./components/StaticSections";
import { ProjectSection } from "./components/ProjectSection";
import { Skills } from "./components/Demos";
import { usePortfolioMotion } from "./hooks/usePortfolioMotion";

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePortfolioMotion(rootRef);

  return (
    <div id="entrelinhas-vivo" ref={rootRef}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <TechnologyStrip />
        <Story />
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            number={index + 1}
          />
        ))}
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
