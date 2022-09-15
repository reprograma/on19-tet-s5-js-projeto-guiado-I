// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar"); // Pergunte o id a ser deletado
  const idSelecionado = readline.question();
  const posicaoDeletada = database.findIndex(database => database.id === +idSelecionado); //tem que colocar um + aqui em frente do idSelecionado para ele reconhecer que é um número, ou então usar == ao invés de ===

  const itemCompleto = database.find(database => database.id === +idSelecionado); // Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
  console.log("Você selecionou o id: " + idSelecionado + " - " + itemCompleto.nome);
  
  console.log("Tem certeza que deseja deletar o produto?")
  const deletou = readline.question();

  if (deletou.toLowerCase() === "sim") { // Se o usuário confirmar, delete o produto e volte ao menu inicial
    database.splice(posicaoDeletada, 1);
    console.table(database);
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

  } else { // Se o usuário desistir, volte ao menu inicial
    console.log("Fez bem more, tava fazendo loucura.");
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
};

module.exports = {
  deletarProduto
}

deletarProduto();

//Aqui usaremos o ID pq ele não repete -> precisamos saber qual é o ponto da array que queremos excluir 
