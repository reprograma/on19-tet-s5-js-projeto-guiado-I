// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = +readline.question();
  console.log("Produto id selecionado: " + produtoIdSelecionado);

  const posicaoNaArray = database.findIndex(produto => produto.id === produtoIdSelecionado);
  if (posicaoNaArray === -1) {
    console.log("Produto não encontrado. Por favor insira um id válido. \n")
    listarPorId()
    return 
  }
  const listaDeProdutos = database.splice(posicaoNaArray, 1);
  console.table(listaDeProdutos)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
