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
  const prodEscolhido = database.indexOf(database => (database.id == idSelecionado));
  console.log("Deseja realmente alterar o produto? [1-Sim, 2-Não]");
  const resposta = readline.question();
  if (resposta === "2") {
    console.log("Dê enter para voltar");
    readline.question();
    console.clear(); 
  }

  console.log("Qual o nome que deseja inserir?");
  const novoNome = readline.question();
  console.log("Qual o preço?");
  const novoPreco = readline.question();
  console.log("Qual a quantidade?");
  const novaQtd = readline.question();
  console.log("Qual a marca?");
  const novaMarca = readline.question();
  console.log("Qual o fornecedor?");
  const novoFornecedor =  readline.question();

  novoProduto = {
    id: idSelecionado,
    nome: novoNome,
    preco: +novoPreco,
    quantidade: +novaQtd,
    marca: novaMarca,
    fornecedor: novoFornecedor,
  }
  
  database.splice(prodEscolhido, 1 , novoProduto);
  console.table(database)

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
  
  };
   
  


module.exports = {
  alterarPorId
}
