// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {

  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  
  const produtoEscolhido = database.findIndex(database => database.id === +idSelecionado);
  const itemBuscado = database.find(database => database.id === +idSelecionado);
  database.splice(produtoEscolhido); 
  console.log("Este é o produto a ser alterado: ");
  console.table(itemBuscado);


  const nome= readline.question("Digite o nome do novo produto:");
  const preco= readline.question("Digite o novo preco:");
  const quantidade= readline.question("Digite a quantidade:");
  const marca= readline.question("Digite a marca:");
  const fornecedor= readline.question("Digite o fornecedor:");

  const novosDados = { 

   
    nome: nome,
    preco: +preco,
    quantidade: +quantidade,
    marca: marca,
    fornecedor: fornecedor
  
  }
  console.log("Os dados do novo produto são:"); 
  console.table(novosDados);


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();

  }

  


module.exports = {
  alterarPorId
}

