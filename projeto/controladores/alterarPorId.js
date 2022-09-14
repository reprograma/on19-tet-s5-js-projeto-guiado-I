// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  console.log("Deseja excluir este produto? Digite 1 - SIM ou 2 - Não, desejo voltar");
  const condi = readline.question();
  if (condi === "1"){
    console.log("Este produto foi deletado");
  }
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
