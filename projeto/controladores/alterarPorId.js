// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");
const { listarPorId } = require("./listarPorId");

const alterarPorId = () => {

  let rightProd = false
  let temp
  let indexProd
  while (! rightProd){

    console.clear()
    indexProd = listarPorId("alterar");

    console.log ("Este produto que deseja alterar? (s/n)")
    temp = readline.question()
    if (temp == 's' || temp == ""){
      rightProd = true
    } 
  }

  rightProd = false
  while (! rightProd){
    console.log (`Qual campo deseja alterar?
    (Se não deseja alterar nada, aperte enter)
    [n]ome
    [p]reço
    [q]uantidade
    [m]arca
    [f]ornecedor`)
    const field = readline.question();
    let newField
    switch (field){
      case "n":
        console.log ("Digite o novo nome do produto:")
        newField = readline.question()
        database[indexProd].nome = newField
        database
        break;
      
      case "p":
        console.log ("Digite o novo preço do produto:")
        newField = readline.question()
        database[indexProd].preco = newField
        break;

      case "q":
        console.log ("Digite a nova quantidade do produto:")
        newField = readline.question()
        database[indexProd].quantidade = newField
        break

      case "m":
        console.log ("Digite o novo nome da marca do produto:")
        newField = readline.question()
        database[indexProd].marca = newField
        break
      
      case "f":
        console.log ("Digite o novo fabricante do produto:")
        newField = readline.question()
        database[indexProd].fornecedor = newField
        break;
      default:
        console.log ('Comando não reconhecido')
    }
    rightProd = true
    console.log (`Deseja alterar mais algum campo?
    (s/n)`)
    temp = readline.question()
    if (temp == 's'){
      rightProd = false
      console.clear()
      console.table(database[indexProd])
    }
}
  console.log("Dê enter para continuar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
