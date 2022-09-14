// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  const produto = database.find(index => index.id == idSelecionado)
  console.log("Você selecionou o id: " + idSelecionado);

  console.log("Qual seria o nome a ser alterado?")
  const nomeAlterado = readline.question();
  produto.nome = nomeAlterado

  console.log("Qual seria o novo preço?")
  const precoAlterado = readline.question();
  produto.preco = precoAlterado

  console.log("Qual seria a nova quantidade de produtos?")
  const qtdeAlterada = readline.question();
  produto.quantidade = qtdeAlterada

  console.log("Qual seria a nova marca?")
  const novaMarca = readline.question();
  produto.marca = novaMarca

  console.log("Qual seria o novo fornecedor?")
  const novoFornecedor = readline.question();
  produto.fornecedor = novoFornecedor
  
  console.table(produto)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
    
  }

  module.exports = {
    alterarPorId
  }