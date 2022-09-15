// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  //console.log("Id atual: " + incrementalId);
  incrementalId++
  console.log("\nInsira os dados do produto\n")
  const nome = readline.question("Nome: ");
  const preco = readline.questionInt("Preco:");
  const quantidade = readline.questionInt("Quantidade: ");
  const marca = readline.question("Marca: ");
  const fornecedor = readline.question("Fornecedor: ");

  const novoProduto = { id:incrementalId, nome, preco, quantidade, marca, fornecedor };

  database.push(novoProduto); //aqui é dizendo para o programa adicionar um novo produto no banco de dados, a partir da const novoproduto.
  console.table(database); //aqui para apresentar o resultado junto com a tabela.

  console.log("Deseja inserir mais produtos? ") //essa parte pode repetir se quiser e ir adaptando.
  const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");
  if (resposta === 1){
    inserirProduto()
  }else{
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }
  //console.log("Dê enter para voltar");
  //readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
