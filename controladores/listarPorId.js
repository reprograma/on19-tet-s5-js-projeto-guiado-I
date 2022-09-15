// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("\nDigite um id:\n");
  const idSelecionado = readline.question();
  console.log("\nPara o ID, " + idSelecionado + " ,temos as informações a seguir: ");
  const encontra = database.find(item => (item.id === +idSelecionado));
  console.table(encontra);
  readline.question();
  console.clear(); 
};

  module.exports = {
  listarPorId
}
