// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("**************************** INSERIR NOVOS PRODUTOS *****************************")
  console.log("Id atual: " + incrementalId);
  incrementalId++
  console.log("\nInsira os dados que serão solicitados:")
  console.log("Informe o nome do produto: ")
  const nome = readline.question();
  console.log("Informe o preco do produto: ")
  const preco = readline.question();
  console.log("Informe a quantidade do produto: ")
  const quantidade = readline.question();
  console.log("Informe a marca do produto: ")
  const marca = readline.question();
  console.log("Informe o fornecedor do produto: ")
  const fornecedor = readline.question();
  console.log("\nSegue a tabela com o produto incluido.")
  const novoProduto = {
    id:incrementalId,
    nome: nome,
    preco: +preco,
    quantidade: +quantidade,
    marca: marca,
    fornecedor: fornecedor
  }
    database.push(novoProduto);
    console.table(database);
    console.log("******************* CLIQUE NO ENTER PARA VOLTAR AO MENU **********************")
    readline.question();
    console.clear();     
}
  module.exports = {
  inserirProduto
}
