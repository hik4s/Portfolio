import { Fragment, useEffect, useRef } from "react";
import { caseStudies } from "./data/cases";
import { Skills } from "./components/Demos";
import { CsvLab } from "./components/CsvLab";
import { useCinematicMotion } from "./hooks/useCinematicMotion";
import { LanguageProvider, useLanguage } from "./editorial/Language";
import { Navigation } from "./editorial/Navigation";
import {
  EditorialHero,
  ProcessSection,
  JourneySection,
  ContactSection,
} from "./editorial/HomeSections";
import { ProjectIndex, ProjectChapter } from "./editorial/ProjectChapters";
import { ChapterBridge } from "./editorial/ChapterBridge";
import { CasePage } from "./editorial/CasePage";
import { Updates } from "./editorial/Updates";
import { useRoute } from "./editorial/useRoute";
import type { Route } from "./editorial/useRoute";

function Portfolio({ route }: { route: Route }) {
  const { locale, t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const { reduced, systemReduced, toggleMotion } = useCinematicMotion(rootRef);
  const cases = caseStudies[locale];
  useEffect(() => {
    const target =
      route.kind === "case"
        ? (route.section ?? "conteudo")
        : window.location.hash.slice(1);
    if (target) {
      const destination =
        document.getElementById(target) ?? document.getElementById("conteudo");
      if (destination) {
        destination.setAttribute("tabindex", "-1");
        destination.focus({ preventScroll: true });
        destination.scrollIntoView?.({ behavior: "auto", block: "start" });
      }
    }
  }, [route]);
  return (
    <div
      id="entrelinhas-vivo"
      className="editorial cinematic"
      data-motion={reduced ? "reduced" : "full"}
      ref={rootRef}
    >
      <a
        className="skip-link"
        href={
          route.kind === "case" ? `#case/${route.id}/conteudo` : "#conteudo"
        }
      >
        {t("Pular para o conteúdo", "Skip to content")}
      </a>
      <Navigation />
      <button
        className="motion-toggle"
        type="button"
        onClick={toggleMotion}
        disabled={systemReduced}
        aria-pressed={reduced}
        aria-label={
          systemReduced
            ? t(
                "Animações reduzidas pelo sistema",
                "Animations reduced by system",
              )
            : reduced
              ? t("Ativar animações", "Enable animations")
              : t("Reduzir animações", "Reduce animations")
        }
      >
        <span aria-hidden="true">{reduced ? "Ⅱ" : "◉"}</span>{" "}
        {t("Movimento", "Motion")}
        <span className="motion-state">
          {reduced ? t("reduzido", "reduced") : t("completo", "full")}
        </span>
      </button>
      {route.kind === "case" ? (
        <CasePage item={cases.find((item) => item.id === route.id)} />
      ) : (
        <main id="conteudo" tabIndex={-1}>
          <EditorialHero />
          <ProjectIndex cases={cases} />
          {cases.map((item, index) => (
            <Fragment key={item.id}>
              <ProjectChapter item={item} index={index} />
              {cases[index + 1] && (
                <ChapterBridge
                  from={item}
                  to={cases[index + 1]}
                  number={index + 2}
                />
              )}
            </Fragment>
          ))}
          <section className="lab-section light-section" id="laboratorio">
            <div className="section-topline">
              <span className="eyebrow">
                02 / {t("Experimente uma ideia", "Try an idea")}
              </span>
              <span>
                {t(
                  "Dados fictícios. Regras reais.",
                  "Fictional data. Real rules.",
                )}
              </span>
            </div>
            <div className="lab-intro">
              <h2>
                {t("Um arquivo entra.", "A file goes in.")}
                <br />
                <em>
                  {t(
                    "As inconsistências aparecem.",
                    "Inconsistencies stand out.",
                  )}
                </em>
              </h2>
              <p>
                {t(
                  "Um laboratório de validação inspirado em rotinas de análise de dados. Carregue a amostra ou um CSV compatível e veja cada regra aplicada. O processamento fica no seu navegador.",
                  "A validation lab inspired by data analysis workflows. Load the sample or a compatible CSV and inspect each rule. All processing stays in your browser.",
                )}
              </p>
            </div>
            <CsvLab locale={locale} />
          </section>
          <Skills />
          <ProcessSection />
          <JourneySection />
          <Updates />
          <ContactSection />
        </main>
      )}
    </div>
  );
}
function RoutedPortfolio() {
  const route = useRoute();
  const { locale } = useLanguage();
  return (
    <Portfolio
      key={locale + (route.kind === "case" ? route.id : "home")}
      route={route}
    />
  );
}
export default function App() {
  return (
    <LanguageProvider>
      <RoutedPortfolio />
    </LanguageProvider>
  );
}
