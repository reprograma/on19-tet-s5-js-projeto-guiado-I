// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => { 
  console.log("Digite um id de um produto para alterar"); // Pergunte o id do produto
  const idSelecionado = readline.question();
  
  const produtoEncontrado = database.findIndex(database => database.id === +idSelecionado); // encontre o produto

  const itemCompleto = database.find(database => database.id === +idSelecionado); // encontre o produto
  database.splice(produtoEncontrado); // encontre o produto
  console.log("O produto selecionado é: ");
  console.table(itemCompleto);

  console.log("\nPronte para digitar os novos dados? Vamos lá!"); // Pergunte cada campo para o usuário, exceto o id
  const novoNome = readline.question("\nDigite o novo nome: ");
  const novoPreco = readline.question("Digite o novo preco: ");
  const novaQuantidade = readline.question("Digite a nova quantidade: ");
  const novaMarca = readline.question("Digite a nova marca: ");
  const novoFornecedor = readline.question("Digite o novo fornecedor: ");

  const alteracoes = { // altere o produto selecionado
    nome: novoNome,
    preco: +novoPreco,
    quantidade: +novaQuantidade,
    marca: novaMarca,
    fornecedor: novoFornecedor
    }

  console.log("\nO produto alterado é: "); 
  console.table(alteracoes);

  console.log("\nDê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}

alterarPorId() 