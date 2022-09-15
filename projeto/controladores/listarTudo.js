// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => {
const listarProduto = database.map(function(listar){   //percorre a database. O map chama uma função de callback para cada item dentro da database, podendo assim realizar qualquer processamento de informação com cada item.
  return {
    id : listar.id,
    nome : listar.nome,
    preco: listar.preco,
    quantidade: listar.quantidade
  }
});
  console.table(listarProduto); //gera uma tabela com o que foi definido na array "ListarProduto"
  
 
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}
