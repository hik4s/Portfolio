import type { Project, ProjectId } from "../data/projects";
import { Brand } from "./Brand";
import { ProjectHeading } from "./ProjectHeading";
import { CareerDemo, FinanceDemo, NexusDemo } from "./Demos";
import { NexerDemo, RelatPyDemo } from "./Illustrations";

function ProjectDemo({ id }: { id: ProjectId }) {
  switch (id) {
    case "relatpy":
      return <RelatPyDemo />;
    case "career":
      return <CareerDemo />;
    case "nexus":
      return <NexusDemo />;
    case "nexa":
      return <FinanceDemo />;
    case "nexer":
      return <NexerDemo />;
  }
}

export function ProjectSection({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  const copy = (
    <div className="project-copy reveal">
      <ProjectHeading id={project.id} />
      {project.inDevelopment && (
        <span className="status">Em desenvolvimento</span>
      )}
      {project.paragraphs.map((paragraph) => (
        <p className="chapter-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
  const demo = <ProjectDemo id={project.id} />;

  return (
    <section
      className={project.className}
      id={project.anchor}
      aria-label={project.label}
    >
      <div className="atmosphere" aria-hidden="true">
        <div className="detail-grid" />
        <span className="chapter-no">{String(number).padStart(2, "0")}</span>
        <span className="floating-code">{project.decoration}</span>
      </div>
      <Brand id={project.id} />
      <div className="mono">{project.eyebrow}</div>
      <div className="split">
        {project.id === "nexus" ? (
          <>
            {demo}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {demo}
          </>
        )}
      </div>
      <div className={project.id === "nexa" ? "nexa-footer" : "chapter-footer"}>
        {project.repository && (
          <a
            className="action"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
          </a>
        )}
        <span className="mono">{project.stack}</span>
      </div>
    </section>
  );
}
