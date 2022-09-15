// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  
  const produtoAlteradoIndex = database.findIndex(elemento => elemento.id == idSelecionado)
  const produtoAlterado = database.find(database => database.id == +idSelecionado)
  database.slice(produtoAlteradoIndex)
  console.log("Você selecionou o id: " + idSelecionado + " Veja abaixo");
  console.table(produtoAlterado)
  console.log("Qual vai ser o novo nome?")
  const nomeAlterado = readline.question()
  produtoAlterado.nome = nomeAlterado
  console.log("Qual vai ser o novo preço?")
  const precoAlterado = readline.question()
  produtoAlterado.preco = precoAlterado
  console.log("Qual vai ser a nova quantidade")
  const quantidadeAlterada = readline.question()
  produtoAlterado.quantidade = quantidadeAlterada
  console.log("Qual vai ser a nova marca?")
  const marcaAlterada = readline.question()
  produtoAlterado.marca = marcaAlterada
  console.log("Qual vai ser o novo fornecedor?")
  const fornecedorAlterado = readline.question()
  produtoAlterado.fornecedor = fornecedorAlterado

  
  console.log("Veja abaixo como ficou")
  
  console.table(produtoAlterado)
  console.log("Dê enter para voltar");

  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
