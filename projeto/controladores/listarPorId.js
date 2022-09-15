// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("Qual produto deseja ver detalhes?");
  const produtoIdSelecionado = readline.question();
  console.log("Produto id selecionado: " + produtoIdSelecionado);
  
  const encontra = database.find(i => (i.id === +produtoIdSelecionado));
  
     console.log("\n Essas são as informações deste produto:");
     console.table(encontra);
    
     // Fiz mais essa parte para poder pesquisar mais de 1 produto sem precisar ir para o menu principal
 console.log("\n Deseja ver mais algum produto? Digite 1 para continuar 2 para finalizar a operação."); 
  const cond = readline.question(); 

  if(cond === "1") {
    console.log("Qual produto deseja ver detalhes?");
    const produtoIdSelecionado = readline.question();
    console.log("Produto id selecionado: " + produtoIdSelecionado);
    
    const encontra = database.find(i => (i.id === +produtoIdSelecionado));
    
       console.log("\n Essas são as informações deste produto:");
       console.table(encontra);
    
    
    } else {
      console.log("Operação finalizada");
    };
   
    console.log(" Dê enter para voltar");
    readline.question();
    console.clear();
};


module.exports = {
  listarPorId
}
