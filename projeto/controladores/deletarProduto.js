// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");
const { listarPorId } = require("./listarPorId")

const deletarProduto = () => {
  //console.log("Digite um id de um produto para deletar");
  //const idSelecionado = readline.question();

  let rightProd = false
  let temp
  let indexProd
  while (! rightProd){

    console.clear()
    indexProd = listarPorId();

    console.log ("Este produto que deseja remover?")
    console.log ("(s/n)")
    temp = readline.question()
    if (temp == 's'){
      rightProd = true
    } 
  }

console.log ("Para confirmar, digite o nome do produto:", database[indexProd].nome)
let confirmation = readline.question()
if (confirmation == database[indexProd].nome){
  database.splice(indexProd, 1)
  console.log ("\nProduto removido do sistema\n")
}
else {
  console.log ("Confirmação para remoção do produto negada")
}

  console.log("Dê enter para continuar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
