// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade

const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
const produtosMap = database.map((element, index)=>{
  return {
    id: element.id,
    nome: element.nome,
    preco: element.preco,
    quantidade: element.quantidade
  }
});

  console.table(produtosMap);
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
