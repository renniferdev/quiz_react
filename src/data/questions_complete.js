const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "O que é dom?",
        options: [
          "Uma interface de programação que representa a estrutura de um documento HTML ou XML.",
          "Uma linguagem de programação para criar sites dinâmicos.",
          "Um modelo de banco de dados usado para armazenar informações.",
          "Um tipo de variável utilizada para armazenar objetos.",
        ],
        answer:
          "Uma interface de programação que representa a estrutura de um documento HTML ou XML.",
        tip: "É a estrutura do documento que pode ser manipulada pelo JavaScript.",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "O que é HTML5?",
        options: [
          "Um programa de design gráfico usado para criar sites",
          "Uma linguagem de marcação usada para estruturar e exibir conteúdo na web",
          "Um servidor de banco de dados utilizado para hospedar páginas",
          "Um software para editar imagens e vídeos",
        ],
        answer: "Uma linguagem de marcação usada para estruturar e exibir conteúdo na web",
      },
      {
        question: "Quais são as principais diferenças entre HTML e HTML5?",
        options: [
          "HTML5 não funciona em navegadores modernos",
          "HTML5 depende de plug-ins para áudio e vídeo",
          "HTML5 suporta multimídia nativamente e é compatível com dispositivos móveis",
          "HTML tem suporte para armazenamento local, HTML5 não",
        ],
        answer: "HTML5 suporta multimídia nativamente e é compatível com dispositivos móveis",
      },
      {
        question: "O que são tags em HTML5 e quantas são necessárias para criar uma página da Web básica?",
        options: [
          "São comentários no código; é necessário usar 10 tags",
          "São arquivos externos chamados por scripts; 2 são suficientes",
          "São estruturas do HTML usadas para definir a página, e ao menos 4 são essenciais",
          "São variáveis de sistema; normalmente se usa apenas uma",
        ],
        answer: "São estruturas do HTML usadas para definir a página, e ao menos 4 são essenciais",
      },
      {
        question: "O que são elementos em HTML5?",
        options: [
          "Linhas de código JavaScript embutidas no HTML",
          "Componentes que estruturam e interpretam o documento HTML",
          "Partes do CSS que definem estilo",
          "Arquivos de imagem vinculados à página",
        ],
        answer: "Componentes que estruturam e interpretam o documento HTML",
      },
      {
        question: "O que são atributos em HTML5?",
        options: [
          "Propriedades usadas em elementos HTML para modificar seu comportamento",
          "Arquivos de configuração do navegador",
          "Parâmetros de segurança do site",
          "Variáveis globais do CSS",
        ],
        answer: "Propriedades usadas em elementos HTML para modificar seu comportamento",
      },
      {
        question: "O que é CSS e qual é a sua relação com HTML5?",
        options: [
          "CSS é uma linguagem usada para estilizar elementos HTML",
          "CSS substitui completamente o HTML5",
          "CSS é um banco de dados de estilos externos",
          "CSS é responsável por armazenar dados no navegador",
        ],
        answer: "CSS é uma linguagem usada para estilizar elementos HTML",
      },
      {
        question: "Quais são os principais elementos da estrutura da página HTML5?",
        options: [
          "<title>, <meta>, <br>, <font>",
          "<header>, <footer>, <section>, <article>, <nav>, <aside>",
          "<main>, <div>, <font>, <body>",
          "<form>, <select>, <optgroup>, <footer>",
        ],
        answer: "<header>, <footer>, <section>, <article>, <nav>, <aside>",
      },
      {
        question: "Qual é a função de arrastar e soltar no HTML5?",
        options: [
          "Permite enviar arquivos para o servidor automaticamente",
          "Permite movimentar elementos com o cursor, economizando tempo na codificação",
          "Substitui o uso de eventos em JavaScript",
          "Remove a necessidade de usar atributos nos elementos",
        ],
        answer: "Permite movimentar elementos com o cursor, economizando tempo na codificação",
      },
      {
        question: "O que são elementos de entrada em HTML5?",
        options: [
          "Componentes que permitem receber dados do usuário",
          "Imagens embutidas com links",
          "Estilos aplicados aos títulos",
          "Comentários ocultos em campos de formulário",
        ],
        answer: "Componentes que permitem receber dados do usuário",
      },
      {
        question: "O que significa armazenamento Web em HTML5?",
        options: [
          "Armazenamento baseado em servidor usando FTP",
          "Capacidade de salvar dados localmente no navegador do usuário",
          "Método de salvar vídeos em cache",
          "Um novo tipo de cookie externo",
        ],
        answer: "Capacidade de salvar dados localmente no navegador do usuário",
      },
      {
        question: "Como você cria um link para outra página da Web usando HTML5?",
        options: [
          "Com a tag <link> e atributo src",
          "Com a tag <a> e atributo href",
          "Usando <div class=\"link\">",
          "Com a tag <url> e atributo target",
        ],
        answer: "Com a tag <a> e atributo href",
      },
      {
        question: "Quais são os três tipos de listas em HTML5?",
        options: [
          "Comum, estilizada e numérica",
          "Ordenada, não ordenada e de descrição",
          "Personalizada, embutida e vertical",
          "Tabela, formulário e seleção",
        ],
        answer: "Ordenada, não ordenada e de descrição",
      },
      {
        question: "Quais são os principais benefícios do HTML5?",
        options: [
          "Requer software proprietário e plug-ins externos",
          "Suporte nativo a multimídia, compatibilidade ampla e desempenho melhorado",
          "Usa menos recursos do navegador, mas não suporta vídeo",
          "É exclusivo para aplicativos móveis nativos",
        ],
        answer: "Suporte nativo a multimídia, compatibilidade ampla e desempenho melhorado",
      },
      {
        question: "Qual é a função da formatação de tags no HTML5?",
        options: [
          "Permitir estilização básica de texto sem CSS",
          "Definir a estrutura semântica da página",
          "Aplicar animações por padrão",
          "Criar scripts de servidor",
        ],
        answer: "Permitir estilização básica de texto sem CSS",
      },
      {
        question: "Que tipos de gráficos são compatíveis com HTML5?",
        options: [
          "Apenas imagens JPG e PNG",
          "SVG e Canvas",
          "PSD e RAW",
          "WebGL e JPEG2000",
        ],
        answer: "SVG e Canvas",
      },
      {
        question: "O que é novo sobre a relação entre <header> e as tags <h1> no HTML5?",
        options: [
          "<h1> substitui o <header> completamente",
          "<header> organiza o conteúdo e <h1> define o título principal",
          "<header> só pode ser usado com CSS3",
          "<h1> deve ser usado fora do <header>",
        ],
        answer: "<header> organiza o conteúdo e <h1> define o título principal",
      },
      {
        question: "Quais são alguns dos novos tipos de entrada no HTML5?",
        options: [
          "image, iframe, password",
          "iframe, script, video",
          "date, time, email, tel, color, range",
          "command, link, section, main",
        ],
        answer: "date, time, email, tel, color, range",
      },
      {
        question: "O que são mapas de imagens em HTML5?",
        options: [
          "Imagens com áreas clicáveis ligadas a diferentes URLs",
          "Mapas de localização com GPS",
          "Gráficos de dados com áreas de toque",
          "Textos sobrepostos em imagens",
        ],
        answer: "Imagens com áreas clicáveis ligadas a diferentes URLs",
      },
      {
        question: "Quais são algumas das APIs mais importantes do HTML5?",
        options: [
          "API do YouTube, API de arquivos PDF, API de Java",
          "Geolocalização, Fala, Área de Transferência, Histórico, Notificações",
          "API de impressão, API de redes sociais, API CSS",
          "API WordPress, API Bootstrap, API MySQL",
        ],
        answer: "Geolocalização, Fala, Área de Transferência, Histórico, Notificações",
      },
      {
        question: "Como um símbolo de direitos autorais (\"copyright\") pode ser adicionado à página da Web usando HTML5?",
        options: [
          "<copyright>2024</copyright>",
          "<legal>© 2024</legal>",
          "Usando o código &copy;",
          "<meta copyright=\"© 2024\">",
        ],
        answer: "Usando o código &copy;",
      },
      {
        question: "Qual é a função de DOCTYPE em HTML5?",
        options: [
          "Indicar ao navegador o tipo e a versão do documento",
          "Adicionar estilos CSS automaticamente",
          "Declarar variáveis globais",
          "Importar bibliotecas externas",
        ],
        answer: "Indicar ao navegador o tipo e a versão do documento",
      },
      {
        question: "Quais são os diferentes tipos de armazenamento em HTML5?",
        options: [
          "cookieStorage e tempStorage",
          "cloudStorage e diskStorage",
          "sessionStorage e localStorage",
          "htmlStorage e webStorage",
        ],
        answer: "sessionStorage e localStorage",
      },
      {
        question: "O que são metadados em HTML5 e como são especificados?",
        options: [
          "São arquivos de backup da página",
          "Informações extras sobre a página, definidas com <meta>",
          "Links entre páginas internas",
          "Comentários visuais no topo da página",
        ],
        answer: "Informações extras sobre a página, definidas com <meta>",
      },
      {
        question: "Quais são as novas tags para multimídia em HTML5?",
        options: [
          "<audio>, <video>, <source>, <track>, <embed>",
          "<img>, <link>, <style>, <meta>, <br>",
          "<multimedia>, <sound>, <clip>, <media>",
          "<file>, <play>, <music>, <tv>",
        ],
        answer: "<audio>, <video>, <source>, <track>, <embed>",
      },
      {
        question: "Quais são alguns dos principais problemas do HTML5?",
        options: [
          "É incompatível com CSS",
          "Armazenamento local apresenta riscos e nem todos os recursos são compatíveis",
          "É difícil de aprender por não ter documentação",
          "Não pode ser usado em aplicativos móveis",
        ],
        answer: "Armazenamento local apresenta riscos e nem todos os recursos são compatíveis",
      },
      {
        question: "Quais são os melhores formatos de áudio e vídeo para usar em HTML5?",
        options: [
          "MP3, Ogg, WAV para áudio; MP4, WebM, Ogg para vídeo",
          "MIDI, WMA, MOV",
          "FLV, MP2, WMV",
          "MP4, FLAC, DOCX",
        ],
        answer: "MP3, Ogg, WAV para áudio; MP4, WebM, Ogg para vídeo",
      },
      {
        question: "Como o HTML5 pode ser usado para fins de armazenamento de dados?",
        options: [
          "Por meio de arquivos .txt embutidos",
          "Utilizando cookies e flash",
          "Usando APIs como IndexedDB e Web SQL (obsoleto)",
          "Através de comandos CSS inline",
        ],
        answer: "Usando APIs como IndexedDB e Web SQL (obsoleto)",
      },
      {
        question: "O que são microdados em HTML5 e como eles são criados?",
        options: [
          "São imagens de dados armazenadas no servidor",
          "Atributos personalizados que descrevem o conteúdo da página",
          "Funções JavaScript para manipular strings",
          "Metadados para o navegador",
        ],
        answer: "Atributos personalizados que descrevem o conteúdo da página",
      },
      {
        question: "Como a API de geolocalização é implementada em HTML5?",
        options: [
          "Usando navigator.geolocation com métodos como getCurrentPosition",
          "Com a tag <gps> embutida",
          "Por meio de formulários de entrada manual",
          "Usando CSS para ativar sensores",
        ],
        answer: "Usando navigator.geolocation com métodos como getCurrentPosition",
      },
      {
        question: "Quais são alguns dos principais atributos globais em HTML5?",
        options: [
          "class, id, data-*, contenteditable, accesskey",
          "readonly, autoplay, srcset, onclick, embed",
          "meta, script, input, video, charset",
          "track, poster, onload, href, rowspan",
        ],
        answer: "class, id, data-*, contenteditable, accesskey",
      },
      {
        question: "Qual é a função da API WebSocket em HTML5?",
        options: [
          "Estilizar elementos em tempo real",
          "Comunicação bidirecional e em tempo real com o servidor",
          "Salvar sessões do usuário",
          "Atualizar o DOM automaticamente",
        ],
        answer: "Comunicação bidirecional e em tempo real com o servidor",
      },
      {
        question: "Quando as tags <div> devem ser usadas em HTML5?",
        options: [
          "Quando não há uma tag semântica apropriada",
          "Sempre, em vez de <section>, <article>, etc.",
          "Somente dentro de <form>",
          "Apenas para scripts externos",
        ],
        answer: "Quando não há uma tag semântica apropriada",
      },
      {
        question: "Qual é a função da API Web Workers no HTML5?",
        options: [
          "Executar vídeos mais rapidamente",
          "Gerar backups de arquivos locais",
          "Executar scripts em segundo plano sem afetar o desempenho da página",
          "Monitorar cookies e sessões",
        ],
        answer: "Executar scripts em segundo plano sem afetar o desempenho da página",
      },
      {
        question: "Como se mede o desempenho de uma página HTML5?",
        options: [
          "Com APIs como Navigation Timing e User Timing",
          "Através de testes CSS",
          "Usando apenas console.log()",
          "Via estatísticas do Google Docs",
        ],
        answer: "Com APIs como Navigation Timing e User Timing",
      },
      {
        question: "Como as páginas da web HTML5 podem ser otimizadas?",
        options: [
          "Usando mais imagens grandes e vídeos longos",
          "Compactando arquivos, reduzindo requisições e otimizando CSS/JS",
          "Inserindo plugins em Flash",
          "Adicionando várias fontes e animações GIF",
        ],
        answer: "Compactando arquivos, reduzindo requisições e otimizando CSS/JS",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "O que é o modelo de caixa (Box Model) em CSS?",
        options: [
          "Um sistema de layout tridimensional usado em CSS",
          "Estrutura que define como elementos HTML ocupam espaço: content, padding, border e margin",
          "Uma técnica de transformar blocos em quadros visuais",
          "Um recurso de CSS3 para animações",
        ],
        answer:
          "Estrutura que define como elementos HTML ocupam espaço: content, padding, border e margin",
      },
      {
        question:
          "Qual a diferença entre display: none, visibility: hidden e opacity: 0?",
        options: [
          "Todos removem o elemento do fluxo da página",
          "display:none remove o elemento do fluxo; visibility:hidden o esconde mas mantém espaço; opacity:0 torna transparente mas visível",
          "visibility:hidden remove o elemento; display:none apenas o torna invisível; opacity:0 reduz a opacidade",
          "opacity:0 remove o elemento do HTML; os outros dois apenas alteram a cor",
        ],
        answer:
          "display:none remove o elemento do fluxo; visibility:hidden o esconde mas mantém espaço; opacity:0 torna transparente mas visível",
      },
      {
        question: "Quando usar Flexbox e quando usar Grid?",
        options: [
          "Flexbox é para layouts unidimensionais, Grid é para layouts bidimensionais com linhas e colunas",
          "Flexbox funciona apenas em navegadores antigos, Grid é moderno",
          "Grid só funciona com imagens, Flexbox só com texto",
          "Flexbox e Grid são a mesma coisa, apenas com nomes diferentes",
        ],
        answer:
          "Flexbox é para layouts unidimensionais, Grid é para layouts bidimensionais com linhas e colunas",
      },
      {
        question: "O que é a especificidade (specificity) em CSS?",
        options: [
          "É um cálculo de prioridade entre regras CSS para definir qual estilo será aplicado",
          "É o número de classes em um CSS",
          "É o tamanho do arquivo CSS em bytes",
          "É uma técnica de reset de estilo entre navegadores",
        ],
        answer:
          "É um cálculo de prioridade entre regras CSS para definir qual estilo será aplicado",
      },
      {
        question: "Quais tipos de posicionamento CSS existem?",
        options: [
          "static, dynamic, floating, inline",
          "static, relative, absolute, fixed, sticky",
          "top, bottom, left, right, center",
          "flex, grid, block, inline",
        ],
        answer: "static, relative, absolute, fixed, sticky",
      },
      {
        question: "Como você centraliza horizontal e verticalmente um div?",
        options: [
          "margin: center; text-align: center",
          "Usando display: flex no container com justify-content: center e align-items: center",
          "display: grid apenas com justify-items: center",
          "Usando position: absolute e margins",
        ],
        answer:
          "Usando display: flex no container com justify-content: center e align-items: center",
      },
      {
        question: "O que são media queries em CSS?",
        options: [
          "Regras CSS que aplicam estilos diferentes com base em características do dispositivo (ex. largura da tela)",
          "Tags HTML que ajustam automaticamente as mídias",
          "Um tipo de comentário com mídia dentro de CSS",
          "Uma função JavaScript que altera CSS conforme o dispositivo",
        ],
        answer:
          "Regras CSS que aplicam estilos diferentes com base em características do dispositivo (ex. largura da tela)",
      },
      {
        question: "Para que serve um pré-processador CSS como Sass ou Less?",
        options: [
          "Permitem usar variáveis, aninhamento e mixins, tornando o CSS mais modular e reutilizável",
          "São substitutos do framework Bootstrap",
          "Transformam CSS em JavaScript automaticamente",
          "Traduzem CSS para outros idiomas",
        ],
        answer:
          "Permitem usar variáveis, aninhamento e mixins, tornando o CSS mais modular e reutilizável",
      },
      {
        question: "O que são pseudo-classes em CSS? Dê um exemplo.",
        options: [
          "Estilos aplicados em estados específicos como :hover, :focus ou :nth-child()",
          "Classes que você nomeia com ::",
          "Estilos aplicados apenas em pseudo-elementos",
          "Tags HTML estilizadas via CSS",
        ],
        answer:
          "Estilos aplicados em estados específicos como :hover, :focus ou :nth-child()",
      },
      {
        question: "O que é CSS reset ou normalize e por que usar?",
        options: [
          "Normaliza estilos padrão dos navegadores para um baseline consistente",
          "Remove todo o CSS do site para teste de velocidade",
          "Adiciona auto reset de formulário em CSS",
          "Serve para resetar cookies do navegador",
        ],
        answer:
          "Normaliza estilos padrão dos navegadores para um baseline consistente",
      },
    ],
  },
  {
    category: "React",
    questions: [
      {
        question: "Como você cria refs no React?",
        options: [
          "Usando React.createRef() ou o hook useRef() para criar referências a elementos DOM",
          "Atribuindo IDs HTML e usando document.getElementById()",
          "Declarando uma variável local com useState()",
          "Passando funções como props para acessar elementos",
        ],
        answer:
          "Usando React.createRef() ou o hook useRef() para criar referências a elementos DOM",
      },
      {
        question: "Com que frequência o useState do React é atualizado? Por quê?",
        options: [
          "Imediatamente após chamar a função de atualização",
          "A cada segundo automaticamente",
          "Apenas quando a página é recarregada",
          "De forma assíncrona após a renderização para otimizar performance",
        ],
        answer: "De forma assíncrona após a renderização para otimizar performance",
      },
      {
        question: "Cite três vantagens do uso do React Hooks:",
        options: [
          "Aumentam a complexidade e o tamanho do código",
          "Permitem reutilizar lógica, facilitam o gerenciamento de estado e evitam componentes de classe",
          "Eliminam a necessidade de JSX",
          "Substituem completamente o Redux",
        ],
        answer:
          "Permitem reutilizar lógica, facilitam o gerenciamento de estado e evitam componentes de classe",
      },
      {
        question: "Cite duas vantagens do uso do React.js:",
        options: [
          "Não precisa de JavaScript e funciona só com HTML",
          "É um framework completo com roteamento e injeção de dependência",
          "Permite criar interfaces modulares e tem grande comunidade de suporte",
          "Funciona apenas com componentes de classe",
        ],
        answer: "Permite criar interfaces modulares e tem grande comunidade de suporte",
      },
      {
        question: "Descreva os diferentes estágios do ciclo de vida do React.js:",
        options: [
          "Download, instalação, execução",
          "Inicialização, autenticação, logout",
          "Montagem, atualização e desmontagem",
          "Criar, deletar, atualizar",
        ],
        answer: "Montagem, atualização e desmontagem",
      },
      {
        question: "Por que métodos de classe devem ser vinculados à instância?",
        options: [
          "Para aumentar a velocidade do código",
          "Para evitar erros de digitação",
          "Para manter o contexto correto do this em callbacks e eventos",
          "Para garantir compatibilidade com navegadores antigos",
        ],
        answer:
          "Para manter o contexto correto do this em callbacks e eventos",
      },
      {
        question: "O que acontece se você tentar atualizar o estado diretamente?",
        options: [
          "O React atualiza normalmente",
          "O estado é atualizado, mas o componente não re-renderiza",
          "O React não detecta a mudança e não atualiza a interface corretamente",
          "O React lança um erro de sintaxe",
        ],
        answer:
          "O React não detecta a mudança e não atualiza a interface corretamente",
      },
      {
        question: "Hooks substituem componentes de ordem superior (HOC)?",
        options: [
          "Não, Hooks e HOCs são a mesma coisa",
          "Em muitos casos, Hooks podem substituir HOCs ao compartilhar lógica sem alterar hierarquia",
          "Hooks só funcionam em componentes de classe",
          "HOCs são mais recomendados que Hooks sempre",
        ],
        answer:
          "Em muitos casos, Hooks podem substituir HOCs ao compartilhar lógica sem alterar hierarquia",
      },
      {
        question: "Cite uma vantagem do uso do Flux:",
        options: [
          "Permite múltiplas fontes de dados em paralelo",
          "Mantém o fluxo de dados unidirecional para facilitar o controle e depuração",
          "Substitui o uso de React Router",
          "Executa operações em paralelo automaticamente",
        ],
        answer:
          "Mantém o fluxo de dados unidirecional para facilitar o controle e depuração",
      },
      {
        question: "Que método você usaria para lidar com eventos no React?",
        options: [
          "Usar addEventListener no DOM diretamente",
          "Utilizar propriedades JSX como onClick ou onChange com funções manipuladoras",
          "Injetar código JavaScript diretamente no HTML",
          "Usar variáveis globais para armazenar eventos",
        ],
        answer:
          "Utilizar propriedades JSX como onClick ou onChange com funções manipuladoras",
      },
      {
        question: "Em que situação você usaria refs no React?",
        options: [
          "Para modificar o state de um componente diretamente",
          "Para acessar diretamente elementos DOM, como inputs ou controles de terceiros",
          "Para passar props para componentes filhos",
          "Para criar componentes funcionais",
        ],
        answer:
          "Para acessar diretamente elementos DOM, como inputs ou controles de terceiros",
      },
      {
        question: "Por que usar superconstrutores com argumentos props em componentes de classe?",
        options: [
          "Para evitar erros de compilação no JavaScript",
          "Para carregar dados externos antes do render",
          "Para garantir que this.props esteja disponível no construtor",
          "Para melhorar a performance da renderização",
        ],
        answer:
          "Para garantir que this.props esteja disponível no construtor",
      },
      {
        question: "Como você usaria validação em props?",
        options: [
          "Usando funções assíncronas",
          "Usando console.log para conferir valores",
          "Usando PropTypes para definir tipos e obrigatoriedade das props",
          "Validando diretamente no backend",
        ],
        answer:
          "Usando PropTypes para definir tipos e obrigatoriedade das props",
      },
      {
        question:
          "Que método você usaria para adicionar atributos a componentes de maneira condicional?",
        options: [
          "Sempre adiciono todos os atributos sem condições",
          "Usar if-else fora do JSX para decidir o atributo",
          "Usar renderização condicional dentro do JSX, por exemplo: className={isActive ? 'active' : ''}",
          "Criar componentes separados para cada condição",
        ],
        answer:
          "Usar renderização condicional dentro do JSX, por exemplo: className={isActive ? 'active' : ''}",
      },
      {
        question: "Que métodos você usaria para melhorar a renderização lenta em React?",
        options: [
          "Usar mais setTimeouts",
          "Evitar componentes funcionais",
          "React DevTools Profiler, React.memo, useMemo, useCallback e React.lazy com Suspense",
          "Colocar todo o código dentro do constructor",
        ],
        answer:
          "React DevTools Profiler, React.memo, useMemo, useCallback e React.lazy com Suspense",
      },
      {
        question: "Em que situação você usaria useMemo() no React?",
        options: [
          "Para armazenar valores que mudam a todo momento",
          "Para memorizar resultados caros que não precisam ser recalculados em toda renderização",
          "Para alterar props de componentes filhos",
          "Para atualizar o estado global",
        ],
        answer:
          "Para memorizar resultados caros que não precisam ser recalculados em toda renderização",
      },
      {
        question: "Como evitar a vinculação no React?",
        options: [
          "Sempre usar .bind(this) no render",
          "Usar arrow functions em propriedades de classe ou usar componentes funcionais com hooks",
          "Usar funções normais dentro do constructor",
          "Evitar o uso de eventos em React",
        ],
        answer:
          "Usar arrow functions em propriedades de classe ou usar componentes funcionais com hooks",
      },
      {
        question: "O que é um componente de ordem superior (HOC)?",
        options: [
          "Um componente que só funciona em navegadores antigos",
          "Uma função que recebe um componente e retorna outro com lógica extra para reutilização",
          "Um componente que controla o estado global",
          "Um componente que não aceita props",
        ],
        answer:
          "Uma função que recebe um componente e retorna outro com lógica extra para reutilização",
      },
      {
        question: "O que é um componente montado?",
        options: [
          "Um componente que foi deletado da árvore",
          "Um componente que nunca foi renderizado",
          "Um componente que está presente no DOM e já executou componentDidMount ou useEffect",
          "Um componente com estado zerado",
        ],
        answer:
          "Um componente que está presente no DOM e já executou componentDidMount ou useEffect",
      },
      {
        question: "Explique o que é useState:",
        options: [
          "Um método para criar componentes de classe",
          "Um atributo HTML para guardar valores",
          "Um hook que adiciona estado local a componentes funcionais, retornando o estado e função para atualizar",
          "Um método para manipular o DOM",
        ],
        answer:
          "Um hook que adiciona estado local a componentes funcionais, retornando o estado e função para atualizar",
      },
      {
        question: "O que é um evento no React?",
        options: [
          "Uma requisição HTTP enviada ao servidor",
          "Uma abstração dos eventos DOM com tratamento padronizado e suporte cross-browser",
          "Uma variável global",
          "Uma função que não pode ser usada em JSX",
        ],
        answer:
          "Uma abstração dos eventos DOM com tratamento padronizado e suporte cross-browser",
      },
      {
        question: "O que é um componente de classe?",
        options: [
          "Um componente que só usa funções puras",
          "Uma classe que estende React.Component com estado e métodos do ciclo de vida",
          "Um componente escrito em JavaScript puro sem JSX",
          "Um componente que não pode ter estado",
        ],
        answer:
          "Uma classe que estende React.Component com estado e métodos do ciclo de vida",
      },
      {
        question: "O que é um componente?",
        options: [
          "Uma biblioteca externa",
          "Uma unidade reutilizável que retorna elementos React para montar a interface",
          "Um arquivo CSS",
          "Um método de chamada de API",
        ],
        answer:
          "Uma unidade reutilizável que retorna elementos React para montar a interface",
      },
      {
        question:
          "Qual a diferença entre componentes de classe e funcionais?",
        options: [
          "Componentes de classe são mais leves que funcionais",
          "Componentes funcionais são funções simples que usam hooks; classes têm estado e ciclo de vida explícitos",
          "Componentes funcionais não podem ter props",
          "Componentes de classe não podem ser reutilizados",
        ],
        answer:
          "Componentes funcionais são funções simples que usam hooks; classes têm estado e ciclo de vida explícitos",
      },
      {
        question: "O que é um objeto state?",
        options: [
          "Um objeto imutável passado entre componentes",
          "Um objeto que contém dados mutáveis internos de um componente, gerenciados via setState ou useState",
          "Uma variável global",
          "Um arquivo JSON com dados da API",
        ],
        answer:
          "Um objeto que contém dados mutáveis internos de um componente, gerenciados via setState ou useState",
      },
      {
        question: "O que é um objeto props?",
        options: [
          "Um objeto mutável que o componente pode alterar",
          "Um objeto imutável passado do componente pai, contendo dados para configurar o filho",
          "Um tipo especial de hook",
          "Um método do React",
        ],
        answer:
          "Um objeto imutável passado do componente pai, contendo dados para configurar o filho",
      },
      {
        question: "Qual é a diferença entre objetos state e props?",
        options: [
          "Ambos são imutáveis",
          "Ambos são passados por parâmetro",
          "State é mutável e interno; props são imutáveis e passadas pelo pai",
          "Props são globais e state locais",
        ],
        answer:
          "State é mutável e interno; props são imutáveis e passadas pelo pai",
      },
      {
        question:
          "Cite uma diferença arquitetônica entre React e Angular:",
        options: [
          "Ambos são frameworks completos com roteamento",
          "React é uma biblioteca focada na UI com fluxo unidirecional; Angular é um framework completo com injeção de dependência e two-way binding",
          "React não usa JavaScript",
          "Angular é apenas para backend",
        ],
        answer:
          "React é uma biblioteca focada na UI com fluxo unidirecional; Angular é um framework completo com injeção de dependência e two-way binding",
      },
      {
        question: "O que é um componente controlado?",
        options: [
          "Componente que não gerencia estado",
          "Componente que gerencia seus inputs via state e eventos, mantendo o React como fonte da verdade",
          "Componente que só funciona em navegadores modernos",
          "Componente que depende de refs para inputs",
        ],
        answer:
          "Componente que gerencia seus inputs via state e eventos, mantendo o React como fonte da verdade",
      },
      {
        question: "O que é um componente não controlado?",
        options: [
          "Componente que sempre atualiza o state",
          "Componente que acessa valores dos inputs diretamente via refs, sem gerenciar estado React",
          "Componente que não tem props",
          "Componente que não renderiza",
        ],
        answer:
          "Componente que acessa valores dos inputs diretamente via refs, sem gerenciar estado React",
      },
      {
        question:
          "Qual a diferença entre componentes controlados e não controlados?",
        options: [
          "Controlados usam refs, não controlados usam state",
          "Controlados têm estado React para inputs; não controlados acessam DOM via refs",
          "Não há diferença",
          "Controlados não aceitam props",
        ],
        answer:
          "Controlados têm estado React para inputs; não controlados acessam DOM via refs",
      },
      {
        question: "O que são React Hooks?",
        options: [
          "Componentes que substituem JSX",
          "Funções que permitem usar estado e ciclo de vida em componentes funcionais, sem classes",
          "Funções para manipular o DOM diretamente",
          "Novas APIs do navegador",
        ],
        answer:
          "Funções que permitem usar estado e ciclo de vida em componentes funcionais, sem classes",
      },
      {
        question: "O que significa o operador de três pontos (...) no React?",
        options: [
          "Comentário de código",
          "Spread operator para espalhar props ou elementos de array em JSX ou objetos",
          "Função para criar componentes",
          "Método para atualizar estado",
        ],
        answer:
          "Spread operator para espalhar props ou elementos de array em JSX ou objetos",
      },
      {
        question: "O que são gerenciadores de pacotes no React.js?",
        options: [
          "Editores de código para React",
          "Ferramentas como npm e Yarn para instalar e gerenciar dependências de projetos",
          "Bibliotecas de componentes UI",
          "Ferramentas para compilar CSS",
        ],
        answer:
          "Ferramentas como npm e Yarn para instalar e gerenciar dependências de projetos",
      },
      {
        question: "O que é prop drilling?",
        options: [
          "Passar dados diretamente pelo backend",
          "Passar props por vários níveis de componentes intermediários para chegar aos filhos",
          "Técnica para otimizar imagens",
          "Usar hooks para gerenciar estado",
        ],
        answer:
          "Passar props por vários níveis de componentes intermediários para chegar aos filhos",
      },
      {
        question: "O que é StrictMode no React?",
        options: [
          "Um modo para otimizar produção",
          "Um wrapper para ativar verificações e avisos adicionais durante desenvolvimento",
          "Um modo para desativar componentes",
          "Uma biblioteca para estilizar componentes",
        ],
        answer:
          "Um wrapper para ativar verificações e avisos adicionais durante desenvolvimento",
      },
      {
        question: "O que é Shadow DOM?",
        options: [
          "Técnica para ocultar código JavaScript",
          "Parte encapsulada da árvore DOM isolada dentro de Web Components, protegendo estilos e markup",
          "Outra forma de DOM virtual",
          "Biblioteca para anima",
        ],
        answer:
          "Parte encapsulada da árvore DOM isolada dentro de Web Components, protegendo estilos e markup",
      },
    ],
  },
  {
    category: "Juninho",
    questions: [
      {
        question: "Qual é a sua linguagem de programação preferida e por quê?",
        options: [
          "C, porque é rápido, embora difícil",
          "JavaScript, por sua versatilidade no front-end e back-end e ampla comunidade de suporte",
          "Python, porque é fácil, mesmo que não funcione bem na web",
          "Java, porque é usado em grandes corporações",
        ],
        answer:
          "JavaScript, por sua versatilidade no front-end e back-end e ampla comunidade de suporte",
      },
      {
        question: "Como você soluciona problemas em seu código?",
        options: [
          "Tiro dúvidas com colegas sempre",
          "Testo e depois reescrevo tudo",
          "Isolo o problema com logs, uso ferramentas de depuração e consulto a documentação ou comunidade",
          "Espero que o erro pare por conta própria",
        ],
        answer:
          "Isolo o problema com logs, uso ferramentas de depuração e consulto a documentação ou comunidade",
      },
      {
        question: "Como você explicaria APIs para alguém não técnico?",
        options: [
          "São linhas de código que fazem o sistema funcionar",
          "Um tipo de banco de dados que envia dados",
          "APIs são como garçons: recebem pedidos (requisições) e trazem o que foi pedido (resp" +
          "ostas) de outros sistemas",
        ],
        answer:
          "APIs são como garçons: recebem pedidos (requisições) e trazem o que foi pedido (resp" +
          "ostas) de outros sistemas",
      },
      {
        question:
          "Você acha que poderíamos melhorar nossa estrutura CSS atual? Como?",
        options: [
          "Não, CSS sempre funciona",
          "Usando apenas estilos inline",
          "Sim, com uma abordagem como CSS modular, pré-processadores como SASS, ou frameworks mais flexíveis como Tailwind ou Bootstrap, visando organização e escalabilidade",
          "Trocando tudo por JavaScript",
        ],
        answer:
          "Sim, com uma abordagem como CSS modular, pré-processadores como SASS, ou frameworks mais flexíveis como Tailwind ou Bootstrap, visando organização e escalabilidade",
      },
      {
        question: "Como você se certifica de que seu código é de alta qualidade?",
        options: [
          "Escrevo rápido e corrijo depois",
          "Faço testes apenas quando há erros",
          "Sigo padrões como DRY e KISS, reviso o código, escrevo testes e uso ferramentas de lint e formatação automática",
          "Copio código de fontes confiáveis",
        ],
        answer:
          "Sigo padrões como DRY e KISS, reviso o código, escrevo testes e uso ferramentas de lint e formatação automática",
      },
      {
        question: "O que é AJAX? Quando você usou por último e como?",
        options: [
          "Um novo framework para front-end",
          "Técnica JavaScript que permite enviar e receber dados do servidor sem recarregar a página; usei recentemente em um formulário para envio assíncrono",
          "Uma linguagem de programação",
          "Uma função do CSS",
        ],
        answer:
          "Técnica JavaScript que permite enviar e receber dados do servidor sem recarregar a página; usei recentemente em um formulário para envio assíncrono",
      },
      {
        question: "Quais são os diferentes tipos de dados em JavaScript?",
        options: [
          "Arrays, maps, e funções",
          "Primitivos: string, number, boolean, null, undefined; e tipos complexos: objetos e arrays",
          "Boolean, XML, e JSON",
          "HTML, DOM e eventos",
        ],
        answer:
          "Primitivos: string, number, boolean, null, undefined; e tipos complexos: objetos e arrays",
      },
      {
        question: "Qual controle de código-fonte você usa e por quê?",
        options: [
          "SVN, pois é mais antigo",
          "Git, por permitir versionamento distribuído, controle de branches, e integração com plataformas como GitHub",
          "Dropbox",
          "Arquivos ZIP por e-mail",
        ],
        answer:
          "Git, por permitir versionamento distribuído, controle de branches, e integração com plataformas como GitHub",
      },
      {
        question: "O que é um sistema de grid em CSS?",
        options: [
          "Uma tabela de layout com divs flutuantes",
          "Um sistema bidimensional que permite posicionar elementos em linhas e colunas de forma responsiva",
          "Um framework de JavaScript",
          "Uma maneira de duplicar estilos",
        ],
        answer:
          "Um sistema bidimensional que permite posicionar elementos em linhas e colunas de forma responsiva",
      },
      {
        question: "Qual IDE você usa e por quê?",
        options: [
          "Notepad, por ser leve",
          "Eclipse, mesmo que não seja feito para web",
          "VS Code, pela velocidade, extensões, depuração integrada e suporte a múltiplas linguagens",
          "Nenhuma, prefiro editar direto no navegador",
        ],
        answer:
          "VS Code, pela velocidade, extensões, depuração integrada e suporte a múltiplas linguagens",
      },
      {
        question: "Como você organiza assets e módulos de classe?",
        options: [
          "Coloco tudo em uma pasta só",
          "Sigo uma estrutura de pastas clara por funcionalidade (ex: components, assets, services) e uso convenções de nomenclatura consistentes",
          "Deixo que o framework organize",
          "Mantenho o código todo em um único arquivo",
        ],
        answer:
          "Sigo uma estrutura de pastas clara por funcionalidade (ex: components, assets, services) e uso convenções de nomenclatura consistentes",
      },
      {
        question: "Quais são as vantagens do Git em aplicativos web?",
        options: [
          "É visual e fácil de usar",
          "Permite backup automático",
          "Versionamento eficiente, trabalho colaborativo com branches e merge, e rastreamento de mudanças",
          "Substitui a necessidade de banco de dados",
        ],
        answer:
          "Versionamento eficiente, trabalho colaborativo com branches e merge, e rastreamento de mudanças",
      },
      {
        question: "O que você sabe sobre bancos de dados relacionais?",
        options: [
          "São usados apenas para grandes empresas",
          "Organizam dados em tabelas com relações entre elas; uso SQL para consultar, inserir, atualizar e remover dados",
          "São obsoletos com a chegada do MongoDB",
          "Funcionam apenas com PHP",
        ],
        answer:
          "Organizam dados em tabelas com relações entre elas; uso SQL para consultar, inserir, atualizar e remover dados",
      },
      {
        question: "Como você configura seu fluxo de trabalho para projetos web?",
        options: [
          "Escrevo o código direto no servidor",
          "Começo com planejamento, uso controle de versão (Git), separo tarefas, implemento em ambiente local, testo e depois publico",
          "Faço tudo ao mesmo tempo",
          "Copio projetos antigos e adapto",
        ],
        answer:
          "Começo com planejamento, uso controle de versão (Git), separo tarefas, implemento em ambiente local, testo e depois publico",
      },
      {
        question: "Quais são as vantagens do HTML5 sobre o HTML antigo?",
        options: [
          "Tem mais comentários no código",
          "Suporte nativo a elementos multimídia, melhor semântica com novas tags, APIs nativas como localStorage e geolocalização",
          "HTML5 é mais bonito visualmente",
          "HTML5 é compatível apenas com navegadores modernos",
        ],
        answer:
          "Suporte nativo a elementos multimídia, melhor semântica com novas tags, APIs nativas como localStorage e geolocalização",
      },
    ],
  },
  {
    category: "git",
    questions: [
      {
        question: "O que são sistemas de controle de versão?",
        options: [
          "Ferramentas para criar backups manuais dos arquivos",
          "Sistemas que rastreiam alterações no código, facilitando o trabalho colaborativo",
          "Serviços de hospedagem de sites",
          "Aplicativos para compilar código automaticamente",
        ],
        answer:
          "Sistemas que rastreiam alterações no código, facilitando o trabalho colaborativo",
      },
      {
        question:
          "Qual a principal diferença entre sistemas de controle de versão centralizados e distribuídos?",
        options: [
          "Em sistemas distribuídos, todos usam o mesmo computador",
          "Centralizados exigem conexão contínua com a internet",
          "Em sistemas distribuídos, cada desenvolvedor tem uma cópia completa do repositório",
          "Distribuídos não permitem histórico de mudanças",
        ],
        answer:
          "Em sistemas distribuídos, cada desenvolvedor tem uma cópia completa do repositório",
      },
      {
        question: "Para que serve o comando git push?",
        options: [
          "Baixar o código mais recente do repositório remoto",
          "Enviar os commits locais para o repositório remoto",
          "Compartilhar o código por e-mail",
          "Criar um novo branch remoto",
        ],
        answer: "Enviar os commits locais para o repositório remoto",
      },
      {
        question: "Para que serve o comando git pull?",
        options: [
          "Apagar o histórico de commits",
          "Desfazer alterações locais",
          "Baixar e mesclar mudanças do repositório remoto com o local",
          "Enviar código para o servidor",
        ],
        answer:
          "Baixar e mesclar mudanças do repositório remoto com o local",
      },
      {
        question: "Qual a função do comando git config?",
        options: [
          "Criar um novo branch",
          "Resetar todas as configurações do Git",
          "Definir configurações como nome e e-mail do usuário",
          "Configurar permissões de acesso remoto",
        ],
        answer: "Definir configurações como nome e e-mail do usuário",
      },
      {
        question: "Para que serve o comando git init?",
        options: [
          "Inicializar um novo repositório Git",
          "Apagar todos os commits anteriores",
          "Sincronizar com o GitHub",
          "Verificar conflitos de merge",
        ],
        answer: "Inicializar um novo repositório Git",
      },
      {
        question: "O que o comando git add faz?",
        options: [
          "Salva o commit no repositório remoto",
          "Adiciona arquivos ao staging area para commit",
          "Baixa arquivos do repositório",
          "Remove arquivos do Git",
        ],
        answer: "Adiciona arquivos ao staging area para commit",
      },
      {
        question: "Para que serve git diff?",
        options: [
          "Mostrar os branches remotos",
          "Apagar arquivos não rastreados",
          "Exibir as diferenças entre versões de arquivos",
          "Sincronizar branches",
        ],
        answer: "Exibir as diferenças entre versões de arquivos",
      },
      {
        question: "Qual o propósito do git commit?",
        options: [
          "Enviar os arquivos para o GitHub",
          "Salvar alterações com uma mensagem no histórico de versões",
          "Criar um novo branch",
          "Atualizar o repositório local com mudanças remotas",
        ],
        answer:
          "Salvar alterações com uma mensagem no histórico de versões",
      },
      {
        question: "O que o comando git reset HEAD~1 faz?",
        options: [
          "Remove o último commit, mantendo as alterações",
          "Deleta permanentemente o branch atual",
          "Sincroniza com o repositório remoto",
          "Atualiza as dependências do projeto",
        ],
        answer: "Remove o último commit, mantendo as alterações",
      },
      {
        question: "Qual a utilidade do git status?",
        options: [
          "Verificar o uso de memória do repositório",
          "Exibir o estado atual dos arquivos: modificados, staged e não rastreados",
          "Mostrar o histórico de todos os commits",
          "Apontar o branch padrão",
        ],
        answer:
          "Exibir o estado atual dos arquivos: modificados, staged e não rastreados",
      },
      {
        question: "O que faz o comando git merge?",
        options: [
          "Cria um novo branch",
          "Baixa atualizações do repositório remoto",
          "Mescla um branch com o branch atual",
          "Reescreve o histórico de todos os commits",
        ],
        answer: "Mescla um branch com o branch atual",
      },
      {
        question: "Qual a função de git fetch?",
        options: [
          "Faz merge automático do repositório remoto",
          "Baixa atualizações do repositório remoto sem aplicar no código local",
          "Salva alterações locais",
          "Inicializa um repositório vazio",
        ],
        answer:
          "Baixa atualizações do repositório remoto sem aplicar no código local",
      },
      {
        question: "Diferença entre git pull e git fetch",
        options: [
          "Ambos fazem a mesma coisa",
          "git pull busca e mescla, git fetch apenas busca",
          "git pull é usado localmente, git fetch remotamente",
          "git fetch remove branches desatualizados",
        ],
        answer: "git pull busca e mescla, git fetch apenas busca",
      },
      {
        question: "O que é um conflito de merge no Git?",
        options: [
          "Erro de permissão no servidor remoto",
          "Quando o Git não consegue mesclar dois arquivos modificados de forma diferente",
          "Problema ao clonar um repositório",
          "Falha ao fazer push",
        ],
        answer:
          "Quando o Git não consegue mesclar dois arquivos modificados de forma diferente",
      },
      {
        question: "Como resolver um conflito de merge?",
        options: [
          "Apagar os arquivos em conflito",
          "Editar manualmente, marcar como resolvido e fazer um commit",
          "Usar git clone novamente",
          "Reiniciar o projeto do zero",
        ],
        answer:
          "Editar manualmente, marcar como resolvido e fazer um commit",
      },
      {
        question: "O que faz o comando git stash?",
        options: [
          "Faz backup automático",
          "Salva temporariamente alterações não commitadas",
          "Cria uma nova branch escondida",
          "Desfaz commits antigos",
        ],
        answer: "Salva temporariamente alterações não commitadas",
      },
      {
        question:
          "Qual a diferença entre git merge e git rebase?",
        options: [
          "merge é local, rebase é remoto",
          "merge preserva o histórico original com múltiplos commits; rebase reescreve o histórico de forma linear",
          "Ambos têm o mesmo efeito no histórico",
          "merge apaga branches antigos",
        ],
        answer:
          "merge preserva o histórico original com múltiplos commits; rebase reescreve o histórico de forma linear",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Como funciona uma Promise?",
        options: [
          "São ações futuras executadas de forma assíncrona em nossos códigos. Elas podem ser resolvidas ou rejeitadas.",
          "Promises são usadas apenas para operações síncronas no JavaScript.",
          "Uma Promise sempre retorna sucesso, nunca erro.",
          "Promises não têm estados e sempre são resolvidas imediatamente.",
        ],
        answer: "São ações futuras executadas de forma assíncrona em nossos códigos. Elas podem ser resolvidas ou rejeitadas.",
      },
      {
        question: "Qual a diferença de Promise para Async Await?",
        options: [
          "Promise usa .then(), já async/await torna o código mais legível e sequencial.",
          "Async/await é mais antigo que Promise e menos usado hoje em dia.",
          "Promises não funcionam com async/await.",
          "Async/await remove a necessidade de tratar erros com try/catch.",
        ],
        answer: "Promise usa .then(), já async/await torna o código mais legível e sequencial.",
      },
      {
        question: "O que é uma Closure?",
        options: [
          "É quando uma função guarda o escopo onde foi criada, mantendo acesso às variáveis mesmo após ser executada.",
          "É uma função que só pode ser executada uma vez.",
          "Closure é uma estrutura de repetição especial no JavaScript.",
          "Closure é uma variável que fica global por padrão.",
        ],
        answer: "É quando uma função guarda o escopo onde foi criada, mantendo acesso às variáveis mesmo após ser executada.",
      },
      {
        question: "Qual a diferença entre um for e um map?",
        options: [
          "for é um loop tradicional, map transforma os itens de um array e retorna um novo.",
          "Ambos são usados para modificar o DOM diretamente.",
          "O map altera o array original, enquanto o for não.",
          "O for só funciona com objetos, e o map só com strings.",
        ],
        answer: "for é um loop tradicional, map transforma os itens de um array e retorna um novo.",
      },
      {
        question: "Como o método reduce funciona?",
        options: [
          "Ele acumula os valores de um array usando uma função, retornando um único resultado.",
          "Ele serve para remover itens duplicados de uma lista.",
          "Ele divide o array em várias partes iguais.",
          "O reduce serve apenas para converter arrays em strings.",
        ],
        answer: "Ele acumula os valores de um array usando uma função, retornando um único resultado.",
      },
      {
        question: "Qual a feature que você mais gosta do ES7?",
        options: [
          "includes para verificar se um elemento está presente em um array.",
          "print() para imprimir no console.",
          "awaitFor() para esperar funções síncronas.",
          "loopOf() para substituir for e while.",
        ],
        answer: "includes para verificar se um elemento está presente em um array.",
      },
      {
        question: "Como o Webpack funciona?",
        options: [
          "Agrupa todos os arquivos em pacotes otimizados para uso no navegador.",
          "Apenas estiliza o site com CSS automaticamente.",
          "Funciona apenas como servidor backend.",
          "Substitui a função de um banco de dados em projetos web.",
        ],
        answer: "Agrupa todos os arquivos em pacotes otimizados para uso no navegador.",
      },
      {
        question: "Me explica a pirâmide de testes.",
        options: [
          "Testes unitários na base, depois integração, e no topo, testes end-to-end.",
          "Testes end-to-end devem ser a base da pirâmide.",
          "Apenas testes de integração são necessários.",
          "Testes unitários são os mais caros e devem ser evitados.",
        ],
        answer: "Testes unitários na base, depois integração, e no topo, testes end-to-end.",
      },
      {
        question: "Ferramentas:",
        options: [
          "Unitários: Jest, Mocha. Integração: Cypress, Protractor. E2E: Cypress, Selenium.",
          "Unitários: Selenium. Integração: Babel. E2E: Webpack.",
          "Unitários: Puppeteer. Integração: ESLint. E2E: Jest.",
          "Unitários: PostCSS. Integração: Vite. E2E: Babel.",
        ],
        answer: "Unitários: Jest, Mocha. Integração: Cypress, Protractor. E2E: Cypress, Selenium.",
      },
      {
        question: "Por quê code splitting é tão importante?",
        options: [
          "Porque melhora o tempo de carregamento dividindo o código em partes menores.",
          "Porque junta todos os arquivos em um único gigante.",
          "Porque faz o navegador renderizar HTML mais rápido.",
          "Porque desativa a cache dos navegadores automaticamente.",
        ],
        answer: "Porque melhora o tempo de carregamento dividindo o código em partes menores.",
      },
      {
        question: "O que é uma função pura?",
        options: [
          "Sempre retorna o mesmo resultado para as mesmas entradas e não tem efeitos colaterais.",
          "É uma função que sempre altera variáveis globais.",
          "São funções que podem acessar o DOM diretamente.",
          "São aquelas que dependem do tempo ou de valores aleatórios para funcionar.",
        ],
        answer: "Sempre retorna o mesmo resultado para as mesmas entradas e não tem efeitos colaterais.",
      },
      {
        question: "O que é Babel?",
        options: [
          "Um transpilador que converte código moderno para versões mais antigas de JavaScript.",
          "Um framework que serve como servidor backend.",
          "Uma biblioteca de CSS para animações.",
          "Um banco de dados para armazenar scripts JavaScript.",
        ],
        answer: "Um transpilador que converte código moderno para versões mais antigas de JavaScript.",
      },
      {
        question: "Como o Promise.race funciona?",
        options: [
          "Retorna a primeira Promise que for resolvida ou rejeitada.",
          "Executa todas as Promises em ordem e retorna a última.",
          "Espera todas as Promises terminarem e ignora os erros.",
          "Retorna uma Promise somente se todas forem rejeitadas.",
        ],
        answer: "Retorna a primeira Promise que for resolvida ou rejeitada.",
      },
      {
        question: "Por que você gosta de TypeScript? Quais são as vantagens?",
        options: [
          "Torna o código mais seguro, legível e ajuda com tipagem estática.",
          "É apenas uma biblioteca para facilitar estilos em CSS.",
          "Substitui o JavaScript completamente em qualquer projeto.",
          "É usado apenas em projetos de back-end, não front-end.",
        ],
        answer: "Torna o código mais seguro, legível e ajuda com tipagem estática.",
      },
    ],
  },
];

export default data;
