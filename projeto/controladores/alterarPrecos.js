// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  
  console.log("Gostaria de alterar o preço dos produtos?");
  const confirmaAltPreco = readline.question();

  if (confirmaAltPreco.toLowerCase() === "sim") {
  
  console.log("Qual porcentual deseja aplicar em todos os produtos?");
  const porcentual = readline.question();
  console.log("O porcentual a ser acrescentador será de: " + porcentual + "%.");

  console.log("Deseja realmente acrescentar esse valor?");
  const confirmPercent = readline.question();

  if (confirmPercent.toLowerCase() === "sim") {
    for (let index = 0; index < database.length; index++) {
      const applyPercent = ((database[index].preco *  +porcentual) / 100);
      database[index].preco = database[index].preco + applyPercent;
    }
  console.log("Esse é a tabela atualizada com os novos valores:");
  console.table(database)
  } }

  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
