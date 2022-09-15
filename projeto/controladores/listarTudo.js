// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listar = database.map( i => {
     return {
      id: i.id,
      nome: i.nome,
      preco: i.preco,
      quantidade: i.quantidade
    }
  } );

  console.table(listar);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
};

module.exports = {
  listarTudo
}
