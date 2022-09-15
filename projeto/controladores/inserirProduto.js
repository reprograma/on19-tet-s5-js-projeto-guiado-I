// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++

   console.log("\n Insira os dados do novo produto!");
   console.log("\n Iforme o nome do produto: ");
   const name = readline.question();

   console.log("\n Iforme o preço do produto: ");
   const preco = readline.question();

   console.log("\n Iforme a quantidade do produto: ");
   const Qnt = readline.question();

   console.log("\n Iforme a marca do produto: ");
   const marca = readline.question();

   console.log("\n Iforme o fornecedor do produto: ");
   const forn = readline.question();

const novoProduto = {
  id: incrementalId,
  nome: name,
  preco: +preco,
  quantidade: +Qnt,
  marca: marca,
  fornecedor: forn
};

database.push(novoProduto);
console.table(database);



  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
};

module.exports = {
  inserirProduto
}
