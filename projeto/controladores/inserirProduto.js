// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++
  console.log("Inserir nome do produto");
  const nome = readline.question();

  console.log("Inserir preço unitário do produto");
  const preco = readline.question();

  console.log("Inserir quantidade");
  const quantidade = readline.question();

  console.log("Inserir Marca");
  const marca = readline.question();

  console.log("Inserir nome do fornecedor");
  const fornecedor = readline.question();

  const novoProduto = {
    id:incrementalId,
    nome:nome,
    preco:preco,
    quantidade:quantidade,
    marca:marca,
    fornecedor:fornecedor
  }
  database.push(novoProduto);
  console.table(database);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}
  
module.exports = {
  inserirProduto
}
