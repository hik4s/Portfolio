# Clareza e evidências para recrutamento

Escopo aprovado: corrigir a auditoria de 16/11/2026, preservando a identidade visual e destacando Python/backend com abertura a full stack. Preparar localmente; não criar commits, pushes, PRs nem deploys sem aprovação.

## Critérios de aceite

- Cargo, stack e evidências aparecem antes dos capítulos longos.
- NEXUS, RelatPy e CareerOS têm acesso direto a caso, código e demonstração adequada ao projeto.
- Estudos complementares ficam identificados; nenhum link aponta para o Nexer privado.
- PT/EN refletem os READMEs atuais. Capturas distinguem aplicação real, dados fictícios e serviços simulados.
- READMEs priorizam problema, jornada, decisões e verificações; detalhes históricos permanecem acessíveis.
- Não inventar métricas, homologações, vídeos ou resultados de CI.

## Entregas

- [x] Corrigir conteúdo bilíngue, navegação, acesso às demos e mídia no Portfolio; testar regressões de links e acessibilidade.
- [x] Atualizar perfil e READMEs dos seis repositórios associados; criar índice de documentação por projeto.
- [x] Corrigir a checagem MCP e acrescentar typecheck, testes de transporte e CI; manter limites de segurança explícitos.
- [ ] RelatPy em Chromium e novas medições bloqueados pelo ambiente; benchmark histórico do CareerOS localizado e vinculado.
- [x] Rodar testes/build e produzir resumo de revisão com pendências verificáveis. Inspeção desktop/mobile permanece bloqueada, registrada em `docs/audit-2026-11-16/REVIEW.md`.

## Verificação

Portfolio: npm test, npm run build e inspeção Chromium em PT/EN e mobile. RelatPy: unittest e demo local. CareerOS: suíte cloud/regional existente. MCP: instalação, typecheck e testes stdio. Documentação: links locais e diff --check em todos os repositórios.
