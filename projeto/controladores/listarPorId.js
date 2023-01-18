/* 
 -Pergunte qual id mostrar detalhes
 -Mostre a tabela com apenas o produto selecionado, com todos os campos
*/

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes ? obs: Use o ID do produto"); 
  const produtoIdSelecionado = readline.question(); 

  const findProd = database.find(x => x.id == produtoIdSelecionado); //faz uma busca dos detalhes do produto, através do ID

  console.log("Produto  de id selecionado: " + produtoIdSelecionado);
  console.table(findProd); // Gera uma tabela, contendo detalhes do id selecionado

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
