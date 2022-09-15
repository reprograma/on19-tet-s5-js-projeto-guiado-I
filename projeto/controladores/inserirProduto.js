// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId!!!!!
//*database.Push (novoproduto, com elementos do objetos, perguntados pelos usuários) Cria um produto e Push no database
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++

  console.log("Digite o nome do novo produto:");
      const nome = readline.question();
      console.log("Novo preço:");
      const preco = readline.question();
      console.log("Nova quantidade:");
      const quantidade = readline.question();
      console.log("Nova Marca:");
      const marca = readline.question();
      console.log("Novo fornecedor:");
      const fornecedor = readline.question();

      const novoProduto = {
        id: incrementalId,
        nome: nome,
        preco: parseFloat(preco),
        quantidade: parseFloat(quantidade),
        marca: marca,
        fornecedor: fornecedor
      }

      database.push(novoProduto)


  console.log("PRODUTO CADASTRADO!!!")
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  inserirProduto
}
