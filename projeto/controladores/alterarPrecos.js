// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar a todos os produtos?");
  console.log("(Para descontos utilize: '-20' para 20% de desconto)")
  const porcentual = readline.question();
  console.log("Porcentual: " + porcentual, '%');
  let perc = Number.parseInt(porcentual)
  perc = 1 + (perc/100)
  for (let index = 0; index < database.length; index++){
    database[index].preco *= perc
  }

  console.log ("Preços alterados")
  console.log("Dê enter para continuar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
