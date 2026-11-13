import type { CSSProperties } from "react";
import type { CaseStudy } from "../data/cases";
import { useLanguage } from "./Language";

const palette = {
  relatpy: "#0c343b",
  career: "#171d35",
  nexus: "#0c111a",
  nexa: "#f7f3ea",
  nexer: "#eeeef0",
};
const anchor = {
  relatpy: "experiencia",
  career: "projetos",
  nexus: "nexus",
  nexa: "nexa",
  nexer: "nexer",
};
export function ChapterBridge({
  from,
  to,
  number,
}: {
  from: CaseStudy;
  to: CaseStudy;
  number: number;
}) {
  const { t } = useLanguage();
  const stories = {
    career: t(
      "Da rotina de uma equipe à jornada de uma pessoa.",
      "From a team’s routine to an individual journey.",
    ),
    nexus: t(
      "Da organização pessoal às regras de uma operação.",
      "From personal organization to business rules.",
    ),
    nexa: t(
      "De processos conectados ao cuidado com cada valor.",
      "From connected processes to care for every amount.",
    ),
    nexer: t(
      "Das regras de domínio a uma nova pergunta sobre automação.",
      "From domain rules to a new question about automation.",
    ),
    relatpy: "",
  };
  return (
    <div
      className={"chapter-bridge bridge-to-" + to.id}
      style={
        {
          "--bridge-from": palette[from.id],
          "--bridge-to": palette[to.id],
          "--bridge-ink": ["nexa", "nexer"].includes(to.id)
            ? "#33272a"
            : "#f1eadc",
        } as CSSProperties
      }
    >
      <div className="bridge-thread" aria-hidden="true">
        <svg viewBox="0 0 500 200" fill="none" preserveAspectRatio="none">
          <path d="M1 1C1 90 499 45 499 200" pathLength="1" />
        </svg>
        <span />
      </div>
      <a
        className="bridge-link"
        href={"#" + anchor[to.id]}
        aria-label={t(
          "Próximo capítulo: " + to.name,
          "Next chapter: " + to.name,
        )}
      >
        <span className="bridge-count">0{number}</span>
        <span>
          <small>
            {t(
              "A história continua / próximo capítulo",
              "The story continues / next chapter",
            )}
          </small>
          <strong>{to.name}</strong>
          <span className="bridge-story">{stories[to.id]}</span>
        </span>
        <span className="bridge-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 5L19 19M19 6V19H6"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
