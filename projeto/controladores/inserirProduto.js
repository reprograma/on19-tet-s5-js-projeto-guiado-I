// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
let { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++
  
  console.log("Qual é nome do produto?");
  const nome = readline.question();
  
  console.log("Qual é o preço?");
  const preco = readline.question();

  console.log("Qual é a quantidade?");
  const quantidade = readline.question();

  console.log("Qual é a marca do produto?");
  const marca = readline.question();

  console.log("Qual é o fornedor");
  const fornecedor = readline.question();

  console.log(nome, preco, quantidade, marca, fornecedor);
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}


module.exports = {
  inserirProduto
}
