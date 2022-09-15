// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

console.log("========= VOCÊ ENTROU NO MENU DE ALTERAÇÃO DE PRODUTOS ===============");
const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();

  console.log("Você selecionou o id: " + idSelecionado);
  console.table(database.find(value => value.id == idSelecionado))

  console.log("Para qual nome que você deseja alterar o produto? ");
  const nomeAlterado = readline.question();
  database[idSelecionado - 1].nome = nomeAlterado;
  console.table(database.find(value => value.id ));


  console.log("Digite o preço do produto");
  const precoAlterado = readline.question();
  database[idSelecionado -1].preco = precoAlterado;
  console.table(database.find(value => value.id ));
   
  
  console.log("Para qual quantidade que você deseja alterar o produto? ");
  const qtdeAlterado = readline.question();
  database[idSelecionado -1].quantidade = qtdeAlterado;
  console.table(database.find(value => value.id ));

  console.log("Para qual marca que você deseja alterar o produto? ");
  const marcaAlterado = readline.question();
  database[idSelecionado -1].marca = marcaAlterado;
  console.table(database.find(value => value.id ));

  console.log("Para qual fornecedor você deseja alterar o produto? ");
  const fornecedorAlterado = readline.question();
  database[idSelecionado -1].fornecedor = fornecedorAlterado;
  console.table(database.find(value => value.id ));

  console.log(`Seu produto alterado ficou da seguinte forma:` );
  console.table(database.find(value => value.id ));

 console.log("Dê enter para voltar");
 readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
