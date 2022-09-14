// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  console.log("Deseja excluir este produto? Digite 1 - SIM ou 2 - Não, desejo voltar");
  const condi = readline.question();
  if (condi === "1"){
    console.log("Este produto foi deletado");
  }

    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

}
module.exports = {
  deletarProduto
}

