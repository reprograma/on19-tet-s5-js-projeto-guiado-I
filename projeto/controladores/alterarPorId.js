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
  console.log("Qual seria o nome?")

  const novoNome = readline.question();
  const prod = database.find(index => index.id == idSelecionado)
  prod.nome = novoNome
  console.log("Qual seria a marca ?")
  const novaMarca = readline.question();
  prod.marca = novaMarca
  console.log("Qual seria o novo fornecedor ?")
  const novoFornecedor = readline.question();
  prod.fornecedor = novoFornecedor
  console.table(prod)

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}


module.exports = {
  alterarPorId
}
