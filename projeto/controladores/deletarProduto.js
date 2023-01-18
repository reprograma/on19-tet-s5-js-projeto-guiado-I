// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial

const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();

  const itemDeletado = database.find(database => database.id == +idSelecionado); //find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento.
  console.log("Você selecionou o id: " + idSelecionado + " - " + itemDeletado.id);

  console.log("Você realmente quer deletar o produto? [1 - Sim, 2 - Não]");
  const condicao =  readline.question();
  
  if (condicao == "1") {
    database.splice(itemDeletado, 1); //splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    console.table(database);
  
    
  }else {
    console.table(database)
    
  }

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
    
}
 
deletarProduto()

module.exports = {
  deletarProduto
  }

// tem que seguir a ordem de id para deletar

