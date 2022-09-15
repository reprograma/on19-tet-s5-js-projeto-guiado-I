// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++

    console.log("Informe o nome do produto: ")
    const nome = readline.question();

    console.log("Informe o nome do preco: ")
    const preco = readline.question();

    console.log("Informe o nome do quantidade: ")
    const quantidade = readline.question();

    console.log("Informe o nome do marca: ")
    const marca = readline.question();

    console.log("Informe o nome do fornecedor: ")
    const fornecedor = readline.question();

    const novoproduto = {
      id: incrementalId,
      nome: nome,
      preco: +preco,
      marca: marca,
      quantidade: +quantidade,
      fornecedor: fornecedor,
    }

    database.push(novoproduto)
    console.table(database)
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

  }


module.exports = {
  inserirProduto
}
