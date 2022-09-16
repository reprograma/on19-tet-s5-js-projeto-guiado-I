// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("ID atual: " + incrementalId);
  incrementalId++

  console.log("Gostaria de incluir um item?");
  const confirmaIncluir = readline.question();

  if (confirmaIncluir.toLowerCase() === "sim") { 

  console.log("Qual o nome do item a ser inserido?");
  const productNome = readline.question();
  console.log("Qual o preço desse produto?");
  const productPreco = readline.question();
  console.log("Quantas unidades estão disponíveis para oferta?");
  const productUnid = readline.question();
  console.log("Qual o nome da marca desse produto?");
  const productMarca = readline.question();
  console.log("Qual o nome do fornecedor?");
  const productFornecedor = readline.question();

  const newProduct = {
    id: incrementalId,
    nome: productNome,
    preco: productPreco,
    quantidade: productUnid,
    marca: productMarca,
    fornecedor: productFornecedor
  }
  console.clear();
  console.log("Podemos incluir esse novo item?");
  const confirmaIncluir = readline.question();

    if (confirmaIncluir.toLowerCase() === "sim"){
    database.push(newProduct);
    console.log("Essa é a tabela de produtos atualizada com o novo item:");
    console.table(database);}}

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
