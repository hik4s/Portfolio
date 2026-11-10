export type JobCategory = "dev" | "ti";
export type JobFilter = "all" | JobCategory;

export const jobFilters: { id: JobFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "dev", label: "Desenvolvimento" },
  { id: "ti", label: "T.I." },
];

export const demoJobs: {
  id: string;
  category: JobCategory;
  title: string;
  skills: string;
}[] = [
  {
    id: "python",
    category: "dev",
    title: "Desenvolvimento Python Jr.",
    skills: "Python / APIs / SQL",
  },
  {
    id: "internship",
    category: "ti",
    title: "Estágio em Tecnologia da Informação",
    skills: "Investigação / organização / aprendizado",
  },
];

export const businessModules = [
  {
    id: "sales",
    label: "Vendas",
    description:
      "Vendas: regras do pedido fazem parte de uma operação conectada a estoque e contas a receber.",
  },
  {
    id: "inventory",
    label: "Estoque",
    description:
      "Estoque: a organização dos produtos e das movimentações sustenta a consistência da operação.",
  },
  {
    id: "finance",
    label: "Financeiro",
    description:
      "Financeiro: contas a receber fazem parte do mesmo contexto de negócio, com controle de acesso por perfil e organização.",
  },
] as const;
export type BusinessModuleId = (typeof businessModules)[number]["id"];

export const skills = [
  {
    id: "python",
    label: "{ Python }",
    evidence:
      "Python conecta a automação do RelatPy ao desenvolvimento de APIs no CareerOS e no NEXUS.",
  },
  {
    id: "react",
    label: "< React />",
    evidence:
      "React aparece na construção de interfaces integradas a APIs no CareerOS. O Nexer também prevê uma interface em React e TypeScript.",
  },
  {
    id: "sql",
    label: "SQL_",
    evidence:
      "PostgreSQL, SQLAlchemy e migrações organizam a camada de dados dos projetos de backend.",
  },
  {
    id: "kotlin",
    label: "Kotlin()",
    evidence:
      "No Nexa Finance, Kotlin sustenta as regras financeiras e a base Android em Jetpack Compose.",
  },
  {
    id: "quality",
    label: "assert qualidade",
    evidence:
      "Testes automatizados, Git e validações fazem parte da construção dos projetos. Cada demonstração deve apontar para evidências reais do repositório.",
  },
] as const;
export type SkillId = (typeof skills)[number]["id"];
