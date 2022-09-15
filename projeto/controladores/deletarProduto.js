
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

  const posicaoArray = database.findIndex(produto => produto.id === idSelecionado)
  console.table("Nome do produto:" + database[posicaoArray].nome)

  
  console.log("Deseja deletar o produto?")
  const resposta = readline.questionInt ("\n[1- Sim, 2- Nao] \n")

  if(posicaoArray >-1 ){
    database.splice(posicaoArray,1)
  }
  if(resposta === 1) {
    console.table(database)
  }
  

  

  









  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
