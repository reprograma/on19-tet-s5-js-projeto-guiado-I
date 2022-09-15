// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();

   console.log("Você selecionou o id: " + idSelecionado);
   const encontra = database.find(i => (i.id === +idSelecionado));
  
     console.log("\n Essas são as informações deste produto:");
     console.table(encontra);
  
  console.log("\n Realmente deseja deletar o produto " + encontra.nome +"? Digite sim para deletar e não para cancelar a operação."); 
  const cond = readline.question(); 
  
  let novaDataBase = database
  let novaDataBese2 = novaDataBase.filter(i => (i.id !== +idSelecionado));
  
  
    if(cond.toLocaleLowerCase() === "sim") {
    console.log("O id " + +idSelecionado + " Foi deletado");
    console.table(novaDataBese2);
    } else {
    console.log("Operação cancelada");
   
    };
  
    
  console.log("\n Dê enter para voltar");
  console.log(" Você será direcionada ao Menu Principal");
  readline.question();
  console.clear();
};

module.exports = {
  deletarProduto
}
