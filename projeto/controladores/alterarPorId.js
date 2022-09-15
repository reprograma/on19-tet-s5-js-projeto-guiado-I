// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.questionInt("ID: ");
  console.log("Você selecionou o id: " + idSelecionado);

  const indexProdU = database.findIndex(
    x => x.id === idSelecionado
  );

  const updateProd = {
    id: idSelecionado,
    nome: readline.question("Novo NOME do produto: "),
    preco: readline.questionFloat("Novo PRECO do produto:"),
    quantidade: readline.questionFloat("Nova QUANTIDADE do produto: "),
    marca: readline.question("Nova MARCA do produto: "),
    fornecedor: readline.question("Novo FORNECEDOR do produto: "),
  };

  database.splice(indexProdU, 1, updateProd);
  console.table(database);
};

module.exports = {
  alterarPorId,
};
