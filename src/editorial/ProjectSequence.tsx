import type { ProjectId } from "../data/projects";
import { useLanguage } from "./Language";

const sequences: Record<
  ProjectId,
  { pt: string[]; en: string[]; symbol: string }
> = {
  relatpy: {
    pt: ["Arquivos dispersos", "Rotina automatizada", "Relatório organizado"],
    en: ["Scattered files", "Automated routine", "Organized report"],
    symbol: "{ }",
  },
  career: {
    pt: [
      "Encontrar uma vaga",
      "Organizar candidaturas",
      "Acompanhar próximos passos",
    ],
    en: ["Find an opportunity", "Organize applications", "Track next steps"],
    symbol: "↗",
  },
  nexus: {
    pt: ["Pedido confirmado", "Estoque atualizado", "Recebível gerado"],
    en: ["Order confirmed", "Inventory updated", "Receivable created"],
    symbol: "⌘",
  },
  nexa: {
    pt: ["Registrar um valor", "Aplicar uma regra", "Enxergar o resultado"],
    en: ["Record an amount", "Apply a rule", "Understand the result"],
    symbol: "∑",
  },
  nexer: {
    pt: ["Observar o gesto", "Descrever a intenção", "Explorar uma automação"],
    en: ["Observe an action", "Describe the intent", "Explore automation"],
    symbol: "→",
  },
};
export function ProjectSequence({ id }: { id: ProjectId }) {
  const { locale, t } = useLanguage();
  const scene = sequences[id];
  return (
    <figure
      className={"project-sequence sequence-" + id}
      aria-label={t("Fluxo ilustrativo · ", "Illustrative flow · ") + id}
    >
      <figcaption>
        <span>{t("Uma ideia em movimento", "An idea in motion")}</span>
        <span>0{Object.keys(sequences).indexOf(id) + 1} / 03</span>
      </figcaption>
      <div className="sequence-stage">
        <svg
          className="sequence-track"
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 90 C160 90 170 30 330 90 S500 150 660 90 S830 30 1000 90"
            pathLength="1"
          />
        </svg>
        {scene[locale].map((label, i) => (
          <div className="sequence-card" key={label}>
            <span className="sequence-number">0{i + 1}</span>
            <span className="sequence-symbol" aria-hidden="true">
              {i === 1 ? scene.symbol : i === 0 ? "↳" : "✓"}
            </span>
            <strong>{label}</strong>
            <span className="sequence-rule" aria-hidden="true" />
          </div>
        ))}
      </div>
      <p>
        {t(
          "Representação visual do projeto · dados e etapas ilustrativos.",
          "Visual representation of the project · illustrative data and steps.",
        )}
      </p>
    </figure>
  );
}
