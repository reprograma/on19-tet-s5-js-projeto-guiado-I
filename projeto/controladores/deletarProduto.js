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
  console.log("Deseja realmente deletar " + idSelecionado);
  const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");
  let  novaDatabase = database
  let  novaDatabase2 = novaDatabase.filter(item => (item.id !== +idSelecionado));

  if (resposta === 1){
    console.log("\n Produto deletado com sucesso! "); 
    console.table(novaDatabase2);    
  }else{
    console.log("Dê enter para voltar");
    readline.question();
  }
}
  


module.exports = {
  deletarProduto
}
