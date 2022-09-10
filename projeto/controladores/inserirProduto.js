// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.clear();

  console.log("Id atual: " + incrementalId);

  console.log ("Digite o nome do produto:")
  const name = readline.question()

  console.log ("Digite o preço do produto:")
  const price = readline.question()
  
  console.log ("Digite a quantidade do produto:")
  const quantity = readline.question()
  
  console.log ("Digite a marca do produto:")
  const brand = readline.question()
  
  console.log ("Digite o fornecedor do produto:")
  const supplier = readline.question()

  const newProduct = {id: incrementalId, nome: name, preco: price, quantidade: quantity, marca: brand, fornecedor: supplier}
  console.table (newProduct)
  console.log ("O item está correto? (s/n)")
  const confirmation = readline.question()
  
  if (confirmation == "s"){
    database.push ({id: incrementalId, nome: name, preco: price, quantidade: quantity, marca: brand, fornecedor: supplier})
    console.log ('\nProduto cadastrado com sucesso')
    incrementalId++
  }
  else {
    console.log ("\nProduto não cadastrado")
  }

  console.log("Dê enter para continuar");
  readline.question();
}

module.exports = {
  inserirProduto
}
