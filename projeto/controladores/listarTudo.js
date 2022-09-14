// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
  console.log("***************************** LISTAGEM PARCIAL ********************************")
  const listParc = database.map(x =>{
    return {
      id: x.id,
      name: x.nome,
      preco: x.preco,
      quantidade: x.quantidade
      
  }
});
 
  console.table(listParc);
  console.log("********************* CLIQUE NO ENTER PARA VOLTAR AO MENU **********************")
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
