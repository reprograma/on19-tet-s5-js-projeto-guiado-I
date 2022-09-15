// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  console.log("Nome do novo produto:")
  const nome = readline.question();
  console.log("Preco do produto: ")
  const preco = readline.question();
  console.log("Quantidade do produto: ")
  const quantidade = readline.question();
  console.log("Marca do produto: ")
  const marca = readline.question();
  console.log("Fornecedor do produto: ")
  const fornecedor = readline.question();
  console.log("\nProduto adicionado ao database.")
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
    readline.question();
    console.clear();     
}

  module.exports = {
  inserirProduto
}