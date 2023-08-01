![logo_growdev](https://github.com/cadonaenrike/GrowTwitter/assets/95323804/6d0ede58-ee26-44d8-95f7-76011819b04f)

<H1> GrowTwitter <H5>Rede Social Estilo Twitter com Programação Orientada a Objetos</H5></H1>


## Descrição

GrowTwitter é uma aplicação de rede social, similar ao Twitter, desenvolvida em Typescript com base em Programação Orientada a Objetos (POO). O projeto foi criado com o objetivo de praticar e aplicar os conceitos avançados de POO, utilizando classes e interfaces.

## Funcionalidades

- Cadastro de usuários
- Cadastro de tweets por usuários
- Mecanismo de seguidores entre usuários
- Likes e replies em tweets

## Arquitetura

```
├── src/
│   ├── controllers/
│   │   ├── FeedController.ts
│   │   ├── TweetsController.ts
│   │   └── UserController.ts
│   ├── data/
│   │   ├── tweets.ts
│   │   └── users.ts
│   ├── middlewares/
│   │   └── userMiddlewares.ts
│   ├── models/
│   │   ├── Like.ts
│   │   ├── Reply.ts
│   │   ├── Tweet.ts
│   │   └── User.ts
│   ├── types/
│   │   └── typesTweet.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

1. Clone o repositório para sua máquina local:

```
git clone https://github.com/seu-usuario/grow-twitter.git
```

2. Instale as dependências do projeto:

```
npm install
```

3. Execute a aplicação:

```
npm start
```

## Uso

Ao executar a aplicação, os tweets e interações serão apresentados no console, conforme definido na estrutura do projeto.

## Testes

Para executar os testes automatizados do projeto, utilize o seguinte comando:

```
npm test
```

## Contribuição

Contribuições são bem-vindas! Se você identificou alguma melhoria ou correção, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Sinta-se à vontade para atualizar e personalizar o README de acordo com as necessidades do seu projeto. Lembre-se de incluir informações relevantes e detalhadas sobre o projeto e sua arquitetura para que outros desenvolvedores possam utilizá-lo facilmente. Boa sorte com o GrowTwitter! 🚀✨
