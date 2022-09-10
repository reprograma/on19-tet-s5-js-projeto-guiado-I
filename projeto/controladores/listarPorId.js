// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {

  console.clear()

  console.log("Qual o Id do produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  console.log("Produto id selecionado: " + produtoIdSelecionado);

  let idProd
  let index = 0
  for (let fullDesc of database){
    idProd = fullDesc.id
    if (idProd == produtoIdSelecionado){
      console.table(fullDesc)
      break
    }
    index++
  }
  
  console.log("Dê enter para continuar");
  readline.question();
  return index
}

module.exports = {
  listarPorId
}
