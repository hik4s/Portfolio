# Cinematografia editorial — 13/11/2026

## Entrega

GSAP 3.15.1 + ScrollTrigger + MotionPathPlugin. Abertura com perspectiva da folha,
revelação por máscara e linha editorial; capítulos com entrada coordenada,
numeração em profundidade e sequências ilustrativas; pontes com percurso SVG;
cortina de papel e composição de entrada dos estudos de caso.

Movimentos dos cartões variam por projeto: dispersão/organização no RelatPy,
rearranjo no CareerOS, sequência conectada no NEXUS, regras no Nexa e passos no
Nexer. A captura real do NEXUS permanece identificada separadamente.

## Evidências

- 56 testes em oito arquivos aprovados, incluindo regressões de movimento reduzido.
- TypeScript e build Vite aprovados com Node 24.22.1.
- Chromium em 1440×900 e 390×900: rolagem pelas cinco cenas, casos, índice,
  retorno ao capítulo, PT/EN, persistência do controle e ausência de overflow.
- Sem erros JavaScript nem avisos de animação nos percursos verificados.
- Inspeção dos ScrollTriggers: 27 na página inicial, zero no caso; três ciclos
  de entrada/retorno não acumulam triggers. Trocar idioma preserva a quantidade.
- Ativar movimento reduzido local ou pelo sistema remove os triggers; ao
  restaurar a preferência são recriados. Scroll do documento fica auto no modo reduzido.
- Revisão de código identificou que a primeira versão mantinha scroll suave
  no controle local. Dois testes falharam antes da correção e passaram depois.

Capturas: hero-desktop.png, hero-mobile.png e nexus-sequence.png.
Gravação de navegação: scroll-preview.webm (captura automática desktop).

## Limites

A transição dos casos usa composição de entrada e cortina de papel. Não há morph
compartilhado do mesmo elemento entre rotas. O retorno leva ao capítulo e recompõe
sua entrada. O fio percorre as pontes e as cenas; não é um único SVG mundial.
Não foi feito benchmark de FPS nem auditoria completa de acessibilidade.
GSAP acrescenta aproximadamente 56 kB gzip ao JavaScript desta versão.
Sem publicação Netlify ou merge na main nesta sessão.
