// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => { 
  const filtered = database.map((products) => ({
    id: products.id,
    nome: products.nome,
    preco: products.preco,
    quantidade: products.quantidade
  }))

  console.log("Essa é a tabela de todos produtos catalogados:");
  console.table(filtered);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}