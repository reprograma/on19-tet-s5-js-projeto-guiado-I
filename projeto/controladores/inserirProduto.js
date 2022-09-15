// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require('readline-sync')
const { database } = require('../database')
let incrementalId = 8

const inserirProduto = () => {
  console.log('ID atual: ' + incrementalId)
  incrementalId++

  console.log('Informe o nome do produto:')
  const nomeProduto = readline.question()

  console.log('Informe o valor do produto:')
  const precoProduto = readline.question()

  console.log('Informe a quantidad do produto:')
  const qtdProduto = readline.question()

  console.log('Informe a marca do produto:')
  const marcaProduto = readline.question()

  console.log('Informe o nome do fornecedor:')
  const nomeFornecedor = readline.question()

  const addProduto = {
    id: incrementalId,
    nome: nomeProduto,
    marca: marcaProduto,
    preco: +precoProduto,
    quantidade: +qtdProduto,
    fornecedor: nomeFornecedor
  }

  database.push(addProduto)
  console.table(database)
  console.log('Dê um ENTER para voltar ao Menu')
  readline.question()
  console.clear()
}

module.exports = {
  inserirProduto
}
