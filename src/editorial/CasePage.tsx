import { MotionText } from "./MotionText";
import type { CaseStudy } from "../data/cases";
import { Brand } from "../components/Brand";
import { ProjectVisual } from "./ProjectVisual";
import { assetUrl } from "./Navigation";
import { useLanguage } from "./Language";

const anchors = {
  relatpy: "experiencia",
  career: "projetos",
  nexus: "nexus",
  nexa: "nexa",
  nexer: "nexer",
};
export function CasePage({ item }: { item?: CaseStudy }) {
  const { t } = useLanguage();
  if (!item)
    return (
      <main id="conteudo" className="not-found" tabIndex={-1}>
        <span className="eyebrow">
          404 / {t("Página não encontrada", "Page not found")}
        </span>
        <h1>
          {t(
            "Este capítulo ainda não existe.",
            "This chapter does not exist yet.",
          )}
        </h1>
        <a className="button button-dark" href="#inicio">
          {t("Voltar ao início", "Back to home")}
        </a>
      </main>
    );
  return (
    <main id="conteudo" className={"case-page case-" + item.id} tabIndex={-1}>
      <div className="case-curtain" aria-hidden="true" />
      <section className="case-hero">
        <a
          aria-label={t("Voltar aos projetos", "Back to projects")}
          className="case-back text-link"
          href={"#" + anchors[item.id]}
        >
          ← {t("Voltar aos projetos", "Back to projects")}
        </a>
        <div className="case-heading">
          <div>
            <span className="eyebrow">
              {item.category} / {item.status}
            </span>
            <h1>
              <MotionText text={item.name} effect="outline" />
              <em>
                <MotionText text={item.headline} effect="focus" />
              </em>
            </h1>
            <p>{item.summary}</p>
            <div className="tech-chips">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="case-brand">
            <Brand id={item.id} />
          </div>
        </div>
        <nav
          className="case-index"
          aria-label={t("Conteúdo do caso", "Case contents")}
        >
          <a href={"#case/" + item.id + "/problema"}>
            01 / {t("Problema", "Problem")}
          </a>
          <a href={"#case/" + item.id + "/decisoes"}>
            02 / {t("Decisões", "Decisions")}
          </a>
          <a href={"#case/" + item.id + "/evidencias"}>
            03 / {t("Evidências", "Evidence")}
          </a>
        </nav>
      </section>
      <section className="case-story" id="problema">
        <div>
          <span className="eyebrow">01 / {t("Contexto", "Context")}</span>
          <h2>{t("O problema", "The problem")}</h2>
          <p>{item.challenge}</p>
        </div>
        <div>
          <h3>{t("Minha contribuição", "My contribution")}</h3>
          <p>{item.contribution}</p>
          <h3>
            {t(
              "Como a solução foi organizada",
              "How the solution was organized",
            )}
          </h3>
          <ol>
            {item.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="case-showcase">
        <ProjectVisual id={item.id} screenshot={Boolean(item.screenshot)} />
        {item.screenshot && (
          <a
            className="text-link"
            href={assetUrl(item.screenshot)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Ver captura completa do NEXUS", "View full NEXUS screenshot")} ↗
          </a>
        )}
      </section>
      <section className="case-decisions" id="decisoes">
        <span className="eyebrow">
          02 / {t("Explorador técnico", "Technical explorer")}
        </span>
        <h2>{t("Decisões técnicas", "Technical decisions")}</h2>
        <p>
          {t(
            "Abra uma pergunta para conhecer a escolha e encontrar sua referência no código.",
            "Open a question to explore the choice and find its reference in the code.",
          )}
        </p>
        <div className="decisions-list">
          {item.decisions.map((decision, i) => (
            <details key={decision.question}>
              <summary>
                <span>0{i + 1}</span>
                {decision.question}
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <p>{decision.answer}</p>
                <a
                  className="text-link"
                  href={decision.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {decision.source.label} ↗
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="case-outcome">
        <div>
          <span className="eyebrow">
            {t("Resultado e aprendizado", "Outcome and learning")}
          </span>
          <h2>{t("O que já é possível.", "What is possible today.")}</h2>
          <p>{item.result}</p>
        </div>
        <aside>
          <h3>{t("Limites do estado atual", "Current limitations")}</h3>
          <p>{item.limitation}</p>
          {item.id === "relatpy" && (
            <p>
              {t(
                "Os tempos de 30–40 min e ~4 min são aproximados e informados no currículo de 09/11/2026. Não há protocolo, tamanho de amostra ou benchmark público para reproduzi-los.",
                "The 30–40 min and ~4 min times are approximate, reported in the résumé dated November 9, 2026. No public protocol, sample size or benchmark is available to reproduce them.",
              )}
            </p>
          )}
        </aside>
      </section>
      <section className="case-evidence" id="evidencias">
        <span className="eyebrow">
          03 / {t("Confira por dentro", "Look inside")}
        </span>
        <h2>{t("Evidências, com endereço.", "Evidence you can inspect.")}</h2>
        <div>
          {item.evidence.map((e, i) => (
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              key={e.url}
            >
              <span>0{i + 1}</span>
              <strong>{e.label}</strong>
              <span>↗</span>
            </a>
          ))}
        </div>
        {item.liveUrl && (
          <p>
            <a
              className="button button-dark"
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Abrir demonstração", "Open demo")} ↗
            </a>
            <small>
              {t(
                "Conta de demonstração necessária; o serviço gratuito pode hibernar.",
                "Demo account required; the free service may sleep.",
              )}
            </small>
          </p>
        )}
        <a className="text-link" href={"#" + anchors[item.id]}>
          ← {t("Voltar aos projetos", "Back to projects")}
        </a>
      </section>
    </main>
  );
}
