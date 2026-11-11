import { useLanguage } from "./Language";
import { assetUrl } from "./Navigation";

export function RealProjectMedia({ project }: { project: "nexus" | "nexa" }) {
  const { t } = useLanguage();
  const nexus = project === "nexus";
  const image = assetUrl(
    nexus ? "assets/nexus-overview.png" : "assets/nexa-identity.png",
  );
  const source = nexus
    ? "https://github.com/hik4s/NEXUS/blob/main/docs/ui-overview.png"
    : "https://github.com/hik4s/Nexa/blob/main/brand/identity/apresentacao/identidade.png";
  return (
    <figure className={"real-project-media real-media-" + project}>
      <div className="media-topline">
        <span className="media-original-dot" />
        {nexus
          ? t("Interface real", "Actual interface")
          : t("Material real de identidade", "Actual identity artwork")}
        <span>{nexus ? "NEXUS" : "NEXA FINANCE"}</span>
      </div>
      <a
        className="media-enlarge"
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          nexus
            ? t("Ampliar imagem do NEXUS", "Enlarge NEXUS screenshot")
            : t(
                "Ampliar identidade do Nexa Finance",
                "Enlarge Nexa Finance identity",
              )
        }
      >
        <img
          src={image}
          width={nexus ? 1440 : 1200}
          height={nexus ? 1304 : 1050}
          loading="lazy"
          alt={
            nexus
              ? t(
                  "Captura real da visão geral do NEXUS com dados fictícios",
                  "Actual NEXUS overview screenshot with fictional data",
                )
              : t(
                  "Prancha real de identidade visual do Nexa Finance",
                  "Actual Nexa Finance visual identity board",
                )
          }
        />
        <span className="media-zoom-badge" aria-hidden="true">
          ↗ {t("Ampliar", "Enlarge")}
        </span>
      </a>
      <figcaption>
        <p>
          {nexus
            ? t(
                "Captura da aplicação com dados de demonstração.",
                "Application screenshot with demonstration data.",
              )
            : t(
                "Prancha de marca do projeto. Não é uma captura do aplicativo Android.",
                "Project brand board. This is not a screenshot of the Android app.",
              )}
        </p>
        <a href={source} target="_blank" rel="noopener noreferrer">
          {t("Arquivo original", "Original file")} ↗
        </a>
      </figcaption>
    </figure>
  );
}
