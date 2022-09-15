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
  console.log("Qual porcentual deseja aplicar a todos os produtos?");
  porcentual = readline.question();
  console.log("Porcentual de aumento: " + porcentual);
  console.log(`Você realmente quer aplicar o aumento de ${porcentual}%?`);
  const confirmar = readline.question(`Para confirmar a aplicação do porcentual de aumento, digite 1 
  Caso queira cancelar essa ação, aperte enter `);
  porcentual = +porcentual/100 + 1 
  const alterarPreco = () => {
    const aumentoPrecos = database.map((produto, i, database) => database[i] = {...produto, preco: + (produto.preco * +porcentual)});
  }

  const resposta = () => (confirmar == 1) ? alterarPreco() : readline.question(`Entendi.
  Aperte Enter para manter o preço incial dos produtos `);
  resposta();
  console.clear();

  console.log("Dê enter para voltar"); 
  readline.question();
  console.clear();
}

  module.exports = {
  alterarPrecos
}