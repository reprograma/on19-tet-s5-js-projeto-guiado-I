// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id do produto que deseja deletar");

  const idSelecionado = readline.question();
  const newDatabase = database.find((item) => item.id === +idSelecionado);
  console.table(newDatabase)
  console.log("\n Se quer realmente excluir este produto, digite 1, ou outro valor para sair.")
  const escolha = readline.question();
  var newDatabase1 = database
  var newDatabase2 = newDatabase1.filter(item => (item.id !== +idSelecionado));
    
  if(escolha === "1") {
       console.log("O produto foi deletado");
       console.table(newDatabase2);
    }else { 
      (escolha !== "1");
      console.log("clique no enter para voltar ao menu inicial");
  }
 
    readline.question();
    console.clear();
  }


module.exports = {
  deletarProduto
}
