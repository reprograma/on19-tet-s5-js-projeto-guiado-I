// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require('readline-sync')
const { database } = require('../database')

const deletarProduto = () => {
  console.log('Digite o id do produto para deletar')
  const idSelecionado = readline.question()
  console.log('Você selecionou o id: ' + idSelecionado)
  //console.log("Dê enter para voltar");
  console.log('Tem certeza de que deseja deletar esse produto?[1-SIM, 2-NÃO]')
  const cond = readline.question()
  if (cond === '1') {
    console.log('Produto removido da base de dados')
  }

  console.log('Dê um ENTER para voltar')
  readline.question()
  console.clear()
}

module.exports = {
  deletarProduto
}
