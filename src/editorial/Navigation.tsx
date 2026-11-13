import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./Language";
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
import repositoryResumeUrl from "../../Curriculo_Kauan-Inacio.pdf?url";
export const resumeUrl = repositoryResumeUrl;

export function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty(
        "--progress",
        `${max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0}`,
      );
      const anchors = [
        "inicio",
        "experiencia",
        "laboratorio",
        "processo",
        "contato",
      ];
      let current = "inicio";
      for (const anchor of anchors) {
        const section = document.getElementById(anchor);
        if (section && section.getBoundingClientRect().top <= 180)
          current = anchor;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <>
      <header className="editorial-nav">
        <a
          href="#inicio"
          className="signature"
          aria-label={t("Kauan · início", "Kauan · home")}
        >
          kauan<span>/</span>
        </a>
        <nav aria-label={t("Navegação principal", "Main navigation")}>
          <a
            href="#experiencia"
            aria-current={active === "experiencia" ? "location" : undefined}
          >
            {t("Projetos", "Projects")}
          </a>
          <a
            href="#laboratorio"
            aria-current={active === "laboratorio" ? "location" : undefined}
          >
            {t("Laboratório", "Lab")}
          </a>
          <a
            href="#contato"
            aria-current={active === "contato" ? "location" : undefined}
          >
            {t("Contato", "Contact")}
          </a>
          <a
            className="nav-resume"
            href={resumeUrl}
            download="Curriculo_Kauan-Inacio.pdf"
          >
            {t("Currículo PDF", "Résumé PDF")} <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div
          className="language-toggle"
          role="group"
          aria-label={t("Idioma", "Language")}
        >
          <button
            type="button"
            onClick={() => setLocale("pt")}
            aria-pressed={locale === "pt"}
            aria-label="Ler em português"
          >
            PT
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
            aria-label="Read in English"
          >
            EN
          </button>
        </div>
      </header>
      <div ref={progress} className="reading-progress" aria-hidden="true">
        <div />
      </div>
    </>
  );
}
