<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 19 - Todas em Tech  | Back-end | Semana 4 | 2022 | Professora Giu

## Instruções

Antes de começar, vamos organizar nosso setup.

* Fork esse repositório
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

## Resumo

Revisitaremos:

### 1) Primeiro projeto

Veremos o que precisaremos desenvolver no nosso primeiro projeto.

### 2) Revisão focada

* Estruturas de dados e Operadores
* Funções
* Estrutura condicional
* Estrutura de repetição
* Loops e iterações

## Conteúdo

### Projeto controle de estoque

#### Como criar o projeto

Siga os passos abaixo:

| Passo | Comando |
| - | - |
| Inicie um projeto node | `npm init` |
| Instale a dependência | `npm i readline-sync` |
| No package.json, adicione em scripts   | `"ControleEstoque": "node app.js"` |

#### Sobre o projeto

Este será um projeto de programa de linha de comando que
fará o controle de estoque de produtos de uma loja.

O banco de dados será ***apenas em memória***, ou seja, as informações ***não persistirão*** após o encerramento do sistema.

Deverá ser implementado um CRUD (create, read, update, delete) para o bando de dados proposto.

Deverá ser possível: (requisitos do sistema)

* inserir novos produtos (create)
* listar todos os produtos (read)
* listar os detalhes de um produto (read)
* alterar um produto (update)
* aplicar um aumento porcentual em todos os preços(update)
* excluir um produto (delete)

#### Estrutura do projeto

```
 📁 projeto
   |- 📁 controladores
   |     |- 📄 alterarPorId.js
   |     |- 📄 alterarPrecos.js
   |     |- 📄 deletarProduto.js
   |     |- 📄 inserirProduto.js
   |     |- 📄 listarPorId.js
   |     |- 📄 listarTudo.js
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 package-lock.json
   |- 📄 package.json
```

#### Enviando o projeto

| Passo | Comando |
| - | - |
| 1 - Vá até a pasta correta | `\on19-tet-s5-js-projeto-guiado-I\projeto` |
| 2 - Adicione os arquivos alterados   | `git add .` |
| 3 - Faça o commit  | `git commit -m 'diga o que fez'` |
| 4- Suba para seu repositório   | `git push -u origin main` |
| Caso faça novas alterações, repita 1,2,3 e dê  | `git push` |

Finalmente: Faça o Pull Request!

## Links Úteis

* [Documentação Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [JEP: explorador com exemplos](https://jep.vercel.app/)

## Links da prof

* [Todos os Links](https://giuzambot.bio.link/)
* [LinkedIn](https://www.linkedin.com/in/giuzambot/)
* [GitHub](https://github.com/giuzambot)

<center>

Desenvolvido com :purple_heart:

</center>
