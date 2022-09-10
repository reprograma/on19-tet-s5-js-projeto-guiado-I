// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = (callfoo = "listar", id = 0) => {

  console.clear()
  
  let produtoIdSelecionado
  switch (callfoo) {
    case "listar":
      console.log("Qual o Id do produto deseja ver detalhes?");
      produtoIdSelecionado = readline.question();
      console.log("Produto id selecionado: " + produtoIdSelecionado);
      break
    
    case "alterar":
      console.log("Qual o Id do produto deseja alterar?");
      produtoIdSelecionado = readline.question();
      console.log("Produto id selecionado: " + produtoIdSelecionado);
      break
    
    case "deletar":
      console.log("Qual o Id do produto deseja remover?");
      produtoIdSelecionado = readline.question();
      console.log("Produto id selecionado: " + produtoIdSelecionado);
      break

    case "receitaUnit":
      console.log ("Digite o ID do produto:")
      produtoIdSelecionado = readline.question();
      console.log("Produto id selecionado: " + produtoIdSelecionado);
      break

    case "receitaMulti":
      produtoIdSelecionado = id;
      break
    }



  let idProd
  let index = 0
  for (let fullDesc of database){
    idProd = fullDesc.id
    if (idProd == produtoIdSelecionado){
      if (callfoo !== "receitaMulti"){
        console.table(fullDesc)
      }
      break
    }
    index++
  }
  
  if (callfoo !== "receitaMulti"){
    console.log("Dê enter para continuar");
    readline.question();
  }
  return index
}

module.exports = {
  listarPorId
}
