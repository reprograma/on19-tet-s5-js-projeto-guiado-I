// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");
 
const listarTudo = () => {
  console.table(database);
  console.log("Dê enter para voltar");
  readline.question();
}
console.table(database.map( database => ({id: database.id, nome: database.nome, 
  preco: database.preco, quantidade: database.quantidade} )))

  console.log("Dê enter para continuar");
  readline.question();
  console.clear();
  module.exports = {
  listarTudo
}
