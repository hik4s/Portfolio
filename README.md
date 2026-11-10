# Kauan · Portfólio

Portfólio pessoal com projetos de desenvolvimento full stack, automação e aplicações Android.
Construído com **React, TypeScript e Vite**, com CSS próprio e demonstrações locais interativas.

## Executar

Requisito: **Node.js 24+** e npm.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Para validar e gerar os arquivos de produção:

```bash
npm test
npm run build
npm run preview
```

`npm run typecheck` executa somente a verificação de tipos. `npm run test:watch` mantém os testes ativos durante o desenvolvimento.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/App.tsx` | Composição da página e ordem das seções |
| `src/data/projects.ts` | Dados tipados dos cinco projetos: textos, links e tecnologias |
| `src/data/demos.ts` | Dados fictícios das demonstrações e evidências das tecnologias |
| `src/components/ProjectSection.tsx` | Apresentação reutilizável de um projeto |
| `src/components/Demos.tsx` | Filtros de vagas, módulos de negócio, validação financeira e conhecimentos |
| `src/components/Brand.tsx` e `src/assets/` | Identidades visuais e SVGs locais |
| `src/components/StaticSections.tsx` | Abertura, navegação, trajetória e contato |
| `src/hooks/usePortfolioMotion.ts` | Animações de apresentação, observers e limpeza dos efeitos |
| `src/styles/` | Estilos próprios, identidade visual e regras responsivas |

Para atualizar um projeto, edite `src/data/projects.ts`. Os títulos com composição visual estão em `ProjectHeading.tsx`. Para adicionar um novo projeto, inclua seu ID, os dados, a marca e a demonstração correspondente.

## Projetos apresentados

- **RelatPy:** automação de extração de relatórios com Python e Playwright.
- **CareerOS:** busca de vagas e organização de candidaturas.
- **NEXUS:** backend modular de gestão empresarial.
- **Nexa Finance:** domínio financeiro e base Android em desenvolvimento.
- **Nexer:** evolução da automação por gravação de ações, em desenvolvimento.

Os textos descrevem o estado informado no portfólio original; a migração não constitui auditoria desses repositórios. As vagas e operações financeiras da página são **demonstrações locais**, sem busca real ou movimentação de dinheiro.

## Acessibilidade e movimento

Navegação por links com âncoras, foco visível, link para pular ao conteúdo, nomes acessíveis e avisos de atualização nas demonstrações. As animações respeitam `prefers-reduced-motion`. O conteúdo permanece visível caso as APIs de animação/observação não estejam disponíveis. O HTML usa `lang="pt-BR"`.

## Publicação

O build produz `dist/`, uma página estática que pode ser hospedada em um serviço compatível com arquivos estáticos. Configuração:

- Instalação: `npm ci`
- Build: `npm run build`
- Diretório de saída: `dist`

Os assets usam caminhos relativos para permitir publicação em subdiretórios. Não há backend, banco de dados, variáveis secretas ou serviço pago obrigatório. As fontes são carregadas do Google Fonts; as fontes alternativas do sistema permitem ler a página caso esse serviço esteja indisponível. A aplicação depende de JavaScript habilitado.

## Referência original

`portfolio-kauan.html` é a exportação original preservada, fora do build de produção. A aplicação atual renderiza componentes React diretamente, sem iframe, HTML injetado ou dependência do runtime de visualizações do ChatGPT.

Detalhes da migração e validações: [docs/MIGRATION.md](docs/MIGRATION.md).
