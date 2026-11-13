# Portfólio cinematográfico Implementation Plan

**Goal:** executar o recorte visual aprovado, preservando conteúdo e identidade.
**Architecture:** efeitos GSAP isolados por contexto; React mantém interação e rotas.
**Tech Stack:** React, TypeScript, GSAP/ScrollTrigger, Vite e Vitest.
**Spec:** ../specs/2026-11-13-cinematic-design.md

## Global Constraints
Sem scroll artificial, serviços pagos ou mídia inventada. PT/EN, celular,
movimento reduzido e navegação por teclado continuam disponíveis.

## Review Focus
Navegação direta não pode ocultar conteúdo; trocar idioma não acumula triggers;
voltar restaura contexto; preferência reduzida remove movimento; rolagem móvel
não cria overflow nem áreas presas.

## Tasks
- [x] Testar contratos de conteúdo/fallback das novas cenas antes de implementar.
- [x] Criar camada GSAP com abertura, cenas, pontes e entrada de casos.
- [x] Acrescentar composição e detalhes visuais responsivos e movimento reduzido.
- [x] Executar suíte/build e navegador com scroll real, teclado e preferências.
- [ ] Revisar diff, publicar branch/PR com evidências e limites.
