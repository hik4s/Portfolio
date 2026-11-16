import type { CaseStudy } from "../data/cases";
import { useLanguage } from "./Language";

export function RecruiterOverview({ cases }: { cases: CaseStudy[] }) {
  const { t } = useLanguage();
  const paths = [
    {
      id: "nexus",
      skill: t("Backend e regras de negócio", "Backend and business rules"),
      description: t(
        "Uma venda atualiza estoque e recebível; o cancelamento reverte os efeitos. Permissões e isolamento entre empresas têm testes próprios.",
        "A sale updates inventory and its receivable; cancellation reverses the effects. Permissions and company isolation have dedicated tests.",
      ),
      proof: t(
        "FastAPI · PostgreSQL · React/TypeScript",
        "FastAPI · PostgreSQL · React/TypeScript",
      ),
    },
    {
      id: "relatpy",
      skill: t("Automação aplicada", "Applied automation"),
      description: t(
        "Da rotina de relatórios a um executor Python com tarefas paralelas e status persistido. Demo local independente, com três CSVs fictícios.",
        "From report routines to a Python executor with parallel tasks and persisted status. Independent local demo with three fictional CSVs.",
      ),
      proof: "Python · Playwright · asyncio",
    },
    {
      id: "career",
      skill: t("APIs e integrações", "APIs and integrations"),
      description: t(
        "Busca e organização de candidaturas com autenticação, dados por usuário e tratamento de falhas de fontes externas.",
        "Job discovery and application tracking with authentication, user-scoped data and external-source failure handling.",
      ),
      proof: "FastAPI · HTTPX · Supabase/PostgreSQL",
    },
  ];
  return (
    <section
      id="selecionados"
      className="recruiter-overview light-section"
      aria-labelledby="overview-title"
    >
      <div className="section-topline">
        <span className="eyebrow">{t("Comece por aqui", "Start here")}</span>
        <span>
          {t("Python / Backend / Full Stack", "Python / Backend / Full Stack")}
        </span>
      </div>
      <h2 id="overview-title">
        {t("Projetos em um minuto", "Projects in one minute")}
      </h2>
      <p className="overview-intro">
        {t(
          "Três projetos, três formas de avaliar meu trabalho. Escolha o que mais se aproxima da sua vaga.",
          "Three projects, three ways to assess my work. Start with the one closest to your role.",
        )}
      </p>
      <div className="recruiter-grid">
        {paths.map((path) => {
          const item = cases.find((item) => item.id === path.id)!;
          const demo = item.liveUrl ?? item.demoUrl!;
          return (
            <article key={item.id}>
              <p className="eyebrow">{path.skill}</p>
              <h3>{item.name}</h3>
              <p>{path.description}</p>
              <p className="overview-stack">{path.proof}</p>
              <div className="overview-links">
                <a
                  className="button button-dark"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    item.liveUrl
                      ? t("Testar " + item.name, "Try " + item.name)
                      : t(
                          "Executar demo " + item.name,
                          "Run " + item.name + " demo",
                        )
                  }
                >
                  {item.liveUrl
                    ? t("Testar aplicação", "Try the app")
                    : t("Executar demo local", "Run local demo")}{" "}
                  ↗
                </a>
                <a href={"#case/" + item.id}>
                  {t("Decisões e evidências", "Decisions and evidence")} →
                </a>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Código", "Source")} ↗
                </a>
              </div>
              <small>
                {item.liveUrl
                  ? t(
                      "Crie sua conta. Use dados fictícios. A hospedagem pode levar um tempo para iniciar.",
                      "Create an account. Use fictional data. Hosting may take time to wake.",
                    )
                  : t(
                      "Guia de instalação e execução. Não requer acesso corporativo.",
                      "Installation and run guide. No corporate access required.",
                    )}
              </small>
            </article>
          );
        })}
      </div>
      <p className="complementary-note">
        {t(
          "Estudos complementares: Nexa Finance (Kotlin) e Nexer (projeto privado em desenvolvimento), detalhados após os projetos principais.",
          "Complementary studies: Nexa Finance (Kotlin) and Nexer (a private project in development), detailed after the main projects.",
        )}
      </p>
    </section>
  );
}
