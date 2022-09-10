// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {

  console.clear();
  
  const shortDesc = []
  let temp
  for (let fullDesc of database){
    temp = {id: fullDesc.id, nome: fullDesc.nome, preço: fullDesc.preco, quantidade: fullDesc.quantidade}
    shortDesc.push(temp)
  };
  console.table(shortDesc)

  console.log("Dê enter para continuar");
  readline.question();
}

module.exports = {
  listarTudo
}
