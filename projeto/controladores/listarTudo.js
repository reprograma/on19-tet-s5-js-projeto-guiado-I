// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const parcial = database.map(filtro => {
    return {
      id: filtro.id,
      name: filtro.nome,
      preco: filtro.preco,
      quantidade: filtro.quantidade
    }
});
  
  console.table(parcial);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
};

module.exports = {
  listarTudo
}

listarTudo();