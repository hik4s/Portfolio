import { MotionText } from "./MotionText";
import { useLanguage } from "./Language";
export function Updates() {
  const { t } = useLanguage();
  return (
    <section className="updates-section">
      <span className="eyebrow">
        {t("Caderno de evolução", "Development journal")}
      </span>
      <h2>
        <MotionText
          text={t("Um portfólio em construção.", "A portfolio in progress.")}
          effect="stamp"
        />
      </h2>
      <div>
        <article>
          <time dateTime="2026-11-16">16.11.2026</time>
          <h3>
            {t(
              "Um caminho direto até as evidências.",
              "A direct path to the evidence.",
            )}
          </h3>
          <p>
            {t(
              "Três projetos principais, competências em destaque e capturas com procedência.",
              "Three main projects, visible skills and screenshots with provenance.",
            )}
          </p>
        </article>
        <article>
          <time dateTime="2026-11-10">10.11.2026</time>
          <h3>
            {t(
              "Mais contexto, mais evidência.",
              "More context, more evidence.",
            )}
          </h3>
          <p>
            {t(
              "Direção editorial alternativa: casos, laboratório local, navegação e leitura em dois idiomas.",
              "Alternative editorial direction: case studies, a local lab, navigation and reading in two languages.",
            )}
          </p>
        </article>
      </div>
      <a
        className="text-link"
        href="https://github.com/hik4s/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("Acompanhar no GitHub", "Follow on GitHub")} ↗
      </a>
    </section>
  );
}
