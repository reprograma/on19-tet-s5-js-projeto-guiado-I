// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?"); // Pergunte qual o porcentual a ser aplicado
  const porcentual = readline.question();

  console.log("Porcentual: " + porcentual + "%");

  console.log("Você realmente quer aumentar o valor pra tudo isso?"); // Pergunte se o usuário realmente quer aplicar o aumento
  const daTempoDeDesistir = readline.question();

  if (daTempoDeDesistir.toLowerCase() === "sim") { // Caso prossiga, aplique o porcentual em todos os produtos
    for (let index = 0; index < database.length; index++) {
      const calculo = +(database[index].preco* (1 + +porcentual/100)).toFixed(2);
      database[index].preco = calculo;
    }

    console.log("\nMore, esse realmente é o governo bolsonaro. To chocada 'O'");
    console.log("\nOs novos valores são:");
    console.table(database);
    console.log("\nDê enter para voltar");
    readline.question();
    console.clear();

  } else { // Caso ele desista, volte ao meno inicial
    console.log("Fez bem more, governo bolsonaro ninguém merece.");
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
};

module.exports = {
  alterarPrecos
}

alterarPrecos();