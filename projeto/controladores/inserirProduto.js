// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrescido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;


const inserir = () => { 
  console.log("Qual o novo produto você deseja inserir?");
  const produtoInserido = readline.question();
  console.log("Insira agora o preço do produto:");
  const precoInserido = readline.question();
  console.log("Insira a quantidade do produto:");
  const quantidadeInserida = readline.question();
  console.log("Insira a marca do produto:");
  const marcaInserida = readline.question();
  console.log("Por fim, insira o fornecedor do produto:");
  const fornecedorInserido = readline.question();

  const novoProduto = { 
  id: incrementalId, 
  nome: produtoInserido,
  preco: +precoInserido,
  quantidade: +quantidadeInserida,
  marca: marcaInserida,
  fornecedor: fornecedorInserido
  }
  
  database.push(novoProduto);
  console.table(database);

}
 //  console.log("Dê enter para voltar");
 // readline.question();
 // console.clear();


module.exports = {
  inserirProduto
}
