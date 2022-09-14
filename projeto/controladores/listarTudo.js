// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listaParcial = database.map(list =>{
    return{
      id: list.id,
      nome: list.nome,
      preço: list.preco,
      quantidade: list.quantidade 
    }
  })
  console.table(listaParcial);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
