# Kauan Inacio — portfólio de desenvolvimento

**Desenvolvedor Júnior | Python · FastAPI · PostgreSQL · React**

Portfólio bilíngue com três projetos principais, decisões ligadas ao código e evidências técnicas. O foco é backend Python, com interfaces full stack e automação aplicada.

[**Abrir portfólio**](https://portfolio-kauan-inacio.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/kauan-inacio-dos-santos) · [Perfil GitHub](https://github.com/hik4s)

## Comece pelo que importa para a vaga

| Projeto | O que avaliar | Código e demonstração |
| --- | --- | --- |
| **NEXUS** | Regras de venda, transações, estoque/recebível e isolamento por empresa | [Repositório](https://github.com/hik4s/NEXUS) · [Aplicativo](https://nexus-portfolio-ui.onrender.com/) |
| **RelatPy** | Python assíncrono, automação web, downloads e persistência de status | [Repositório](https://github.com/hik4s/RelatPy-Generic-Example) · [Demo local](https://github.com/hik4s/RelatPy-Generic-Example/blob/portfolio/public-release/docs/DEMO.md) |
| **CareerOS** | APIs, autenticação, fontes externas e organização de candidaturas | [Repositório](https://github.com/hik4s/CareerOS) · [Aplicativo](https://careeros-v1.onrender.com/) |

Os aplicativos públicos permitem criar uma conta; use dados fictícios. A hospedagem gratuita pode exigir aguardar a inicialização. RelatPy tem uma demonstração local independente, sem acesso corporativo.

**Estudos complementares:** Nexa Finance demonstra domínio financeiro em Kotlin. Nexer é um projeto privado em desenvolvimento, sem link público de código ou gravador demonstrado.

## Este repositório

React, TypeScript, Vite, GSAP, CSS próprio e Vitest. A página apresenta resumo dos projetos, competências com evidências, casos em PT/EN e laboratório CSV com processamento local. O currículo PDF é incluído no build a partir do arquivo da raiz.

Requer Node.js 24+ e npm:

```bash
npm ci
npm run dev
```

```bash
npm test
npm run typecheck
npm run build
npm run preview
```

O [CI](.github/workflows/ci.yml) executa testes e build, mas não publica o site. O deploy usa `netlify.toml`, saída `dist/` e `VITE_SITE_URL`. O código local não comprova qual versão está servida na URL pública.

## Transparência das evidências

- NEXUS: captura da aplicação com dados fictícios.
- CareerOS: interface capturada com autenticação/API simuladas; isso não homologa o serviço publicado.
- RelatPy: site local fictício usado pelo demo; não é sistema corporativo nem painel Streamlit.
- Nexa: prancha de identidade visual, identificada como material de marca.
- Demos interativas do portfólio são ilustrações locais, identificadas como tal.
- Tempos operacionais relatados do RelatPy não são benchmark público.

Os textos dos casos ficam em `src/data/cases.ts`, com os mesmos limites nos dois idiomas. A navegação mantém rotas hash e suporte a teclado/movimento reduzido.

[Documentação e manutenção](docs/README.md) · [Guia técnico detalhado](README_TECHNICAL.md)
