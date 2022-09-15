// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.question();
  console.log("Porcentual: " + porcentual);
  let porcentagem = +porcentual
  porcentagem = porcentagem / 100
  database.forEach(index => index.preco = index.preco + (index.preco * porcentagem))
  database.forEach(index => index.preco = +index.preco.toFixed(2))
  console.table(database)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
