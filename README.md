# ONG Nova Chance

Projeto web desenvolvido para a ONG Nova Chance com o objetivo de apresentar suas ações sociais, campanhas de doação, oportunidades de voluntariado e permitir o cadastro de participantes.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- HTML5 para a estrutura das páginas;
- CSS3 para estilização e responsividade;
- JavaScript para interatividade e navegação SPA;
- History API para controle das rotas no navegador;
- LocalStorage para armazenamento local dos cadastros;
- Git e GitHub para versionamento e gerenciamento do projeto.

## Funcionalidades

O site possui navegação no formato SPA (Single Page Application), permitindo a troca de conteúdo sem recarregar completamente a página.

Entre as principais funcionalidades estão:

- Página inicial da ONG;
- Apresentação da organização;
- Campanhas de doação;
- Área de voluntariado;
- Página de contato;
- Formulário de cadastro;
- Validação de dados com JavaScript;
- Armazenamento dos cadastros no LocalStorage;
- Navegação responsiva para dispositivos móveis.

## Estrutura do projeto

```text
atividade prática/
├── README.md
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
└── js/
    ├── app.js
    ├── storage.js
    ├── templates.js
    └── validacao.js
```

## Execução local

O projeto não necessita da instalação de dependências externas.

Para executar localmente:

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `html/index.html` utilizando o Live Server.
4. O projeto será executado no navegador através de um servidor local.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão e segue uma organização baseada no GitFlow.

- `main`: versão estável do projeto;
- `develop`: branch de desenvolvimento;
- `feature/*`: branches destinadas ao desenvolvimento de funcionalidades e melhorias.

As mensagens de commit utilizam o padrão Conventional Commits para facilitar a organização e leitura do histórico do projeto.

## Acessibilidade

O projeto passa por melhorias de acessibilidade com base nas diretrizes WCAG 2.1 nível AA, buscando melhorar a navegação e a utilização do site por diferentes usuários.

## Autor

Daniel Nogueira