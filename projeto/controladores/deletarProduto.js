// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial

const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();
  const itemCompleto = database.find(database => database.id === +idSelecionado);
  console.log("Você selecionou o id: " + idSelecionado + " - " + itemCompleto.nome); // Imprime o ID e o nome do produto a ser cancelado
  

  const produtoSelecionado = database.findIndex(database => database.id === +idSelecionado);
  console.log ("Realmente deseja deletar este produto?[1 - sim, 2 - não]");

  const DeletarProduto = readline.question();
  if (DeletarProduto === "1"){
    database.splice(produtoSelecionado, 1);
    console.table(database);
    console.log("Produto deletado com sucesso");

  }
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();

}
module.exports = {
  deletarProduto
}

