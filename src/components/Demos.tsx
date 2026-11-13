import { MotionText } from "../editorial/MotionText";
import { useState } from "react";
import { businessModules, demoJobs, jobFilters, skills } from "../data/demos";
import type { BusinessModuleId, JobFilter, SkillId } from "../data/demos";
import { useLanguage } from "../editorial/Language";

export function CareerDemo() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<JobFilter>("all");
  const visibleJobs = demoJobs.filter(
    (job) => filter === "all" || job.category === filter,
  );
  const labels = { all: "All", dev: "Development", ti: "IT" };
  return (
    <div className="demo">
      <div className="demo-label">
        {t(
          "Explore a ideia / dados fictícios",
          "Explore the idea / fictional data",
        )}
      </div>
      <div className="career-workspace">
        <div className="workspace-top">
          <span>CareerOS / {t("espaço pessoal", "personal workspace")}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="workspace-body">
          <div className="workspace-title">
            {t("Um próximo passo.", "A next step.")}
          </div>
          <div
            className="job-filters"
            role="group"
            aria-label={t("Filtrar vagas de demonstração", "Filter demo jobs")}
          >
            {jobFilters.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={filter === option.id}
                onClick={() => setFilter(option.id)}
              >
                {locale === "pt" ? option.label : labels[option.id]}
              </button>
            ))}
          </div>
          {visibleJobs.map((job) => (
            <div className="demo-job" key={job.id}>
              <strong>
                {locale === "pt"
                  ? job.title
                  : job.category === "dev"
                    ? "Junior Python Developer"
                    : "Information Technology Internship"}
              </strong>
              <small>
                {t(
                  "Exemplo de oportunidade · dados fictícios",
                  "Sample opportunity · fictional data",
                )}
              </small>
              <span>
                {locale === "pt"
                  ? job.skills
                  : job.category === "dev"
                    ? "Python / APIs / SQL"
                    : "Investigation / organization / learning"}
              </span>
            </div>
          ))}
          <div className="demo-label job-count" aria-live="polite">
            {locale === "pt"
              ? `${visibleJobs.length} ${visibleJobs.length === 1 ? "oportunidade" : "oportunidades"} de demonstração`
              : `${visibleJobs.length} demo ${visibleJobs.length === 1 ? "opportunity" : "opportunities"}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export function NexusDemo() {
  const { t, locale } = useLanguage();
  const [selected, setSelected] = useState<BusinessModuleId>("sales");
  const current = businessModules.find((item) => item.id === selected)!;
  const english = {
    sales: [
      "Sales",
      "Sales: order rules connect to inventory and accounts receivable.",
    ],
    inventory: [
      "Inventory",
      "Inventory: products and movements support a consistent operation.",
    ],
    finance: [
      "Finance",
      "Finance: receivables share the same business context, with access controlled by role and organization.",
    ],
  };
  return (
    <div className="demo">
      <div className="demo-label">
        {t(
          "Um pedido conecta várias decisões",
          "One order connects several decisions",
        )}
      </div>
      <div className="network">
        <div className="network-main" aria-hidden="true">
          <span>NEXUS</span>
        </div>
        <div
          className="network-nodes"
          role="group"
          aria-label={t("Explorar módulos do NEXUS", "Explore NEXUS modules")}
        >
          {businessModules.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected === item.id}
              onClick={() => setSelected(item.id)}
            >
              {locale === "pt" ? item.label : english[item.id][0]}
            </button>
          ))}
        </div>
        <div className="network-detail" aria-live="polite">
          {locale === "pt" ? current.description : english[selected][1]}
        </div>
      </div>
    </div>
  );
}

export function FinanceDemo() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState("50");
  const [destination, setDestination] = useState("B");
  const sameAccount = destination === "A";
  const value = Number(amount);
  const invalidAmount =
    amount.trim() === "" || !Number.isFinite(value) || value <= 0;
  const invalid = sameAccount || invalidAmount;
  const message = sameAccount
    ? t(
        "Contas de origem e destino precisam ser diferentes.",
        "Source and destination accounts must be different.",
      )
    : invalidAmount
      ? t(
          "O valor da transferência precisa ser positivo.",
          "The transfer amount must be positive.",
        )
      : t(
          "Regra atendida: contas diferentes e valor positivo.",
          "Rule satisfied: different accounts and a positive amount.",
        );
  return (
    <div className="demo">
      <div className="demo-label">
        {t(
          "Experimente uma regra / estudo de interface",
          "Try a rule / interface study",
        )}
      </div>
      <div className="phone-scene">
        <div className="phone-backdrop" aria-hidden="true" />
        <div className="finance-phone">
          <div className="phone-camera" aria-hidden="true" />
          <div className="phone-brand">NEXA FINANCE</div>
          <h3>
            {t("Precisão começa", "Precision starts")}
            <br />
            {t("nos detalhes.", "with the details.")}
          </h3>
          <label>
            {t("Valor de demonstração (R$)", "Demo amount (BRL)")}
            <input
              type="number"
              inputMode="decimal"
              min="0.01"
              step="0.01"
              value={amount}
              aria-invalid={invalidAmount}
              aria-describedby="finance-rule"
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>
          <label>
            {t("Transferir da conta A para", "Transfer from account A to")}
            <select
              value={destination}
              aria-invalid={sameAccount}
              aria-describedby="finance-rule"
              onChange={(event) => setDestination(event.target.value)}
            >
              <option value="B">{t("Conta B", "Account B")}</option>
              <option value="A">{t("Conta A", "Account A")}</option>
            </select>
          </label>
          <div
            id="finance-rule"
            className={`rule-result${invalid ? " invalid" : ""}`}
            aria-live="polite"
          >
            {message}
          </div>
          <div className="phone-note">
            {t("Demonstração local de validação.", "Local validation demo.")}
            <br />
            {t(
              "Não realiza operações financeiras.",
              "No financial transactions are performed.",
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const { t, locale } = useLanguage();
  const [selected, setSelected] = useState<SkillId>("python");
  const current = skills.find((item) => item.id === selected)!;
  const english: Record<SkillId, string> = {
    python:
      "Python connects RelatPy automation to API development in CareerOS and NEXUS.",
    react:
      "React and TypeScript power the NEXUS interface and this portfolio. CareerOS uses React in its authentication module.",
    sql: "PostgreSQL, SQLAlchemy and migrations organize the backend data layer.",
    kotlin:
      "In Nexa Finance, Kotlin supports financial domain rules and the Android foundation in Jetpack Compose.",
    quality:
      "Automated tests, Git and validation support development. Each demonstration links to inspectable repository evidence.",
  };
  const links: Record<SkillId, string> = {
    python:
      "https://github.com/hik4s/RelatPy-Generic-Example/blob/portfolio/public-release/core/executor.py",
    react: "https://github.com/hik4s/NEXUS/blob/main/frontend/src/App.tsx",
    sql: "https://github.com/hik4s/NEXUS/tree/main/backend/alembic/versions",
    kotlin: "https://github.com/hik4s/Nexa",
    quality:
      "https://github.com/hik4s/NEXUS/blob/main/frontend/e2e/portfolio-flow.spec.ts",
  };
  return (
    <section
      className="skills-section"
      aria-label={t("Conhecimentos com evidências", "Skills with evidence")}
    >
      <div className="section-topline">
        <span className="eyebrow">
          03 / {t("Ferramentas com aplicação", "Tools in practice")}
        </span>
      </div>
      <h2>
        {t("O que uso.", "What I use.")}
        <br />
        <em>
          <MotionText
            text={t("Onde aplico.", "Where I apply it.")}
            effect="wave"
          />
        </em>
      </h2>
      <div
        className="skill-buttons"
        role="group"
        aria-label={t("Explorar conhecimentos", "Explore skills")}
      >
        {skills.map((skill) => (
          <button
            key={skill.id}
            type="button"
            aria-pressed={selected === skill.id}
            onClick={() => setSelected(skill.id)}
          >
            {locale === "en" && skill.id === "quality"
              ? "assert quality"
              : skill.label}
          </button>
        ))}
      </div>
      <div className="skill-evidence" aria-live="polite">
        {locale === "pt" ? current.evidence : english[selected]}
      </div>
      <a
        className="text-link"
        href={links[selected]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("Conferir no código", "Inspect the source")} ↗
      </a>
    </section>
  );
}
