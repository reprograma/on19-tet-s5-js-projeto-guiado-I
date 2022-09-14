// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++

  console.log("Digite o NOME do Produto");
  const NomeProd = readline.question();

  console.log("Digite o PREÇO do Produto");
  const PrecoProd = readline.question();

  console.log("Digite o QUANTIDADE do Produto");
  const QuanProd = readline.questionInt();

  console.log("Digite o MARCA do Produto");
  const MarcaProd = readline.question();

  console.log("Digite o FORNCEDOR do Produto");
  const FornecedorProd = readline.question();

  console.log("Produto Incluido");
  console.log(NomeProd,PrecoProd,QuanProd,MarcaProd,FornecedorProd);


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
