// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

//Encontrar produto por id
const alterarPorId = () => {
  console.log("***************************** ALTERAR PRODUTO ********************************")
  console.log("\nDigite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  const encontra = database.findIndex((database) => (database.id === +idSelecionado));
    
  console.log("Informe o novo nome do produto: ");
  const novoNome = readline.question();

  console.log("Informe o novo preco do produto: ");
  const novoPreco = readline.question();
  
  console.log("Informe a nova quantidade do produto: ");
  const novQuan = readline.question();
  
  console.log("Informe a nova marca do produto: ");
  const novaMarca = readline.question();
    
  console.log("Informe o novo fornecedor: ");
  const novoForn = readline.question();
  
  console.log("Alteração realizada com sucesso!");
  const encontra2 = {
      id: +idSelecionado,
      name: novoNome,
      preco: +novoPreco,
      quantidade: +novQuan, 
      marca: novaMarca,
      fornecedor: novoForn      
  }

  //database.splice(encontra2);
  console.table(encontra2)
  console.log("********************* CLIQUE NO ENTER PARA VOLTAR AO MENU **********************")
  readline.question();
  console.clear();
  
}
  module.exports = {
    alterarPorId
  }