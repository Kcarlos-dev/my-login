# 🔐 My Login

[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen?style=for-the-badge&logo=jest)](#-executando-os-testes)

Uma aplicação de login desenvolvida para entender o processo de **Test-Driven Development (TDD)**.

---

## 📄 Descrição

Este projeto consiste em uma aplicação de login simples, implementada em **JavaScript**, com o objetivo de demonstrar a prática de **TDD**.  
Através deste exemplo, é possível acompanhar o ciclo de desenvolvimento orientado por testes, onde os testes são escritos **antes da implementação do código**.

---

## 🚀 Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/Kcarlos-dev/my-login.git
cd my-login
npm install
```

---

## 🛢️ Configuração do Banco de Dados

Este projeto utiliza [MongoDB](https://www.mongodb.com/) como banco de dados, com [Mongoose](https://mongoosejs.com/) para modelagem de objetos.

### 🔧 Opção 1: MongoDB Local

1. Instale o MongoDB em sua máquina, se ainda não o tiver. Você pode baixá-lo em [mongodb.com](https://www.mongodb.com/try/download/community).
2. Inicie o servidor MongoDB executando `mongod` no terminal.
3. A aplicação se conectará ao banco de dados usando a string padrão `mongodb://localhost:27017/mydatabase`.  
   Ajuste a string no código, se necessário.

### ☁️ Opção 2: MongoDB Atlas

1. Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crie um cluster e obtenha a string de conexão.
3. Configure a string de conexão na aplicação, preferencialmente via variáveis de ambiente.

---

## ▶️ Uso

Para iniciar a aplicação, execute:

```bash
node src/app.js
```

---

## 🧪 Executando os Testes

Para rodar os testes, use:

```bash
npm test
```

---

## 🧠 Abordagem TDD

Este projeto segue a metodologia **TDD**, que envolve os seguintes passos:

1. **Escrever um teste que falha**  
   Definir um teste para uma nova funcionalidade ou melhoria.

2. **Escrever o código mínimo para passar no teste**  
   Implementar a funcionalidade de forma a satisfazer o teste.

3. **Refatorar o código**  
   Melhorar a estrutura do código sem alterar seu comportamento, garantindo que os testes continuem passando.

📁 Os testes estão no diretório `tests/`  
📁 O código fonte está em `src/`

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir **issues** ou enviar um **pull request**.

---

## 📜 Licença

Pode usar 🤙

---

> Feito com 💻 e café por [@Kcarlos-dev](https://github.com/Kcarlos-dev)