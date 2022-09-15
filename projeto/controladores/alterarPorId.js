// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.questionInt();
  console.log("Você selecionou o id: " + idSelecionado);

  const posicaoArray = database.findIndex(produto => produto.id === idSelecionado)
  
  
  const nome = readline.question('Nome:')
  const preco = readline.questionInt('Preco:')
  const quantidade = readline.questionInt('Quantidade:') 
  const marca = readline.question('Marca:')
  const fornecedor = readline.question('Fornecedor:')

  const alterarProduto = {id:idSelecionado,nome, preco, quantidade, marca, fornecedor} 
  database.splice(posicaoArray,1,alterarProduto)
  console.table(database)








  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
