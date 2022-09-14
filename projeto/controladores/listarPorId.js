// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Digite aqui qual é o id do produto que deseja ver os detalhes?");
  const produtoIdSelecionado = readline.question();
  const encontrado = database.find(elemento => elemento.id == produtoIdSelecionado)
  console.log("Você selecionou o produto de ID: " + produtoIdSelecionado);
  console.table(encontrado)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
