// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId

const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

incrementalId++;
const inserirProduto = () => {
  console.log("Para realizar o cadastro de um novo produto, siga as instruções: ");
  const cadastrarProduto = () => {
    const id = incrementalId;
    const nome = readline.question(`Nome: `);
    const preco = readline.question(`Preco: `);
    const quantidade = readline.question(`Quantidade: `);
    const marca = readline.question(`Marca: `);
    const fornecedor = readline.question(`Fornecedor: `);

    const novoProduto = {id, nome, preco: +preco, quantidade: +quantidade, marca, fornecedor};

    database.push(novoProduto);
    console.table(novoProduto);
  }
  cadastrarProduto();
  console.log("Id atual: " + incrementalId);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

inserirProduto();
module.exports = {
  inserirPorId
}
