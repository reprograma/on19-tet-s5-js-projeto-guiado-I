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
 
  const novoValor = readline.question("\nDigite sim se quer realmente reajustar" );

  if (novoValor.toLowerCase() === "sim") {
  for (let index = 0; index < database.length; index++)
  {
    const calculo = +(database[index].preco * (1 + +porcentual / 100).toFixed(3));
    database[index].preco = calculo;
  }
  console.log(calculo);
  }; 


  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

  
//database.map((produto, i, database) => database[i] = { ...produto, preco: +((produto.preco * +porcentual).toFixed(2)) });


module.exports = {
  alterarPrecos
}
//usar for for it 