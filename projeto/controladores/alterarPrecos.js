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
  console.log(`\nVocê realmente quer aplicar o aumento de ${porcentual}% ?\n`);
  const confirmar = readline.question(`Digite 1 para aplicar o aumento ou aperte Enter para retornar ao Menu Inicial\n`);
  if (confirmar == '1') {
    const tabela = database.map((produto, i) => database[i] = { ...produto, preco: +(produto.preco * (porcentual / 100 + 1.0)).toFixed(2)})
    console.table(tabela);
    
    console.log("Dê enter para voltar"); 
    readline.question();
    console.clear();
    
  } else {
    console.clear();
    }
}
module.exports = {
  alterarPrecos
}
