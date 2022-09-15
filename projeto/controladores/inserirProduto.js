// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++
  const nome = readline.question("Nome: ");
  const preco = readline.question("Preco: ");
  const quantidade = readline.question("Quantidade: ");
  const marca = readline.question("Marca: ");
  const Fornecedor = readline.question("Fornecedor: ");

    const NovoProduto = {
      nome: nome,
      preco: preco,
      quantidade: quantidade,
      marca: marca,
      fornecedor: Fornecedor,
    }

    database.push(NovoProduto);
    console.table(database);


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
