// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listParc = database.map(index =>{
    return {
      id: index.id,
      name: index.nome,
      preco: index.preco,
      quantidade: index.quantidade
    }
  });
   
    console.table(listParc);
    
    console.log("\nDê enter para voltar");
    readline.question();
    console.clear();
  }
  
  module.exports = {
    listarTudo
  }