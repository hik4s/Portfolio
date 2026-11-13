# Tipografia expressiva Implementation Plan

**Goal:** distribuir os nove efeitos aprovados sem perder leitura e detalhes restaurados.
**Architecture:** componente React semântico para dividir palavras/letras; módulo
GSAP sincronizado com o contexto e preferências existentes.
**Tech Stack:** React, TypeScript, GSAP, ScrollTrigger, Vitest, Playwright.
**Spec:** ../specs/2026-11-13-expressive-typography.md

## Global Constraints
Preservar papel/terracota, código na abertura/final, CTAs, hover e PDF da raiz.
Sem loops permanentes. Conteúdo completo no modo reduzido e nos links profundos.

## Review Focus
Acentos/espaços; quebra de linhas em 320 px; texto completo para leitores de tela;
cleanup de idioma/rotas/preferências; fonte carregando depois de criar timelines.

- [x] Verificar regressão inicial de cobertura e leitura dos nove efeitos.
- [x] Implementar MotionText e módulo GSAP, distribuir por capítulos e seções.
- [x] Rodar suíte/build e navegador normal/reduzido, PT/EN, 320/390/1440 px.
- [ ] Revisar, integrar e publicar com validação no site público.
