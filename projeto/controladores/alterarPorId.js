// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require('readline-sync')
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = +readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  
  // find executa o callback uma vez pra cada elemento do array até encontrar um que retorna true
  const produto = database.find(produto => produto.id === idSelecionado)  // procurando em database o produto que possui o mesmo id daquele selecionado

  console.log("Insira um novo nome: ")
  const novoNome = readline.question(); 
  console.clear()
  produto.nome = novoNome

  console.log("Insira um novo valor: ")
  const novoValor = +readline.question();
  console.clear()  
  produto.preco = novoValor

  console.log("Insira uma nova quantidade: ")
  const novaQuantidade = +readline.question();
  console.clear()
  produto.quantidade = novaQuantidade

  console.log("Insira uma nova marca: ")
  const novaMarca = readline.question();
  console.clear()
  produto.marca = novaMarca

  console.log("Insira um novo fornecedor: ")
  const novoFornecedor = readline.question();
  console.clear()
  produto.fornecedor = novoFornecedor

  console.log("Produto atualizado com sucesso!")
  console.table(produto)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();

    
  }
module.exports = {
  alterarPorId
}
