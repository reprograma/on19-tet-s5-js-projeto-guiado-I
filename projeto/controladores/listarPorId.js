// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("************************** PORDUTOS POR ID ******************************")
  console.log("\nDigite um id para verificar o nome do produto:\n");
  const idSelecionado = readline.question();
  console.log("\nPara o id selecionado, " + idSelecionado + " ,temos as seguintes informações: ");
  const encontra = database.find(item => (item.id === +idSelecionado));
  console.table(encontra);
  console.log("***************** CLIQUE NO ENTER PARA VOLTAR AO MENU *******************")
  readline.question();
  console.clear(); 

};
 
  module.exports = {
  listarPorId
 }
