# Handoff do portfólio — 11/11/2026

Documento de continuidade: decisões tomadas, implementação entregue, validação e trabalho restante. Reflete o código verificado em `6515bb1f2d75ca5001cb3c15fb8cf1f1d6b8390e`; este handoff é uma alteração documental posterior.

## 1. Objetivo e direção aprovada

Construir um portfólio pessoal de Kauan Inacio dos Santos que apresente sua trajetória e seus projetos com clareza para recrutadores e pessoas técnicas. Mostrar problemas reais, contribuição, decisões, evidências e limites de cada projeto, com demonstrações que possam ser experimentadas.

Foi aprovada a migração para React e TypeScript, seguida de uma alternativa com nova estrutura, conteúdo e acabamento visual. O usuário pediu explicitamente mais espaço para leitura, transições entre capítulos, abertura pessoal e imagens reais dos projetos.

### Decisões de produto

- Site estático, sem backend ou banco necessário para o portfólio.
- Execução sem serviço pago obrigatório; aplicações externas têm requisitos próprios.
- Conteúdo em português e inglês; currículo original em português preservado.
- Cinco projetos: RelatPy, CareerOS, NEXUS, Nexa Finance e Nexer.
- Estudos de caso com desafio, contribuição, decisões técnicas, resultados, evidências e limitações.
- Separar funcionalidade comprovada, demonstração ilustrativa e direção futura.
- Não inventar métricas, usuários, depoimentos, experiência, retratos ou telas de aplicações.
- Usar fontes dos próprios repositórios e o currículo original como evidência.

### Direção visual

- Composição editorial com papel, terracota, tipografia expressiva e identidade própria por projeto.
- Abertura pessoal explicando a origem do RelatPy em uma rotina de extração de relatórios.
- Cartão de autoria com monograma, nome, localização e acesso à trajetória.
- Ritmo de leitura com respiro, linhas de texto controladas e hierarquia clara.
- Passagens entre os capítulos com mudança de paleta, numeração, linha curva e link para o próximo projeto.
- Mídia original ampliável, legenda e origem; não substituir evidência por imagens inventadas.
- Responsividade, foco visível, navegação por teclado e respeito a movimento reduzido.

## 2. Repositório e versões

- Repositório: https://github.com/hik4s/Portfolio
- Branch de migração: `feat/react-typescript`.
- PR da migração: https://github.com/hik4s/Portfolio/pull/1
- Branch alternativa em uso: `feat/editorial-portfolio`.
- PR da alternativa: https://github.com/hik4s/Portfolio/pull/2
- A PR #2 compara a alternativa com `feat/react-typescript`; não está direcionada à main.
- Não houve merge na main nem publicação/alteração de hospedagem nesta entrega.
- O HTML original `portfolio-kauan.html` foi preservado como referência histórica, fora do build.

| Commit | Entrega |
| --- | --- |
| `fae17bc` | Migração para React, TypeScript e Vite |
| `8763c10` | Alternativa editorial, casos, navegação e laboratório CSV |
| `6515bb1` | Abertura pessoal, transições e mídia original |

Antes de continuar, buscar o estado remoto e conferir alterações pendentes. Preservar trabalho de outras sessões; não forçar push, fazer merge ou mudar hospedagem como efeito colateral de uma tarefa de conteúdo.

## 3. O que foi implementado

### Estrutura técnica

- React com TypeScript, Vite, CSS próprio e Vitest/Testing Library.
- TypeScript estrito verificado no build.
- Componentes editoriais, dados tipados dos casos e lógica do laboratório separados.
- Rotas por hash para manter hospedagem estática e permitir subdiretórios.
- Histórico de navegação, recuperação para casos desconhecidos e links internos dos estudos.
- Caminhos relativos de assets e configuração opcional `VITE_SITE_URL` para metadados absolutos.

### Conteúdo e experiência

- Abertura, índice e capítulos dos cinco projetos.
- Cinco estudos de caso em PT/EN com referências ao código e limites explícitos.
- Competências acompanhadas de evidências, processo de construção, uso de IA, trajetória e caderno de evolução.
- Currículo original mais recente encontrado em `hik4s/Memorias-IAs`: `Curriculo_Kauan-Inacio-dos-Santos_novo_2026-11-09.pdf`.
- Currículo servido como `public/assets/curriculo-kauan-2026-11-09.pdf`.
- Menu fixo, indicação de seção ativa e progresso de leitura.
- Skip link e transferência de foco conforme a rota; falhas encontradas na revisão foram corrigidas com testes.
- Preferência local de idioma e atualização do idioma do documento.

