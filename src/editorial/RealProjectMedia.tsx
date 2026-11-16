import { useLanguage } from "./Language";
import { assetUrl } from "./Navigation";

type MediaProject = "nexus" | "nexa" | "career" | "relatpy";
const media = {
  nexus: {
    name: "NEXUS",
    image: "nexus-overview.png",
    source: "https://github.com/hik4s/NEXUS/blob/main/docs/ui-overview.png",
    width: 1440,
    height: 1304,
    alt: [
      "Captura real da visão geral do NEXUS com dados fictícios",
      "Actual NEXUS overview screenshot with fictional data",
    ],
    caption: [
      "Captura da aplicação com dados de demonstração.",
      "Application screenshot with demonstration data.",
    ],
    zoom: ["Ampliar imagem do NEXUS", "Enlarge NEXUS screenshot"],
  },
  nexa: {
    name: "NEXA FINANCE",
    image: "nexa-identity.png",
    source:
      "https://github.com/hik4s/Nexa/blob/main/brand/identity/apresentacao/identidade.png",
    width: 1200,
    height: 1050,
    alt: [
      "Prancha real de identidade visual do Nexa Finance",
      "Actual Nexa Finance visual identity board",
    ],
    caption: [
      "Prancha de marca do projeto. Não é uma captura do aplicativo Android.",
      "Project brand board. This is not a screenshot of the Android app.",
    ],
    zoom: [
      "Ampliar identidade do Nexa Finance",
      "Enlarge Nexa Finance identity",
    ],
  },
  career: {
    name: "CareerOS",
    image: "careeros-overview.png",
    source:
      "https://github.com/hik4s/CareerOS/blob/main/docs/PORTFOLIO_CAPTURES.md",
    width: 1440,
    height: 1568,
    alt: [
      "Interface do CareerOS com dados fictícios e serviços simulados",
      "CareerOS interface with fictional data and mocked services",
    ],
    caption: [
      "Interface do projeto, capturada com dados fictícios e autenticação/API simuladas. Não comprova o funcionamento dos serviços publicados.",
      "Project interface captured with fictional data and mocked authentication/API. This does not verify deployed services.",
    ],
    zoom: ["Ampliar imagem do CareerOS", "Enlarge CareerOS screenshot"],
  },
  relatpy: {
    name: "RelatPy",
    image: "relatpy-demo.png",
    source:
      "https://github.com/hik4s/RelatPy-Generic-Example/blob/portfolio/public-release/docs/DEMO.md",
    width: 1280,
    height: 720,
    alt: [
      "Demo local do RelatPy com site e relatórios fictícios",
      "Local RelatPy demo with fictional site and reports",
    ],
    caption: [
      "Site fictício local utilizado pelo demo executável. Não é uma captura de sistema corporativo nem do painel Streamlit.",
      "Fictional local site used by the runnable demo. This is not a corporate system or Streamlit dashboard screenshot.",
    ],
    zoom: ["Ampliar demo do RelatPy", "Enlarge RelatPy demo"],
  },
} satisfies Record<
  MediaProject,
  {
    name: string;
    image: string;
    source: string;
    width: number;
    height: number;
    alt: string[];
    caption: string[];
    zoom: string[];
  }
>;

export function RealProjectMedia({ project }: { project: MediaProject }) {
  const { t } = useLanguage();
  const item = media[project];
  return (
    <figure className={"real-project-media real-media-" + project}>
      <div className="media-topline">
        <span className="media-original-dot" />
        {project === "nexa"
          ? t("Material real de identidade", "Actual identity artwork")
          : t("Captura do projeto", "Project screenshot")}
        <span>{item.name}</span>
      </div>
      <a
        className="media-enlarge"
        href={assetUrl("assets/" + item.image)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(item.zoom[0], item.zoom[1])}
      >
        <img
          src={assetUrl("assets/" + item.image)}
          width={item.width}
          height={item.height}
          loading="lazy"
          alt={t(item.alt[0], item.alt[1])}
        />
        <span className="media-zoom-badge" aria-hidden="true">
          ↗ {t("Ampliar", "Enlarge")}
        </span>
      </a>
      <figcaption>
        <p>{t(item.caption[0], item.caption[1])}</p>
        <a href={item.source} target="_blank" rel="noopener noreferrer">
          {t("Arquivo original", "Original file")} ↗
        </a>
      </figcaption>
    </figure>
  );
}
