import { CodeText } from "./CodeText";
import { useState } from "react";
import { useLanguage } from "./Language";
import { resumeUrl } from "./Navigation";

export function EditorialHero() {
  const { t } = useLanguage();
  return (
    <section
      id="inicio"
      className="hero editorial-hero"
      aria-label={t("Apresentação", "Introduction")}
    >
      <div className="hero-orbit" aria-hidden="true">
        <svg viewBox="0 0 1200 900" fill="none">
          <path
            d="M-100 760 C500 920 210 0 750 150 S1400 650 940 740 S480 440 1400 280"
            pathLength="1"
          />
        </svg>
        <span className="orbit-note">KI / IDEAS INTO SYSTEMS</span>
      </div>
      <div className="hero-kicker">
        <span className="status-dot" />
        {t(
          "Desenvolvimento de software · Python & Full Stack",
          "Software development · Python & Full Stack",
        )}
        <span className="edition">
          {t("PORTFÓLIO / 2026", "PORTFOLIO / 2026")}
        </span>
      </div>
      <div className="editorial-hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            {t(
              "Kauan Inacio dos Santos / Presidente Prudente, SP",
              "Kauan Inacio dos Santos / Presidente Prudente, Brazil",
            )}
          </p>
          <h1
            aria-label={t(
              "Curiosidade que vira código. Código que muda rotinas.",
              "Curiosity becomes code. Code changes routines.",
            )}
          >
            <CodeText text={t("Curiosidade", "Curiosity")} />
            <br />
            {t("que vira ", "becomes ")}
            <em>{t("código.", "code.")}</em>
            <small>
              {t("Código que muda rotinas.", "Code changes routines.")}
            </small>
          </h1>
          <p className="hero-description">
            {t(
              "Construo automações e aplicações que conectam dados, interfaces e problemas reais. Estudante de T.I. na Univesp, com experiência em automação aplicada à rotina de uma equipe.",
              "I build automation and applications that connect data, interfaces and real problems. An Information Technology student at Univesp, with experience in automation used in a team’s daily work.",
            )}
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#experiencia">
              {t("Explorar projetos", "Explore projects")}{" "}
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href={resumeUrl}
              download="Curriculo_Kauan-Inacio.pdf"
            >
              {t("Baixar currículo", "Download résumé")} ↗
            </a>
          </div>
          <p className="availability">
            {t(
              "Aberto a estágio e oportunidades júnior em desenvolvimento.",
              "Open to software development internships and junior roles.",
            )}
          </p>
        </div>
        <aside className="author-card" aria-labelledby="author-heading">
          <div className="author-card-top">
            <span className="eyebrow">
              {t("Quem está por trás do código", "The person behind the code")}
            </span>
            <span aria-hidden="true">01 / KI</span>
          </div>
          <div className="author-monogram" aria-hidden="true">
            <span>ki</span>
            <i />
            <small>PRESIDENTE PRUDENTE / SP</small>
          </div>
          <div className="author-story">
            <h2 id="author-heading">{t("Prazer, Kauan.", "Hi, I’m Kauan.")}</h2>
            <p>
              {t(
                "Meu primeiro projeto nasceu de uma rotina que tomava tempo: extrair relatórios. Automatizar esse trabalho virou o RelatPy — e abriu caminho para construir outras aplicações.",
                "My first project grew out of a time-consuming routine: extracting reports. Automating that work became RelatPy — and opened the way to building other applications.",
              )}
            </p>
            <p>
              {t(
                "Hoje, conecto o que aprendo em T.I. na Univesp a projetos de automação, APIs e interfaces.",
                "Today, I connect what I learn studying IT at Univesp to automation, API and interface projects.",
              )}
            </p>
          </div>
          <div className="author-signoff">
            <span>Kauan Inacio</span>
            <a href="#trajetoria">{t("Minha trajetória", "My journey")} ↗</a>
          </div>
        </aside>
      </div>
      <div className="hero-bottom-rule">
        <span>PYTHON / FASTAPI / REACT / TYPESCRIPT / SQL</span>
        <a href="#processo">
          {t("Conheça meu processo", "Explore my process")} ↗
        </a>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const steps = t(
    "Entender|Construir|Verificar",
    "Understand|Build|Verify",
  ).split("|");
  const details = [
    t(
      "Começar pelo fluxo da pessoa usuária: o que toma tempo, onde os dados entram e o que precisa continuar correto.",
      "Start with the user’s workflow: what takes time, where data enters, and what must remain correct.",
    ),
    t(
      "Transformar o problema em uma entrega pequena: regras explícitas, componentes com responsabilidade clara e decisões registradas.",
      "Turn the problem into a small deliverable: explicit rules, focused components and recorded decisions.",
    ),
    t(
      "Usar testes e execução real para conferir os comportamentos. Documentar o que foi validado, o que depende do ambiente e o que ainda falta.",
      "Use tests and actual execution to check behavior. Document what was validated, what depends on the environment and what remains.",
    ),
  ];
  return (
    <section id="processo" className="process-section light-section">
      <div className="section-topline">
        <span className="eyebrow">
          04 / {t("Por trás do código", "Behind the code")}
        </span>
        <span>
          {t(
            "Processo, escolhas e aprendizado",
            "Process, choices and learning",
          )}
        </span>
      </div>
      <div className="process-layout">
        <div>
          <h2>
            {t("Construir é também", "Building also means")}
            <br />
            <em>{t("saber explicar.", "being able to explain.")}</em>
          </h2>
          <p>
            {t(
              "Uma boa demonstração mostra o resultado. Um bom estudo de caso mostra as escolhas que o tornaram possível.",
              "A good demo shows the result. A good case study shows the choices that made it possible.",
            )}
          </p>
          <div
            className="process-tabs"
            role="group"
            aria-label={t("Etapas de desenvolvimento", "Development stages")}
          >
            {steps.map((step, i) => (
              <button
                key={step}
                type="button"
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span>0{i + 1}</span>
                {step}
              </button>
            ))}
          </div>
          <p className="process-detail" aria-live="polite">
            {details[selected]}
          </p>
        </div>
        <aside className="ai-note">
          <span className="eyebrow">
            {t("IA no desenvolvimento", "AI in development")}
          </span>
          <h3>{t("Assistência com critério.", "Assistance with judgment.")}</h3>
          <p>
            {t(
              "Claude, Codex e Copilot fazem parte das ferramentas de apoio ao desenvolvimento destes projetos. As evidências estão no código, nas decisões e nas validações de cada entrega.",
              "Claude, Codex and Copilot are among the tools used to support these projects. The evidence lives in the code, decisions and validation of each deliverable.",
            )}
          </p>
          <ul>
            <li>
              {t(
                "Propostas de código precisam de revisão.",
                "Code suggestions require review.",
              )}
            </li>
            <li>
              {t(
                "Testes conferem comportamentos concretos.",
                "Tests check concrete behavior.",
              )}
            </li>
            <li>
              {t(
                "Limitações devem acompanhar a demonstração.",
                "Limitations belong alongside the demo.",
              )}
            </li>
          </ul>
          <span className="handwritten">
            {t("aprender → testar → evoluir", "learn → test → improve")}
          </span>
        </aside>
      </div>
    </section>
  );
}

