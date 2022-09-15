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
  const ProdEScolhido = database.find(item => item.id === +idSelecionado)
  console.log("Qual o nome do novo produto?")
  ProdEScolhido.nome = readline.question()
  console.log("Qual o preço do novo produto?")
  ProdEScolhido.preco = readline.question()
  console.log("Qual a quantidade do novo produto?")
  ProdEScolhido.quantidade = readline.question()
  console.log("Qual a marca do novo produto?")
  ProdEScolhido.marca = readline.question()
  console.log("Qual o fornecedor do novo?")
  ProdEScolhido.fornecedor = readline.question()
  console.table(database);

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}


 
module.exports = {
  alterarPorId
}
