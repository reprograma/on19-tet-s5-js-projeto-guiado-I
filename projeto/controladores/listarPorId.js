// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require('readline-sync')
const { database } = require('../database')

const listarPorId = () => {
  console.log('De qual produto deseja ver detalhes?')
  const produtoIdSelecionado = readline.questionInt()

  const produtoEncontrado = database.find(
    produto => produto.id == produtoIdSelecionado
  )
  console.table(produtoEncontrado)

  console.log('Deseja visualizar outro produto? [1-SIM, 2-NÃO]')
  const respostaNovoProduto = readline.questionInt()

  if (respostaNovoProduto === 1) {
    listarPorId()
  } else {
    console.log('Dê um ENTER para voltar ao Menu')
    readline.question()
  }

  console.clear()
}

module.exports = {
  listarPorId
}
