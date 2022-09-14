// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite o id de um produto para alterar");
  const idSelecionado = readline.questionInt();
  console.log("Você selecionou o id: " + idSelecionado);
  
  const posicaoProduto = database.findIndex(produto => produto.id === idSelecionado);

  const produtoPorId = database.find(produto => produto.id === idSelecionado)
  console.table(produtoPorId);

  console.log("\nInsira os dados do produto para alteração: \n")
  const nome = readline.question("Nome: ");
  const preco = readline.questionInt("Preco:");
  const quantidade = readline.questionInt("Quantidade: ");
  const marca = readline.question("Marca: ");
  const fornecedor = readline.question("Fornecedor: ");
  
  const alteraProduto = {id:idSelecionado, nome, preco, quantidade, marca, fornecedor };
  
  database.splice(posicaoProduto,1,alteraProduto)
  console.table(database)

  console.log("Deseja alterar outro produto?")
  const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");
  if (resposta === 1){
    alterarPorId()
  }else{
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }
  console.clear();
}

module.exports = {
  alterarPorId
}
