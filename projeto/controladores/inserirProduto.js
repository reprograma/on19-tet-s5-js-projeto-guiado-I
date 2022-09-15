// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++;

  const createProd = {
    id: incrementalId,
    nome: readline.question("Novo NOME do produto:  "),
    preco: readline.questionFloat("Novo PRECO do produto:  "),
    quantidade: readline.questionFloat("Nova QUANTIDADE do produto:  "),
    marca: readline.question("Nova MARCA do produto:  "),
    fornecedor: readline.question("Novo FORNECEDOR do produto:  "),
  };
  database.push(createProd);
  console.table(database);
};
module.exports = {
  inserirProduto,
};
