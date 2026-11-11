# Entrega alternativa editorial — 10/11/2026

## Relação entre versões
- Base preservada: feat/react-typescript, commit fae17bc.
- Alternativa: feat/editorial-portfolio, com PR comparando a base React.
- Sem merge em main ou publicação/alteração de hospedagem.

## Entregas
- Identidade editorial refinada: papel, terracota, composição tipográfica e marcas próprias.
- Menu fixo, seção ativa, progresso de leitura, foco e navegação por teclado.
- Cinco casos completos em PT/EN com desafio, contribuição, decisões, links, resultados e limites.
- Captura real do NEXUS e acesso à aplicação conforme o README, com conta de demonstração.
- Currículo original de 09/11/2026, contato e posicionamento profissional.
- Demonstrações de vagas/finanças e laboratório CSV funcional com dados fictícios.
- Competências com evidência, processo de construção/IA, trajetória e caderno de evolução.
- Metadados, imagem social 1200×630, favicon e CI de testes/build.
- Removidos componentes antigos sem uso e CSS que atendia só à estrutura anterior.

## Verificação
- Suíte local: parser, datas, CSV malformado, limites de tamanho/linhas, exportação;
  interação dos painéis, upload, recuperação, idioma, casos e navegação/foco.
- Build de produção inclui TypeScript estrito.
- Navegador desktop: abertura, caso NEXUS, índice e decisões, idioma, retorno ao laboratório,
  amostra sintética e download do relatório.
- Contexto móvel de 390 px: abertura legível, menu, laboratório e tabela sem transbordar a página.
- Revisão independente identificou skip link saindo do caso e falta de transferência de foco.
  Ambos ganharam testes reproduzindo a falha e correção.
- O workflow foi adicionado; seu resultado remoto precisa ser observado no GitHub após push.

## Decisões e limites
- Currículo original preservado, sem inventar datas ou reescrever sua experiência.
- CareerOS: React no módulo de autenticação; não há URL demo documentada no README atual.
- Nexer: o README principal ainda descreve RelatPy; o caso diferencia proposta de evidência.
- Sem foto/vídeo originais disponíveis para estes projetos: arte tipográfica e demos identificadas,
  captura real somente onde havia arquivo verificável. Esses materiais podem ser adicionados depois.
- Nenhuma medição de contratação, escala ou economia percentual foi inventada.
- Open Graph absoluto depende de VITE_SITE_URL na publicação; a imagem já está incluída.
- O laboratório aplica regras genéricas demonstrativas; não é um validador operacional de TMA.
