export type ProjectId = "relatpy" | "career" | "nexus" | "nexa" | "nexer";

export interface Project {
  id: ProjectId;
  anchor: string;
  className: string;
  label: string;
  eyebrow: string;
  paragraphs: string[];
  repository: string | null;
  linkLabel: string | null;
  stack: string;
  inDevelopment: boolean;
  decoration: string;
}

export const projects: Project[] = [
  {
    id: "relatpy",
    anchor: "experiencia",
    className: "experience",
    label: "Experiência na Energisa",
    eyebrow: "02 / Quando o código encontra a vida real",
    paragraphs: [
      "Desde junho de 2026, atuo como jovem aprendiz na Energisa Sul Sudeste, com análise e correção de indicadores, CSV, Excel e sistemas internos.",
      "Uma demanda da empresa virou o RelatPy: automação em Python e Playwright para extrair mais de 10 relatórios, utilizada por mim e pela equipe do setor.",
    ],
    repository: "https://github.com/hik4s/RelatPy-Generic-Example",
    linkLabel: "Ver amostra pública ↗",
    stack: "Python · Playwright",
    inDevelopment: false,
    decoration: "await rotina.executar();",
  },
  {
    id: "career",
    anchor: "projetos",
    className: "projects",
    label: "Projetos de desenvolvimento",
    eyebrow: "03 / CareerOS · Desenvolvimento full stack",
    paragraphs: [
      "Uma plataforma para buscar vagas e gerenciar candidaturas, reunindo múltiplas fontes, filtros geográficos e importação de currículo.",
      "Do backend à interface: autenticação, isolamento dos dados por usuário e testes automatizados, com aplicação publicada no Render.",
    ],
    repository: "https://github.com/hik4s/CareerOS",
    linkLabel: "Explorar o CareerOS ↗",
    stack: "Python · FastAPI · React · PostgreSQL",
    inDevelopment: false,
    decoration: "return próximo_passo;",
  },
  {
    id: "nexus",
    anchor: "nexus",
    className: "nexus",
    label: "NEXUS — backend de gestão empresarial",
    eyebrow: "04 / NEXUS · Arquitetura de backend",
    paragraphs: [
      "Backend modular de gestão empresarial, conectando processos de vendas, estoque e contas a receber.",
      "Um projeto para trabalhar regras de negócio, controle de acesso e organização dos dados em uma aplicação com múltiplas organizações.",
    ],
    repository: "https://github.com/hik4s/NEXUS",
    linkLabel: "Explorar o NEXUS ↗",
    stack: "FastAPI · SQLAlchemy · Alembic · PostgreSQL",
    inDevelopment: false,
    decoration: "{ regra: consistência }",
  },
  {
    id: "nexa",
    anchor: "nexa",
    className: "nexa",
    label: "Nexa Finance — projeto em desenvolvimento",
    eyebrow: "05 / Nexa Finance · Kotlin & Android",
    paragraphs: [
      "Construindo a base de um aplicativo de finanças pessoais: regras para transações, transferências, parcelamentos e recorrências, com testes automatizados e migrações PostgreSQL.",
      "A base Android utiliza Jetpack Compose. A integração completa entre interface, API e persistência é uma próxima etapa.",
    ],
    repository: "https://github.com/hik4s/Nexa",
    linkLabel: "Explorar o Nexa Finance ↗",
    stack: "Kotlin · Ktor · Compose · PostgreSQL",
    inDevelopment: true,
    decoration: "val cuidado = precisão",
  },
  {
    id: "nexer",
    anchor: "nexer",
    className: "future",
    label: "Nexer — projeto em desenvolvimento",
    eyebrow: "06 / Nexer · Continuar evoluindo",
    paragraphs: [
      "Uma evolução do RelatPy para reduzir o trabalho manual necessário ao implementar novos relatórios.",
      "A proposta é registrar uma execução no navegador, capturar ações e elementos HTML e gerar um script Python para repetir a extração.",
    ],
    repository: null,
    linkLabel: null,
    stack: "Python · Playwright · FastAPI · React · TypeScript",
    inDevelopment: true,
    decoration: "observe → build → repeat",
  },
];
