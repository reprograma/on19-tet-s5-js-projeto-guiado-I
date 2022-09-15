// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.questionInt();
  console.log("Porcentual: " + porcentual);

  console.log("Quer o aumento?")
  const resposta = readline.questionInt ("\n[1- Sim, 2- Nao] \n")

  if (resposta === 1) {
    database.forEach(element => element.preco =Math.round ((element.preco/100)*porcentual)+ element.preco)
    console.table(database)
  
  }

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
