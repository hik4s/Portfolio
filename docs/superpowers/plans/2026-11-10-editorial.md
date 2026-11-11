# Plano de implementação — portfólio editorial

Objetivo: entregar a direção aprovada em branch alternativa com conteúdo verificável.
Arquitetura: React estático, conteúdo tipado PT/EN, rotas hash e laboratório local.
Spec: ../specs/2026-11-10-editorial-design.md

- [x] Preparar dados dos casos: desafio, contribuição, decisões, evidências e limites.
- [x] Implementar parser/validador CSV, limites, amostra e exportação com testes de comportamento.
- [x] Implementar contexto PT/EN e navegação por hash, com testes de idioma e casos.
- [x] Construir UI editorial: barra fixa, índice/progresso, hero, seções e páginas de caso.
- [x] Integrar currículo original e captura real do NEXUS; manter demos identificadas.
- [x] Adicionar processo/IA, histórico, currículo/contato e metadados de compartilhamento.
- [x] Adicionar CI e documentação; executar suíte/build e QA visual desktop/mobile.
- [x] Revisar diff e salvar nova branch remota/PR sem modificar main.

Foco de revisão: retorno/back em hash; hash desconhecido; conteúdo legível sem observers;
movimento reduzido; pequenos viewports; arquivo inválido/grande e exportação CSV.
