// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {// Pergunte qual id mostrar detalhes
  console.log("Digite o id do produto que deseja ver os detalhes:");
  const produtoIdSelecionado = readline.question();
  
  console.log("Você selecionou o id: " + produtoIdSelecionado);

  console.table(database.find(database => database.id === +produtoIdSelecionado)); // Mostre a tabela com apenas o produto selecionado, com todos os campos

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}

listarPorId();

  