### Acabamento visual complementar

- Cartão “Prazer, Kauan.” com história pessoal, monograma e assinatura tipográfica.
- Quatro transições navegáveis conectando os cinco capítulos.
- Texto de apresentação dos projetos em 16 px no desktop e 15 px no celular.
- Texto dos estudos de caso em 17/16 px, entrelinha ampla e comprimento de linha controlado.
- Mais espaçamento entre seções e colunas, com ajustes para celular.
- Imagens originais sem corte, ampliação em nova aba, legenda e link para o arquivo de origem.
- Demonstração financeira recolhível para evitar alongar desnecessariamente o capítulo do Nexa.
- Favicon e imagem social 1200 × 630.

### Laboratório e demonstrações

- Painéis ilustrativos de vagas e regras financeiras, identificados como demonstrações.
- Laboratório CSV local com amostra sintética, upload, validação, prévia e exportação.
- Cabeçalhos `id,equipe,inicio,fim`, em qualquer ordem; vírgula ou ponto e vírgula.
- Aspas, separadores e quebras de linha em campos são suportados.
- Datas ISO 8601 com segundos e fuso explícito.
- Regras para campos vazios, datas inválidas, fim anterior ao início e IDs repetidos.
- Limites: 1 MiB, 5.000 registros e prévia de 100 linhas.
- Exportação dos registros completos aceitos com proteção contra interpretação de fórmulas.
- Arquivos processados no navegador, sem envio a servidor ou persistência no armazenamento do navegador.
- Não é um validador operacional de TMA e não efetua correções em sistemas externos.

## 4. Mídia real: situação e fontes

| Projeto/material | Situação |
| --- | --- |
| NEXUS | Captura real incluída, com dados fictícios de demonstração |
| Nexa Finance | Prancha original de identidade incluída; legenda informa que não é uma tela Android |
| CareerOS | Sem capturas no repositório consultado; URL documentada em `docs/WEB_MVP.md` respondeu “Not Found” na verificação |
| RelatPy | Sem capturas no repositório consultado |
| Nexer | Caso diferencia proposta e evidência; não foi acrescentada captura original nesta etapa |
| Retrato de Kauan | Não fornecido/escolhido; abertura usa monograma e autoria |

Fontes dos arquivos incorporados:

- `public/assets/nexus-overview.png`: https://github.com/hik4s/NEXUS/blob/main/docs/ui-overview.png
- `public/assets/nexa-identity.png`: https://github.com/hik4s/Nexa/blob/main/brand/identity/apresentacao/identidade.png

Os demais painéis são demonstrações identificadas, não screenshots reais. Os tempos de economia do RelatPy são relatos aproximados do currículo, sem benchmark público reproduzível. O README do Nexer ainda descrevia RelatPy na leitura realizada; manter essa distinção ao atualizar o caso.

## 5. Mapa dos arquivos principais

| Caminho | Finalidade |
| --- | --- |
| `src/App.tsx` | Composição da página e dos casos |
| `src/data/cases.ts` | Textos PT/EN, evidências e limites dos cinco projetos |
| `src/editorial/HomeSections.tsx` | Abertura pessoal e seções institucionais |
| `src/editorial/ProjectChapters.tsx` | Índice e capítulos |
| `src/editorial/ChapterBridge.tsx` | Passagens entre capítulos |
| `src/editorial/ProjectVisual.tsx` | Mídia e demonstrações de cada projeto |
| `src/editorial/RealProjectMedia.tsx` | Imagens originais, ampliação e fontes |
| `src/editorial/CasePage.tsx` | Estudos de caso |
| `src/editorial/Navigation.tsx` | Menu, seção ativa, currículo e utilitário de assets |
| `src/editorial/useRoute.ts` | Rotas hash, histórico e foco |
| `src/editorial/Language.tsx` | Idioma e preferência local |
| `src/components/CsvLab.tsx` | Interface do laboratório |
| `src/lib/csv.ts` | Parser, validação, limites e exportação |
| `src/components/Demos.tsx` | Demonstrações de vagas e finanças |
| `src/styles/editorial.css` | Base editorial responsiva |
| `src/styles/visual-polish.css` | Respiro, abertura, mídia e transições |
| `public/assets/` | Currículo, mídia original, favicon e imagem social |
| `.github/workflows/ci.yml` | Testes e build, sem deploy |
| `docs/EDITORIAL.md` | Registro da entrega e das verificações visuais |