export function JourneySection() {
  const { t } = useLanguage();
  const entries = [
    [
      "01",
      t("Formação", "Education"),
      t(
        "Tecnologia da Informação / Univesp",
        "Information Technology / Univesp",
      ),
      t(
        "Bacharelado em andamento. A base teórica encontra aplicação nos projetos.",
        "Bachelor’s degree in progress. Applying the theoretical foundation through projects.",
      ),
    ],
    [
      "02",
      t("Experiência", "Experience"),
      t(
        "Pós-operação / Energisa Sul Sudeste",
        "Post-operations / Energisa Sul Sudeste",
      ),
      t(
        "Experiência como jovem aprendiz com indicadores, CSV, Excel e sistemas internos; contexto de origem do RelatPy.",
        "Experience as an apprentice working with indicators, CSV, Excel and internal systems; the setting where RelatPy began.",
      ),
    ],
    [
      "03",
      t("Prática", "Practice"),
      t("Da automação ao produto", "From automation to products"),
      t(
        "APIs, interfaces, persistência e regras de negócio em projetos próprios de desenvolvimento.",
        "APIs, interfaces, persistence and business rules in personal software projects.",
      ),
    ],
  ];
  return (
    <section className="journey-section" id="trajetoria">
      <div className="section-topline">
        <span className="eyebrow">05 / {t("Trajetória", "Journey")}</span>
      </div>
      <h2>
        {t("O próximo passo começa", "The next step starts")}
        <br />
        <em>{t("com o que já construí.", "with what I have built.")}</em>
      </h2>
      <div className="journey-grid">
        {entries.map(([number, label, title, detail]) => (
          <article key={number}>
            <span className="eyebrow">
              {number} / {label}
            </span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section className="contact editorial-contact" id="contato">
      <div className="section-topline">
        <span className="eyebrow">
          06 / {t("Vamos conversar", "Let’s talk")}
        </span>
        <span className="availability">
          <i className="status-dot" />
          {t(
            "Estágio · Desenvolvimento júnior",
            "Internship · Junior development",
          )}
        </span>
      </div>
      <h2
        aria-label={t(
          "O que podemos construir juntos?",
          "What can we build together?",
        )}
      >
        {t("O que podemos", "What can we")}
        <br />
        <em>
          <CodeText text={t("construir juntos?", "build together?")} />
        </em>
      </h2>
      <div className="contact-bottom">
        <div>
          <a className="contact-email" href="mailto:kauaninacio23@gmail.com">
            kauaninacio23@gmail.com ↗
          </a>
          <p>
            {t(
              "Presidente Prudente, São Paulo · Brasil",
              "Presidente Prudente, São Paulo · Brazil",
            )}
          </p>
        </div>
        <div className="contact-links">
          <a
            className="button"
            href={resumeUrl}
            download="Curriculo_Kauan-Inacio.pdf"
          >
            {t("Currículo PDF", "Résumé PDF")} ↗
          </a>
          <a
            className="button"
            href="https://github.com/hik4s"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/kauan-inacio-dos-santos"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="button button-conversation"
            href="https://wa.me/5518998127675"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(
              "Conversar com Kauan no WhatsApp",
              "Talk to Kauan on WhatsApp",
            )}
          >
            {t("Vamos conversar", "Let’s talk")} ↗
          </a>
        </div>
      </div>
      <footer>
        <span>KAUAN INACIO DOS SANTOS</span>
        <span>
          {t(
            "Feito com React, TypeScript e curiosidade.",
            "Made with React, TypeScript and curiosity.",
          )}
        </span>
        <a href="#inicio">{t("Voltar ao topo", "Back to top")} ↑</a>
      </footer>
    </section>
  );
}
