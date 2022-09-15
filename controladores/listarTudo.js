// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listParc = database.map(x =>{
    return {
      id: x.id,
      name: x.nome,
      preco: x.preco,
      quantidade: x.quantidade

  }
});

  console.table(listParc);
  readline.question();
  console.clear();
}
  readline.question();
  console.clear();

module.exports = {
  listarTudo
}
