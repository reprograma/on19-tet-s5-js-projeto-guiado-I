// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);

  const produtoParaSerAlterado = database.find(item => (item.id === +idSelecionado));
  console.log("As informações do produto selecionado são:");
  console.table(produtoParaSerAlterado);
  
  console.log("Informe o novo nome do produto.");
  const novoNome = readline.question()
  produtoParaSerAlterado.nome = novoNome
  
  console.log("Informe o preço do novo produto.");
  const novoPreco = readline.question();
  produtoParaSerAlterado.preco = novoPreco

  console.log("Informe a quantidade do novo produto.");
  const novaQuantidade = readline.question();
  produtoParaSerAlterado.quantidade = novaQuantidade

  console.log("Informe a marca do novo produto.");
  const novaMarca = readline.question();
  produtoParaSerAlterado.marca = novaMarca

  console.log("Informe o fornecedor do novo produto.");
  const novoFornecedor = readline.question();
  produtoParaSerAlterado.fornecedor = novoFornecedor

  console.log("Produto alterado com sucesso.")

  console.table(produtoParaSerAlterado);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
