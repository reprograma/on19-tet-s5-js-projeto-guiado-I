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
  console.log ("Deseja realmente aplicar esse percentual?[1- Sim, 2-Não]");
  const resultado1 = readline.question();
  const porcentual2 = porcentual / 100 + 1;
  let novoData2 = database.map((produto, i, database) => database[i] = { ...produto, preco: +((produto.preco * porcentual2).toFixed(2)) });
  if (resultado1 === "1") {
    console.table(novoData2)
  } else {
    console.log("Dê enter para voltar");
  readline.question();
    
  }
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}


