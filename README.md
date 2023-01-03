# 👨‍🍳 Waiter App

![GitHub repo size](https://img.shields.io/github/repo-size/LucasAndrade912/waiter-app?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/LucasAndrade912/waiter-app?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasAndrade912/waiter-app?style=for-the-badge)

> Projeto feito durante um evento online do [Mateus Silva](https://www.instagram.com/imateus.silva/), chamado O Poder do Javascript. O projeto consiste em um app mobile e web para gerenciar pedidos de um restaurante.

## 🖥️ Versão Web

O dashboard da cozinha controla quais pedidos estão sendo preparados e quais foram finalizados.

<img src="layouts/web.png" alt="Web Layout" />

## 📱 Versão Mobile

A versão mobile é responsável por pegar os pedidos do cliente e enviar as informações para o dashboard da cozinha.

<span><img src="layouts/mobile1.jpg" alt="Mobile Layout 1" width="250" /></span>
<span><img src="layouts/mobile2.jpg" alt="Mobile Layout 2" width="250" /></span>

## 🛠️ Techs

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

## 🛸 Instalação e Execução do projeto

Para clonar este repositório utilize o comando:

```bash
git clone https://github.com/LucasAndrade912/waiter-app.git
```

Em seguida instale todas as dependências dos projetos: web, api e app

```bash
npm install

# or

yarn install
```

É necessário ter o MongoDB instalado em sua máquina, ou você pode utilizar uma imagem docker para roda-lo:

```bash
docker run -d --name nome-do-container -p 27017:27017 mongo
```

Após as instalações e execução do MongoDB, rode:
- `npm start` ou `yarn start` nas pastas __api__ e __app__
- `npm run dev` ou `yarn dev` na pasta __web__

Para visualizar o App Mobile é necessário ter o [Expo](https://expo.dev/) instalado no seu celular. Tendo ele instalado escaneie o QRCode que será exibido no terminal ao iniciar roda o comando para inicar o projeto.
