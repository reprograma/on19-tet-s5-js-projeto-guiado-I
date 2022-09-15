// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require('readline-sync')
const { database } = require('../database')

const alterarPorId = () => {
  console.log('Digite o id do produto a ser alterado:')
  const idSelecionado = readline.question()

  const produtoEncontrado = database.findIndex(
    database => database.id === +idSelecionado
  )

  const produto = database.find(database => database.id === +idSelecionado)
  database.splice(produtoEncontrado)
  console.log('O produto encontrado é: ')
  console.table(produto)

  const novoNome = readline.question('\nDigite o nome atualizado: ')
  const novaMarca = readline.question('Digite a marca atualizada: ')
  const novoPreco = readline.question('Digite preco atualizado: ')
  const novoFornecedor = readline.question('Digite o fornecedor atualizado: ')
  const novaQuantidade = readline.question('Digite a quantidade atualizada: ')

  const novoProduto = {
    nome: novoNome,
    marca: novaMarca,
    preco: +novoPreco,
    fornecedor: novoFornecedor,
    quantidade: +novaQuantidade
  }

  console.log('\nO produto alterado é: ')
  console.table(novoProduto)

  console.log('\nDê um ENTER para voltar ao Menu')
  readline.question()
  console.clear()
}

module.exports = {
  alterarPorId
}
