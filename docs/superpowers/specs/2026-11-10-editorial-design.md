# Portfólio editorial alternativo

Escopo autorizado: aplicar a estrutura e os refinamentos visuais discutidos na conversa,
em uma nova branch, preservando a versão React original e a main.

Direção: editorial em papel/terracota, tipografia expressiva e demonstrações de produto.
Jornada: apresentação objetiva → projetos → casos e evidências → laboratório CSV →
processo de desenvolvimento/IA → trajetória e contato. Navegação fixa, progresso,
links profundos, currículo PDF e versão em inglês. Sem backend e sem serviços pagos.

Conteúdo: cinco casos com desafio, participação, decisões, limites e links para código.
Usar os READMEs atuais como fontes. Métricas do RelatPy são relatos do currículo,
sem benchmark reproduzível; identificá-las como tais. NEXUS tem captura real e URL
de demonstração documentadas. CareerOS não documenta URL pública no README atual.
Não inventar screenshots, depoimentos, vídeo ou retrato. O currículo mais recente
foi localizado em Memorias-IAs, versão de 09/11/2026, sem dados pessoais além de
contatos profissionais; disponibilizar esse PDF, sem modificá-lo.

Técnica: React/TypeScript/Vite existente; Brand e demos reutilizados; contexto PT/EN;
URLs hash para casos, sem depender de rewrite do servidor estático. CSV processado
somente no navegador, limites explícitos, mensagens de erro e exportação segura.
CSS próprio, responsividade, teclado e movimento reduzido. CI para testes/build.

Alternativas: manter página longa exigiria leitura excessiva; construir CMS/backend
adicionaria manutenção sem necessidade. A abordagem escolhida mantém uma página
principal enxuta e aprofunda cada projeto em uma rota de caso.

Entrega: branch feat/editorial-portfolio a partir de feat/react-typescript; PR separada,
sem merge ou alteração da hospedagem. Verificar testes, build, desktop e mobile.
