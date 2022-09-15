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
    const ProdEScolhido = database.findIndex(item => item.id === +idSelecionado)
    let nomeProduto = database[ProdEScolhido].nome;
    console.log(`Confirma a exclusão do produto: ${nomeProduto}? Digite 1 para Sim ou 2 para Não?`);
    const resposta = readline.question();

    if (resposta === "1") {
      database.splice(ProdEScolhido, 1);
      console.table(database);
           
    }
    
    else {
      console.log("Dê enter para voltar")
    }

    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }

module.exports = {
  deletarProduto
}
