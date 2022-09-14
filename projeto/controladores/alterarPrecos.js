// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
    console.log("\n*****************************TELA DE REAJUSTE******************************")
    const listParc = database.map(x =>{
      return {
        id: x.id,
        name: x.nome,
        preco: x.preco,
        quantidade: x.quantidade
        
    }
  });
    console.table(listParc);
    console.log("Informe um valor para aumento: ");
    const percInformado = readline.question();
    let perCentual = percInformado/100
    readline.question();    
    console.log("O percentual aplicado em cada produto será de:" + +percInformado + " % ");
    const novoPreco = readline.question();
    database.forEach(function(item) {
    item.preco = +((item.preco * perCentual) + item.preco).toFixed(2);
  });
    console.log("\nReajuste realizado com sucesso!");
    const listParc2 = database.map(x =>{
      return {
        id: x.id,
        name: x.nome,
        preco: x.preco,
        quantidade: x.quantidade        
    }
  });
       console.table(listParc2)
       console.log("*****************CLIQUE NO ENTER PARA RETORNAR AO MENU******************");
       readline.question();
       console.clear();
}
   
  module.exports = {
  alterarPrecos
}
