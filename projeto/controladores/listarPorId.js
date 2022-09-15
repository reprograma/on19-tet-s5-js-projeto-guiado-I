// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  const ProdEncontrado = database.find(item => item.id == produtoIdSelecionado);
  console.log("Produto id selecionado: " + produtoIdSelecionado);
  console.table(ProdEncontrado);

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
