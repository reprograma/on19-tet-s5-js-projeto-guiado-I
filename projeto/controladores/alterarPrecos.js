// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
let { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.question();

  console.log("Porcentual: " + +porcentual);
  console.log("Tem certeza que deseja alterar o preço dos produtos?");
  const simnao = readline.question();
  

  if (simnao.toLowerCase() === "sim"){
  for (let index = 0; index < database.length; index++){
    const calculo = +(database[index].preco * (1 + +porcentual / 100)).toPrecision(2);
    database[index].preco = calculo;
  }
  }
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}

