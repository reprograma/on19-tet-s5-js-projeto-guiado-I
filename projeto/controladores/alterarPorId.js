// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");


  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  const buscadoidalt = database.findIndex((database) => database.id === idSelecionado);
  const itemcompleto = database.find(database => database.id === +idSelecionado)
  database.slice(buscadoidalt)
  console.log("o produto que você selecionou é:")
  console.table(itemcompleto);
  console.log("agora vamos fazer as modificações");
  const novoNome = readline.question("Digite o novo nome:");
  const novoPreco = readline.question("Digite o novo preco:");
  const novaQuantidade = readline.question("Digite o novo quantidade:");
  const novaMarca = readline.question("Digite o novo marca:");
  const novofornecedor = readline.question("Digite o novo fornecedor:");
  const novoprod = {id: idSelecionado,  nome: novoNome, preco: +novoPreco, quantidade: +novaQuantidade, marca: novaMarca, fornecedor: novofornecedor, }
  console.log("o produto alterado é:")
  console.table(novoprod)
  console.log("de enter para voltar")
  readline.question();
  console.clear();


