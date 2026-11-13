import { ProjectSequence } from "./ProjectSequence";
import { Brand } from "../components/Brand";
import type { CaseStudy } from "../data/cases";
import { useLanguage } from "./Language";
import { ProjectVisual } from "./ProjectVisual";

const anchors = {
  relatpy: "experiencia",
  career: "projetos",
  nexus: "nexus",
  nexa: "nexa",
  nexer: "nexer",
};
export function ProjectIndex({ cases }: { cases: CaseStudy[] }) {
  const { t } = useLanguage();
  return (
    <section
      className="project-intro light-section"
      aria-label={t("Índice dos projetos", "Project index")}
    >
      <div className="section-topline">
        <span className="eyebrow">
          01 / {t("Trabalhos selecionados", "Selected work")}
        </span>
        <span>
          {t(
            "Aplicações, automações e o caminho entre elas.",
            "Applications, automation and the path between them.",
          )}
        </span>
      </div>
      <h2>
        {t("Ideias que encontram", "Ideas that find")}
        <br />
        <em>{t("um lugar na prática.", "a place in practice.")}</em>
      </h2>
      <nav
        className="project-directory"
        aria-label={t("Navegar entre projetos", "Navigate projects")}
      >
        {cases.map((item, i) => (
          <a key={item.id} href={"#" + anchors[item.id]}>
            <span>0{i + 1}</span>
            {item.name}
            <span>↘</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
export function ProjectChapter({
  item,
  index,
}: {
  item: CaseStudy;
  index: number;
}) {
  const { t } = useLanguage();
  const classes = {
    relatpy: "experience",
    career: "projects",
    nexus: "nexus",
    nexa: "nexa",
    nexer: "future",
  };
  return (
    <section
      id={anchors[item.id]}
      className={`project-chapter ${classes[item.id]} chapter-${item.id}`}
      aria-labelledby={"project-title-" + item.id}
    >
      <span className="chapter-watermark" aria-hidden="true">
        0{index + 1}
      </span>
      <div className="chapter-header">
        <span className="eyebrow">
          0{index + 1} / {item.category}
        </span>
        <span className="chapter-status">
          <i />
          {item.status}
        </span>
      </div>
      <div className="chapter-grid">
        <div className="chapter-narrative">
          <div className="compact-brand">
            <Brand id={item.id} />
          </div>
          <h2
            id={"project-title-" + item.id}
            aria-label={item.headline}
            className="chapter-title"
          >
            <span className="title-words" aria-hidden="true">
              {item.headline.split(" ").map((word, i) => (
                <span className="title-word-wrap" key={i}>
                  <span className="title-word">{word}</span>{" "}
                </span>
              ))}
            </span>
            <span className="title-underline" aria-hidden="true" />
          </h2>
          <p className="chapter-summary">{item.summary}</p>
          <div className="tech-chips">
            {item.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="chapter-actions">
            <a
              className="button"
              href={"#case/" + item.id}
              aria-label={t(
                "Ler caso " + item.name,
                "Read " + item.name + " case study",
              )}
            >
              {t("Ler estudo de caso", "Read case study")} ↗
            </a>
            <a
              className="text-link"
              href={
                "https://github.com/hik4s/" +
                {
                  relatpy: "RelatPy-Generic-Example",
                  career: "CareerOS",
                  nexus: "NEXUS",
                  nexa: "Nexa",
                  nexer: "Nexer",
                }[item.id]
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                item.id === "career"
                  ? t("Explorar o CareerOS ↗", "Explore CareerOS ↗")
                  : t(
                      "Ver código de " + item.name,
                      "View " + item.name + " source",
                    )
              }
            >
              {t("Ver código", "View source")} ↗
            </a>
          </div>
          {item.liveUrl && (
            <p className="live-link">
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                {t("Testar aplicação", "Try the application")} ↗
              </a>
              <small>
                {t(
                  "Acesso por conta demo · pode hibernar",
                  "Demo account required · may sleep",
                )}
              </small>
            </p>
          )}
        </div>
        <div className="chapter-product reveal">
          <ProjectVisual id={item.id} screenshot={item.id === "nexus"} />
        </div>
      </div>
      <ProjectSequence id={item.id} />
      <div className="chapter-footer-note">
        <span>{t("O recorte", "The scope")}</span>
        <p>{item.limitation}</p>
        <a href={"#case/" + item.id}>
          {t("Decisões e evidências", "Decisions and evidence")} →
        </a>
      </div>
    </section>
  );
}
