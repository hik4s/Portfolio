# Documentação do portfólio

## Manutenção atual

- [Apresentação e execução](../README.md)
- [Guia técnico detalhado](../README_TECHNICAL.md)
- [Conteúdo bilíngue dos casos](../src/data/cases.ts)
- [Resumo para avaliação rápida](../src/editorial/RecruiterOverview.tsx)
- [Capturas e procedência](../src/editorial/RealProjectMedia.tsx)
- [Plano de correções de 16/11](superpowers/plans/2026-11-16-recruiter-clarity.md)

## Conferência de navegador

Com `npm run dev` ativo em `127.0.0.1:5173`, instale Playwright em um ambiente Python e seu Chromium. Execute `python scripts/check_recruiter_browser.py` a partir da raiz. O roteiro confere PT/EN, links privados, overflow desktop/mobile e erros de página; as capturas ficam em `test-results/recruiter/`. A variável opcional `PLAYWRIGHT_CHROMIUM_EXECUTABLE` seleciona um Chromium já instalado.

[Resultado e limites desta revisão](audit-2026-11-16/REVIEW.md). Testes de componentes não substituem essa inspeção visual.

## Histórico de decisões e validação

- [Direção editorial](EDITORIAL.md)
- [Integração](integration/VALIDATION.md)
- [Movimento](cinematic/VALIDATION.md)
- [Tipografia](expressive-typography/VALIDATION.md)
- [Handoff anterior](../HANDOFF_PORTFOLIO.md)

Registros antigos descrevem o estado observado na data indicada. Para acesso às demos e capacidades atuais, consulte os READMEs dos projetos e o conteúdo atualizado dos casos. Ao atualizar uma entrega, revise PT/EN, links, screenshots e limites juntos.
