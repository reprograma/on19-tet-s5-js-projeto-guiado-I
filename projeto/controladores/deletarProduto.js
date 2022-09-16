// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  
  console.log("Digite o ID de um produto para deletar.");
  const idSelecionado = readline.question();
  console.log("Você selecionou o ID: " + idSelecionado);

  const findProduct = database
  .findIndex(location => location.id === +idSelecionado)

  console.log("Tem certeza que deseja retirar esse item?");
  const confirma = readline.question();
  if (confirma.toLowerCase() === "sim") {
    console.clear();
    database.splice(findProduct, 1);
    console.log("Essa é a tabela de produtos atualizada:");
    console.table(database)}
    else {
      console.clear();}

  console.log("Deseja remover algum outro produto?");
  const newDeletion = readline.question();
  if (newDeletion.toLowerCase() === "sim") {
    console.clear();
    deletarProduto();
  }
  else {
  console.clear();}

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
