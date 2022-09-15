// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8; //id do novo produto

const inserirProduto = () => {

  console.log("Id do novo produto: " + incrementalId);
  incrementalId++ // cada vez em que inseri um novo produto, o Id será gerado segundo a ordem numérica

  console.log("Nome do produto");
  const NomeProduto = readline.question();

  
  console.log("Preço");
  const precoProduto = readline.question();

  console.log("Quantidade");
  const QtdProduto = readline.question();

  console.log("Marca");
  const MarcaProduto = readline.question();

  console.log("Fornecedor");
  const fornProduto = readline.question();

  //criando um objeto
  const novoProduto = {
    id: incrementalId, //propriedade
    nome: NomeProduto,
    preco: +precoProduto,
    quantidade: +QtdProduto,
    marca: MarcaProduto,
    fornecedor: fornProduto,
    }

    ////database.push(novoProduto); 
    console.table(novoProduto);
  

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();

}
module.exports = {
  inserirProduto
 } 
