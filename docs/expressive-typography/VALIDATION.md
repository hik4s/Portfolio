# Tipografia expressiva — 13/11/2026

O autor aprovou os nove efeitos e delegou a distribuição. Abertura/contato com
efeito de código, hovers laranja, CTAs e PDF da raiz foram preservados.

| Área | Efeito |
| --- | --- |
| Índice e competências | Onda tipográfica |
| RelatPy | Digitação por letras, com cursor acompanhando a escrita |
| CareerOS | Foco progressivo por palavras |
| NEXUS | Letras acendendo com iluminação suave |
| Nexa | Contorno preenchido por tinta |
| Nexer | Montagem de caracteres |
| Laboratório e processo | Faixa de luz e marca de destaque |
| Trajetória e caderno de evolução | Impressão no papel |
| Processo | Transformação ideia → código → solução |
| Estudos de caso | Contorno no nome e foco no título |

## Evidências

- 62 testes em onze arquivos, TypeScript e build Vite aprovados.
- Teste de cobertura dos nove efeitos falhou antes da implementação e passou depois.
- Chromium: cada efeito executado e texto final legível em 1440 e 320 px; estado
  estático do sistema em 390 px. PT/EN e desligamento manual conferidos.
- Verificados opacidade final, preenchimento do contorno, último frame da
  transformação e ausência de palavras cortadas na lateral da viewport.
- Sem erros JavaScript ou avisos de animação nos percursos finais.
- A primeira verificação reproduziu uma exceção do ScrollTrigger ao mudar idioma
  no fim da página: triggers antigos eram removidos durante refresh de timelines
  de texto incompletas. A camada de texto agora é criada depois dos triggers de
  layout. O mesmo percurso passou após essa alteração.
- Lifecycle: 46 triggers na home, dois nos casos; três ciclos de entrada/retorno,
  idioma e preferências não acumulam triggers. Modo reduzido limpa os estilos.
- Revisão de código sem achados acionáveis; verificação incluiu a palavra longa
  “inconsistências” e legibilidade do contorno em viewport estreita.

Texto acessível permanece completo; a camada visual é decorativa. Animações
não têm loops permanentes e são revertidas pelo contexto GSAP existente.
Sem benchmark formal de FPS ou auditoria completa de acessibilidade.
