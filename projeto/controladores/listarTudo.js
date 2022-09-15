// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const readAll = database.map((x) => {
    return {
      id: x.id,
      nome: x.nome,
      preco: x.preco,
      quantidade: x.quantidade,
    };
  });
  console.table(readAll);
};
module.exports = {
  listarTudo,
};
