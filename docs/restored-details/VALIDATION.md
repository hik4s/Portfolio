# Restituição dos detalhes editoriais — 13/11/2026

Correções solicitadas pelo autor após revisar a publicação cinematográfica:

- Efeito de decodificação restaurado na abertura e no contato. O texto acessível
  dos títulos permanece estável; a área tipográfica é reservada enquanto os
  glifos mudam. Alterar a preferência de movimento restaura o texto exato.
- Títulos dos cinco capítulos com máscaras, palavras, escala e cadências distintas.
  Não se repete o efeito de código em todos os capítulos.
- Hovers e foco em laranja restaurados; contato volta a oferecer botões para
  conversar, currículo, GitHub e LinkedIn.
- Download importa diretamente `Curriculo_Kauan-Inacio.pdf`, na raiz do próprio
  repositório. Removida a cópia anterior vinda de outro repositório. O build
  distribui os mesmos bytes e usa o nome original no download.

## Verificação

- 60 testes em dez arquivos passaram; TypeScript e build Vite aprovados.
- Testes dos dois títulos e CTAs falharam antes das correções e passaram depois.
- Chromium: efeito observado na abertura e no contato, restauração ao reduzir
  movimento, PT/EN, hover laranja e download com SHA-256 igual ao PDF da raiz.
- Desktop 1440 px e celular 390 px; títulos também medidos em 320 px. Um corte
  do contato em 320 px foi reproduzido e corrigido com tipografia proporcional.
- Revisão de código sem achados acionáveis; verificação móvel incluiu o título
  sensível a largura apontado pela revisão.

As sequências e transições cinematográficas existentes são preservadas.
