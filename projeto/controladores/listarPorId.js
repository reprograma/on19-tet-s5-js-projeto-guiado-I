// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Digite o ID do produto que deseja visualizar.");
  const produtoIdSelecionado = readline.question();
  console.log("ID do produto selecionado: " + produtoIdSelecionado);

  const located = database
  .filter(location => location.id == produtoIdSelecionado);

  console.table(located);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
