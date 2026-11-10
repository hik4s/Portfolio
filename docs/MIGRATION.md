# Migração do portfólio — 10/11/2026

## Escopo aprovado
Migrar a página existente para React + TypeScript + Vite, com CSS próprio,
preservando a identidade, os textos, as ilustrações e as demonstrações.
Separar os dados dos projetos da apresentação. Site estático, sem backend.

## Decisões
- Componentes React renderizam a página diretamente, sem iframe e sem HTML injetado.
- Reaproveitar CSS e SVGs originais. Extrair imagens incorporadas para assets locais.
- Filtros de vagas, seleção de módulos, validação financeira e tecnologias usam estado React.
- Animações respeitam movimento reduzido e removem observers ao desmontar.
- Manter o HTML exportado original como referência histórica, fora do build.
- Trabalhar na branch feat/react-typescript. Publicação e merge não fazem parte desta migração.

## Plano
- [x] Configurar Vite, TypeScript estrito e testes de interação.
- [x] Extrair estilos e assets e converter as seções em componentes.
- [x] Centralizar projetos tipados e substituir scripts por estado e hooks React.
- [x] Validar build, filtros, regras financeiras, navegação e apresentação responsiva.
- [x] Documentar execução, estrutura, limitações e criar uma branch revisável no GitHub.


## Validação
- Build de produção: TypeScript estrito e Vite.
- 11 testes automatizados: filtros e restauração de vagas; módulos; contas iguais;
  valores vazios, zero, negativos e decimais; evidências; navegação e conteúdo;
  movimento reduzido e limpeza de observers.
- Navegador: navegação por âncoras, filtro do CareerOS, módulos do NEXUS e validação financeira.
- Verificação responsiva em contexto de 390 px: coluna única, conteúdo sem rolagem
  horizontal e filtros utilizáveis. Conferência desktop em 1363 px.
- Removida a rotação persistente da demonstração CareerOS em telas estreitas:
  a animação antiga sobrescrevia a regra responsiva.
- Revisão de código identificou uma marca invisível sem IntersectionObserver.
  O CSS agora exibe uma marca estática até a inicialização dos efeitos.
- HTML original mantido sem alterações.

## Estado de entrega
A migração está pronta para revisão na branch `feat/react-typescript`.
A branch principal e a hospedagem não são modificadas nesta entrega.
Não foi realizada auditoria funcional dos projetos externos exibidos.
