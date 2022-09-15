// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado --- Find/Map/For each
//Achar a posição do objt > Substituir database.splice ou Alterar

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  
  let alterada = false

  const encontrado = database.map((i, index) => {
   if (idSelecionado == i.id) {
    alterada = true
      console.table(database[index])
        
      console.log("Digite o nome do novo produto:");
      i.nome = readline.question();
      console.log("Novo preço:");
      i.preco = readline.question();
        i.preco = parseFloat(i.preco) // alterar de string para nº
      console.log("Nova quantidade:");
      i.quantidade = readline.question();
        i.quantidade = parseFloat(i.quantidade)
      console.log("Nova Marca:");
      i.marca = readline.question();
      console.log("Novo fornecedor:");
      i.fornecedor = readline.question();

      
      console.log("ALTERADO COM SUCESSO!!! para:")
      console.table(database[index])
      
  } 
 }
 )

 if    (!alterada)  {
     console.log("Favor digitar nº válido!")    
  }

 console.log(encontrado)
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
