// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para EXCLUIR");
  const idSelecionado = readline.question();

  const posicaoDeletada = database.findIndex(database => database.id === +idSelecionado); 

  const itemCompleto = database.find(database => database.id === +idSelecionado);
  console.log("Confira ATENTAMENTE o produto a ser EXCLUIDO : " + idSelecionado + " - " + itemCompleto.nome);
  
  console.log("Tem certeza que deseja EXCLUIR o produto? 1 - SIM 2 - NÃO.")
  const deletou = readline.question();

  if (deletou == 1) {
    database.splice(posicaoDeletada, 1);
    console.log("O produto foi EXCLUIDO com sucesso")
    console.table(database);
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

  } else {
    console.log("O produto NÃO foi deletado");
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
};

module.exports = {
  deletarProduto
}

deletarProduto();
