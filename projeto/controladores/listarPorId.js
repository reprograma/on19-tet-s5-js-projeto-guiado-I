// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  console.log("Produto id selecionado: " + produtoIdSelecionado);
  console.table(database.find(value => value.id == produtoIdSelecionado))
  console.log("Você deseja ver outro produto? Para sim, digite 1 e para não digite 2");
  const verOutro = readline.question();

    if (verOutro == "1") {
    console.log("Qual produto deseja ver detalhes?");
    const produtoIdSelecionado2 = readline.question();
    console.log("Produto id selecionado: " + produtoIdSelecionado2);
    console.table(database.find(value => value.id == produtoIdSelecionado2))
    } else {
      console.log("Já que você não digitou sim, vamos voltar ao menu inicial.");
    }


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}
