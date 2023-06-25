# Notas

<div align="center">
    <p>
        <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mariaseverino/notas?color=2596be&logoColor=2596be&style=for-the-badge">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mariaseverino/notas?color=2596be&logoColor=2596be&style=for-the-badge">
    </p>
</div>

<p align="center">
    <a href="#">Sobre</a> •
    <a href="#">Tecnologias</a> •
    <a href="#">Estrutura de diretórios</a> •
    <a href="#">Como executar o projeto</a>

</p>

## ✨ Sobre

Aplicação de anotações, onde é possivel adicionar, editar e deletar uma anotação.

## ⚡️ Tecnologias

- Node
- Angular
- Json Server

## 🗃️ Estrutura de diretórios

```
├── src
│   └── app
│       ├── componentes
│       ├── data
│       ├── entities
│       ├── pages
│       ├── repositories
│       └── services
```

## 🤔 Como executar o projeto

### 🚨 Pré requisito

Antes de começar, você vai precisar ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

```bash
# Clone este repositório
$ git clone https://github.com/mariaseverino/notas.git

# Acesse a pasta do projeto
$ cd notas

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# Execute a api
$ json-server --watch src/app/data/db.json
```
