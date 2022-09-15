// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++

  console.log("\nInsira os dados do produto\n")
  const nome = readline.question("Nome: ");
  const preco = readline.questionInt("Preco:");
  const quantidade = readline.questionInt("Quantidade: ");
  const marca = readline.question("Marca: ");
  const fornecedor = readline.question("Fornecedor: ");

  const novoProduto = { id:incrementalId, nome, preco, quantidade, marca, fornecedor };

  database.push(novoProduto);
  console.table(database);
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
