// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 9;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++
}

const inserir = () => { // Pergunte ao usuário os dados do novo produto
  console.log("Qual o novo produto você deseja inserir?"); // Pergunte um campo por vez, exceto id
  const produtoInserido = readline.question();
  console.log("Insira agora o preço do produto:");
  const precoInserido = readline.question();
  console.log("Insira a quantidade do produto:");
  const quantidadeInserida = readline.question();
  console.log("Insira a marca do produto:");
  const marcaInserida = readline.question();
  console.log("Por fim, insira o fornecedor do produto:");
  const fornecedorInserido = readline.question();

  const novoProduto = { 
  id: incrementalId, // O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
  nome: produtoInserido,
  preco: +precoInserido,
  quantidade: +quantidadeInserida,
  marca: marcaInserida,
  fornecedor: fornecedorInserido
  }
  
  database.push(novoProduto);
  console.table(database);
};

inserir();
console.log("Dê enter para voltar");
readline.question();
console.clear();

module.exports = {
  inserirProduto
}