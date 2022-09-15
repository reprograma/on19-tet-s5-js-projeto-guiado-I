// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Qual nome do novo produto a ser inserido?");
  const nomeProd = readline.question();
  console.log("Qual o preço do produto?");
  const preçoProd = readline.question();
  console.log("Qual a quantidade do produto?");
  const quantidadeProd = readline.question();
  console.log("Qual a marca produto?");
  const marcaProd = readline.question();
  console.log("Qual o nome do fornecedor do produto?");
  const forncedorProd = readline.question();
  console.log("Id atual: " + incrementalId);
  incrementalId++
  const novoProduto = {
    id: incrementalId,
    nome: nomeProd,
    preço: +preçoProd,
    quantidade: +quantidadeProd,
    marca: marcaProd,
    forncedor: forncedorProd
  }
  database.push(novoProduto)
  console.table(database)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

 


module.exports = {
  inserirProduto
}
