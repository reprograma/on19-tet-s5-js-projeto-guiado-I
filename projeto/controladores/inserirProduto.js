// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Deseja adicionar um novo produto?[Aperte enter para continuar]")
  console.log("Id atual: " + incrementalId);
  incrementalId++
  console.log("Qual o nome do produto?");
  const prodNome = readline.question();
  console.log("Qual o preço do produto?");
  const prodPreço = readline.question();
  console.log("Qual a quantidade?");
  const prodQtd = readline.question();
  console.log("Qual a Marca?");
  const prodMarca = readline.question();
  console.log("Qual o fornecedor?");
  const prodForn = readline.question();

  const prodNovo = {
    id: incrementalId,
    nome: prodNome,
    preco: +prodPreço,
    quantidade: +prodQtd,
    marca: prodMarca,
    fornecedor: prodForn,
  }
  database.push(prodNovo);
  console.table(database)
  
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
};
  

module.exports = {
  inserirProduto
}
