// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require('readline-sync')
const { database } = require('../database')

const deletarProduto = () => {
  console.log('Digite o id do produto que deseja deletar')
  const idSelecionado = readline.question()
  console.log('Você selecionou o id: ' + idSelecionado)

  const encontraID = database.find(produto => produto.id === +idSelecionado)
  console.log('O produto selecionado é:')
  console.table(encontraID)
  console.log('\n Tem certeza que deseja deletar este produto?[1-SIM, 2-NAO]')

  const resposta = readline.question()
  const novoDatabase = database
  const novoDatabaseProd = novoDatabase.filter(
    produto => produto.id !== +idSelecionado
  )
  if (resposta === '1') {
    console.log('ID deletado!')
    console.table(novoDatabaseProd)
  } else {
    console.log('\n Dê um ENTER para voltar ao Menu')
  }
  readline.question()
  console.clear()
}

module.exports = {
  deletarProduto
}
