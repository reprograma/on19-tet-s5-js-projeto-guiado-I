const readline = require("readline-sync");
const { database } = require("../database");

const verificaEstoque = () => {
  console.log("*************************** SITUAÇÃO ESTOQUE ******************************")
  const listParc = database.map(x =>{
    return {
      id: x.id,
      name: x.nome,
      preco: x.preco,
      quantidade: x.quantidade
  }
});
 
  console.table(listParc);
  database.forEach(function(item) {
       if (item.quantidade === 25) {
        console.log(`O produto ${item.nome} está com estoque ideal`);
        }else if (item.quantidade >= 25){ 
            console.log(`O produto ${item.nome} está com estoque acima do ideal.`);
            }else if (item.quantidade <= 25){
                console.log(`O produto ${item.nome} está com estoque abaixo do ideal.`);
            }
  });
  console.log("\n******************* CLIQUE NO ENTER PARA RETORNAR AO MENU **********************");
    readline.question();
    console.clear();
}

 module.exports = {
   verificaEstoque
  }