// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++;

  console.log("Inserir nome do produto");
  const NomeProduto = readline.question();

  console.log("Informe o valor unitário");
  const precoInserido = readline.question();
   
  console.log("Qual a quantidade adquirida");
  const quantidadeAdquirida = readline.question();

  console.log("Qual a marca do produto");
  const marcaProduto = readline.question();

  console.log("Qual o nome do fornecedor");
  const nomeForn = readline.question();

  const novoProduto = {
    id: incrementalId,
    nome: NomeProduto,
    preco: +precoInserido,
    quantidade: +quantidadeAdquirida,
    marca: marcaProduto,
    fornecedor: nomeForn,
    }
    
    database.push(novoProduto);
    console.table(database);
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  };

  module.exports = {
  inserirProduto,
};
