// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  const listaProdutosResumida = database.map(
    item => {
      return {
        Id: item.id,
        Nome: item.nome,
        Preço: item.preco,
        Quantidade: item.quantidade
      };});
      
  console.table(listaProdutosResumida);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}




module.exports = {
  listarTudo
}
