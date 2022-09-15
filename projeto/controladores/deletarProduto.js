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
  const prodSelecionado = database.findIndex(database => (database.id === idSelecionado));
  console.log("Deseja realmente fazer isso?[1-Sim, 2-Não]");
  const resultado = readline.question();
  if(resultado === "1"){
    database.splice(prodSelecionado, 1);
    console.table(database);
  }else{
    console.log("Dê enter para voltar");
  }
  
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
