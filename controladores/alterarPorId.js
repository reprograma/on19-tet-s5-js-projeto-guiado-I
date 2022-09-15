// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado
const readline = require("readline-sync");
const { database } = require("../database");

//Encontrar produto por id
const alterarPorId = () => {
  console.log("\nDigite o ID do produto a ser alterado");
  const idSelecionado = readline.question();
  console.log("Você escolheu o produto: " + idSelecionado);
  const encontra = database.findIndex((database) => (database.id === +idSelecionado));
  console.log("Novo nome do produto: ");
  const novoNome = readline.question();
  console.log("Novo preco do produto: ");
  const novoPreco = readline.question();
  console.log("Nova quantidade do produto: ");
  const novQuan = readline.question();
  console.log("Nova marca do produto: ");
  const novaMarca = readline.question();
  console.log("Novo fornecedor: ");
  const novoForn = readline.question();
  console.log("Alteração realizada com sucesso!");
  const encontrado = {
      id: +idSelecionado,
      name: novoNome,
      preco: +novoPreco,
      quantidade: +novQuan, 
      marca: novaMarca,
      fornecedor: novoForn      
  }
}

module.exports = {
  alterarPorId
}