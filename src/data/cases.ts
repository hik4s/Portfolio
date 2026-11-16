import type { ProjectId } from "./projects";

export interface CaseStudy {
  id: ProjectId;
  name: string;
  category: string;
  headline: string;
  summary: string;
  status: string;
  stack: string[];
  challenge: string;
  contribution: string;
  approach: string[];
  result: string;
  limitation: string;
  decisions: {
    question: string;
    answer: string;
    source: { label: string; url: string };
  }[];
  evidence: { label: string; url: string }[];
  liveUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  screenshot?: string;
}

const source = (
  repo: string,
  path: string,
  label: string,
  branch = "main",
) => ({
  label,
  url: `https://github.com/hik4s/${repo}/blob/${branch}/${path}`,
});

const relatpySource = (path: string, label: string) =>
  source("RelatPy-Generic-Example", path, label, "portfolio/public-release");

export const caseStudies: Record<"pt" | "en", CaseStudy[]> = {
  pt: [
    {
      id: "relatpy",
      sourceUrl: "https://github.com/hik4s/RelatPy-Generic-Example",
      demoUrl:
        "https://github.com/hik4s/RelatPy-Generic-Example/blob/portfolio/public-release/docs/DEMO.md",
      screenshot: "assets/relatpy-demo.png",
      name: "RelatPy",
      category: "Automação operacional",
      headline: "Uma rotina repetitiva virou um fluxo acompanhável.",
      summary:
        "Automação de relatórios web em Python e Playwright, com seleção de período, execução independente e acompanhamento por relatório.",
      status: "Uso operacional · amostra pública sanitizada",
      stack: ["Python", "Playwright", "asyncio", "Streamlit"],
      challenge:
        "Extrair relatórios exigia repetir etapas no navegador e acompanhar downloads. A automação precisava tornar o andamento e as falhas visíveis sem depender da sessão da interface.",
      contribution:
        "Desenvolvi a automação e o painel local, separando a execução em worker e organizando estados, arquivos e diagnóstico.",
      approach: [
        "Parametrização do período e seleção de relatórios no painel.",
        "Execução assíncrona com concorrência limitada e estados individuais.",
        "Worker separado e atualização do status por substituição de arquivo temporário.",
      ],
      result:
        "No uso operacional, relatei a redução de uma rotina de 30–40 minutos para cerca de 4 minutos no currículo de 09/11/2026. É um relato de uso; a amostra pública demonstra a arquitetura.",
      limitation:
        "O demo público executa três relatórios em um site fictício local. Os fluxos corporativos permanecem privados; a redução de tempo relatada não é um benchmark desse demo.",
      decisions: [
        {
          question: "Como manter o processamento independente do painel?",
          answer:
            "Um worker recebe período e seleção, valida os argumentos e executa o fluxo fora do processo visual.",
          source: relatpySource("worker.py", "Worker e validação"),
        },
        {
          question: "Como o painel acompanha tarefas concorrentes?",
          answer:
            "O executor limita a concorrência com semáforo e persiste estados em JSON usando arquivo temporário e substituição, reduzindo leituras parciais.",
          source: relatpySource("core/executor.py", "Concorrência e status"),
        },
      ],
      evidence: [
        relatpySource("README.md", "Escopo e limites da amostra"),
        relatpySource("docs/DEMO.md", "Executar a demonstração local"),
        relatpySource("tests/test_demo.py", "Testes dos downloads"),
        relatpySource("ui/streamlit_app.py", "Painel local"),
        relatpySource("core/executor.py", "Executor assíncrono"),
      ],
    },
    {
      id: "career",
      sourceUrl: "https://github.com/hik4s/CareerOS",
      liveUrl: "https://careeros-v1.onrender.com/",
      screenshot: "assets/careeros-overview.png",
      name: "CareerOS",
      category: "Desenvolvimento full stack",
      headline: "Da busca de vagas ao acompanhamento da candidatura.",
      summary:
        "Um painel para reunir oportunidades, perfil e currículos, mantendo a revisão das informações e o envio da candidatura com a pessoa usuária.",
      status: "MVP web em evolução",
      stack: [
        "Python",
        "FastAPI",
        "JavaScript",
        "React (autenticação)",
        "Supabase",
        "PostgreSQL",
      ],
      challenge:
        "Organizar a procura por emprego envolve fontes diferentes, dados incompletos e documentos pessoais. O desafio é reunir essa jornada com filtros úteis e acesso aos dados no contexto de cada conta.",
      contribution:
        "Desenvolvi o backend, a interface web e os fluxos de perfil, busca, currículos e candidaturas, com autenticação e testes de cenários de falha.",
      approach: [
        "Busca com filtros, deduplicação e indicação do estado das fontes.",
        "Importação de currículo com prévia dos campos antes de salvar.",
        "Supabase Auth, PostgreSQL e Storage, com migração de políticas RLS e testes negativos de acesso.",
      ],
      result:
        "O repositório implementa a jornada de buscar, revisar e salvar uma vaga, atualizar seu status, comparar currículo e exportar dados da conta.",
      limitation:
        "O aplicativo público permite criar uma conta. Cobertura e atualização variam por fonte; integrações opcionais exigem configuração. Capturas com serviços simulados não comprovam Auth, RLS e Storage em produção.",
      decisions: [
        {
          question: "Uma falha no login significa sessão expirada?",
          answer:
            "A API distingue credenciais recusadas de indisponibilidade temporária do provedor e não expõe detalhes internos nas respostas. Há testes para essas falhas.",
          source: source(
            "CareerOS",
            "tests/test_cloud_auth_resilience.py",
            "Resiliência de autenticação",
          ),
        },
        {
          question: "O que significa buscar perto de uma cidade?",
          answer:
            "O raio usa distância aproximada entre centros de cidades brasileiras. Vagas sem cidade identificável ficam fora desse filtro e a relevância continua prioritária.",
          source: source(
            "CareerOS",
            "docs/BUSCA_DE_VAGAS.md",
            "Fontes, filtros e limites",
          ),
        },
      ],
      evidence: [
        source("CareerOS", "README.md", "Escopo do MVP"),
        source(
          "CareerOS",
          "docs/SEARCH_ENGINE_2026-11-09.md",
          "Medição histórica e limites da busca",
        ),
        source("CareerOS", "app/cloud/main.py", "API e validações"),
        source("CareerOS", "app/cloud/auth.py", "Verificação de sessão"),
        source("CareerOS", "tests/test_cloud_api.py", "Testes da API"),
      ],
    },
    {
      id: "nexus",
      sourceUrl: "https://github.com/hik4s/NEXUS",
      name: "NEXUS",
      category: "Regras de negócio · full stack",
      headline: "Uma venda conecta estoque, financeiro e confiança nos dados.",
      summary:
        "MVP de gestão empresarial com jornada real de importação CSV, revisão, confirmação de venda e cancelamento com reversão.",
      status: "MVP publicado · cadastro individual",
      stack: [
        "React",
        "TypeScript",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Render",
        "Neon",
      ],
      challenge:
        "Confirmar uma venda precisa atualizar estoque e recebível de forma consistente. Também é necessário impedir que uma empresa consulte ou altere os dados de outra.",
      contribution:
        "Desenvolvi o monólito modular e a interface do recorte de portfólio, conectando permissões, regras de venda, persistência e uma jornada testável no navegador.",
      approach: [
        "Importar CSV, revisar erros e gerar pedidos em rascunho antes da confirmação.",
        "Transições de estado com bloqueio do pedido, efeitos em estoque e recebível e trilha de auditoria.",
        "Validação com dados fictícios, duas empresas e jornada desktop/mobile em React e TypeScript.",
      ],
      result:
        "O MVP está publicado no Render com PostgreSQL no Neon. A documentação registra validação da jornada integrada, isolamento entre empresas, persistência após redeploy e backup/restauração.",
      limitation:
        "Crie sua conta para experimentar com dados fictícios; o plano gratuito pode exigir aguardar a inicialização. O recorte publicado não demonstra todos os módulos, workers, IA ou infraestrutura AWS presentes no repositório.",
      decisions: [
        {
          question: "O que acontece ao confirmar ou cancelar uma venda?",
          answer:
            "A confirmação coordena baixa de estoque e recebível. O cancelamento percorre as operações inversas; transições inválidas são recusadas e erros provocam rollback.",
          source: source(
            "NEXUS",
            "backend/app/services/sales_service.py",
            "Regras e transações da venda",
          ),
        },
        {
          question: "Como demonstrar os limites de acesso?",
          answer:
            "Testes exercitam permissões por papel e tentativas de alterar recursos de outra empresa, além do caminho permitido.",
          source: source(
            "NEXUS",
            "backend/tests/test_rbac.py",
            "Papéis e isolamento entre empresas",
          ),
        },
      ],
      evidence: [
        source("NEXUS", "README.md", "MVP e acesso à demonstração"),
        source("NEXUS", "backend/tests/test_sales.py", "Cenários de venda"),
        source(
          "NEXUS",
          "frontend/e2e/portfolio-flow.spec.ts",
          "Jornada no navegador",
        ),
        source("NEXUS", "docs/VALIDATION_UI.md", "Validação da interface"),
      ],
      liveUrl: "https://nexus-portfolio-ui.onrender.com",
      screenshot: "assets/nexus-overview.png",
    },
    {
      id: "nexa",
      sourceUrl: "https://github.com/hik4s/Nexa",
      name: "Nexa Finance",
      category: "Kotlin · domínio financeiro",
      headline: "Precisão financeira começa nas regras.",
      summary:
        "Fundação de um aplicativo de finanças pessoais, com domínio em Kotlin, migrações PostgreSQL e componentes Android em Jetpack Compose.",
      status: "Fundação técnica em desenvolvimento",
      stack: [
        "Kotlin",
        "Ktor",
        "Jetpack Compose",
        "PostgreSQL",
        "Flyway",
        "JUnit",
      ],
      challenge:
        "Transferências, parcelamentos e recorrências precisam manter valores e estados coerentes. A base deve permitir avaliar essas regras antes de conectá-las à jornada do aplicativo.",
      contribution:
        "Desenvolvi modelos e regras financeiras, testes de domínio, migrações e a base visual Android, mantendo o domínio separado da interface.",
      approach: [
        "Representar dinheiro em unidades mínimas com moeda explícita.",
        "Vincular débito e crédito de transferências e validar titularidade, contas e estados.",
        "Versionar o esquema e testar regras financeiras sem depender de uma tela.",
      ],
      result:
        "O repositório oferece domínio financeiro testável, migrações e componentes Compose. A API atual expõe health check e a tela Android ainda é inicial.",
      limitation:
        "A jornada conta → lançamento → saldo ainda precisa de persistência de casos de uso, rotas financeiras e integração Android. IA e Open Finance são planos posteriores.",
      decisions: [
        {
          question: "Como representar valores monetários?",
          answer:
            "Money usa um inteiro Long em unidades mínimas, recusa operações entre moedas diferentes e verifica overflow na aritmética.",
          source: source(
            "Nexa",
            "backend/src/main/kotlin/com/nexa/finance/domain/common/Money.kt",
            "Modelo Money",
          ),
        },
        {
          question: "O que torna uma transferência válida?",
          answer:
            "Os testes cobrem débito/crédito vinculados, confirmação conjunta e recusas para contas iguais, titulares ou moedas diferentes e transições inválidas.",
          source: source(
            "Nexa",
            "backend/src/test/kotlin/com/nexa/finance/domain/transfer/TransferTest.kt",
            "Testes de transferências",
          ),
        },
      ],
      evidence: [
        source("Nexa", "README.md", "Estado atual e próximos recortes"),
        source(
          "Nexa",
          "backend/src/main/kotlin/com/nexa/finance/domain/common/Money.kt",
          "Valores monetários",
        ),
        source(
          "Nexa",
          "backend/src/test/kotlin/com/nexa/finance/domain/transfer/TransferTest.kt",
          "Regras testadas",
        ),
      ],
    },
    {
      id: "nexer",
      name: "Nexer",
      category: "Evolução da automação",
      headline: "Do fluxo escrito à proposta de um fluxo registrado.",
      summary:
        "Projeto em desenvolvimento para explorar como registrar uma execução no navegador e transformá-la em uma base de automação reutilizável.",
      status: "Proposta em desenvolvimento",
      stack: [
        "Python",
        "Playwright",
        "FastAPI (proposto)",
        "React / TypeScript (propostos)",
      ],
      challenge:
        "Cada novo relatório pode exigir implementar outra sequência de ações. A proposta é reduzir esse trabalho a partir de uma execução observada e revisada.",
      contribution:
        "Estou desenvolvendo a proposta de evolução do RelatPy: capturar ações e elementos da página para gerar uma base de script Python.",
      approach: [
        "Proposta: registrar ações e referências dos elementos durante a navegação.",
        "Proposta: transformar o registro em um script revisável antes da execução.",
        "Próxima validação: demonstrar gravação e repetição em um cenário fictício completo.",
      ],
      result:
        "O objetivo de produto está definido. A evidência pública disponível ainda descreve a base anterior de automação e não comprova um gravador funcional.",
      limitation:
        "Projeto privado, apresentado como estudo em desenvolvimento. Ainda não há demonstração pública reproduzível do gravador; a base pública relacionada é o RelatPy.",
      decisions: [
        {
          question: "O que já pode ser avaliado publicamente?",
          answer:
            "A demonstração pública do RelatPy permite avaliar automação e concorrência. Ela não comprova captura ou repetição de fluxos pelo Nexer.",
          source: relatpySource(
            "docs/DEMO.md",
            "Base pública relacionada: RelatPy",
          ),
        },
      ],
      evidence: [relatpySource("docs/DEMO.md", "Demonstração da base RelatPy")],
    },
  ],
  en: [
    {
      id: "relatpy",
      sourceUrl: "https://github.com/hik4s/RelatPy-Generic-Example",
      demoUrl:
        "https://github.com/hik4s/RelatPy-Generic-Example/blob/portfolio/public-release/docs/DEMO.md",
      screenshot: "assets/relatpy-demo.png",
      name: "RelatPy",
      category: "Operational automation",
      headline: "A repetitive task became a trackable workflow.",
      summary:
        "Web report automation with Python and Playwright, date selection, an independent worker and per-report progress.",
      status: "Operational use · sanitized public sample",
      stack: ["Python", "Playwright", "asyncio", "Streamlit"],
      challenge:
        "Extracting reports meant repeating browser steps and tracking downloads. The automation needed visible progress and failures while keeping execution independent of the UI session.",
      contribution:
        "I built the automation and local dashboard, separating execution into a worker and organizing task states, files and diagnostics.",
      approach: [
        "Select the date range and reports in a local dashboard.",
        "Run asynchronous tasks with bounded concurrency and individual states.",
        "Use an independent worker and update status through temporary-file replacement.",
      ],
      result:
        "In my November 9, 2026 résumé, I reported reducing an operational routine from 30–40 minutes to around 4 minutes. This is a usage report; the public sample demonstrates the architecture.",
      limitation:
        "The public demo runs three reports against a fictional local site. Corporate workflows remain private; reported operational savings are not a benchmark of this demo.",
      decisions: [
        {
          question: "How does execution stay independent of the dashboard?",
          answer:
            "A worker receives the date range and report selection, validates its arguments and runs the workflow outside the UI process.",
          source: relatpySource("worker.py", "Worker and validation"),
        },
        {
          question: "How does the dashboard track concurrent tasks?",
          answer:
            "The executor bounds concurrency with a semaphore and persists JSON states through temporary-file replacement, reducing partial reads.",
          source: relatpySource(
            "core/executor.py",
            "Concurrency and task states",
          ),
        },
      ],
      evidence: [
        relatpySource("README.md", "Public sample scope and limits"),
        relatpySource("docs/DEMO.md", "Run the local demo"),
        relatpySource("tests/test_demo.py", "Download tests"),
        relatpySource("ui/streamlit_app.py", "Local dashboard"),
        relatpySource("core/executor.py", "Asynchronous executor"),
      ],
    },
    {
      id: "career",
      sourceUrl: "https://github.com/hik4s/CareerOS",
      liveUrl: "https://careeros-v1.onrender.com/",
      screenshot: "assets/careeros-overview.png",
      name: "CareerOS",
      category: "Full stack development",
      headline: "From finding a job to tracking the application.",
      summary:
        "A workspace for opportunities, profiles and résumés, with people retaining control over reviewing information and submitting applications.",
      status: "Web MVP in development",
      stack: [
        "Python",
        "FastAPI",
        "JavaScript",
        "React (authentication)",
        "Supabase",
        "PostgreSQL",
      ],
      challenge:
        "A job search involves scattered sources, incomplete listings and personal documents. The challenge is to bring that journey together with useful filters and account-scoped data access.",
      contribution:
        "I built the backend, web interface and profile, search, résumé and application flows, including authentication and failure-path tests.",
      approach: [
        "Search with filters, deduplication and visible source status.",
        "Preview extracted résumé fields before saving them.",
        "Use Supabase Auth, PostgreSQL and Storage, with an RLS migration and negative access tests.",
      ],
      result:
        "The repository implements finding, reviewing and saving a job, updating its status, comparing résumé information and exporting account data.",
      limitation:
        "The public app accepts account registration. Coverage and freshness vary by source; optional integrations require configuration. Screenshots with mocked services do not verify deployed Auth, RLS or Storage.",
      decisions: [
        {
          question: "Does a login service failure mean an expired session?",
          answer:
            "The API distinguishes rejected credentials from temporary provider outages and keeps internal details out of responses. Tests cover those failure paths.",
          source: source(
            "CareerOS",
            "tests/test_cloud_auth_resilience.py",
            "Authentication resilience",
          ),
        },
        {
          question: "What does searching near a city mean?",
          answer:
            "The radius uses approximate distances between Brazilian city centres. Listings without a recognized city are excluded from that filter, while relevance remains the primary sort criterion.",
          source: source(
            "CareerOS",
            "docs/BUSCA_DE_VAGAS.md",
            "Sources, filters and limits",
          ),
        },
      ],
      evidence: [
        source("CareerOS", "README.md", "MVP scope"),
        source(
          "CareerOS",
          "docs/SEARCH_ENGINE_2026-11-09.md",
          "Historical search measurement and limits",
        ),
        source("CareerOS", "app/cloud/main.py", "API and validation"),
        source("CareerOS", "app/cloud/auth.py", "Session verification"),
        source("CareerOS", "tests/test_cloud_api.py", "API tests"),
      ],
    },
    {
      id: "nexus",
      sourceUrl: "https://github.com/hik4s/NEXUS",
      name: "NEXUS",
      category: "Business rules · full stack",
      headline: "A sale connects inventory, finance and trust in the data.",
      summary:
        "A business management MVP with a real CSV import, review, sale confirmation and cancellation workflow, including reversal of its effects.",
      status: "Deployed MVP · individual registration",
      stack: [
        "React",
        "TypeScript",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Render",
        "Neon",
      ],
      challenge:
        "Confirming a sale must update inventory and its receivable consistently. Each company must also be prevented from reading or changing another company's records.",
      contribution:
        "I built the modular monolith and portfolio interface, connecting permissions, sales rules, persistence and a browser-testable journey.",
      approach: [
        "Import CSV files, review errors and generate draft orders before confirmation.",
        "Coordinate state transitions with order locking, inventory and receivable updates, and an audit trail.",
        "Validate the React and TypeScript journey on desktop and mobile with fictional data and two companies.",
      ],
      result:
        "The MVP is deployed on Render with PostgreSQL on Neon. Documentation records validation of the integrated journey, company isolation, persistence after redeployment and backup/restore.",
      limitation:
        "Create your account and use fictional data; the free plan may need time to wake. Its scope does not demonstrate every module, worker, AI integration or AWS configuration in the repository.",
      decisions: [
        {
          question: "What happens when a sale is confirmed or cancelled?",
          answer:
            "Confirmation coordinates inventory fulfillment and a receivable. Cancellation reverses both; invalid transitions are rejected and errors trigger rollback.",
          source: source(
            "NEXUS",
            "backend/app/services/sales_service.py",
            "Sales rules and transactions",
          ),
        },
        {
          question: "How are access boundaries demonstrated?",
          answer:
            "Tests exercise role permissions and attempts to change another company's resources, alongside authorized paths.",
          source: source(
            "NEXUS",
            "backend/tests/test_rbac.py",
            "Roles and company isolation",
          ),
        },
      ],
      evidence: [
        source("NEXUS", "README.md", "MVP and demo access"),
        source("NEXUS", "backend/tests/test_sales.py", "Sales scenarios"),
        source(
          "NEXUS",
          "frontend/e2e/portfolio-flow.spec.ts",
          "Browser journey",
        ),
        source("NEXUS", "docs/VALIDATION_UI.md", "Interface validation"),
      ],
      liveUrl: "https://nexus-portfolio-ui.onrender.com",
      screenshot: "assets/nexus-overview.png",
    },
    {
      id: "nexa",
      sourceUrl: "https://github.com/hik4s/Nexa",
      name: "Nexa Finance",
      category: "Kotlin · financial domain",
      headline: "Financial precision starts with the rules.",
      summary:
        "The foundation of a personal finance app, with a Kotlin domain model, PostgreSQL migrations and Android components in Jetpack Compose.",
      status: "Technical foundation in development",
      stack: [
        "Kotlin",
        "Ktor",
        "Jetpack Compose",
        "PostgreSQL",
        "Flyway",
        "JUnit",
      ],
      challenge:
        "Transfers, installments and recurring transactions need consistent amounts and states. The foundation should make those rules testable before connecting them to an app journey.",
      contribution:
        "I built financial models and rules, domain tests, migrations and the Android UI foundation, keeping domain logic separate from the interface.",
      approach: [
        "Represent money in minor units with an explicit currency.",
        "Link transfer debits and credits and validate ownership, accounts and states.",
        "Version the schema and test financial rules independently of a screen.",
      ],
      result:
        "The repository provides a testable financial domain, migrations and Compose components. The current API exposes a health check and the Android screen is still an initial shell.",
      limitation:
        "The account → transaction → balance journey still needs use-case persistence, financial API routes and Android integration. AI and Open Finance are later plans.",
      decisions: [
        {
          question: "How are monetary amounts represented?",
          answer:
            "Money uses a Long integer in minor units, rejects operations across currencies and checks for arithmetic overflow.",
          source: source(
            "Nexa",
            "backend/src/main/kotlin/com/nexa/finance/domain/common/Money.kt",
            "Money model",
          ),
        },
        {
          question: "What makes a transfer valid?",
          answer:
            "Tests cover linked debit/credit entries, posting both sides and rejecting identical accounts, different owners or currencies, and invalid state transitions.",
          source: source(
            "Nexa",
            "backend/src/test/kotlin/com/nexa/finance/domain/transfer/TransferTest.kt",
            "Transfer tests",
          ),
        },
      ],
      evidence: [
        source("Nexa", "README.md", "Current scope and next steps"),
        source(
          "Nexa",
          "backend/src/main/kotlin/com/nexa/finance/domain/common/Money.kt",
          "Monetary values",
        ),
        source(
          "Nexa",
          "backend/src/test/kotlin/com/nexa/finance/domain/transfer/TransferTest.kt",
          "Tested rules",
        ),
      ],
    },
    {
      id: "nexer",
      name: "Nexer",
      category: "Automation evolution",
      headline: "From a written workflow to a proposed recorded one.",
      summary:
        "A project exploring how to record a browser session and turn it into the foundation of a reusable automation.",
      status: "Proposal in development",
      stack: [
        "Python",
        "Playwright",
        "FastAPI (proposed)",
        "React / TypeScript (proposed)",
      ],
      challenge:
        "Each new report can require another sequence of manually implemented actions. The proposal is to reduce that work using an observed, reviewed execution.",
      contribution:
        "I am developing the proposed evolution of RelatPy: capture actions and page elements to generate a Python script foundation.",
      approach: [
        "Proposed: record actions and element references during navigation.",
        "Proposed: turn the recording into a script that can be reviewed before execution.",
        "Next validation: demonstrate recording and replay in a complete fictional scenario.",
      ],
      result:
        "The product goal is defined. Available public evidence still describes the earlier automation foundation and does not demonstrate a working recorder.",
      limitation:
        "A private project presented as a work in progress. There is no public reproducible recorder demo yet; RelatPy is the related public foundation.",
      decisions: [
        {
          question: "What can be assessed publicly today?",
          answer:
            "The public RelatPy demo supports reviewing automation and concurrency. It does not demonstrate Nexer recording or replay.",
          source: relatpySource(
            "docs/DEMO.md",
            "Related public foundation: RelatPy",
          ),
        },
      ],
      evidence: [relatpySource("docs/DEMO.md", "RelatPy foundation demo")],
    },
  ],
};
