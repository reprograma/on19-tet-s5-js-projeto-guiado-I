// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
/* map para esconder? map mostra X e esconde Marca e Fornecedor */
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
    
  const novaLista = database.map((i) => {
    return {id: i.id, nome: i.nome, preco: i.preco, quantidade: i.quantidade}
  })
   
  console.table(novaLista)

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
