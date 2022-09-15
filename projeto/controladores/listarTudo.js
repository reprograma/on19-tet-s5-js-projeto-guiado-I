// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {

  const ListarProdutos = database.map (
    (produto) =>{
      const Lista = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade
      };
      return Lista
    }

  )

  console.table(ListarProdutos)

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
