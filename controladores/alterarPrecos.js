// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
      const listParc = database.map(x =>{
        return {
          id: x.id,
          name: x.nome,
          preco: x.preco,
          quantidade: x.quantidade
      }
    });
      console.table(listParc);
      console.log("Informe o valor do aumento: ");
      const percAumentoPreço = readline.question();
      let perCentual = percAumentoPreço/100
      readline.question();    
      console.log("Percentual de aumento de preço:" + +percAumentoPreço + " % ");
      const novoPreco = readline.question();
      database.forEach(function(item) {
      item.preco = +((item.preco * perCentual) + item.preco).toFixed(2);
    });
      console.log("\nPreço Reajustado!");
      const listParc2 = database.map(x =>{
        return {
          id: x.id,
          name: x.nome,
          preco: x.preco,
          quantidade: x.quantidade        
      }
    });
         console.table(listParc2)
  }  
    module.exports = {
    alterarPrecos
  }