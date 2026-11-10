import type { ProjectId } from "../data/projects";
export function ProjectHeading({ id }: { id: ProjectId }) {
  switch (id) {
    case "relatpy":
      return (
        <h2 aria-label="Menos repetição. Mais possibilidades.">
          {"Menos "}
          <em className="scramble" data-text="repetição." aria-hidden="true">
            {"repetição."}
          </em>
          <br />
          {"Mais possibilidades."}
        </h2>
      );
    case "career":
      return (
        <h2 aria-label="CareerOS. Um próximo passo mais organizado.">
          <span className="scramble" data-text="CareerOS." aria-hidden="true">
            {"CareerOS."}
          </span>
          <br />
          {"Um próximo passo"}
          <br />
          <em>{"mais organizado."}</em>
        </h2>
      );
    case "nexus":
      return (
        <h2 aria-label="NEXUS. Por trás da operação.">
          <span className="scramble" data-text="NEXUS." aria-hidden="true">
            {"NEXUS."}
          </span>
          <br />
          {"Por trás"}
          <br />
          <em>{"da operação."}</em>
        </h2>
      );
    case "nexa":
      return (
        <h2 aria-label="Nexa Finance. Precisão em cada detalhe.">
          <span
            className="scramble"
            data-text="Nexa Finance."
            aria-hidden="true"
          >
            {"Nexa Finance."}
          </span>
          <br />
          <em>{"Precisão"}</em>
          {" em"}
          <br />
          {"cada detalhe."}
        </h2>
      );
    case "nexer":
      return (
        <h2 aria-label="Nexer. Automatizar a própria automação.">
          <span className="scramble" data-text="Nexer." aria-hidden="true">
            {"Nexer."}
          </span>
          <br />
          {"Automatizar a"}
          <br />
          <em>{"própria automação."}</em>
        </h2>
      );
  }
}
