// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {

  const listaItens = database.map(
    
    (produto) => {
      const listado = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade
      };
      return listado;
    }
  );
  console.table(listaItens)

  console.log("Dê enter para voltar ao Menu");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
