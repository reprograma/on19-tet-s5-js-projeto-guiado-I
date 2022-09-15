// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");


console.table(database);
const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.question();
  console.log("Porcentual: " + +porcentual);
  console.log("Você quer mesmo alterar os valores dos produtos? 1 - Sim 2 - Não ");
  const resposta = readline.question();
  if (resposta == "1") {
    for (let index = 0; index < database.length; index++) {
      const calculado = +(database[index].preco * (1 + +1/porcentual/100)).toPrecision(2);
      database[index].preco = calculado;
      console.table(database);
    }
  }
}

module.exports = {
  alterarPrecos
}
