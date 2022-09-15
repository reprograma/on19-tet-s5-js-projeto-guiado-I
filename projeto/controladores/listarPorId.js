// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  const tabelaItens = database.map(
    (produto) => {
      const tabela = {
        id: produto.id,
        nome: produto.nome,
      };
      return tabela;
    }
  );

  console.table(tabelaItens);

  console.log("Deseja ver detalhes de qual produto?");
  const produtoIdSelecionado = readline.questionInt();

  const produtoPorId = database.find(produto => produto.id === produtoIdSelecionado)
  console.table(produtoPorId);

  console.log("Deseja ver outro produto? ")
  const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");
  if (resposta === 1){
    listarPorId()
  }else{
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }
  console.clear();
}
  //console.log("Qual produto deseja ver detalhes?");
 // const produtoIdSelecionado = readline.question();
 // console.log("Produto id selecionado: " + produtoIdSelecionado);
  //console.log("Dê enter para voltar");
 // readline.question();
 // console.clear();
//}

module.exports = {
  listarPorId
}
