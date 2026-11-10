import { useState } from "react";
import { businessModules, demoJobs, jobFilters, skills } from "../data/demos";
import type { BusinessModuleId, JobFilter, SkillId } from "../data/demos";

export function CareerDemo() {
  const [filter, setFilter] = useState<JobFilter>("all");
  const visibleJobs = demoJobs.filter(
    (job) => filter === "all" || job.category === filter,
  );

  return (
    <div className="demo">
      <div className="demo-label">Explore a ideia / dados fictícios</div>
      <div className="career-workspace">
        <div className="workspace-top">
          <span>CareerOS / espaço pessoal</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="workspace-body">
          <div className="workspace-title">Um próximo passo.</div>
          <div
            className="job-filters"
            role="group"
            aria-label="Filtrar vagas de demonstração"
          >
            {jobFilters.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={filter === option.id}
                onClick={() => setFilter(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {visibleJobs.map((job) => (
            <div className="demo-job" key={job.id}>
              <strong>{job.title}</strong>
              <small>Exemplo de oportunidade · dados fictícios</small>
              <span>{job.skills}</span>
            </div>
          ))}
          <div className="demo-label job-count" aria-live="polite">
            {visibleJobs.length}{" "}
            {visibleJobs.length === 1 ? "oportunidade" : "oportunidades"} de
            demonstração
          </div>
        </div>
      </div>
    </div>
  );
}

export function NexusDemo() {
  const [selected, setSelected] = useState<BusinessModuleId>("sales");
  const activeModule = businessModules.find((item) => item.id === selected)!;

  return (
    <div className="demo">
      <div className="demo-label">Um pedido conecta várias decisões</div>
      <div className="network">
        <div className="network-main" aria-hidden="true">
          <span>NEXUS</span>
        </div>
        <div
          className="network-nodes"
          role="group"
          aria-label="Explorar módulos do NEXUS"
        >
          {businessModules.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected === item.id}
              onClick={() => setSelected(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="network-detail" aria-live="polite">
          {activeModule.description}
        </div>
      </div>
    </div>
  );
}

export function FinanceDemo() {
  const [amount, setAmount] = useState("50");
  const [destination, setDestination] = useState("B");
  const sameAccount = destination === "A";
  const value = Number(amount);
  const invalidAmount =
    amount.trim() === "" || !Number.isFinite(value) || value <= 0;
  const invalid = sameAccount || invalidAmount;
  const message = sameAccount
    ? "Contas de origem e destino precisam ser diferentes."
    : invalidAmount
      ? "O valor da transferência precisa ser positivo."
      : "Regra atendida: contas diferentes e valor positivo.";

  return (
    <div className="demo">
      <div className="demo-label">
        Experimente uma regra / estudo de interface
      </div>
      <div className="phone-scene">
        <div className="phone-backdrop" aria-hidden="true" />
        <div className="finance-phone">
          <div className="phone-camera" aria-hidden="true" />
          <div className="phone-brand">NEXA FINANCE</div>
          <h3>
            Precisão começa
            <br />
            nos detalhes.
          </h3>
          <label>
            Valor de demonstração (R$)
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
            Transferir da conta A para
            <select
              value={destination}
              aria-invalid={sameAccount}
              aria-describedby="finance-rule"
              onChange={(event) => setDestination(event.target.value)}
            >
              <option value="B">Conta B</option>
              <option value="A">Conta A</option>
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
            Demonstração local de validação.
            <br />
            Não realiza operações financeiras.
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const [selected, setSelected] = useState<SkillId>("python");
  const activeSkill = skills.find((item) => item.id === selected)!;

  return (
    <section
      className="skills-section"
      aria-label="Conhecimentos com evidências"
    >
      <div className="mono">Ferramentas que encontram aplicação.</div>
      <h2>
        O que uso.
        <br />
        <em>Onde aplico.</em>
      </h2>
      <div
        className="skill-buttons"
        role="group"
        aria-label="Explorar conhecimentos"
      >
        {skills.map((skill) => (
          <button
            key={skill.id}
            type="button"
            aria-pressed={selected === skill.id}
            onClick={() => setSelected(skill.id)}
          >
            {skill.label}
          </button>
        ))}
      </div>
      <div className="skill-evidence" aria-live="polite">
        {activeSkill.evidence}
      </div>
    </section>
  );
}
