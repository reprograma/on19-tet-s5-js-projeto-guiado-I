// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();

  const indice = database.findIndex(database => database.id === +idSelecionado);
  
  const itemDeletado = database.find(database => database.id === +idSelecionado);
  console.log("Você selecionou o id: " + idSelecionado + " - " + itemDeletado.nome);

  console.log("Você realmente quer deletar o produto? [1 - Sim, 2 - Não]");
  const condicao =  readline.question();
  
  if (condicao === "1") {
    database.splice(indice, 1);
    console.table(database);

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}
        
module.exports = {
  deletarProduto
    }
 };


deletarProduto();