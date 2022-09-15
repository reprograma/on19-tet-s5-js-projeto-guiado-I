// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const novaLista = database.map(elemento => {
    return {
    id: elemento.id,
    nome: elemento.nome,
    preco: elemento.preco,
    quantidade: elemento.quantidade
    }
  })
  //console.table(database); // esse daqui eu vou excluir, vai ser a minha nova console.table
  console.table(novaLista)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}


module.exports = {
  listarTudo
}
