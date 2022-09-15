// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  //console.log("Id atual: " + incrementalId);
  incrementalId++
  const id = incrementalId
  const nome = readline.question("Insira o nome do produto que deseja cadastrar: ")
  const preco = +readline.question("Insira o preço do produto que deseja cadastrar: ")
  const quantidade = +readline.question("Insira a quantidade do produto que deseja cadastrar: ")
  const marca = readline.question("Insira a marca do produto que deseja cadastrar: ")
  const fornecedor = readline.question("Insira o fornecedor do produto que deseja cadastrar: ")
  
  const novoProduto = { id, nome, preco, quantidade, marca, fornecedor }
  
  database.push(novoProduto)
  console.log("Produto inserido com sucesso! \n")
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}