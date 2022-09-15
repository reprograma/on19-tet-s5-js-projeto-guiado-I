// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();
  const posicaoDeletada = database.findIndex(database => database.id === +idSelecionado);

  const itemCompleto = database.find(database => database.id === +idSelecionado);
  console.log("Você selecionou o id: " + idSelecionado + "-" + itemCompleto.nome);

  console.log("Tem certeza que deseja deletar o produto? Digite 1 para Sim ou 2 para Não.")
  const deletou = readline.question();

  if (deletou == 1) {
    database.splice(posicaoDeletada, 1);
    console.table(database);
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

  } else {
    console.log("Fez bem more, tava fazendo loucura.");
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
