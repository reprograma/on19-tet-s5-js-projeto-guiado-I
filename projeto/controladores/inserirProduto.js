// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

  console.log("Id atual: " + incrementalId);
  incrementalId++
  console.log("Insira os dados do produto")
  readline.question();
  const nome = readline.question("nome:");
  const preco = readline.question("preco:");
  const quantidade = readline.question("quantidade:");
  const marca = readline.question("marca:");
  const fornecedor = readline.question("fornecedor:");
  const newProduto = {id: incrementalId, nome, preco, quantidade, marca, fornecedor};
  database.push(newProduto);
  console.table(database);


