// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = +readline.question();
  console.log("Você selecionou o id: " + idSelecionado);

  const posicaoNaArray = database.findIndex(produto => produto.id === idSelecionado);  // findIndex procura o produto pelo índice cujo o id seja igual ao selecionado 

  if (posicaoNaArray === -1) { // se não encontra retorna -1 e chama novamente o método deletar produto. 
    console.log("Produto não encontrado. Por favor insira um id válido. \n")
    deletarProduto()
    return 
  }  


  const deletaProduto = database[posicaoNaArray].nome  // pegando e atribuindo o nome do produto nessa posição
  
  console.log(`Deseja realmente excluir o produto ${deletaProduto}? Digite [s] para SIM e [n] para NÃO`);
  const resposta = readline.question().toUpperCase();
    if (resposta === 'S') {
      database.splice(posicaoNaArray, 1); // tira um elemento a partir da posição do array
      console.log(`O produto ${deletaProduto} foi excluído com sucesso. \n`)
      return    
    } else if (resposta === 'N') {
      console.log("Produtos salvos com sucesso. \n")
      return
    } else {
      console.log("Opção Inválida. \n")
    }

  console.table(database);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}