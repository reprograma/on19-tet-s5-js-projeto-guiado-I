// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listParc = database.map(prod =>{
    return {
      id: prod.id,
      name: prod.nome,
      preco: prod.preco,
      quantidade: prod.quantidade
      
  }
});
  console.table(listParc);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
 //usar map