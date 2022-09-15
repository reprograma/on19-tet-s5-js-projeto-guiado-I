// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos
console.clear();
const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  const ProdutoEncontrado =
  database.find(Prod => Prod.id == produtoIdSelecionado)
  console.log("Produto selecionado: " + produtoIdSelecionado);
  console.table(ProdutoEncontrado)
  console.log("Dê enter para voltar");

  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}