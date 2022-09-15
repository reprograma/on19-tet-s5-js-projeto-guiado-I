// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {

  const resultado = database
  .map((objetoProduto) => ({
    id: objetoProduto.id, 
    nome: objetoProduto.nome,
    preco: objetoProduto.preco,
    quantidade: objetoProduto.quantidade
  }))

console.table(resultado);

  console.log("Dê enter para voltar");

  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
