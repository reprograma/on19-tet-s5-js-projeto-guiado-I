// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao menu inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

cconst readline = require("readline-sync");
let { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.question();

  console.log("Porcentual: " + porcentual);
  console.log("TODOS os preços serão reajustados")
  const cond = readline.question();

  if (cond.toLowerCase() === "sim"){
  for (let index = 0; index < database.length; index++){
    const calculo = +(database[index].preco * (1 + +porcentual / 100).toFixed(3));
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
