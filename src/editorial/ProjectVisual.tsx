import type { ProjectId } from "../data/projects";
import { CareerDemo, FinanceDemo, NexusDemo } from "../components/Demos";
import { useLanguage } from "./Language";
import { assetUrl } from "./Navigation";

export function ProjectVisual({
  id,
  screenshot = false,
}: {
  id: ProjectId;
  screenshot?: boolean;
}) {
  const { t } = useLanguage();
  if (id === "career") return <CareerDemo />;
  if (id === "nexa") return <FinanceDemo />;
  if (id === "nexus")
    return screenshot ? (
      <figure className="product-capture">
        <div className="capture-bar">
          <i />
          <i />
          <i />
          <span>nexus / workspace</span>
        </div>
        <img
          width="1440"
          height="1304"
          loading="lazy"
          src={assetUrl("assets/nexus-overview.png")}
          alt={t(
            "Captura real da visão geral do NEXUS com dados fictícios",
            "Actual NEXUS overview screenshot with fictional data",
          )}
        />
        <figcaption>
          {t(
            "Interface real · ambiente de demonstração",
            "Actual interface · demo environment",
          )}
        </figcaption>
      </figure>
    ) : (
      <NexusDemo />
    );
  if (id === "relatpy")
    return (
      <div className="automation-scene demo">
        <div className="demo-label">
          {t(
            "Do trabalho repetitivo ao fluxo automatizado",
            "From repetitive work to an automated flow",
          )}
        </div>
        <div className="pipeline-visual" aria-hidden="true">
          <div className="file-icon">
            CSV<span>01</span>
          </div>
          <span>→</span>
          <div className="process-icon">
            py<span>async / worker</span>
          </div>
          <span>→</span>
          <div className="file-icon">
            CSV<span>✓</span>
          </div>
        </div>
        <div className="terminal-preview">
          <div>
            <span className="status-dot" /> relatpy / worker
          </div>
          <pre>
            {t(
              "> validar período\n> aguardar interface\n> extrair relatórios\n> acompanhar downloads\n> atualizar status_",
              "> validate date range\n> wait for interface\n> extract reports\n> track downloads\n> update status_",
            )}
          </pre>
        </div>
        <div className="reported-result">
          <div>
            <small>
              {t("Antes / relato de uso", "Before / reported usage")}
            </small>
            <strong>
              30–40 <span>min</span>
            </strong>
          </div>
          <span>→</span>
          <div>
            <small>
              {t("Depois / relato de uso", "After / reported usage")}
            </small>
            <strong>
              ~4 <span>min</span>
            </strong>
          </div>
        </div>
        <p className="visual-caption">
          {t(
            "Tempos aproximados informados no currículo. Sem benchmark público reproduzível.",
            "Approximate times reported in the résumé. No reproducible public benchmark.",
          )}
        </p>
      </div>
    );
  return (
    <div className="recorder-visual demo">
      <div className="demo-label">
        {t(
          "Conceito em desenvolvimento / fluxo ilustrativo",
          "Concept in development / illustrative flow",
        )}
      </div>
      <div className="capture-bar">
        <i />
        <i />
        <i />
        <span>nexer / recorder</span>
      </div>
      <div className="recorder-actions">
        <span className="recording-dot" />
        {t("Observar uma execução", "Observe a browser session")}
        <div>{t("01 · Selecionar relatório", "01 · Select report")}</div>
        <div>{t("02 · Definir período", "02 · Set date range")}</div>
        <div>{t("03 · Exportar arquivo", "03 · Export file")}</div>
      </div>
      <pre className="code-preview">
        <span># {t("do gesto ao código", "from action to code")}</span>
        {'\nawait page.get_by_role(\n  "button", name="Exportar"\n).click()'}
      </pre>
      <p className="visual-caption">
        {t(
          "Representação da proposta; não executa gravação nesta página.",
          "Proposal illustration; this page does not record browser sessions.",
        )}
      </p>
    </div>
  );
}
