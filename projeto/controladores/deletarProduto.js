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
  console.log("O produto abaixo é o que deseja deletar?");
  const encontrado = database.find(produto => produto.id == idSelecionado);
    console.table(encontrado);
  const confirmar = readline.question(`Aperte 1 para deletar \nCaso queira cancelar essa ação, aperte enter `);

  const deletarProduto2 = () => {
    const posicaoProduto = database.findIndex(item => item.id == idSelecionado);
    if (posicaoProduto > -1) {
      database.splice(posicaoProduto, 1); 
      console.clear();
      console.log('Produto Deletado.');
    }
    
  }
  const msgSaida = () => { 
    console.clear();
    console.log(`\nEntendi. O produto permanecerá no cadastro.`);

  }
  const resposta = () => (confirmar == 1) ? deletarProduto2() : msgSaida();
  resposta();

  readline.question('Aperte Enter para voltar ao Menu Principal');
  console.clear();
}
  module.exports = {
  deletarProduto
}
