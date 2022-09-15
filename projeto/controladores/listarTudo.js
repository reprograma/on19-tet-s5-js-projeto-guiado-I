// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require('readline-sync')
const { database } = require('../database')

const listarTudo = () => {
  const novaLista = database.map(produto => {
    const listaReduzida = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      qtd: produto.quantidade
    }
    return listaReduzida
  })
  console.table(novaLista)

  console.log('Dê um ENTER para voltar ao Menu')
  readline.question()
  console.clear()
}

module.exports = {
  listarTudo
}
