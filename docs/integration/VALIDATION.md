# Integração das branches — 13/11/2026

Base: main `06be673` + editorial `3a66ff4`, que inclui a migração `fae17bc`.
A integração preserva o PDF da main e o PDF servido pela aplicação.
O README reúne orientação profissional e documentação técnica.

## Validação local

- Node 24.22.1; instalação limpa por `npm ci`.
- `npm test`: 51 testes em sete arquivos aprovados.
- `npm run typecheck`: aprovado.
- `VITE_SITE_URL=https://portfolio-kauan-inacio.netlify.app npm run build`: aprovado.
- Chromium, build servido por Vite Preview: desktop 1440×900 e celular 390×900, movimento reduzido.
- Casos e índice interno: abertura do NEXUS e foco na seção de decisões.
- PT/EN: troca e persistência de idioma após recarregar.
- CSV: amostra com três registros, arquivo inválido, recuperação e download de relatório.
- Currículo PDF, imagens dos projetos e imagem social: HTTP 200 local.
- Canonical no build aponta à URL pública existente.
- Sem erros JavaScript ou overflow horizontal nos fluxos verificados.
- Capturas desta integração: desktop.png e mobile.png.
- Link externo do NEXUS respondeu HTTP 200 nesta sessão.

A revisão visual e estes testes não equivalem a uma auditoria completa de acessibilidade.
Nenhum deploy no Netlify foi executado nesta sessão. A configuração de build foi
versionada em netlify.toml; a conexão do projeto Netlify com a branch de produção
continua dependendo da configuração dessa hospedagem.

Pendências de conteúdo: capturas reais de CareerOS/RelatPy/Nexer e retrato escolhido
pelo autor, conforme HANDOFF_PORTFOLIO.md. A integração não inventa esse material.
