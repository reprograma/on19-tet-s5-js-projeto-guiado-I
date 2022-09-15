// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.questionInt();
  console.log("Você selecionou o id: " + idSelecionado);

  const indexProdD = database.findIndex(
    x => x.id === idSelecionado
  );
  console.table(indexProdD);

  console.log(
    "Deseja mesmo deletar esse produto? (Opcoes validas: 1 - Sim / 2 - Nao)"
  );
  const deleteProd = readline.questionInt();

  if (deleteProd === 1) {
    database.splice(indexProdD, 1);
    console.table(database);
  }
};

module.exports = {
  deletarProduto,
};
