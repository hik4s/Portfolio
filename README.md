# Kauan / Portfólio editorial

Portfólio de desenvolvimento de software, Python e automação. Uma direção editorial
em papel e terracota, com cinco estudos de caso, decisões técnicas ligadas ao código,
demonstrações interativas e um laboratório de validação CSV inteiramente local.

**React · TypeScript · Vite · GSAP · CSS próprio · Vitest**

Integração de `feat/react-typescript` e `feat/editorial-portfolio`, preservando o
currículo e as atualizações da main.

[**Portfólio público**](https://portfolio-kauan-inacio.netlify.app/) ·
[LinkedIn](https://www.linkedin.com/in/kauan-inacio-dos-santos) ·
[GitHub](https://github.com/hik4s)

**Desenvolvedor Júnior | Python · FastAPI · PostgreSQL · React**

Comece por RelatPy (automação aplicada a uma rotina real), CareerOS (APIs e
gestão de candidaturas) e NEXUS (vendas, estoque e recebíveis). Os estudos de
caso apresentam contribuição, decisões, evidências e limites de cada projeto.
A URL pública pode servir uma versão anterior até o deploy desta integração.

## Executar e verificar

Requer Node.js 24+ e npm.

```bash
npm ci
npm run dev
```

Use o endereço exibido pelo Vite.

```bash
npm test
npm run build
npm run preview
```

`npm run typecheck` verifica os tipos; `npm run test:watch` acompanha os testes.
O build estático é produzido em `dist/`. O workflow `Portfolio checks` executa
instalação reproduzível, testes e build em pushes/PRs; não realiza deploy.

## Jornada e conteúdo

- Abertura pessoal com a origem do RelatPy e currículo PDF original de 09/11/2026.
- Passagens visuais entre capítulos, leitura ampliada e movimento reduzido.
- Casos do RelatPy, CareerOS, NEXUS, Nexa Finance e Nexer, com escopo e limitações.
- Exploração das decisões, captura real do NEXUS e prancha de identidade do Nexa, ampliáveis.
- Filtros de vagas e validação financeira ilustrativos, identificados como demos.
- Laboratório CSV: amostra sintética, arquivo local e relatório para download.
- Competências com evidências, processo de trabalho, uso de IA e trajetória.
- Português/inglês, preferência local e navegação por teclado.

Não há backend, banco ou serviço pago necessário para executar o portfólio.
As fontes vêm do Google Fonts, com fontes de sistema como alternativa.
JavaScript é necessário. As aplicações externas têm seus próprios requisitos.

## Estrutura

| Caminho                                   | Responsabilidade                                              |
| ----------------------------------------- | ------------------------------------------------------------- |
| `src/App.tsx`                             | Composição das páginas, destinos e foco da navegação          |
| `src/editorial/Language.tsx`              | Contexto PT/EN, preferência e idioma do documento             |
| `src/editorial/useRoute.ts`               | Rotas hash, links profundos e histórico                       |
| `src/editorial/Navigation.tsx`            | Menu fixo, seção atual, progresso e currículo                 |
| `src/editorial/ProjectChapters.tsx`       | Índice e capítulos dos cinco projetos                         |
| `src/editorial/ChapterBridge.tsx`         | Transições visuais e navegação entre projetos                 |
| `src/editorial/RealProjectMedia.tsx`      | Imagens originais, ampliação e fontes                         |
| `src/editorial/CasePage.tsx`              | Desafio, contribuição, decisões, resultados e evidências      |
| `src/data/cases.ts`                       | Conteúdo tipado PT/EN, links e limites de cada projeto        |
| `src/components/Demos.tsx`                | Demonstrações interativas e conhecimentos                     |
| `src/components/CsvLab.tsx`               | Carregamento, estados, resultados e exportação CSV            |
| `src/lib/csv.ts`                          | Parser, regras, limites e proteção da exportação              |
| `src/components/Brand.tsx`, `src/assets/` | Identidades visuais dos projetos                              |
| `src/styles/visual-polish.css`            | Abertura pessoal, ritmo, mídia e medidas de leitura           |
| `src/styles/editorial.css`                | Layout editorial e responsividade                             |
| `src/styles/portfolio.css`                | Estilos compartilhados de marcas e demonstrações              |
| `public/assets/`                          | Currículo, captura real, favicon e imagem de compartilhamento |

Atualize os casos em `src/data/cases.ts`. Os textos das demais seções ficam junto
aos componentes editoriais, com versões PT/EN. O currículo oferecido continua em
português em ambos os idiomas.

## Rotas sem configuração de servidor

- `/#inicio`, `/#experiencia`, `/#projetos`, `/#nexus`, `/#nexa`, `/#nexer`
- `/#laboratorio`, `/#processo`, `/#trajetoria`, `/#contato`
- `/#case/relatpy`, `/#case/career`, `/#case/nexus`, `/#case/nexa`, `/#case/nexer`
- `/#case/nexus/decisoes` exemplifica um destino interno de caso.

Hashes desconhecidos de caso oferecem recuperação para o início. Voltar/avançar
funciona pelo histórico do navegador. A navegação move o foco para o destino;
os efeitos respeitam movimento reduzido e removem observers ao desmontar.

## Laboratório CSV

Amostra sintética ou arquivo UTF-8 com cabeçalhos `id,equipe,inicio,fim`, em qualquer
ordem, separados por vírgula ou ponto e vírgula. Campos com aspas, separadores e
quebras de linha são aceitos. Datas ISO 8601 exigem segundos e fuso explícito,
como `2026-03-01T10:00:00Z`.

Limites: **1 MiB, 5.000 registros e prévia de 100 linhas**. O relatório inclui os
registros completos aceitos. As regras marcam campos vazios, datas inválidas,
fim anterior ao início e IDs repetidos. Não há correção automática, cálculo de
TMA ou validação regulatória. Células potencialmente interpretadas como fórmulas
recebem proteção na exportação. Arquivos não são enviados para um servidor nem
persistidos no armazenamento do navegador.

## Publicação estática e compartilhamento

- Netlify: `netlify.toml` versiona Node 24, build, diretório de publicação e URL pública.
- Build: `npm ci` seguido de `npm run build`.
- Saída: `dist/`.
- Os assets usam caminhos relativos e as rotas usam hashes, permitindo subdiretórios.
- Ao definir a URL pública, configure `VITE_SITE_URL` com a URL completa da raiz
  da aplicação (incluindo subdiretório, se houver). O build gera canonical,
  `og:url` e endereço absoluto da imagem de compartilhamento.
- Sem essa variável, não se inventa uma URL pública: o build contém imagem relativa.
- A imagem 1200×630 está em `public/assets/social-card.png`; seu gerador opcional
  `scripts/social-card.py` usa Pillow, dispensável para executar/buildar o site.

## Fontes e transparência

O conteúdo foi conferido nos READMEs e arquivos referenciados dos projetos.
A captura `nexus-overview.png` vem de `hik4s/NEXUS/docs/ui-overview.png` e usa dados
fictícios. `nexa-identity.png` vem de `hik4s/Nexa/brand/identity/apresentacao/identidade.png`: é
uma prancha de marca, não uma tela Android. Os demais painéis são demonstrações identificadas.
CareerOS e RelatPy não tinham capturas disponíveis nos repositórios consultados.
Os tempos do RelatPy são relatos aproximados do currículo, sem benchmark público.
Não são inventados usuários, taxas de sucesso, depoimentos, retrato ou vídeo.

O HTML exportado original `portfolio-kauan.html` permanece fora do build como
referência histórica. Detalhes da entrega: [docs/EDITORIAL.md](docs/EDITORIAL.md).

## English

A static, bilingual portfolio with source-linked case studies, clearly labeled
interactive demos, a local CSV validation lab and the original Portuguese résumé.
Use Node.js 24+, `npm ci`, `npm run dev`; verify with `npm test` and `npm run build`.
All CSV processing runs in the browser. No backend or paid service is required.

## Direção cinematográfica

Abertura em camadas, linhas editoriais, pontes com percurso SVG e sequências
ilustrativas próprias para os cinco projetos. GSAP/ScrollTrigger acompanham a
rolagem nativa; nenhum trecho exige pinning ou uma rolagem artificial.
Os casos entram com uma passagem de papel e sua identidade visual.

O controle Movimento reduz efeitos e rolagem suave; a preferência do sistema tem
prioridade. As animações são limpas ao trocar rota/idioma e recompostas no celular.
O hook anterior permanece como referência histórica, fora da composição atual.
Detalhes, evidências e limites: [docs/cinematic/VALIDATION.md](docs/cinematic/VALIDATION.md).
