# Portfólio editorial cinematográfico

Direção aprovada pelo autor: preservar papel, terracota e tipografia; construir
abertura em camadas, fio condutor, movimentos próprios para projetos e continuidade
na entrada/retorno dos casos. Implementação autorizada em 13/11/2026.

A escolha entre editorial cinematográfico, laboratório de sistemas e galeria
imersiva foi pela primeira, com cenas de sistemas dentro dos capítulos.

React/TypeScript/Vite existentes. GSAP + ScrollTrigger coordenam timelines e
progressão de scroll nativo. Sem bloquear rolagem, som, backend, efeitos WebGL ou
serviços adicionais. Textos e mídias reais permanecem com sua semântica.

Abertura: folha de autoria em perspectiva, linhas editoriais e profundidade.
Capítulos: objetos de papel com entradas distintas e um fluxo ilustrativo do domínio.
Pontes: curva desenhada pela rolagem, disco que percorre o caminho e paleta contínua.
Casos: expansão de uma folha com faixa da identidade do projeto, entrada e retorno.

Decisões técnicas do implementador: transições de rotas sem atrasar navegação/foco;
animações decorativas reversíveis; movimento reduzido totalmente estático; em
celular amplitudes menores e ausência de pinning. Cleanup por contexto GSAP em
mudanças de idioma/rota e StrictMode. Conteúdo legível se animação não iniciar.

Aceite: testes de regressão, build, navegador desktop/celular, links profundos,
voltar/avançar, troca de idioma, movimento reduzido e ausência de triggers órfãos.
