// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  
  console.log("Qual porcentual deseja aplicar em todos os produtos?");
  const porcentual = readline.question();

  console.log("Porcentual: " + porcentual);

  console.log("Deseja realmente fazer isso? [1-sim ou 2-não]");
  const condicao = readline.question();

  if  (condicao==='1') {
    for(let index = 0; index < database.length; index++){
      const percentual = +(database[index].preco*(1+ +porcentual/100).toFixed(2))
      database[index].preco = percentual
    }
  }


  


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}

