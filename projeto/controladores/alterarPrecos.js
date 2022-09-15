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

  const pergunta = readline.question();
  console.log("Tem certeza que deseja aplicar o aumento?");
  console.log("Sim - Não")

const simnao = readline.question();
if (simnao.toLowerCase() === "sim"){
  database.map((produto, i, database) => database[i] = { ...produto, preco: +((produto.preco * +porcentual).toFixed(2)) });

}

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
