// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("\n Você selecionou o id: " + idSelecionado);

  
  const encontra = database.find(i => (i.id === +idSelecionado));
  console.log("Este é o produto selecionado: " + encontra.nome )
     console.log("Essas são as informações deste produto:");
     console.table(encontra);

    const id = idSelecionado
     database.forEach(function(i) {
     i.id = +idSelecionado
     })

console.log("\n Iforme o novo nome do produto: ");
const novoNome = readline.question();
database.forEach(function(i) {
  i.nome = novoNome
});


console.log("\n Iforme o novo preço do produto: ");
const novoPreco = readline.question();
database.forEach(function(i) {
  i.preco = +novoPreco
});

console.log("\n Iforme a nova quantidade do produto: ");
const novaQnt = readline.question();
database.forEach(function(i) {
  i.quantidade = +novaQnt
});

console.log("\n Iforme a nova marca do produto: ");
const novaMarca = readline.question();
database.forEach(function(i) {
  i.marca= novaMarca
});

console.log("\n Iforme o novo fornecedor do produto: ");
const novoFornecedor = readline.question();
database.forEach(function(i) {
  i.fornecedor= novoFornecedor
});



console.table(database[+idSelecionado]);

console.log("Alteração Concluída");

console.log("Dê enter para voltar");


  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}

