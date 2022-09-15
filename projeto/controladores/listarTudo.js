// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const ListarTudo = database.map(m =>{
    return {
      id: m.id,
      nome: m.nome,
      preco: m.preco,
      quantidade: m.quantidade

    }
  });
  
  console.table(ListarTudo);

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
