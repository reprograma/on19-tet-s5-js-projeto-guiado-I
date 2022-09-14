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
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}
let porcentagem = Number.parseInt(porcentual);
  porcentagem = 1 + porcentagem / 100;
  for (let index = 0; index < database.length; index++) {
    database[index].preco *= porcentagem;

    }
  console.log(
      "tem certeza que deseja aplicar " + porcentual,
      " % em todos os produtos? ");
    const cond = readline.question("\n[1- Sim, 2- Nao] \n");
       if (cond === "1") {
          console.table(database);
          console.log("\n Valores alterados com sucesso! ");
    } 
    console.log("Dê enter para voltar");
    readline.question();
    

    console.clear();
module.exports = {
  alterarPrecos
}
