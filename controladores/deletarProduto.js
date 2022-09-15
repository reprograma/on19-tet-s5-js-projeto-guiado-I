// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite o ID do produto a ser deletado");
  const idSelecionado = readline.question();
  console.log("Você selecionou o produto: " + idSelecionado);
  const encontra = database.find(item => (item.id === +idSelecionado));
  console.log("\n Se quer realmente excluir este produto, digite 1, caso contrário, digite qualquer outro número.")
  const cond = readline.question();
  var novaDatabase = database
  var novaDatabase2 = novaDatabase.filter(item => (item.id !== +idSelecionado));
    if(cond === "1") {
       console.log("O produto foi deletado.");
       console.table(novaDatabase2);
  }
  readline.question();
  console.clear();
}

 
module.exports = {
  deletarProduto
}