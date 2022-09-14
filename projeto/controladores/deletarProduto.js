// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite o id do produto que quer deletar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);

  const encontrar = database.find(item => (item.id === +idSelecionado));
  console.log("O item selecionado é:");
  console.table(encontrar);
  console.log("\n Tem certeza que deseja deletar este item? digite 1 se sim, ou digite outro número para sair.")
  
  const cond = readline.question();
  const novaDatabase = database
  const novaDatabase2 = novaDatabase.filter(item => (item.id !== +idSelecionado));
    if(cond === "1") {
       console.log("O id selecionado foi deletado!!");
       console.table(novaDatabase2);
    }else{
    console.log("\n Aperte enter para voltar ao menu inicial");
  }
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
