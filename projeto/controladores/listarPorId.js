// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes? Digite o ID do produto");
  const IdSelecionado = readline.questionInt();
  console.log("Produto selecionado: " + IdSelecionado);

  const readProd = database.filter((database) => database.id == IdSelecionado);
  console.table(readProd);
};

module.exports = {
  listarPorId,
};
