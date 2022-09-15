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
  console.log("Confirma o reajuste dos preços? Digite 1 para Sim ou 2 para Não?");
  const resposta = readline.question();
  const percentual2 = porcentual / 100 + 1
  let novaData2 = database.map((produto, i, database) => database[i] = { ...produto, preco: +((produto.preco * percentual2).toFixed(2))})
  if (resposta === "1") {
    console.table(novaData2);
         
  } else {
    console.log("Dê enter para voltar")
  }
    }

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();


module.exports = {
  alterarPrecos
}
