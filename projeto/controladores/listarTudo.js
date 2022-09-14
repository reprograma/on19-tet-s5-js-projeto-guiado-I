// Listar todos os produtos, mas só com os campos:
// id
// nome
// preco
// quantidade
const readline = require("readline-sync");
const { database } = require("../database");

const listarTudo = () => { //for in faz o loop no database
  for(let produto in database) {                // produto = indice, database = array dos produtos percorridos pelo loop
    delete database[produto].marca             // database[produto] => acessar o produto que está no índice 'produto'
    delete database[produto].fornecedor       // cada vez que ele percorre o database ele deleta marca e forncedor de cada produto
  }
  console.table(database);
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  listarTudo
}


// explicando -> o for in está fazendo um loop no database e deletando as propriedade marca e fornecedor de cada produto. 