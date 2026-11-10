import type { CSSProperties } from "react";
export function Header() {
  return (
    <>
      <header>
        <strong>
          {"kauan"}
          <span style={{ color: "var(--accent)" } as CSSProperties}>{"."}</span>
        </strong>
        <nav aria-label="Capítulos">
          <a href="#inicio">{"01 / sobre"}</a>
          <a href="#experiencia">{"02 / experiência"}</a>
          <a href="#projetos">{"03 / projetos"}</a>
        </nav>
      </header>
      <nav className="project-nav" aria-label="Navegar entre projetos">
        <a href="#experiencia">{"RelatPy ↗"}</a>
        <a href="#projetos">{"CareerOS ↗"}</a>
        <a href="#nexus">{"NEXUS ↗"}</a>
        <a href="#nexa">{"Nexa Finance ↗"}</a>
        <a href="#nexer">{"Nexer ↗"}</a>
      </nav>
    </>
  );
}
export function Hero() {
  return (
    <section
      className="hero"
      data-chapter="inicio"
      aria-label="Apresentação"
      id="inicio"
    >
      <div className="glyphs" aria-hidden="true">
        <span className="symbol-a">{"{ }"}</span>
        <span className="symbol-b">{"#"}</span>
        <span className="symbol-c">{"</> $ *"}</span>
      </div>
      <div className="mono">
        {"01 / Kauan Inacio dos Santos · Presidente Prudente, SP"}
      </div>
      <h1 aria-label="Curiosidade que vira código. Código que muda rotinas.">
        <span className="scramble" data-text="Curiosidade" aria-hidden="true">
          {"Curiosidade"}
        </span>
        <br />
        {"que vira "}
        <em>{"código."}</em>
        <br />
        <span
          style={{ fontSize: ".66em", letterSpacing: "-1px" } as CSSProperties}
        >
          {"Código que muda "}
          <em>{"rotinas."}</em>
        </span>
      </h1>
      <p className="intro">
        {
          "Estudante de T.I. na Univesp, jovem aprendiz na Energisa e alguém que gosta de entender como as coisas funcionam — para construir o que vem depois."
        }
      </p>
      <div className="hero-art" aria-hidden="true">
        <div className="orbital"></div>
        <div className="orbital"></div>
        <div className="art-label">{"DE UMA IDEIA / A UMA SOLUÇÃO"}</div>
        <div className="art-core">
          <div className="mono">{"curiosidade.exe"}</div>
          <div className="art-symbol">{"{ / }"}</div>
          <div className="art-code">
            {"const próximoPasso = aprender();"}
            <br />
            {"transformar(ideia, solução);"}
          </div>
        </div>
        <div className="art-tag">{"PYTHON × INTERFACES × AUTOMAÇÃO"}</div>
      </div>
      <div className="hero-bottom">
        <div>
          <div
            className="mono"
            style={{ marginBottom: "18px" } as CSSProperties}
          >
            {"Aberto a desenvolvimento Jr. e estágio em T.I."}
          </div>
          <a href="#experiencia" className="action">
            {"Conheça minha trajetória ↓"}
          </a>
        </div>
        <div className="small-code" aria-hidden="true">
          {"// aprender. testar. evoluir."}
          <br />
          <span style={{ color: "var(--accent)" } as CSSProperties}>
            {"while"}
          </span>
          {" (curiosidade) { construir(); }"}
        </div>
      </div>
    </section>
  );
}
export function TechnologyStrip() {
  return (
    <div className="strip" aria-label="Áreas de conhecimento">
      <span>{"{ Python }"}</span>
      <span>{"< React />"}</span>
      <span>{"SQL_"}</span>
      <span>{"async Playwright()"}</span>
      <span>{"git commit"}</span>
    </div>
  );
}
export function Story() {
  return (
    <section className="story-section" aria-label="Trajetória">
      <div className="story-background" aria-hidden="true">
        {"&"}
      </div>
      <div className="mono" style={{ marginBottom: "25px" } as CSSProperties}>
        {"Entre aprender e fazer, existe um caminho."}
      </div>
      <h2>
        {"Uma ideia aprende"}
        <br />
        {"a sair do papel."}
      </h2>
      <div className="story-timeline">
        <div className="story-stop">
          <span className="mono">{"01 / Formação"}</span>
          <h3>{"Construir a base."}</h3>
          <p>
            {
              "Bacharelado em Tecnologia da Informação na Univesp, em andamento."
            }
          </p>
        </div>
        <div className="story-stop">
          <span className="mono">{"02 / Desde junho de 2026"}</span>
          <h3>{"Encontrar problemas reais."}</h3>
          <p>
            {
              "Experiência como jovem aprendiz na Energisa, com indicadores, arquivos e sistemas internos."
            }
          </p>
        </div>
        <div className="story-stop">
          <span className="mono">{"03 / Na prática"}</span>
          <h3>{"Transformar em software."}</h3>
          <p>
            {
              "Automação utilizada na rotina da equipe e projetos próprios para continuar evoluindo."
            }
          </p>
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section className="contact" aria-label="Contato">
      <div className="mono">{"07 / O próximo capítulo"}</div>
      <h2 aria-label="O que podemos construir juntos?">
        {"O que podemos"}
        <br />
        <em
          className="scramble"
          data-text="construir juntos?"
          aria-hidden="true"
        >
          {"construir juntos?"}
        </em>
      </h2>
      <div className="links">
        <a
          className="action"
          href="https://wa.me/5518998127675"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Kauan no WhatsApp"
        >
          {"Vamos conversar ↗"}
        </a>
        <a
          className="action"
          href="https://github.com/hik4s"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"GitHub ↗"}
        </a>
        <a
          className="action"
          href="https://www.linkedin.com/in/kauan-inacio-dos-santos"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"LinkedIn ↗"}
        </a>
      </div>
      <div className="mono">
        {"Kauan Inacio dos Santos / T.I. na Univesp · em andamento"}
        <br />
        {"Desenvolvimento Jr. · Estágio em T.I. e suporte"}
      </div>
    </section>
  );
}