## 6. Validação já realizada

No commit de implementação `6515bb1`:

- 51 testes em sete arquivos passaram localmente.
- `npm run build` passou, incluindo TypeScript e build Vite.
- `git diff --check` passou.
- Workflow remoto `Portfolio checks`, execução 4, concluído com sucesso; conferido em 11/11/2026.
- Revisão visual no navegador desktop e em contexto móvel de 390 px.
- Conferidos abertura pessoal, transições, navegação, imagens, legibilidade e ausência de transbordamento horizontal na verificação móvel.
- Verificados também casos, idioma, índice/decisões, retorno ao laboratório, amostra e download; demonstração financeira permaneceu funcional após recolhimento.
- Revisão independente do acabamento não identificou problemas acionáveis no escopo examinado.

Evidências salvas no repositório:

- [Abertura pessoal](docs/visual-personal.png)
- [Transição de capítulos](docs/visual-transition.png)

Essas verificações não equivalem a uma auditoria completa de acessibilidade, a uma medição de desempenho ou a uma homologação em todos os navegadores. Mudanças posteriores exigem nova validação proporcional ao seu escopo.

## 7. O que falta fazer

### Pendências concretas para concluir a apresentação

- [ ] Obter capturas atuais e verificáveis de CareerOS e RelatPy; obter também material do Nexer quando disponível e útil.
- [ ] Conferir novamente a URL pública do CareerOS e atualizar o destino apenas quando houver endereço funcional verificado.
- [ ] Adicionar retrato pessoal se Kauan escolher e fornecer uma foto. A abertura atual já funciona com monograma.
- [ ] Fazer a revisão final do conteúdo e da direção visual pelo autor, especialmente história pessoal, posicionamento e ordem dos projetos.
- [ ] Revisar os links externos no momento de publicar, pois podem mudar fora deste repositório.

### Integração e publicação ainda não realizadas

- [ ] Decidir a integração da alternativa após a revisão, considerando que a PR #2 tem como base `feat/react-typescript` e a migração possui sua própria PR.
- [ ] Escolher/confirmar hospedagem e URL pública. Não há publicação nova nesta entrega.
- [ ] Configurar `VITE_SITE_URL` com a URL final, incluindo subdiretório se necessário.
- [ ] Validar navegação por hash, currículo, assets e metadados no endereço publicado.
- [ ] Conferir o workflow do commit mais recente antes de integrar; o sucesso registrado acima pertence ao commit de implementação, não a commits futuros.

### Melhorias posteriores possíveis, não entregas já prometidas

- [ ] Vídeos curtos de uso e outras capturas, somente com material real e dados adequados para divulgação.
- [ ] Auditar contraste, teclado, leitor de tela e diferentes navegadores com ferramentas específicas.
- [ ] Medir desempenho da versão publicada e otimizar imagens/fontes se a medição indicar necessidade.
- [ ] Atualizar casos e caderno de evolução conforme os projetos ganharem funcionalidades comprovadas.

Não há necessidade definida de adicionar backend, autenticação, banco ou serviços pagos ao portfólio. Novas funcionalidades devem ter propósito claro para a apresentação profissional.

## 8. Como retomar

```bash
git fetch origin
git switch feat/editorial-portfolio
git status --short --branch
```

Conferir diferenças antes de atualizar uma cópia com alterações locais. Em uma cópia limpa, acompanhar a branch remota sem sobrescrever trabalho pendente.

Requer Node.js 24+ e npm:

```bash
npm ci
npm run dev
npm test
npm run build
git diff --check
```

O build fica em `dist/`. `npm run preview` serve o build local. `npm run typecheck` verifica tipos isoladamente. O workflow instala dependências, roda testes e build; não publica o site.

Próximo bloco recomendado: coletar mídia original restante e resolver o destino do CareerOS; depois revisar a alternativa com o autor e preparar integração/publicação conforme a decisão dele. Manter explícita a diferença entre o portfólio implementado e as funcionalidades dos projetos que ele apresenta.
