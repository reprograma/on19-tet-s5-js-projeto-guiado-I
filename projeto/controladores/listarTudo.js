// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const parcial = database.map(filtrado => {
    return {
      id: filtrado.id,
      name: filtrado.nome,
      preco: filtrado.preco,
      quantidade: filtrado.quantidade
    }
  });
    console.table(parcial) 
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
  
  


module.exports = {
  listarTudo
}
