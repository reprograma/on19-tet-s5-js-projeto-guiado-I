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

  const posicaoProduto = database.findIndex(produto => produto.id === idSelecionado);
  console.table("Nome do produto: " + database[posicaoProduto].nome)

  console.log("Deseja mesmo deletar esse produto? [1 - Sim 2 - Nao]")
  const confirmaDelete = readline.questionInt();
  
  if (posicaoProduto > -1){
    database.splice(posicaoProduto, 1,);
    }

  if(confirmaDelete === 1) {
    console.table(database)
    }else{
      console.log("Dê enter para voltar ao Menu");
      readline.question();
  }
}

  console.clear();

module.exports = {
  deletarProduto
}

