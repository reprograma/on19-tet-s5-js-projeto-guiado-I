// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");


  console.table(database)
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  const encotraroproduto = database.find(x => x.id == produtoIdSelecionado)
  console.table("Produto id selecionado: " + encotraroproduto);
  console.log("Deseja ver outro produto? ")
  console.clear();

