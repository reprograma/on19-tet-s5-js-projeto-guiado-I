// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  
console.log("Gostaria de alterar um item?");
const confirmaAlterar = readline.question();

  if (confirmaAlterar.toLowerCase() === "sim") {
  console.log("Digite o ID de um produto para alterar.");
  const idSelecionado = readline.question();
  console.log("Você selecionou o item de ID: " + idSelecionado + ".");

  
  console.log("Qual o nome do item a ser alterado?");
  const nomeNew = readline.question();
  console.log("Qual o preço desse produto?");
  const precoNew = readline.question();
  console.log("Quantas unidades estão disponíveis para oferta?");
  const quantNew = readline.question();
  console.log("Qual o nome da marca desse produto?");
  const marcaNew = readline.question();
  console.log("Qual o nome do fornecedor?");
  const fornecNew = readline.question();

  const newItem =  {id: idSelecionado,
  nome: nomeNew,
  preco: precoNew,
  quantidade: quantNew,
  marca: marcaNew,
  fornecedor: fornecNew}

  console.clear();
  console.log("Podemos alterar esse item?");
  const confirmaAltItem = readline.question();

    if (confirmaAltItem.toLowerCase() === "sim"){
    database.splice(idSelecionado-1, 1, newItem)

    console.log("Essa é a tabela de produtos atualizada:");
    console.table(database);}
    else {
    console.clear();}}

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
