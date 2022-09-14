// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question(); 
  console.log("Você selecionou o id: " + idSelecionado);
  const procurid = database.find(item => (item.id === idSelecionado));
  console.log("você pesquisou esse item")
  console.table(procurid)
  console.log("Quer mesmo deletar esse produto ?  Digite 1 - SIM ou 2 - Não, desejo voltar")
  const delet= readline.question();
  let  novaDatabase = database
  let  novaDatabase2 = novaDatabase.filter(item => (item.id !== +idSelecionado));
    if( delet === "1") {
       console.log("O id informado foi deletado");
       console.table(novaDatabase2);
    }else{
      console.log("de enter parar voltar");
  }
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
